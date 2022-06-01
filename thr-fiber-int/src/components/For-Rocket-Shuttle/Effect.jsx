import React from "react";
import {
  EffectComposer,
  Bloom,
  ChromaticAberration,
  DepthOfField,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

const Effect = () => {
  return (
    <EffectComposer autoClear>
        {/* 景深效果 */}
      <DepthOfField
        focusDistance={0.0035}
        focalLength={0.01}
        bokehScale={2}
        height={480}
      />
      {/* 光晕效果组件 */}
      <Bloom
        blendFunction={BlendFunction.ADD}
        intensity={1.3} // 强度
        width={300} //渲染宽度
        height={300} //  渲染高度。
        kernelSize={5} // 模糊内核大小
        luminanceThreshold={0.15} //  亮度阈值。
        luminanceSmoothing={0.025} //亮度平滑度
      />
      {/* 色差效果组件 */}
      <ChromaticAberration
        blendFunction={BlendFunction.NORMAL} // 混合模式
        offset={[0.0005, 0.0012]} // color offset
      />
    </EffectComposer>
  );
};

export default Effect;
