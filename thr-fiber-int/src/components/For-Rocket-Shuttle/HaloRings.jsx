import { useGLTF } from "@react-three/drei";
import React from "react";

const HaloRings = () => {
  const { nodes, materials } = useGLTF(
    process.env.PUBLIC_URL + "models_for_rocketshuttle/halo_ring/scene.gltf"
  );
  // console.log("nodes", nodes);
  // console.log("====================================");
  // console.log("materials", materials);
  return (
    <group
      scale={[0.003, 0.003, 0.003]}
      castShadow
      receiveShadow
      dispose={null}
    >
      <mesh
        geometry={nodes["LIGHTKRAFTFBXASC032GRAVITONFBXASC032"].geometry}
        material={materials.LIGHTKRAFTFBXASC032GRAVITONFBXASC032}
      />
      <mesh
        geometry={nodes["MaterialFBXASC032FBXASC0352142146801"].geometry}
        material={materials.MaterialFBXASC032FBXASC0352142146801}
      />
      <mesh
        geometry={nodes["MaterialFBXASC032FBXASC0352142147988"].geometry}
        material={materials.MaterialFBXASC032FBXASC0352142147988}
      />
      <mesh
        geometry={nodes["MaterialFBXASC032FBXASC0352142150746"].geometry}
        material={materials.MaterialFBXASC032FBXASC0352142150746}
      />

      <mesh
        geometry={nodes["MaterialFBXASC032FBXASC0352142150746_1"].geometry}
        material={materials.MaterialFBXASC032FBXASC0352142150746}
      />
      <mesh
        geometry={nodes["MaterialFBXASC032FBXASC0352142150746_2"].geometry}
        material={materials.MaterialFBXASC032FBXASC0352142150746}
      />
    </group>
  );
};

export default HaloRings;

useGLTF.preload(
  process.env.PUBLIC_URL + "models_for_rocketshuttle/halo_ring/scene.gltf"
);
