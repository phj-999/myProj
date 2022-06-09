import React, { useMemo, useRef } from "react";
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

  const a = useMemo(
    () => new THREE.Vector3(0.0052 * width, -0.0028 * height, 0),
    [height, width]
  );
  //scene.orbitControls.enabled = false;
  return (
    <group ref={ref} dispose={null}>
      <Html
        distanceFactor={10}
        //scale={2}
        className="tablee"
        rotation={[Math.PI / 0, 1, 0]}
        position={a}
        transform
        //occlude
      >
        <Gauge />
      </Html>
    </group>
  );
};

export default Table;
