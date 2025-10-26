import { AppRouter } from "./routes/AppRouter";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { SpinnerFallback } from "./components/Molecules/SpinnerFallback/SpinnerFallback";
import { ErrorFallback } from "./components/Molecules/ErrorFallback/ErrorFallback";

export const App = () => (
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => window.location.reload()}
  >
    <Suspense fallback={<SpinnerFallback />}>
      <AppRouter />
    </Suspense>
  </ErrorBoundary>
);
