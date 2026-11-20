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
    <main className="min-h-screen bg-secondary flex justify-center items-start">
      <div
        className="bg-secondary flex flex-col gap-3 items-start relative w-full max-w-97.5 min-h-196.25"
        data-node-id="93:8303"
        data-name="create List"
      >
        <TopHead dateText="25 Jan 2026" greetingText="Good Morning, User" />

        <ListContainer>
          <EmptyListState
            title="create"
            description="use +  to create a list and add tasks"
            onAddClick={handleAddClick}
            className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 max-w-[calc(100%-40px)]"
          />
        </ListContainer>
      </div>
    </main>
  );
};
