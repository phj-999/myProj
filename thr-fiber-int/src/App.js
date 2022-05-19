import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { Physics } from "@react-three/cannon";

import "./App.css";
import Background from "./components/boxTwo/Background";
//import BoxOne from "./views/box1demo";
//import BoxTwo from "./components/boxTwo/Box"; //盒子
import Bulb from "./components/boxTwo/Bulb";
import ColorPicker from "./components/boxTwo/ColorPicker";
import Dragable from "./components/boxTwo/Dragable";
import Floor from "./components/boxTwo/Floor";
import Orbit from "./components/boxTwo/Orbit"; //轨道控制器
import Model from "./components/boxTwo/Model";
import BoundingBox from "./components/boxTwo/BoundingBox";

function App() {
  return (
    <>
      {/* <BoxOne /> */}
      <div style={{ height: "100vh", width: "100vw" }}>
        <ColorPicker />
        <Canvas
          shadows={true}
          camera={{ position: [7, 7, 7] }}
          style={{ background: "black" }}
        >
          {/* <fog attach={'fog'} args={['white', 1, 10]}/> */}
          <ambientLight intensity={0.2} />
          <pointLight castShadow />
          <Orbit />
          <axesHelper args={[5]} />
          <Bulb position={[0, 3, 0]} />
          <Physics>
            <Suspense fallback={null}>
              <Dragable transformGroup>
                <BoundingBox
                  visible
                  position={[4, 4, 0]}
                  dims={[3, 2, 6]}
                  offset={[0, 0, 0.8]}
                >
                  <Model
                    path="/tesla_cybertruck/scene.gltf"
                    scale={new Array(3).fill(0.01)}
                    position={[4, 0.6, 0]}
                  />
                </BoundingBox>
              </Dragable>

              <Dragable transformGroup>
                <BoundingBox
                  visible
                  position={[-4, 4, 0]}
                  dims={[3, 2, 7]}
                  offset={[0, -0.8, 0.2]}
                >
                  <Model
                    path="/tesla_2018_model_3/scene.gltf"
                    scale={new Array(3).fill(0.013)}
                    position={[-4, 0.2, 0]}
                  />
                </BoundingBox>
              </Dragable>
            </Suspense>
            {/* 
              <Dragable>
                <Suspense fallback={null}>
                  <BoxTwo position={[-4, 1, 0]} />
                </Suspense>
                <Suspense fallback={null}>
                  <BoxTwo position={[4, 1, 0]} />
                </Suspense>
              </Dragable>  
            */}
            <Suspense fallback={null}>
              <Background />
            </Suspense>
            <Floor position={[0, -0.5, 0]} />
          </Physics>
        </Canvas>
      </div>
    </>
  );
}

export default App;
