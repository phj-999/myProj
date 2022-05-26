import React, { useEffect, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { MeshReflectorMaterial } from "@react-three/drei"; //反射材料 倒影
import { LinearEncoding, RepeatWrapping, TextureLoader } from "three";

const FloorGround = () => {
  // 加载纹理图loader
  const Textur = useRef([]).current

  const [roughness, normal] = useLoader(TextureLoader, [
    process.env.PUBLIC_URL +
      "models_for_carshuttle/textures/terrain-roughness.jpg",
    process.env.PUBLIC_URL +
      "models_for_carshuttle/textures/terrain-normal.jpg",
  ]);

   Textur.push(roughness, normal)

  useEffect(() => {
    // 设置纹理样式
    //console.log(Textur,'Textur');
    Textur.forEach((item) => {
        // 设置阵列模式
        item.wrapS = RepeatWrapping;
        item.wrapT = RepeatWrapping;
        //uv两个方向纹理重复数量
        item.repeat.set(5, 5);
        //纹理偏移效果
        item.offset.set(0, 0);
      });
    Textur[1].encoding=LinearEncoding;
  }, [Textur]);

    useFrame((state, delta) => {
      let t = -state.clock.getElapsedTime() * 0.128;
      Textur[roughness]?.offset.set(0, t % 1);
      Textur[normal]?.offset.set(0, t % 1);
    });

  return (
  <mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow>
      <planeGeometry args={[30, 30]} />
      <MeshReflectorMaterial
        envMapIntensity={0}
        normalMap={Textur[normal]}
        normalScale={[0.15, 0.15]}
        roughnessMap={Textur[roughness]}
        dithering={true}
        color={[0.015, 0.015, 0.015]}
        roughness={0.7}
        blur={[1000, 400]} // 模糊地面反射 (width, heigt), 0 skips blur
        mixBlur={30} // 多少模糊度与表面粗糙度混合在一起 (default = 1)
        mixStrength={80} // 反射的强度
        mixContrast={1} // 反射的对比度
        resolution={1024} // Off-buffer resolution, lower=faster, higher=better quality, slower
        mirror={0} // 镜像环境, 0 = texture colors, 1 = pick up env colors
        depthScale={0.01} // 缩放深度系数 (0 = no depth, default = 0)
        minDepthThreshold={0.9} // 深度纹理插值的下边缘 (default = 0)
        maxDepthThreshold={1} // 深度纹理插值的上边缘 (default = 0)
        depthToBlurRatioBias={0.25} //在计算模糊量之前，给depthTexture添加一个偏置系数[blurFactor = blurTexture * (depthTexture + bias)]。它接受0到1之间的值，默认是0.25。一个大于0的偏置量可以确保模糊纹理不会因为与深度纹理相乘而变得太尖锐。
        debug={0}
        reflectorOffset={0.2} //  对投射反射的虚拟相机进行偏移。当反射面离物体的原点有一定的距离时很有用（默认=0）。
      />
  </mesh>
  )
};

export default FloorGround;
