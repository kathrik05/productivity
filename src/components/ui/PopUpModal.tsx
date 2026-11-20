import React, { useEffect, useRef, useState } from 'react';
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
  /** Whether the first input (e.g. list name) is mandatory before submitting */
  requirePrimary?: boolean;
  /** Auto-focus the first input when mounted */
  autoFocusPrimary?: boolean;
  isSubmitting?: boolean;
  onPrimarySubmit?: (values: {
    primary: string;
    secondary: string;
  }) => void | Promise<void>;
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
  requirePrimary = false,
  autoFocusPrimary = false,
  isSubmitting = false,
  onPrimarySubmit,
  onSecondaryCancel,
  className,
}) => {
  const [primaryVal, setPrimaryVal] = useState(initialPrimaryValue);
  const [secondaryVal, setSecondaryVal] = useState(initialSecondaryValue);
  const [primaryError, setPrimaryError] = useState(false);
  const primaryInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocusPrimary) {
      primaryInputRef.current?.focus();
    }
  }, [autoFocusPrimary]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onSecondaryCancel?.();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onSecondaryCancel]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const trimmedPrimary = primaryVal.trim();
    const trimmedSecondary = secondaryVal.trim();

    if (requirePrimary && trimmedPrimary.length === 0) {
      setPrimaryError(true);
      primaryInputRef.current?.focus();
      return;
    }

    await onPrimarySubmit?.({
      primary: trimmedPrimary,
      secondary: trimmedSecondary,
    });
  };

  return (
    <form
      role="dialog"
      aria-modal="true"
      aria-label={heading}
      onSubmit={handleSubmit}
      onClick={(e) => e.stopPropagation()}
      className={cn(
        'flex flex-col h-[205.839px] items-start relative w-[310px]',
        className
      )}
      data-node-id="94:8587"
      data-name="pop-up"
    >
      <div
        className="bg-secondary-surface flex items-center justify-center py-3 relative shrink-0 w-full"
        data-name="header"
      >
        <h2 className="font-sans text-title font-bold leading-[normal] text-center text-primary w-[251.352px]">
          {heading}
        </h2>
      </div>

      <div
        className="bg-secondary-surface flex flex-col gap-6 items-start justify-center overflow-clip px-4 py-5 relative shrink-0 w-full"
        data-name="input field"
      >
        <TextInput
          ref={primaryInputRef}
          theme="dark"
          placeholder={primaryPlaceholder}
          value={primaryVal}
          hasError={primaryError}
          onChange={(e) => {
            setPrimaryVal(e.target.value);
            if (primaryError && e.target.value.trim().length > 0) {
              setPrimaryError(false);
            }
          }}
          aria-label={primaryPlaceholder}
          aria-required={requirePrimary || undefined}
          maxLength={80}
        />
        <TextInput
          theme="dark"
          placeholder={secondaryPlaceholder}
          value={secondaryVal}
          onChange={(e) => setSecondaryVal(e.target.value)}
          aria-label={secondaryPlaceholder}
          maxLength={200}
        />
      </div>

      <div
        className="flex items-center overflow-clip relative shrink-0 w-full bg-primary"
        data-name="Buttons"
      >
        <Button
          type="button"
          variant="secondary"
          disabled={isSubmitting}
          onClick={onSecondaryCancel}
          className="w-[158px]"
        >
          {secondaryButtonLabel}
        </Button>
        <Button
          type="submit"
          variant="primary"
          disabled={isSubmitting}
          className="w-[152px]"
        >
          {primaryButtonLabel}
        </Button>
      </div>
    </form>
  );
};
