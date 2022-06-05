//import { useSpring, useSpringRef,animated } from "@react-spring/three";
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
  // //const {springRef} = useSpring()
  // const springRef = useSpringRef();
  // //console.log(springRef.current, "SpringRef");
  // const styles  = useSpring({
  //   ref: springRef,
  //   loop: true,
  //   from: { rotateZ: 0 },
  //   to: {
  //     rotateZ: 180,
  //   },
  //   //config: { duration: 2000 },
  // });
  return (
    <>
      <HaloRings position={[0, 0, 0]} scale={[0.005, 0.005, 0.005]} />
      <HaloRings position={ringOnePositionRef} scale={ringOneScaleRef} />
      <HaloRings
        position={ringTwoPositionRef}
        scale={ringTworScaleRef}
      />
    </>
  );
};
export default HaloRingsCollection;
