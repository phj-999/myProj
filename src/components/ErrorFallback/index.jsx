import React from "react";

export function Bomb() {
  throw new Error("💥 CABOOM 💥");
}


export function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p><Bomb />Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}