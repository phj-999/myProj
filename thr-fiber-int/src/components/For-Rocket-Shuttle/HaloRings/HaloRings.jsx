import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const HaloRings = (props) => {
  const lightsRef = useRef().current
  const { nodes, materials } = useGLTF(
    process.env.PUBLIC_URL + "models_for_rocketshuttle/halo_ring/scene.gltf"
  );
   console.log("nodes", nodes);
   console.log("====================================");
   console.log("materials", materials);


  return (
    <group
      // scale={[0.003, 0.003, 0.003]}
      {...props}
      castShadow
      receiveShadow
      dispose={null}
    >
      {/* 灯光 */}
      <mesh ref={lightsRef}
        geometry={nodes["LIGHTKRAFTFBXASC032GRAVITONFBXASC032"].geometry}
        material={materials.LIGHTKRAFTFBXASC032GRAVITONFBXASC032}
      />
      {/* 内环表面地图 */}
      <mesh
        geometry={nodes["MaterialFBXASC032FBXASC0352142146801"].geometry}
        material={materials.MaterialFBXASC032FBXASC0352142146801}
      />
      {/*外环圈  */}
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
