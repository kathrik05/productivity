import { create } from 'zustand';

export type TaskFilterType = 'all' | 'completed' | 'pending';

interface AppUIState {
  activeListId: string | null;
  activeFilter: TaskFilterType;
  expandedTaskId: string | null;
  isCreateListModalOpen: boolean;
  setActiveListId: (id: string | null) => void;
  setActiveFilter: (filter: TaskFilterType) => void;
  setExpandedTaskId: (id: string | null) => void;
  setCreateListModalOpen: (open: boolean) => void;
}

export const useAppStore = create<AppUIState>((set) => ({
  activeListId: null,
  activeFilter: 'all',
  expandedTaskId: null,
  isCreateListModalOpen: false,
  setActiveListId: (id) => set({ activeListId: id }),
  setActiveFilter: (filter) => set({ activeFilter: filter }),
  setExpandedTaskId: (id) => set({ expandedTaskId: id }),
  setCreateListModalOpen: (open) => set({ isCreateListModalOpen: open }),
}));
