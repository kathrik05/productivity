import React, { useEffect, useState } from 'react';
import {
  TopHead,
  ListContainer,
  EmptyListState,
  PopUpModal,
} from '@/components/ui';
import { useAppStore } from '@/lib/store';
import { createTaskList, useTaskLists } from '@/features/lists/useLists';
import { ListWorkspaceView } from '@/features/lists/ListWorkspaceView';

export interface HomeEmptyPageProps {
  onAddListClick?: () => void;
  onListCreated?: (listId: string) => void;
}

/**
 * Main Home Flow:
 * 1. create List empty state (Figma node 93:8303)
 * 2. create list pop-up dialog (Figma node 93:8318)
 * 3. Active list view with functional progress bar & task creation (Figma node 93:8339)
 */
export const HomeEmptyPage: React.FC<HomeEmptyPageProps> = ({
  onAddListClick,
  onListCreated,
}) => {
  const lists = useTaskLists();
  const activeListId = useAppStore((state) => state.activeListId);
  const setActiveListId = useAppStore((state) => state.setActiveListId);
  const isCreateListModalOpen = useAppStore(
    (state) => state.isCreateListModalOpen
  );
  const setCreateListModalOpen = useAppStore(
    (state) => state.setCreateListModalOpen
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Automatically select the most recent list if one exists in IndexedDB and none is active
  useEffect(() => {
    if (!activeListId && lists && lists.length > 0) {
      const latestList = lists[lists.length - 1];
      if (latestList) {
        setActiveListId(latestList.id);
      }
    }
  }, [activeListId, lists, setActiveListId]);

  const activeList =
    lists?.find((l) => l.id === activeListId) ??
    (lists && lists.length > 0 ? lists[lists.length - 1] : undefined);

  const handleOpenCreateModal = () => {
    setCreateListModalOpen(true);
    onAddListClick?.();
  };

  const handleCloseCreateModal = () => {
    if (!isSubmitting) {
      setCreateListModalOpen(false);
    }
  };

  const handleCreateListSubmit = async ({
    primary,
    secondary,
  }: {
    primary: string;
    secondary: string;
  }) => {
    try {
      setIsSubmitting(true);
      const created = await createTaskList({
        name: primary,
        description: secondary,
      });
      setActiveListId(created.id);
      setCreateListModalOpen(false);
      onListCreated?.(created.id);
    } finally {
      setIsSubmitting(false);
    }
  };

  const showActiveList = Boolean(activeList) && !isCreateListModalOpen;

  return (
    <main
      className="bg-secondary fixed inset-0 flex flex-col gap-3 w-full overflow-hidden"
      data-node-id={
        isCreateListModalOpen
          ? '93:8318'
          : showActiveList
            ? '93:8339'
            : '93:8303'
      }
      data-name={
        isCreateListModalOpen
          ? 'create list'
          : showActiveList
            ? 'create list'
            : 'create List'
      }
    >
      <TopHead dateText="25 Jan 2026" greetingText="Good Morning, User" />

      <ListContainer
        className={
          showActiveList
            ? 'flex flex-col items-center justify-start'
            : 'flex flex-col items-center justify-center'
        }
        onClick={
          isCreateListModalOpen ? handleCloseCreateModal : undefined
        }
      >
        {isCreateListModalOpen ? (
          <PopUpModal
            heading="create a list"
            primaryPlaceholder="list name"
            secondaryPlaceholder="list description"
            secondaryButtonLabel="Cancel"
            primaryButtonLabel="Done"
            requirePrimary={true}
            autoFocusPrimary={true}
            isSubmitting={isSubmitting}
            onSecondaryCancel={handleCloseCreateModal}
            onPrimarySubmit={handleCreateListSubmit}
          />
        ) : activeList ? (
          <ListWorkspaceView list={activeList} />
        ) : (
          <EmptyListState
            title="create"
            description="use +  to create a list and add tasks"
            onAddClick={handleOpenCreateModal}
            className="w-full max-w-87.5 px-5"
          />
        )}
      </ListContainer>
    </main>
  );
};
