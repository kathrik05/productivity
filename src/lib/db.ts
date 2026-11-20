import Dexie, { type EntityTable } from 'dexie';

export type PriorityLevel = 'high' | 'medium' | 'low';
export type DueMode = 'no_due' | 'due' | 'scheduled';

export interface TaskListRecord {
  id: string;
  name: string;
  description?: string;
  createdAt: number;
  updatedAt: number;
}

export interface TaskRecord {
  id: string;
  listId: string;
  title: string;
  checked: boolean;
  priority: PriorityLevel | null;
  dueMode: DueMode;
  dueDate?: string;
  dueTime?: string;
  startDate?: string;
  endDate?: string;
  startTime?: string;
  endTime?: string;
  notes?: string;
  createdAt: number;
  updatedAt: number;
}

export class ProductivityDatabase extends Dexie {
  lists!: EntityTable<TaskListRecord, 'id'>;
  tasks!: EntityTable<TaskRecord, 'id'>;

  constructor() {
    super('ProductivityDB');
    this.version(1).stores({
      lists: 'id, name, createdAt',
      tasks: 'id, listId, checked, priority, dueMode, createdAt',
    });
  }
}

export const db = new ProductivityDatabase();

const DB_RESET_EPOCH = 'reset_2026_11_20_v1';
const DB_RESET_KEY = 'productivity_db_reset_epoch';

export async function clearDatabase(): Promise<void> {
  await db.transaction('rw', db.lists, db.tasks, async () => {
    await db.tasks.clear();
    await db.lists.clear();
  });
}

// Automatically clear existing IndexedDB data once for this reset epoch
if (typeof window !== 'undefined') {
  const params = new URLSearchParams(window.location.search);
  const shouldForceReset = params.get('reset') === '1';
  const currentEpoch = window.localStorage.getItem(DB_RESET_KEY);

  if (shouldForceReset || currentEpoch !== DB_RESET_EPOCH) {
    clearDatabase()
      .then(() => {
        window.localStorage.setItem(DB_RESET_KEY, DB_RESET_EPOCH);
        if (shouldForceReset) {
          window.history.replaceState({}, '', window.location.pathname);
        }
      })
      .catch(() => {
        // Ignore if IndexedDB is blocked
      });
  }
}
