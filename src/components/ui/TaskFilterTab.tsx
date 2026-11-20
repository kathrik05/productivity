import React from 'react';
import { cn } from '@/lib/cn';
import type { TaskFilterType } from '@/lib/store';

export interface TaskFilterTabProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  filterType: TaskFilterType;
  active?: boolean;
  count?: number | string;
}

const FILTER_LABELS: Record<TaskFilterType, string> = {
  all: 'All tasks',
  completed: 'Completed',
  pending: 'Pending',
};

export const TaskFilterTab: React.FC<TaskFilterTabProps> = ({
  filterType,
  active = false,
  count = 'N',
  className,
  ...props
}) => {
  const label = `${FILTER_LABELS[filterType]}(${count})`;

  return (
    <button
      type="button"
      aria-pressed={active}
      className={cn(
        'inline-flex items-center justify-center px-6 py-4 min-h-[47px] relative transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
        active
          ? 'bg-secondary text-primary w-[95px] h-[47px]'
          : 'bg-transparent border border-solid border-accent text-accent w-[97px] h-[49px]',
        className
      )}
      {...props}
    >
      <span
        className={cn(
          'font-sans text-label font-semibold leading-[normal] text-center whitespace-nowrap',
          active ? 'text-primary' : 'text-accent'
        )}
      >
        {label}
      </span>
    </button>
  );
};
