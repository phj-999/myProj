import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./components/ErrorFallback";
import { Loader } from "@react-three/drei";
import "./App.css";
import { useRoutes } from "react-router-dom";
import { routes } from "./router/router";

function App() {
  const elements = useRoutes(routes)
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<Loader />}>
       {elements}
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
