import { useLiveQuery } from 'dexie-react-hooks';
import { db, type PriorityLevel, type DueMode, type TaskRecord } from '@/lib/db';

function generateTaskId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `task_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}

export async function createTask(params: {
  listId: string;
  title: string;
  priority?: PriorityLevel | null;
  dueMode?: DueMode;
}): Promise<TaskRecord> {
  const trimmedTitle = params.title.trim();
  if (!trimmedTitle) {
    throw new Error('Task title is required');
  }
  const now = Date.now();
  const record: TaskRecord = {
    id: generateTaskId(),
    listId: params.listId,
    title: trimmedTitle,
    checked: false,
    priority: params.priority ?? null,
    dueMode: params.dueMode ?? 'no_due',
    createdAt: now,
    updatedAt: now,
  };

  await db.tasks.add(record);
  return record;
}

export async function toggleTaskChecked(
  taskId: string,
  checked: boolean
): Promise<void> {
  await db.tasks.update(taskId, {
    checked,
    updatedAt: Date.now(),
  });
}

export function useListTasks(listId: string | null): TaskRecord[] | undefined {
  return useLiveQuery(
    async () => {
      if (!listId) return [];
      return db.tasks.where('listId').equals(listId).sortBy('createdAt');
    },
    [listId]
  );
}

export function calculateListProgress(tasks: TaskRecord[]): {
  percentage: number;
  filledSegments: number;
  deltaText: string;
} {
  const total = tasks.length;
  if (total === 0) {
    return {
      percentage: 0,
      filledSegments: 0,
      deltaText: 'start adding tasks',
    };
  }

  const completedCount = tasks.filter((t) => t.checked).length;
  const percentage = Math.round((completedCount / total) * 100);
  const filledSegments = Math.round((completedCount / total) * 20);

  // Calculate yesterday's completion rate (tasks completed prior to today's 00:00)
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);
  const startOfTodayMs = startOfToday.getTime();

  const tasksExistedYesterday = tasks.filter(
    (t) => t.createdAt < startOfTodayMs
  );
  const completedYesterdayCount = tasksExistedYesterday.filter(
    (t) => t.checked && t.updatedAt < startOfTodayMs
  ).length;

  const yesterdayPercentage =
    tasksExistedYesterday.length > 0
      ? Math.round(
          (completedYesterdayCount / tasksExistedYesterday.length) * 100
        )
      : 0;

  const diff = percentage - yesterdayPercentage;
  const sign = diff >= 0 ? '+' : '';
  const deltaText = `${sign}${diff}% than yesterday`;

  return {
    percentage,
    filledSegments,
    deltaText,
  };
}
