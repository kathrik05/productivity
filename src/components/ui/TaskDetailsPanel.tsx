import React, { useState } from 'react';
import { cn } from '@/lib/cn';
import type { DueMode, PriorityLevel } from '@/lib/db';
import { TaskTile } from './TaskTile';
import { DueToggle } from './DueToggle';
import { PrioritySelector } from './PrioritySelector';
import { TextInput } from './TextInput';
import { Button } from './Button';
import uncheckedThickSvg from '@/assets/icons/unchecked-thick.svg';
import optionsDotsSvg from '@/assets/icons/options-dots.svg';
import calendarXsSvg from '@/assets/icons/calendar-xs.svg';
import clockXsSvg from '@/assets/icons/clock-xs.svg';

export interface TaskDetailsPanelProps {
  mode?: DueMode;
  onModeChange?: (mode: DueMode) => void;
  title?: string;
  priority?: PriorityLevel | null;
  onPriorityChange?: (priority: PriorityLevel | null) => void;
  notes?: string;
  onCancel?: () => void;
  onDone?: () => void;
  className?: string;
}

export const TaskDetailsPanel: React.FC<TaskDetailsPanelProps> = ({
  mode: controlledMode,
  onModeChange,
  title = 'new task name',
  priority: controlledPriority = null,
  onPriorityChange,
  notes: initialNotes = '',
  onCancel,
  onDone,
  className,
}) => {
  const [internalMode, setInternalMode] = useState<DueMode>(
    controlledMode ?? 'no_due'
  );
  const [internalPriority, setInternalPriority] =
    useState<PriorityLevel | null>(controlledPriority);
  const [notesValue, setNotesValue] = useState(initialNotes);

  const activeMode = controlledMode ?? internalMode;
  const activePriority =
    controlledPriority !== undefined ? controlledPriority : internalPriority;

  const handleModeChange = (next: DueMode) => {
    setInternalMode(next);
    onModeChange?.(next);
  };

  const handlePriorityChange = (next: PriorityLevel | null) => {
    setInternalPriority(next);
    onPriorityChange?.(next);
  };

  return (
    <div
      className={cn(
        'flex flex-col items-start relative w-[350px]',
        className
      )}
    >
      {/* Top task header row */}
      {activeMode === 'scheduled' ? (
        <div className="bg-primary flex items-center justify-between overflow-clip p-3 relative shadow-task-scheduled shrink-0 w-[348px]">
          <div className="relative shrink-0 size-[30px]">
            <img
              alt=""
              className="block max-w-none size-full"
              src={uncheckedThickSvg}
            />
          </div>
          <div className="flex flex-wrap gap-[4px_8px] items-start relative shrink-0 w-[251px]">
            <div className="h-[23px] relative shrink-0 w-[116px] flex items-center">
              <p className="font-sans text-bodytitle font-semibold leading-[normal] text-secondary w-[115.359px]">
                {title}
              </p>
            </div>
          </div>
          <div className="h-[26px] relative shrink-0 w-[14px]">
            <img
              alt=""
              className="block max-w-none size-full"
              src={optionsDotsSvg}
            />
          </div>
        </div>
      ) : (
        <TaskTile title={title} className="shrink-0 w-[348px]" />
      )}

      {/* Dark details form */}
      <div
        className={cn(
          'flex flex-col items-start relative shrink-0',
          activeMode === 'no_due' ? 'w-[348px]' : 'w-full'
        )}
      >
        <div className="bg-secondary flex flex-col gap-6 items-start justify-center overflow-clip px-4 py-5 relative shrink-0 w-full">
          <DueToggle
            value={activeMode}
            onChange={handleModeChange}
            className="shrink-0 w-[310px]"
          />

          {activeMode === 'due' && (
            <div className="bg-secondary flex gap-4 h-[30px] items-center overflow-clip relative shrink-0 w-[316px]">
              <div className="bg-secondary border-b-1.5 border-solid border-secondary-light flex flex-1 gap-2 h-[30px] items-center min-w-px overflow-clip px-2 py-1 relative">
                <div className="h-[12.75px] relative shrink-0 w-3">
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={calendarXsSvg}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Date"
                  aria-label="Date"
                  className="bg-transparent font-sans text-caption font-medium leading-[normal] text-primary placeholder:text-secondary-light w-full outline-none"
                />
              </div>

              <div className="bg-secondary border-b-1.5 border-solid border-secondary-light flex flex-1 gap-2 h-[30px] items-center min-w-px overflow-clip px-2 py-1 relative">
                <div className="relative shrink-0 size-3">
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={clockXsSvg}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Time"
                  aria-label="Time"
                  className="bg-transparent font-sans text-caption font-medium leading-[normal] text-primary placeholder:text-secondary-light w-full outline-none"
                />
              </div>
            </div>
          )}

          {activeMode === 'scheduled' && (
            <>
              <div className="bg-secondary flex gap-4 h-[30px] items-center overflow-clip relative shrink-0 w-full">
                <div className="bg-secondary border-b-1.5 border-solid border-secondary-light flex flex-1 gap-2 h-[30px] items-center min-w-px overflow-clip px-2 py-1 relative">
                  <div className="h-[12.75px] relative shrink-0 w-3">
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={calendarXsSvg}
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="start date"
                    aria-label="Start date"
                    className="bg-transparent font-sans text-caption font-medium leading-[normal] text-primary placeholder:text-secondary-light w-full outline-none"
                  />
                </div>

                <div className="bg-secondary border-b-1.5 border-solid border-secondary-light flex flex-1 gap-2 h-[30px] items-center min-w-px overflow-clip px-2 py-1 relative">
                  <div className="h-[12.75px] relative shrink-0 w-3">
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={calendarXsSvg}
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="end date"
                    aria-label="End date"
                    className="bg-transparent font-sans text-caption font-medium leading-[normal] text-primary placeholder:text-secondary-light w-full outline-none"
                  />
                </div>
              </div>

              <div className="bg-secondary flex gap-4 h-[30px] items-center overflow-clip relative shrink-0 w-full">
                <div className="bg-secondary border-b-1.5 border-solid border-secondary-light flex flex-1 gap-2 h-[30px] items-center min-w-px overflow-clip px-2 py-1 relative">
                  <div className="relative shrink-0 size-3">
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={clockXsSvg}
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="start time"
                    aria-label="Start time"
                    className="bg-transparent font-sans text-caption font-medium leading-[normal] text-primary placeholder:text-secondary-light w-full outline-none"
                  />
                </div>

                <div className="bg-secondary border-b-1.5 border-solid border-secondary-light flex flex-1 gap-2 h-[30px] items-center min-w-px overflow-clip px-2 py-1 relative">
                  <div className="relative shrink-0 size-3">
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={clockXsSvg}
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="end time"
                    aria-label="End time"
                    className="bg-transparent font-sans text-caption font-medium leading-[normal] text-primary placeholder:text-secondary-light w-full outline-none"
                  />
                </div>
              </div>
            </>
          )}

          <PrioritySelector
            value={activePriority}
            onChange={handlePriorityChange}
          />

          <TextInput
            theme="dark"
            placeholder={activeMode === 'due' ? 'list name' : 'Notes'}
            leadingSpacer={activeMode !== 'scheduled'}
            value={notesValue}
            onChange={(e) => setNotesValue(e.target.value)}
            containerClassName={
              activeMode === 'scheduled' ? 'w-full' : 'w-[278px]'
            }
          />
        </div>

        {/* Footer buttons */}
        <div className="flex items-center overflow-clip relative shrink-0 w-full bg-primary">
          <Button variant="secondary" fullWidth onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="primary" fullWidth onClick={onDone}>
            Done
          </Button>
        </div>
      </div>
    </div>
  );
};
