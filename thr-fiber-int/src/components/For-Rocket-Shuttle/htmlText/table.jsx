import React from "react";
// import * as THREE from "three";
// import { useWindowSize } from "@/hooks/useWindowSize";
import Gauge from "./Gauge";

import "./tablee.css";

const Table = () => {
  // const ref = useRef();
  // const { width, height } = useWindowSize();

  // const a = useMemo(
  //   () => new THREE.Vector3(0.0052 * width, -0.0028 * height, 0),
  //   [height, width]
  // );
  //scene.orbitControls.enabled = false;
  return (
  
      <div
      className=" absolute bottom-0 right-0 w-1/6 h-auto"
        // distanceFactor={10}
        // //scale={2}
        // className="tablee"
        // rotation={[Math.PI / 0, 1, 0]}
        // position={a}
        // transform
        // //occlude
      >
        <Gauge />
      </div>

  );
};

export default Table;
