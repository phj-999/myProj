import React, { Suspense } from "react";
import BoundingBox from "../../components/boxTwo/BoundingBox";
import Dragable from "../../components/boxTwo/Dragable";
import Model from "../../components/boxTwo/Model";

const Car = () => {
  return (
    <Suspense fallback={null}>
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
    </Suspense>
  );
};

export default Car;
