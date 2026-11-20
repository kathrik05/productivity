import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HomeEmptyPage } from '@/pages/HomeEmptyPage';
import { DesignFoundationPage } from '@/pages/DesignFoundationPage';
import { DesignComponentsPage } from '@/pages/DesignComponentsPage';
import { OfflinePage } from '@/pages/OfflinePage';
import { PwaUpdatePrompt } from '@/components/ui';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
});

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeEmptyPage />} />
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
