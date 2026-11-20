import React, { useState } from 'react';
import {
  TopHead,
  ListContainer,
  EmptyListState,
  PopUpModal,
} from '@/components/ui';
import { useAppStore } from '@/lib/store';
import { createTaskList } from '@/features/lists/useLists';

export interface HomeEmptyPageProps {
  onAddListClick?: () => void;
  onListCreated?: (listId: string) => void;
}

/**
 * Screen 1 & 2:
 * - Home | Empty / create List (Figma node 93:8303)
 * - create list pop-up dialog (Figma node 93:8318)
 */
export const HomeEmptyPage: React.FC<HomeEmptyPageProps> = ({
  onAddListClick,
  onListCreated,
}) => {
  const isCreateListModalOpen = useAppStore(
    (state) => state.isCreateListModalOpen
  );
  const setCreateListModalOpen = useAppStore(
    (state) => state.setCreateListModalOpen
  );
  const setActiveListId = useAppStore((state) => state.setActiveListId);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  return (
    <main
      className="bg-secondary fixed inset-0 flex flex-col gap-3 w-full overflow-hidden"
      data-node-id={isCreateListModalOpen ? '93:8318' : '93:8303'}
      data-name={isCreateListModalOpen ? 'create list' : 'create List'}
    >
      <TopHead dateText="25 Jan 2026" greetingText="Good Morning, User" />

      <ListContainer
        className="flex flex-col items-center justify-center"
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
