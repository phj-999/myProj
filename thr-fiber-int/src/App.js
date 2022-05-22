import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./components/ErrorFallback";

import "./App.css";

//const CarsShow = React.lazy(()=>import("./views/car/CarsShow"))
const Spinner = React.lazy(() => import("./components/boxTwo/Spinner"));
const Start = React.lazy(() => import("./views/start"));

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<Spinner />}>
        {/* <CarsShow /> */}
        <Start />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
