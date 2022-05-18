import { useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import React, { useMemo } from "react";

const Background = (props) => {
  const texture = useLoader(THREE.TextureLoader, "/threebox/autoshop.jpg");

//   const { gl } = useThree();
//   const formatted = useMemo(
//     () =>
//       new THREE.WebGLCubeRenderTarget(
//         texture.image.height
//       ).fromEquirectangularTexture(gl, texture),
//     [gl, texture]
//   );

  return <primitive attach="background" object={texture} />;
};

export default Background;
