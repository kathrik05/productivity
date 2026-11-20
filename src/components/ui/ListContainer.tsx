import React from 'react';
import { cn } from '@/lib/cn';

export interface ListContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

/**
 * Reusable rounded top list surface container (Figma node 93:8285 "List")
 */
export const ListContainer: React.FC<ListContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section
      className={cn(
        'bg-primary flex-1 min-h-0 w-full overflow-y-auto overflow-x-hidden relative rounded-tl-lg rounded-tr-lg',
        className
      )}
      data-node-id="93:8285"
      data-name="List"
      {...props}
    >
      {children}
    </section>
  );
};
