import React, { Suspense } from "react";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  ChromaticAberration,
} from "@react-three/postprocessing";

import Spinner from "../../components/boxTwo/Spinner";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Car from "@/components/carPage/Car";
import { AxesHelper } from "three";
// import './header.css'

const CarShuttle = () => {
  return (
    <>
      <div className={"box-content w-screen h-screen bg-gray-200"}>
        <Canvas>
          {/* 轨道控制 控制器的焦点暂时设为【0，0，0】 */}
          <OrbitControls targrt={[0, 0, 0]} />
          {/* 相机默认事件 */}
          <PerspectiveCamera position={[3, 2, 5]} fov={50} makeDefault />
          {/* <color args={[0, 0, 0]} attach="background" /> */}
          <axesHelper  args={[5]} />
          <Car />
          {/* <mesh position={[0, 0, 0]}>
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshBasicMaterial color={"#111827"}/>
          </mesh> */}
        </Canvas>
      </div>
    </>
  );
};

export default CarShuttle;
