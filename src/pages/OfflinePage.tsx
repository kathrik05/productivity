import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui';
import logoMarkIcon from '@/assets/icons/logo-mark.svg';

export const OfflinePage: React.FC = () => {
  return (
    <main className="min-h-screen bg-primary text-secondary flex flex-col items-center justify-center p-6 gap-4 text-center">
      <img src={logoMarkIcon} alt="Productivity logo" className="size-[50px]" />
      <h1 className="font-sans text-title font-bold">You are offline</h1>
      <p className="font-sans text-caption font-medium text-secondary-light max-w-[310px]">
        Your tasks and lists remain accessible locally via IndexedDB. Reconnect
        to sync any remote changes.
      </p>
      <Button variant="primary" asChild>
        <Link to="/">Back to App</Link>
      </Button>
    </main>
  );
};
