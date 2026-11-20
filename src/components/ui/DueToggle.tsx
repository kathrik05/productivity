import React from 'react';
import { cn } from '@/lib/cn';
import type { DueMode } from '@/lib/db';

export interface DueToggleProps {
  value: DueMode;
  onChange?: (mode: DueMode) => void;
  className?: string;
}

const DUE_OPTIONS: { value: DueMode; label: string }[] = [
  { value: 'no_due', label: 'No due' },
  { value: 'due', label: 'Due' },
  { value: 'scheduled', label: 'Schedule' },
];

export const DueToggle: React.FC<DueToggleProps> = ({
  value,
  onChange,
  className,
}) => {
  return (
    <div
      role="radiogroup"
      aria-label="Due mode"
      className={cn('flex items-start relative w-[310px]', className)}
    >
      {DUE_OPTIONS.map((option) => {
        const isSelected = value === option.value;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={isSelected}
            onClick={() => onChange?.(option.value)}
            className={cn(
              'flex flex-1 items-center justify-center min-w-px p-2 h-[33px] relative self-stretch transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
              isSelected
                ? 'bg-accent text-primary'
                : 'border border-solid border-accent text-accent bg-transparent'
            )}
          >
            <span
              className={cn(
                'font-sans text-label font-semibold leading-[normal] text-center whitespace-nowrap',
                isSelected ? 'text-primary' : 'text-accent'
              )}
            >
              {option.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};
