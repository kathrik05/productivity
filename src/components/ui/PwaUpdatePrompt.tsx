import React from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';
import { Button } from './Button';

export const PwaUpdatePrompt: React.FC = () => {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  if (
    typeof window !== 'undefined' &&
    new URLSearchParams(window.location.search).get('screenshot') === '1'
  ) {
    return null;
  }

  if (!offlineReady && !needRefresh) {
    return null;
  }

  const handleClose = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-4 right-4 z-50 bg-secondary text-primary border border-accent p-4 flex flex-col gap-3 w-[310px]"
    >
      <p className="font-sans text-caption font-medium text-primary">
        {offlineReady
          ? 'App is ready to work offline.'
          : 'A new version is available.'}
      </p>
      <div className="flex items-center gap-2">
        {needRefresh && (
          <Button
            variant="primary"
            fullWidth
            onClick={() => updateServiceWorker(true)}
          >
            Reload
          </Button>
        )}
        <Button variant="secondary" fullWidth onClick={handleClose}>
          Dismiss
        </Button>
      </div>
    </div>
  );
};
