import { useLiveQuery } from 'dexie-react-hooks';
import { db, type TaskListRecord } from '@/lib/db';

function generateId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `list_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}

export async function createTaskList(params: {
  name: string;
  description?: string;
}): Promise<TaskListRecord> {
  const trimmedName = params.name.trim();
  if (!trimmedName) {
    throw new Error('List name is required');
  }
  const trimmedDesc = params.description?.trim();
  const now = Date.now();

  const record: TaskListRecord = {
    id: generateId(),
    name: trimmedName,
    description: trimmedDesc ? trimmedDesc : undefined,
    createdAt: now,
    updatedAt: now,
  };

  await db.lists.add(record);
  return record;
}

export function useTaskLists(): TaskListRecord[] | undefined {
  return useLiveQuery(() => db.lists.orderBy('createdAt').toArray(), []);
}
