import React from 'react';
import { useErrorBoundary } from 'react-error-boundary';

export default function FallbackComponet({ error }) {
  const { resetBoundary } = useErrorBoundary();
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
      <button onClick={resetBoundary}>Try again</button>
    </div>
  );
}
