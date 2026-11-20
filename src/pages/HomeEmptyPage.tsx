import React from 'react';
import { TopHead, ListContainer, EmptyListState } from '@/components/ui';
import { useAppStore } from '@/lib/store';

export interface HomeEmptyPageProps {
  onAddListClick?: () => void;
}

/**
 * Screen 1: Home | Empty (Figma node 93:8278)
 * Frame dimensions: 390 x 785
 */
export const HomeEmptyPage: React.FC<HomeEmptyPageProps> = ({
  onAddListClick,
}) => {
  const setCreateListModalOpen = useAppStore(
    (state) => state.setCreateListModalOpen
  );

  const handleAddClick = () => {
    setCreateListModalOpen(true);
    onAddListClick?.();
  };

  return (
    <main
      className="bg-secondary flex flex-col gap-3 h-screen h-[100dvh] w-full overflow-hidden"
      data-node-id="93:8303"
      data-name="create List"
    >
      <TopHead dateText="25 Jan 2026" greetingText="Good Morning, User" />

      <ListContainer className="flex flex-col items-center justify-center">
        <EmptyListState
          title="create"
          description="use +  to create a list and add tasks"
          onAddClick={handleAddClick}
          className="w-full max-w-87.5 px-5"
        />
      </ListContainer>
    </main>
  );
};
