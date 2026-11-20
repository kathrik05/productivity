import React from 'react';
import { cn } from '@/lib/cn';
import logoAvatarPng from '@/assets/images/logo-avatar.png';

export interface TopHeadProps {
  dateText?: string;
  greetingText?: string;
  avatarSrc?: string;
  children?: React.ReactNode;
  className?: string;
}

/**
 * Reusable Top Header component (Figma node 93:8279 "Top Head")
 */
export const TopHead: React.FC<TopHeadProps> = ({
  dateText = '25 Jan 2026',
  greetingText = 'Good Morning, User',
  avatarSrc = logoAvatarPng,
  children,
  className,
}) => {
  return (
    <header
      className={cn(
        'bg-primary sticky top-0 z-30 flex gap-1 h-26 items-center overflow-clip p-5 rounded-bl-lg rounded-br-lg shrink-0 w-full',
        className
      )}
      data-node-id="93:8279"
      data-name="Top Head"
    >
      <div
        className="relative shrink-0 size-8.75"
        data-node-id="93:8280"
        data-name="image 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={avatarSrc}
        />
      </div>

      <div
        className="flex flex-col items-start relative shrink-0 text-secondary w-48.75"
        data-node-id="93:8281"
      >
        <div
          className="flex flex-col font-sans text-caption font-medium justify-center relative shrink-0 w-full"
          data-node-id="93:8282"
        >
          <p className="leading-[normal]">{dateText}</p>
        </div>
        <div
          className="flex flex-col font-sans text-title font-bold justify-center relative shrink-0 w-full"
          data-node-id="93:8283"
        >
          <h1 className="leading-[normal]">{greetingText}</h1>
        </div>
      </div>

      {children}
    </header>
  );
};
