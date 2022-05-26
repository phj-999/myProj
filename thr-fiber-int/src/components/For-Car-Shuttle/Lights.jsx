import React from "react";
import { SpotLight, useDepthBuffer } from "@react-three/drei";

const Lights = () => {
  const depthBuffer = useDepthBuffer({ size: 256, frames: 1 });
  return (
    <>
      <SpotLight
        penumbra={0.5}
        depthBuffer={depthBuffer}
        position={[3, 2, 0]}
        intensity={0.5}
        angle={0.5}
        color={"blue"}
        castShadow
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
    </>
  );
};

export default Lights;
