import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./components/ErrorFallback";
import "./App.css";
import { useRoutes } from "react-router-dom";
import { routes } from "./router/router";

function App() {
  const elements = useRoutes(routes)
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
       {elements}
    </ErrorBoundary>
  );
}

export default App;
