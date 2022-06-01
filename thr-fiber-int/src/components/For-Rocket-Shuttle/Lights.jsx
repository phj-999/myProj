import React from "react";
import { SpotLight, useDepthBuffer } from "@react-three/drei";

const Lights = () => {
  //const depthBuffer = useDepthBuffer({ size: 256, frames: 1 });
  return (
    <>
      <SpotLight
        color={'red'}
        intensity={1.5}
        //depthBuffer={depthBuffer}
        position={[5, 5, 0]}
        angle={0.6}
        penumbra={0.5}
        castShadow
        shadow-bias={-0.0001}
      />
      <SpotLight
        color={[0.14, 0.5, 1]}
        intensity={2}
        //depthBuffer={depthBuffer}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
       <ambientLight intensity={1.5} position={[0,0,-6]}/> 
    </>
  );
};

export default Lights;
