import { Plane, Stars } from "@react-three/drei";
import React  from "react";

const BackgroundScene = () => {  
    return (
    <group dispose={null} >
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <Plane rotation-x={Math.PI / 2} args={[100, 100, 4, 4]}>
        <meshBasicMaterial color="black" wireframe />
      </Plane>
    </group>
  );
};

export default BackgroundScene;
