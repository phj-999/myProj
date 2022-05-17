import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

/**
 *state中是如下api
 *advance, camera, clock, events, get, gl, internal
 *invalidate, mouse, onPointerMissed, performance
 * raycaster, scene, set, setEvents, setFrameloop
 * viewport, xr,  pointer, setSize
 */
const BoxTwo = (props) => {
  const ref = useRef();
  useFrame((state) => {
    //   console.log(state);
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={ref} {...props} castShadow receiveShadow>
      <boxBufferGeometry />
      <meshBasicMaterial

        color={"blue"}
        fog={"false"}
      />
    </mesh>
  );
};

export default BoxTwo;
