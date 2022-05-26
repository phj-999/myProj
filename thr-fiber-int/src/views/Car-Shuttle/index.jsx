import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  ChromaticAberration,
} from "@react-three/postprocessing";
import { Physics } from "@react-three/cannon";

import Spinner from "../../components/boxTwo/Spinner";
import { AdaptiveDpr, OrbitControls, PerspectiveCamera } from "@react-three/drei";

import Car from "@/components/For-Car-Shuttle/Car";
import Floor from "@/components/boxTwo/Floor";

// import './header.css'

const CarShuttle = () => {
  return (
    <>
      <div className={"box-content w-screen h-screen bg-gray-200"}>
        <Canvas frameloop="demand">
          <AdaptiveDpr pixelated={true} />
          {/* 轨道控制 控制器的焦点暂时设为【0，0，0】 */}
          <OrbitControls targrt={[0, 0, 0]} />
          {/* 相机默认事件 */}
          <PerspectiveCamera position={[3, 2, 5]} fov={50} makeDefault />
          {/* <color args={[0, 0, 0]} attach="background" /> */}
          <axesHelper args={[5]} />
          <Car />
          {/* <mesh position={[0, 0, 0]}>
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshBasicMaterial color={"#111827"}/>
          </mesh> */}
          <Physics>
            <Floor position={[0, -0.5, 0]} />
          </Physics>
        </Canvas>
      </div>
    </>
  );
};

export default CarShuttle;
