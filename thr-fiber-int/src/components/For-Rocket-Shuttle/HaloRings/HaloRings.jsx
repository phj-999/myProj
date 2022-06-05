import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";

const HaloRings = (props) => {
  const earthRef = useRef().current
  const { nodes, materials } = useGLTF(
    process.env.PUBLIC_URL + "models_for_rocketshuttle/halo_ring/scene.gltf"
  );
 const [earthRing] = useMemo(() => { const earthRing = nodes["MaterialFBXASC032FBXASC0352142146801"]
  return [earthRing]
}, [nodes])
  
   //console.log("nodes", nodes);
  // console.log("====================================");
   //console.log("materials", materials);
  // console.log("earthRef", nodes["MaterialFBXASC032FBXASC0352142146801"]);
   
  console.log(earthRing,'earthRing');
   useFrame((state,delta)=>{
    let t = state.clock.getElapsedTime()
    earthRing.rotation.x = t*3
   })

  return (
    <group
      // scale={[0.003, 0.003, 0.003]}
      {...props}
      castShadow
      receiveShadow
      dispose={null}
    >
      {/* 灯光 */}
      <mesh 
        geometry={nodes["LIGHTKRAFTFBXASC032GRAVITONFBXASC032"].geometry}
        material={materials.LIGHTKRAFTFBXASC032GRAVITONFBXASC032}
      />
      {/* 内环表面地图 */}
      <mesh  ref={earthRef}
        geometry={nodes["MaterialFBXASC032FBXASC0352142146801"].geometry}
        material={materials.MaterialFBXASC032FBXASC0352142146801}
      />
      {/*外环圈  */}
      <mesh
        geometry={nodes["MaterialFBXASC032FBXASC0352142147988"].geometry}
        material={materials.MaterialFBXASC032FBXASC0352142147988}
      />
      {/* 灯轴 */}
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
}

export default HaloRings;

useGLTF.preload(
  process.env.PUBLIC_URL + "models_for_rocketshuttle/halo_ring/scene.gltf"
);
