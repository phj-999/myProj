import React, { useEffect, useState, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { useSpring, animated, config } from "@react-spring/three";

const Rocket = () => {
  const rocketRef = useRef([]).current;
  const rotateyRef = useRef(new THREE.Vector3(0, 1, 0)).current;
  const rocket = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL +
      "models_for_rocketshuttle/falcon_9_spacex_rocket/scene.gltf"
    // (xhr) => {
    //   console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    // }
  );
  const { nodes, materials } = rocket;
  const [active, setActive] = useState(true);

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
      console.log("111");
    };
  }, [rocket, rocketRef, rotateyRef]);

  const props = useSpring({
    position:active?[0, 0, -4]:[0, 0, 8],
    config: config.molasses, //{ mass: 1, tension: 280, friction: 120 }
  });

  return (
    <animated.group
      dispose={null}
      position={props.position}
      onClick={(event) => {
        setActive(!active);
      }}
    >
      <primitive object={rocket.scene} />
    </animated.group>
  );
};

export default Rocket;
