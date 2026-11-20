import React, { useState } from 'react';
import { cn } from '@/lib/cn';

export interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  theme?: 'dark' | 'light';
  visualState?: 'default' | 'active' | 'typed';
  leadingSpacer?: boolean;
  leadingIcon?: React.ReactNode;
  hasError?: boolean;
  containerClassName?: string;
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      theme = 'dark',
      visualState,
      leadingSpacer,
      leadingIcon,
      hasError = false,
      containerClassName,
      className,
      placeholder = 'list name',
      value,
      defaultValue,
      onFocus,
      onBlur,
      onChange,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [internalValue, setInternalValue] = useState(
      defaultValue ? String(defaultValue) : ''
    );

    const currentValue = value !== undefined ? String(value) : internalValue;
    const effectiveState: 'default' | 'active' | 'typed' =
      visualState ??
      (isFocused ? 'active' : currentValue.length > 0 ? 'typed' : 'default');

    // In Figma node 93:8544, dark/default has a 20x20 leading spacer with 10px gap
    const showLeadingSpacer =
      leadingSpacer !== undefined
        ? leadingSpacer
        : theme === 'dark' && effectiveState === 'default' && !leadingIcon;

    const isDark = theme === 'dark';
    const isActiveOrTyped =
      effectiveState === 'active' || effectiveState === 'typed';

    return (
      <div
        className={cn(
          'border-b-1.5 border-solid flex items-center overflow-clip p-0.5 relative w-[278px] transition-colors',
          isDark
            ? hasError
              ? 'bg-secondary border-accent'
              : isActiveOrTyped
                ? 'bg-secondary border-primary'
                : 'bg-secondary border-secondary-light'
            : hasError
              ? 'bg-primary border-accent'
              : isActiveOrTyped
                ? 'bg-primary border-secondary'
                : 'bg-primary border-secondary-light',
          (showLeadingSpacer || leadingIcon) && 'gap-2.5',
          containerClassName
        )}
      >
        {showLeadingSpacer && (
          <div className="relative shrink-0 size-5" aria-hidden="true" />
        )}
        {leadingIcon && (
          <div className="relative shrink-0 flex items-center justify-center">
            {leadingIcon}
          </div>
        )}
        <input
          ref={ref}
          aria-invalid={hasError || undefined}
          value={
            visualState === 'active' && currentValue === ''
              ? '|'
              : currentValue
          }
          placeholder={
            visualState === 'active'
              ? '|'
              : isFocused
                ? ''
                : placeholder
          }
          onFocus={(e) => {
            setIsFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur?.(e);
          }}
          onChange={(e) => {
            setInternalValue(e.target.value);
            onChange?.(e);
          }}
          className={cn(
            'w-full bg-transparent font-sans text-input font-medium h-[20.419px] leading-[normal] outline-none border-none p-0',
            isDark
              ? isActiveOrTyped
                ? 'text-primary placeholder:text-secondary-light'
                : 'text-secondary-light placeholder:text-secondary-light'
              : isActiveOrTyped
                ? 'text-secondary placeholder:text-secondary-light'
                : 'text-secondary-light placeholder:text-secondary-light',
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';
