import React, { Suspense } from "react";
import BoundingBox from "../../../components/boxTwo/BoundingBox";
import Dragable from "../../../components/boxTwo/Dragable";
import Model from "../../../components/boxTwo/Model";

const Car = () => {
  return (
    <Suspense fallback={null}>
      {/* 卡车-name： object001_Material009_0  用于点击改变颜色*/}
      <Dragable transformGroup>
        <BoundingBox
          visible
          position={[4, 4, 0]}
          dims={[3, 2, 6]}
          offset={[0, 0.2, 0]}
        >
          <Model
            path="/tesla_cybertruck/scene.gltf"
            scale={new Array(3).fill(0.01)}
            position={[4, 0.6, 0]}
          />
        </BoundingBox>
      </Dragable>

      {/*model3-name: bonnet_ok_primary_0 用于点击改变颜色*/}
      <Dragable transformGroup>
        <BoundingBox
          visible
          position={[-4, 4, 0]}
          dims={[3, 2.3, 7]}
          offset={[0, 0, 0.2]}
        >
          <Model
            path="/tesla_2018_model_3/scene.gltf"
            scale={new Array(3).fill(0.013)}
            position={[-4, 0, 0]}
          />
        </BoundingBox>
      </Dragable>

      <group rotation={[0, Math.PI, 0]}>
        <Model
          path="mech_drone/scene.gltf"
          position={[-8, 0, 0]}
          scale={new Array(3).fill(0.01)}
        />
      </group>
    </Suspense>
  );
};

export default Car;
