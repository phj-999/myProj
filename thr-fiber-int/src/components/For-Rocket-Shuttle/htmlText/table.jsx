import React, { useRef } from "react";
import {
  //   useGLTF,
  //   PresentationControls,
  //   Environment,
  //   ContactShadows,
  Html,
} from "@react-three/drei";
import * as THREE from "three";
import { useWindowSize } from "@/hooks/useWindowSize";
import Gauge from "./Gauge";

import "./tablee.css";


const Table = () => {
  const ref = useRef();
  const { width, height } = useWindowSize();
  const a = useRef(
    new THREE.Vector3(Math.round(-0.004855 * width), -0.001 * height, 0)
  ).current;
  //scene.orbitControls.enabled = false;
  return (
    <group ref={ref} dispose={null}>
      {/* <mesh
        // geometry={nodes.Object005_glass_0.geometry}
        // material={materials.glass}
      > */}
      <Html
        distanceFactor={10}
        //scale={2}
        className="tablee"
        rotation={[Math.PI / 0,1,0]}
        position={a}
        transform={false}
        //occlude
      >
          <Gauge />
      </Html>
      {/* </mesh>
      <mesh
        castShadow
        receiveShadow
        // geometry={nodes.Object006_watch_0.geometry}
        // material={materials.watch}
      /> */}
    </group>
  );
};

export default Table;
