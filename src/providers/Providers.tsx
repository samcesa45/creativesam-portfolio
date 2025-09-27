'use client';
import { useEffect } from 'react';
import { queryConfig } from '@/lib/react-query';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { useState } from 'react';
import MainErrorFallback from '@/ui/errors/main';
import { AuthLoader } from '@/lib/auth';
import { Spinner } from '@/ui/spinner';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeProvider } from '@/context';

type Props = {
  children: React.ReactNode;
};
export default function Providers({ children }: Props) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: queryConfig,
      }),
  );
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <ErrorBoundary FallbackComponent={MainErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <AuthLoader
          renderLoading={() => (
            <div className="flex relative h-screen w-full max-w-[1920px] mx-auto items-center justify-center">
              <Spinner />
            </div>
          )}
        >
          <ThemeProvider>{children}</ThemeProvider>
        </AuthLoader>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
