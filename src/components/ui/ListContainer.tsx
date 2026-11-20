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
        'bg-primary min-h-167.25 flex-1 overflow-clip relative rounded-tl-lg rounded-tr-lg shrink-0 w-full max-w-97.5',
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
