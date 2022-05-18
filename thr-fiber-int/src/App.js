import { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import * as THREE from "three";

import "./App.css";
import Background from "./components/boxTwo/Background";
//import BoxOne from "./views/box1demo";
import BoxTwo from "./components/boxTwo/Box"; //盒子
import Bulb from "./components/boxTwo/Bulb";
import Floor from "./components/boxTwo/Floor";
import Orbit from "./components/boxTwo/Orbit"; //轨道控制器

function App() {
  return (
    <>
      {/* <BoxOne /> */}
      <div style={{ height: "100vh", width: "100vw" }}>
        <Canvas shadows={true} camera={{ position: [7,7,7] }} style={{ background: "black" }}>
          {/* <fog attach={'fog'} args={['white', 1, 10]}/> */}
          <ambientLight intensity={0.2}/>
          <pointLight castShadow />
          <Bulb position={[0,3,0]} />
          <Orbit />
          <axesHelper args={[5]} />
          <Suspense fallback={null}>
          <BoxTwo position={[0, 1, 0]} />
          </Suspense>
          <Suspense fallback={null}>
          <Background />
          </Suspense>
          <Floor position={[0,-0.5,0]}/>
        </Canvas>
      </div>
    </>
  );
}

export default App;
