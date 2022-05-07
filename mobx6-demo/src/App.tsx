import React from "react";
import { observer } from "mobx-react";
import FucComponentsDemo from "./Components/FucComponentsDemo";
import { useStore } from "./store";

function App() {
  const { cart } = useStore();
  return (
    <div>
      <h3>{cart.list}</h3>
      <FucComponentsDemo />
    </div>
  );
}

export default observer(App);
