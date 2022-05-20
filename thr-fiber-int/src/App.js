import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./components/ErrorFallback";

import CarsShow from "./views/car/CarsShow";

import "./App.css";

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <CarsShow />
    </ErrorBoundary>
  );
}

export default App;
