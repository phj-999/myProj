import React, { useEffect, useCallback, useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { useSpring, animated, config } from "@react-spring/three";
import { useRocket } from "@/store/store";
import HtmlModel from "../htmlText/HtmlModel";

const Rocket = () => {
  const rocketRef = useRef([]).current;
  const rotateyRef = useRef(new THREE.Vector3(0, 1, 0)).current;
  const rocketRef2 = useRef(); //控制火箭抖动的ref
  const rocketSelfRef = useRef(); //控制火箭抖动的
  const { active } = useRocket((state) => state.rocketState); //用于控制rocket位置
  const [hoveredhead, setHoveredhead] = useState(false); //鼠标经过状态
  const [hoveredbody, sethoveredBody] = useState(false);
  const rocket = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL +
      "models_for_rocketshuttle/falcon_9_spacex_rocket/scene.gltf"
  );
  /**
   * 鼠标划过
   */
  const hover = useCallback(async (event) => {
    await event.stopPropagation();
    await event.object.material.color.set("#FFD700");
    if (event.object.name === "Cylinder001_fairing_0") setHoveredhead(true);
    if (event.object.name === "Cylinder_body_0") sethoveredBody(true);
  }, []);

  /**
   * 鼠标划出
   */
  const unhover = useCallback(async (event) => {
    setHoveredhead(false);
    sethoveredBody(false);
    await event.stopPropagation();
    await event.object.material.color.set("#FFFFFF");
  }, []);

  useEffect(() => {
    try {
      if (rocket) {
        rocketRef.push(rocket);
      }
      console.log(rocketRef);
      rocketRef[0].scene.scale.set(0.005, 0.005, 0.005);

      rocketRef[0].scene.rotation.set(1.5, 0, 0); //变成横的
      rocketRef[0].scene.rotateOnAxis(rotateyRef, 90); //绕自身旋转到字体正面显示
      // rocketRef[0].scene.position.set(0, 0, -4);
      rocketRef[0].scene.updateMatrix();
    } catch (error) {
      console.error();
    }

    return () => {
      rocket.scene.remove();
      rocket.scene.dispose();
    };
  }, [rocket, rocketRef, rotateyRef]);

  const props = useSpring({
    position: active ? [0, 0, -4] : [0, 0, 8],
    config: config.molasses, //{ mass: 1, tension: 280, friction: 120 }
  });

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    rocketRef2.current.rotation.y = Math.sin((2 * t) / 4) / 5;
    rocketRef2.current.rotation.z = (1 + Math.sin((2 * t) / 1.5)) / 20;
    rocketRef2.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  });

  return (
    <animated.group
      ref={rocketRef2}
      dispose={null}
      position={props.position}
      onPointerOver={hover}
      onPointerOut={unhover}
    >
      <primitive ref={rocketSelfRef} object={rocket.scene} />
      <HtmlModel
        distanceFactor={12}
        position={[0, 4, 6.5]}
        transform
        occlude={[rocketSelfRef]}
      >
        s p a c e X
      </HtmlModel>
      {hoveredhead && (
        <HtmlModel
          distanceFactor={12}
          rotation-y={Math.PI / 4}
          rotation-x={-Math.PI / 6}
          position={[-2, 2.4, 11]}
          transform
        >
          火箭头部
        </HtmlModel>
      )}
      {hoveredbody && (
        <HtmlModel
          distanceFactor={12}
          rotation-y={Math.PI / 4}
          rotation-x={-Math.PI / 6}
          position={[-1, -3, 8]}
          transform
        >
          火箭躯体
        </HtmlModel>
      )}
    </animated.group>
  );
};

export default Rocket;

useLoader.preload(
  GLTFLoader,
  process.env.PUBLIC_URL +
    "models_for_rocketshuttle/falcon_9_spacex_rocket/scene.gltf"
);
