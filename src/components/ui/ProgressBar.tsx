import React from 'react';
import { cn } from '@/lib/cn';

export interface ProgressBarProps {
  percentage?: number;
  deltaText?: string;
  variant?: 'Default' | 'stacked';
  /** Number of filled segments out of 20. In Figma specimen 93:8034, 4 of 20 segments are filled. */
  filledSegments?: number;
  className?: string;
}

const TOTAL_SEGMENTS = 20;

export const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage = 10,
  deltaText = '+5% than yesterday',
  variant = 'Default',
  filledSegments,
  className,
}) => {
  const isStacked = variant === 'stacked';
  const activeCount =
    filledSegments !== undefined
      ? filledSegments
      : Math.max(0, Math.min(TOTAL_SEGMENTS, Math.round((percentage / 100) * TOTAL_SEGMENTS)));

  return (
    <div
      className={cn(
        'flex flex-col gap-2 items-start relative w-full max-w-87.5',
        className
      )}
      role="progressbar"
      aria-valuenow={percentage}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="flex items-start justify-between relative shrink-0 w-full">
        <div
          className={cn(
            'flex flex-col justify-center relative shrink-0 text-secondary w-[127.881px]',
            isStacked
              ? 'font-sans text-title font-bold'
              : 'font-sans text-focus font-normal'
          )}
        >
          <p className="leading-[normal]">{`${percentage}% `}</p>
        </div>
        <div className="bg-accent-badge flex items-center justify-center px-3 py-1 relative shrink-0">
          <div className="flex flex-col font-sans text-caption font-medium justify-center relative shrink-0 text-secondary text-center min-w-[138.2px]">
            <p className="leading-[normal]">{deltaText}</p>
          </div>
        </div>
      </div>

      <div
        className={cn(
          'flex items-center justify-between relative shrink-0 w-full',
          isStacked ? 'h-5 overflow-clip' : 'h-[50px]'
        )}
      >
        {Array.from({ length: TOTAL_SEGMENTS }).map((_, idx) => {
          const isFilled = idx < activeCount;
          return (
            <div
              key={idx}
              className={cn(
                'h-[50px] relative shrink-0 w-[12.5px]',
                isFilled ? 'bg-accent' : 'bg-accent-light'
              )}
            />
          );
        })}
      </div>
    </div>
  );
};
