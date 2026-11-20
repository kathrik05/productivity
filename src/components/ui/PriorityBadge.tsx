import React from 'react';
import { cn } from '@/lib/cn';
import type { PriorityLevel } from '@/lib/db';

export interface PriorityBadgeProps {
  priority: PriorityLevel;
  className?: string;
}

const PRIORITY_CONFIG: Record<
  PriorityLevel,
  { label: string; containerClass: string; textClass: string }
> = {
  high: {
    label: 'High',
    containerClass: 'bg-priority-high-bg border border-priority-high-border',
    textClass: 'text-priority-high-text',
  },
  medium: {
    label: 'Medium',
    containerClass: 'bg-priority-medium-bg border-0.5 border-priority-medium-border',
    textClass: 'text-priority-medium-text',
  },
  low: {
    label: 'Low',
    containerClass: 'bg-priority-low-bg border-0.5 border-priority-low-border',
    textClass: 'text-priority-low-text',
  },
};

export const PriorityBadge: React.FC<PriorityBadgeProps> = ({
  priority,
  className,
}) => {
  const config = PRIORITY_CONFIG[priority];

  return (
    <span
      className={cn(
        'border-solid inline-flex items-center justify-center px-1.5 py-0.5 relative shrink-0',
        config.containerClass,
        className
      )}
      data-priority={priority}
    >
      <span
        className={cn(
          'font-sans text-label2 font-medium leading-[normal] text-center whitespace-nowrap',
          config.textClass
        )}
      >
        {config.label}
      </span>
    </span>
  );
};
