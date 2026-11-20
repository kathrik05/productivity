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
