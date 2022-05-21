import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./components/ErrorFallback";

import CarsShow from "./views/car/CarsShow";

import "./App.css";
import Start from "./views/start";

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {/* <CarsShow /> */}
      <Start />
    </ErrorBoundary>
  );
}

export default App;
