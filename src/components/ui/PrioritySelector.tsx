import React, { useState } from 'react';
import { cn } from '@/lib/cn';
import type { PriorityLevel } from '@/lib/db';
import chevronDownMuted from '@/assets/icons/chevron-down-muted.svg';
import chevronDownWhite from '@/assets/icons/chevron-down-white.svg';

export type PriorityOptionValue = PriorityLevel | null;

export interface PrioritySelectorProps {
  value?: PriorityOptionValue;
  onChange?: (priority: PriorityOptionValue) => void;
  defaultOpen?: boolean;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

const PRIORITY_OPTIONS: { value: PriorityOptionValue; label: string }[] = [
  { value: null, label: 'No priority' },
  { value: 'high', label: 'High' },
  { value: 'medium', label: 'Medium' },
  { value: 'low', label: 'Low' },
];

export const PrioritySelector: React.FC<PrioritySelectorProps> = ({
  value = null,
  onChange,
  defaultOpen = false,
  isOpen: controlledOpen,
  onOpenChange,
  className,
}) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;

  const setOpen = (next: boolean) => {
    setInternalOpen(next);
    onOpenChange?.(next);
  };

  const selectedLabel =
    value === 'high'
      ? 'High'
      : value === 'medium'
        ? 'Medium'
        : value === 'low'
          ? 'Low'
          : 'Priority';

  if (!open) {
    return (
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={false}
        onClick={() => setOpen(true)}
        className={cn(
          'bg-secondary border border-solid border-secondary-light flex h-8 items-center justify-between overflow-clip px-2.5 relative w-[144px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
          className
        )}
      >
        <span className="flex flex-col font-sans text-caption font-medium h-[20.419px] justify-center leading-[normal] relative shrink-0 text-secondary-light text-left">
          {selectedLabel}
        </span>
        <span className="h-[10.636px] relative shrink-0 w-[15px]">
          <img
            alt=""
            className="block max-w-none size-full"
            src={chevronDownMuted}
          />
        </span>
      </button>
    );
  }

  return (
    <div
      className={cn(
        'bg-secondary flex flex-col h-[170px] items-start overflow-clip relative w-[144px]',
        className
      )}
    >
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={true}
        onClick={() => setOpen(false)}
        className="bg-secondary border-b border-solid border-primary flex h-8 items-center justify-between overflow-clip px-2.5 relative shrink-0 w-[144px] focus-visible:outline-none"
      >
        <span className="flex flex-col font-sans text-caption font-medium h-[20.419px] justify-center leading-[normal] relative shrink-0 text-primary text-left">
          {selectedLabel}
        </span>
        <span className="h-[10.636px] relative shrink-0 w-[15px]">
          <img
            alt=""
            className="block max-w-none size-full"
            src={chevronDownWhite}
          />
        </span>
      </button>

      <div
        role="listbox"
        aria-label="Priority options"
        className="bg-secondary flex flex-col items-start overflow-clip p-1 relative shrink-0 w-[144px]"
      >
        {PRIORITY_OPTIONS.map((option) => (
          <button
            key={option.label}
            type="button"
            role="option"
            aria-selected={value === option.value}
            onClick={() => {
              onChange?.(option.value);
              if (controlledOpen === undefined) {
                setOpen(false);
              }
            }}
            className="flex h-8 items-center overflow-clip px-1.5 relative rounded-xs shrink-0 w-[136px] text-left hover:bg-secondary-light/40 focus-visible:outline-none focus-visible:bg-secondary-light/40"
          >
            <span className="font-sans text-caption font-medium leading-[normal] text-primary whitespace-nowrap">
              {option.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
