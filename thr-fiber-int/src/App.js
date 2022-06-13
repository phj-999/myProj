import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./components/ErrorFallback";
import { Loader } from "@react-three/drei";
import "./App.css";

const CarShuttle = React.lazy(() => import("@/views/Rocket-Shuttle"));

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<Loader />}>
        <CarShuttle />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
