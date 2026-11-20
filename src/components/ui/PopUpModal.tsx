import React, { useState } from 'react';
import { cn } from '@/lib/cn';
import { Button } from './Button';
import { TextInput } from './TextInput';

export interface PopUpModalProps {
  heading?: string;
  primaryPlaceholder?: string;
  secondaryPlaceholder?: string;
  primaryButtonLabel?: string;
  secondaryButtonLabel?: string;
  initialPrimaryValue?: string;
  initialSecondaryValue?: string;
  onPrimarySubmit?: (values: { primary: string; secondary: string }) => void;
  onSecondaryCancel?: () => void;
  className?: string;
}

export const PopUpModal: React.FC<PopUpModalProps> = ({
  heading = 'heading',
  primaryPlaceholder = 'list name',
  secondaryPlaceholder = 'list name',
  primaryButtonLabel = 'Primary',
  secondaryButtonLabel = 'Secondary',
  initialPrimaryValue = '',
  initialSecondaryValue = '',
  onPrimarySubmit,
  onSecondaryCancel,
  className,
}) => {
  const [primaryVal, setPrimaryVal] = useState(initialPrimaryValue);
  const [secondaryVal, setSecondaryVal] = useState(initialSecondaryValue);

  return (
    <div
      role="dialog"
      aria-label={heading}
      className={cn(
        'flex flex-col h-[205.839px] items-start relative w-[310px]',
        className
      )}
    >
      <div className="bg-secondary-surface flex items-center justify-center py-3 relative shrink-0 w-full">
        <h2 className="font-sans text-title font-bold leading-[normal] text-center text-primary w-[251.352px]">
          {heading}
        </h2>
      </div>

      <div className="bg-secondary-surface flex flex-col gap-6 items-start justify-center overflow-clip px-4 py-5 relative shrink-0 w-full">
        <TextInput
          theme="dark"
          placeholder={primaryPlaceholder}
          value={primaryVal}
          onChange={(e) => setPrimaryVal(e.target.value)}
          aria-label={primaryPlaceholder}
        />
        <TextInput
          theme="dark"
          placeholder={secondaryPlaceholder}
          value={secondaryVal}
          onChange={(e) => setSecondaryVal(e.target.value)}
          aria-label={secondaryPlaceholder}
        />
      </div>

      <div className="flex items-center overflow-clip relative shrink-0 w-full bg-primary">
        <Button
          variant="secondary"
          onClick={onSecondaryCancel}
          className="w-[158px] h-[42px] min-h-[42px]"
        >
          {secondaryButtonLabel}
        </Button>
        <Button
          variant="primary"
          onClick={() =>
            onPrimarySubmit?.({ primary: primaryVal, secondary: secondaryVal })
          }
          className="w-[152px] h-[42px] min-h-[42px]"
        >
          {primaryButtonLabel}
        </Button>
      </div>
    </div>
  );
};
