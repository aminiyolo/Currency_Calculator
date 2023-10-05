import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Fallback } from './style';

interface Props {
  pendingFallback: JSX.Element;
  rejectedFallback: JSX.Element;
  children: JSX.Element;
}

function AsyncBoundary({ pendingFallback, rejectedFallback, children }: Props) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          FallbackComponent={({ resetErrorBoundary }) => {
            return (
              <Fallback>
                {rejectedFallback}
                <button onClick={resetErrorBoundary}>재시도</button>
              </Fallback>
            );
          }}
        >
          <Suspense fallback={pendingFallback}>{children}</Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}

export default AsyncBoundary;
