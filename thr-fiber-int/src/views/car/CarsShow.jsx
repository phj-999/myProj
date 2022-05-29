import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { Physics } from "@react-three/cannon";

import Background from "../../components/boxTwo/Background";
//import BoxOne from "./views/box1demo";
//import BoxTwo from "../../components/boxTwo/Box"; //盒子
// import Bulb from "../../components/boxTwo/Bulb";
import ColorPicker from "../../components/boxTwo/ColorPicker";
import Floor from "../../components/boxTwo/Floor";
import Orbit from "../../components/boxTwo/Orbit"; //轨道控制器
import CameraControls from "../../components/boxTwo/CameraControls";
import CameraButton from "../../components/boxTwo/CameraButton";
import Lights from "../../components/boxTwo/Lights";
import Effects from "../../components/boxTwo/Effects";
import Spinner from "../../components/boxTwo/Spinner";

import Car from "./cpns/Car";
import state from "./config/state";

const CarsShow = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [windowDimensions]);

  const handleResize = () => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  return (
    <>
      {/* <BoxOne /> */}
      <div className={"box-content w-screen h-screen"}>
        <ColorPicker />
        <CameraButton />
        <Canvas
          gl={{
            powerPreference: "high-performance",
            antialias: false,
            stencil: false,
            depth: false
          }}
          shadows
          camera={{ position: [7, 7, 7] }}
          style={{ background: "black" }}
        >
          <Suspense fallback={<Spinner />}>
            <Background windowDimensions={windowDimensions} />
          </Suspense>
          {/* <fog attach={'fog'} args={['white', 1, 10]}/> */}
          <CameraControls />
          <Lights />
          <Orbit />
          {/* <axesHelper args={[5]} /> */}

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
          {/* 景深效果 */}
          <Effects />
        </Canvas>
      </div>
    </>
  );
};

export default CarsShow;
