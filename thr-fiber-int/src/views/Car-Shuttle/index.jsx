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
// import './header.css'

const CarShuttle = () => {
  return (
    <>
      <div className={"box-content w-screen h-screen bg-gray-200"}>
        <header className="w-screen h-2 header text-red-400">gegegeg</header>
      </div>
    </>
  );
};

export default CarShuttle;
