import { Canvas } from "react-three-fiber";

import "./App.css";
//import BoxOne from "./views/box1demo";
import BoxTwo from "./components/boxTwo/Box";
import Orbit from "./components/boxTwo/Orbit";



function App() {
  return (
    <div className="App">
      {/* <BoxOne /> */}
      <div style={{ height: "100vh", width: "100vw" }}>
        <Canvas camera={{position: [3,3,3]}} style={{ background: "red" }}>
          <Orbit />
          <BoxTwo position={[1,1,0]} />
          <axesHelper args={[5]}/>
        </Canvas>
      </div>
    </div>
  );
}

export default App;
