import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { Physics } from "@react-three/cannon";
import {ErrorBoundary} from 'react-error-boundary'
import {ErrorFallback} from './components/ErrorFallback'

import "./App.css";
import Background from "./components/boxTwo/Background";
//import BoxOne from "./views/box1demo";
//import BoxTwo from "./components/boxTwo/Box"; //盒子
// import Bulb from "./components/boxTwo/Bulb";
import ColorPicker from "./components/boxTwo/ColorPicker";
import Floor from "./components/boxTwo/Floor";
import Orbit from "./components/boxTwo/Orbit"; //轨道控制器
import Car from "./views/car/Car";
import CameraControls from "./components/boxTwo/CameraControls";
import CameraButton from "./components/boxTwo/CameraButton";
import Lights from "./components/boxTwo/Lights";
import state from "./state";

function App() {
  return (
  <ErrorBoundary FallbackComponent={ErrorFallback} >
    <>
      {/* <BoxOne /> */}
      <div style={{ height: "100vh", width: "100vw" }}>
        <ColorPicker />
        <CameraButton />
        <Canvas
          shadows={true}
          camera={{ position: [7, 7, 7] }}
          style={{ background: "black" }}
        >
           <Suspense fallback={null}>
              <Background />
            </Suspense>
          {/* <fog attach={'fog'} args={['white', 1, 10]}/> */}
          <CameraControls state={state}/>
          <Lights />
          <Orbit />
          <axesHelper args={[5]} />
          
          <Physics>
            <Car />
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
           
            <Floor position={[0, -0.5, 0]} />
          </Physics>
        </Canvas>
      </div>
    </>
  </ErrorBoundary>
  );
}

export default App;
