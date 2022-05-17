import { Canvas } from "react-three-fiber";

import "./App.css";
//import BoxOne from "./views/box1demo";
import Box from "./components/Box";

function App() {
  return (
    <div className="App">
      {/* <BoxOne /> */}
      <div style={{ height: "100vh", width: "100vw" }}>
        <Canvas style={{ background: "red" }}>
          <Box />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
