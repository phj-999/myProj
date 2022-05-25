import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./components/ErrorFallback";

import "./App.css";

const Spinner = React.lazy(() => import("./components/boxTwo/Spinner"));
//const CarsShow = React.lazy(()=>import("./views/car/CarsShow"))
//const Start = React.lazy(() => import("./views/start"));
//const UniverseStar = React.lazy(() => import("./views/Iron-Universe/UniverseStar"));
//const UniverseStarTwo = React.lazy(() => import("./views/Iron-Universe/UniverseStarTwo"));
const CarShuttle = React.lazy(() => import("@/views/Car-Shuttle"));

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={null}>
        {/* <CarsShow /> */}
        {/* <Start /> */}
        {/* <UniverseStar /> */}
        {/* <UniverseStarTwo /> */}
        <CarShuttle />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
