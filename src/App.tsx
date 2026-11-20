import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HomeEmptyPage } from '@/pages/HomeEmptyPage';
import { DesignFoundationPage } from '@/pages/DesignFoundationPage';
import { DesignComponentsPage } from '@/pages/DesignComponentsPage';
import { OfflinePage } from '@/pages/OfflinePage';
import { PwaUpdatePrompt } from '@/components/ui';
import { clearDatabase } from '@/lib/db';
import { useAppStore } from '@/lib/store';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
});

const ResetDatabaseRoute: React.FC = () => {
  const navigate = useNavigate();
  const setActiveListId = useAppStore((state) => state.setActiveListId);
  const setCreateListModalOpen = useAppStore(
    (state) => state.setCreateListModalOpen
  );

  useEffect(() => {
    clearDatabase().finally(() => {
      setActiveListId(null);
      setCreateListModalOpen(false);
      navigate('/', { replace: true });
    });
  }, [navigate, setActiveListId, setCreateListModalOpen]);

  return null;
};

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeEmptyPage />} />
          <Route path="/reset" element={<ResetDatabaseRoute />} />
          <Route path="/components" element={<DesignComponentsPage />} />
          <Route path="/foundation" element={<DesignFoundationPage />} />
          <Route path="/offline" element={<OfflinePage />} />
        </Routes>
        <PwaUpdatePrompt />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
