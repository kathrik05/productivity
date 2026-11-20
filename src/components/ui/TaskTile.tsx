import React from 'react';
import { cn } from '@/lib/cn';
import type { PriorityLevel } from '@/lib/db';
import { PriorityBadge } from './PriorityBadge';
import uncheckedSvg from '@/assets/icons/unchecked.svg';
import checkedSvg from '@/assets/icons/checked.svg';
import optionsDotsSvg from '@/assets/icons/options-dots.svg';
import calendarSmSvg from '@/assets/icons/calendar-sm.svg';
import clockSmSvg from '@/assets/icons/clock-sm.svg';

export type TaskScheduleVariant =
  | 'none'
  | 'due_date'
  | 'due_datetime'
  | 'scheduled_date';

export interface TaskTileProps {
  title?: string;
  checked?: boolean;
  priority?: PriorityLevel | null;
  scheduleType?: TaskScheduleVariant;
  dateText?: string;
  timeText?: string;
  onToggleCheck?: (checked: boolean) => void;
  onOptionsClick?: () => void;
  className?: string;
}

export const TaskTile: React.FC<TaskTileProps> = ({
  title = 'new task name',
  checked = false,
  priority = null,
  scheduleType = 'none',
  dateText,
  timeText,
  onToggleCheck,
  onOptionsClick,
  className,
}) => {
  const resolvedDateText =
    dateText ??
    (scheduleType === 'scheduled_date' ? '20 nov - 21 nov ' : '20/11');
  const resolvedTimeText =
    timeText ?? (scheduleType === 'due_date' ? 'Full-day' : '12:00PM');

  const showSecondRow = scheduleType !== 'none';
  const showTimeInRow =
    scheduleType === 'due_date' || scheduleType === 'due_datetime';

  // In Figma node 88:7114 (checked/high/due/d&t), width is 356px with Taskdetails w-[280px]
  const isWideVariant =
    checked && priority === 'high' && scheduleType === 'due_datetime';

  return (
    <div
      className={cn(
        'bg-primary flex gap-2 items-center overflow-clip px-2 py-4 relative shadow-task-divider',
        isWideVariant ? 'w-[356px]' : 'w-[348px]',
        className
      )}
    >
      <button
        type="button"
        role="checkbox"
        aria-checked={checked}
        aria-label={`Mark "${title}" as ${checked ? 'incomplete' : 'completed'}`}
        onClick={() => onToggleCheck?.(!checked)}
        className="relative shrink-0 size-[30px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full"
      >
        <img
          alt=""
          className="block max-w-none size-full"
          src={checked ? checkedSvg : uncheckedSvg}
        />
      </button>

      <div
        className={cn(
          'flex flex-col gap-1 items-start p-1 relative',
          isWideVariant ? 'shrink-0 w-[280px]' : 'flex-1 min-w-px'
        )}
      >
        <div className="flex gap-1 items-start relative shrink-0">
          <div className="h-[23px] relative shrink-0 w-[116px] flex items-center">
            <p
              className={cn(
                'font-sans text-text1 font-medium leading-[normal] text-secondary w-[115.359px] truncate',
                checked &&
                  'line-through decoration-solid [text-decoration-skip-ink:none] [text-underline-position:from-font]'
              )}
            >
              {title}
            </p>
          </div>
          {priority && (
            <PriorityBadge priority={priority} className="self-stretch" />
          )}
        </div>

        {showSecondRow && (
          <div className="flex gap-1 items-center relative shrink-0">
            <div className="flex gap-1 items-center relative shrink-0">
              <div className="h-[15.938px] relative shrink-0 w-[15px]">
                <img
                  alt=""
                  className="block max-w-none size-full"
                  src={calendarSmSvg}
                />
              </div>
              <div
                className={cn(
                  'flex flex-col font-sans text-label2 font-medium justify-center leading-[normal] relative shrink-0 text-secondary-light',
                  scheduleType === 'scheduled_date'
                    ? 'whitespace-nowrap'
                    : 'w-[26px]'
                )}
              >
                <p className="leading-[normal]">{resolvedDateText}</p>
              </div>
            </div>

            {showTimeInRow && (
              <div className="flex gap-1 h-4 items-center relative shrink-0">
                <div className="relative shrink-0 size-[15px]">
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src={clockSmSvg}
                  />
                </div>
                <div
                  className={cn(
                    'flex flex-col font-sans text-label2 font-medium justify-center leading-[normal] relative shrink-0 text-secondary-light',
                    scheduleType === 'due_date'
                      ? 'w-[39px] h-full'
                      : 'whitespace-nowrap'
                  )}
                >
                  <p className="leading-[normal]">{resolvedTimeText}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <button
        type="button"
        aria-label={`More options for "${title}"`}
        onClick={onOptionsClick}
        className="h-[26px] relative shrink-0 w-[14px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <img
          alt=""
          className="block max-w-none size-full"
          src={optionsDotsSvg}
        />
      </button>
    </div>
  );
};
