import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/cn';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  visualState?: 'active' | 'hover';
  fullWidth?: boolean;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      visualState = 'active',
      fullWidth = false,
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    const isForcedHover = visualState === 'hover';

    return (
      <Comp
        ref={ref}
        type={asChild ? undefined : (props.type ?? 'button')}
        className={cn(
          'inline-flex items-center justify-center p-3 min-h-[44px] relative transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          variant === 'primary' && [
            fullWidth ? 'flex-1 min-w-px' : 'w-[152px]',
            isForcedHover
              ? 'bg-accent-hover text-primary'
              : 'bg-accent hover:bg-accent-hover text-primary',
          ],
          variant === 'secondary' && [
            fullWidth ? 'flex-1 min-w-px' : 'w-[158px]',
            'border-3 border-solid bg-transparent',
            isForcedHover
              ? 'border-accent-hover text-accent-hover'
              : 'border-accent hover:border-accent-hover text-accent hover:text-accent-hover',
          ],
          className
        )}
        {...props}
      >
        <span
          className={cn(
            'font-sans text-button font-semibold leading-[normal] text-center',
            variant === 'primary' ? 'w-[85px]' : 'whitespace-nowrap'
          )}
        >
          {children}
        </span>
      </Comp>
    );
  }
);

Button.displayName = 'Button';
