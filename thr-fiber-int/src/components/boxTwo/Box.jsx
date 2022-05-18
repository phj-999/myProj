import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

/**
 *state中是如下api
 *advance, camera, clock, events, get, gl, internal
 *invalidate, mouse, onPointerMissed, performance
 * raycaster, scene, set, setEvents, setFrameloop
 * viewport, xr,  pointer, setSize
 */
const BoxTwo = (props) => {
  const ref = useRef();
  const texture = useLoader(THREE.TextureLoader, "/threebox/wood.jpg");
  useFrame((state) => {
    //   console.log(state);
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });
  
  return (
    <mesh
      ref={ref}
      {...props}
      castShadow
      //receiveShadow
    >
      {/* <boxBufferGeometry /> */}
      <sphereBufferGeometry args={[1, 100, 100]} />
      <meshBasicMaterial
        // opacity={0.7}
        // transparent
        // color={"white"}
        // fog={"false"}
        // roughness={0}
        // clearcoat={1}
        // transmission={0.5}
        // reflectivity={1}
        //side={THREE.DoubleSide}
        map={texture}
      />
    </mesh>
  );
};

export default BoxTwo;
