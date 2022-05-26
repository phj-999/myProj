import React, { useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

const Car = () => {
  // 此汽车的loader
  const cartexture = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "car/scene.gltf"
  );

  return <primitive position={[0,0,0]} scale={[0.002,0.002,0.002]} object={cartexture.scene}>Car</primitive>;
};

export default Car;
