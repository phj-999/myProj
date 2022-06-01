import React, { useRef } from "react";
import * as THREE from "three";
import HaloRings from "./HaloRings";

const HaloRingsCollection = () => {
  const ringOnePositionRef = useRef(new THREE.Vector3(0, 0, -6)).current;
  const ringOneScaleRef = useRef(
    new THREE.Vector3(0.003, 0.003, 0.003)
  ).current;

  const ringTwoPositionRef = useRef(new THREE.Vector3(0.4, 0.12, 6)).current;
  const ringTworScaleRef = useRef(
    new THREE.Vector3(0.007, 0.007, 0.007)
  ).current;

  return (
    <>
      <HaloRings position={[0, 0, 0]} scale={[0.005, 0.005, 0.005]} />
      <HaloRings position={ringOnePositionRef} scale={ringOneScaleRef} />
      <HaloRings position={ringTwoPositionRef} scale={ringTworScaleRef} />
    </>
  );
};

export default HaloRingsCollection;
