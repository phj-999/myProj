import React, { useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

const Car = () => {
  // 此汽车的loader
  const cartexture = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "car/scene.gltf"
  );

  useEffect(() => {
    console.log(cartexture)
    cartexture.scene.scale.set(0.002,0.002,0.002)
    cartexture.scene.position.set(0,-0.2,0)
    cartexture.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
      }
    });
    return () => {
      cartexture.scene.remove()
      console.log('111');
    }
  }, [cartexture])
  
  useFrame((state,delta)=>{
    // console.log(state,'satte');
    // console.log(delta,'delta');
    // 获取自时钟启动后的秒数，同时将 .oldTime 设置为当前时间。
    let t = state.clock.getElapsedTime()
    let object3d = cartexture.scene.children[0].children[0].children[0];
    console.log(object3d);
    object3d.children[0].rotation.x = t * 2;
    object3d.children[2].rotation.x = t * 2;
    object3d.children[4].rotation.x = t * 2;
    object3d.children[6].rotation.x = t * 2;

  })

  return <primitive  dispose={null} position={[0,0,0]} scale={[0.002,0.002,0.002]} object={cartexture.scene}>Car</primitive>;
};

export default Car;
