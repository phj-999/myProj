import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useBox } from "use-cannon";

/**
 *state中是如下api
 *advance, camera, clock, events, get, gl, internal
 *invalidate, mouse, onPointerMissed, performance
 * raycaster, scene, set, setEvents, setFrameloop
 * viewport, xr,  pointer, setSize
 */
const BoxTwo = (props) => {
  //mass重力
  const [ref, api] = useBox(() => ({ mass: 1, ...props }));

  const texture = useLoader(THREE.TextureLoader, "/threebox/wood.jpg");
  useFrame((state) => {
    //   console.log(state);
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  const handlePointerDown = (e) => {
    e.object.active = true; // 选中的活动状态为true
    if (window.activeMesh) {
      window.activeMesh.active = false; //网格的活动状态为false
      scaleDown(window.activeMesh);
    }
    window.activeMesh = e.object;
  };
  const handlePointeEnter = (e) => {
    e.object.scale.x = 1.5;
    e.object.scale.y = 1.5;
    e.object.scale.z = 1.5;
  };
  const handlePointeLeave = (e) => {
    if (!e.object.active) {
      scaleDown(e.object);
    }
  };
  /**
   *缩放功能，用于选中一个盒子，另一个盒子缩放的调用
   */
  const scaleDown = (object) => {
    object.scale.x = 1;
    object.scale.y = 1;
    object.scale.z = 1;
  };

  return (
    <mesh
      ref={ref}
      api={api}
      {...props}
      castShadow
      //receiveShadow
      onPointerDown={handlePointerDown}
      onPointerEnter={handlePointeEnter}
      onPointerLeave={handlePointeLeave}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      {/* <sphereBufferGeometry args={[1, 100, 100]} /> */}
      <meshBasicMaterial
        // opacity={0.7}
        // transparent
        // color={"white"}
        // fog={"false"}
        // roughness={0}
        // clearcoat={1}
        // transmission={0.5}
        // reflectivity={1}
        //side={THREE.DoubleSide}
        map={texture}
      />
    </mesh>
  );
};

export default BoxTwo;
