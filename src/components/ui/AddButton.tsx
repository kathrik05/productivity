import React from 'react';
import { cn } from '@/lib/cn';
import addButton50Svg from '@/assets/icons/add-button-50.svg';
import addAccentSvg from '@/assets/icons/add-accent.svg';
import addDarkSvg from '@/assets/icons/add-dark.svg';

export interface AddButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'lg' | 'sm';
  variant?: 'accent' | 'dark';
}

export const AddButton = React.forwardRef<HTMLButtonElement, AddButtonProps>(
  (
    {
      size = 'lg',
      variant = 'accent',
      className,
      'aria-label': ariaLabel = 'Create new list or task',
      ...props
    },
    ref
  ) => {
    const iconSrc =
      variant === 'dark'
        ? addDarkSvg
        : size === 'lg'
          ? addButton50Svg
          : addAccentSvg;

    return (
      <button
        ref={ref}
        type="button"
        aria-label={ariaLabel}
        className={cn(
          'relative shrink-0 inline-flex items-center justify-center transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
          size === 'lg' ? 'size-12.5' : 'size-7.5',
          className
        )}
        data-name="Addbutton"
        {...props}
      >
        <img
          alt=""
          className="block max-w-none size-full pointer-events-none"
          src={iconSrc}
        />
      </button>
    );
  }
);

AddButton.displayName = 'AddButton';
