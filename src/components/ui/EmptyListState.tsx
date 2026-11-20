import React from 'react';
import { cn } from '@/lib/cn';
import { AddButton } from './AddButton';

export interface EmptyListStateProps {
  title?: string;
  description?: string;
  onAddClick?: () => void;
  className?: string;
}

/**
 * Reusable empty state message (Figma node 93:8286 "Add task message")
 */
export const EmptyListState: React.FC<EmptyListStateProps> = ({
  title = 'No List',
  description = 'use +  to create a list and add tasks',
  onAddClick,
  className,
}) => {
  return (
    <div
      className={cn(
        'flex flex-col gap-1 items-center justify-center overflow-clip w-87.5',
        className
      )}
      data-node-id="93:8286"
      data-name="Add task message"
    >
      <AddButton
        size="lg"
        variant="accent"
        onClick={onAddClick}
        aria-label="Create a list and add tasks"
        data-node-id="93:8293"
      />
      <p
        className="font-sans text-title font-bold h-6 leading-[normal] min-w-full relative shrink-0 text-secondary text-center w-[min-content]"
        data-node-id="93:8291"
      >
        {title}
      </p>
      <p
        className="font-sans text-text1 font-medium h-4.5 leading-[normal] min-w-full relative shrink-0 text-secondary text-center w-[min-content] whitespace-pre-wrap"
        data-node-id="93:8292"
      >
        {description}
      </p>
    </div>
  );
};
