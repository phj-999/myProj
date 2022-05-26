import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { RepeatWrapping, TextureLoader } from "three";

const FloorGrid = () => {
    const diffuse = useLoader(TextureLoader, process.env.PUBLIC_URL + "models_for_carshuttle/textures/grid-texture.png");
  
    useEffect(() => {
        diffuse.wrapS = RepeatWrapping;
        diffuse.wrapT = RepeatWrapping;
        diffuse.anisotropy = 4;
        diffuse.repeat.set(30, 30);
        diffuse.offset.set(0, 0);

        return () => {
          diffuse.scene.remove()
        }
      }, [diffuse]);

      useFrame((state, delta) => {
        let t = -state.clock.getElapsedTime() * 0.68;
        diffuse.offset.set(0, t);
      });
    return (
    <>
    <group dispose={null}>
      <mesh rotation-x={-Math.PI * 0.5} position={[0, 0.425, 0]}>
      <planeGeometry args={[35, 35]} />
      <meshBasicMaterial
        color={[1, 1, 1]}
        opacity={0.15}
        map={diffuse}
        alphaMap={diffuse}
        transparent={true}
      />
    </mesh>
    </group>
  </>
  )
}

export default FloorGrid