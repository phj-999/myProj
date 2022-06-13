import React, { useCallback, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  AdaptiveDpr,
  AdaptiveEvents,
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Stats,
} from "@react-three/drei";
import {
  Rocket,
  Lights,
  FloorGrid,
  Boxes,
  Effect,
  BackgroundScene,
  HaloRings,
  ControlMenu,
} from "@/components/For-Rocket-Shuttle";
import * as THREE from 'three'

const RocketShuttle = () => {
  const Pposition = useMemo(() => new THREE.Vector3(10,10,10), [])
  const [persPposition,setPersPposition] = useState(Pposition)
  const changeposition = useCallback(
    (pos,camera) => {
      setPersPposition(pos)
      camera.updateProjectionMatrix ()
    },
    [],
  )
  
  return (
    <div className={"box-content w-screen h-screen bg-black"}>
      <Canvas
        dpr={window.devicePixelRatio}
        onCreated={({ camera, gl, scene }) => {
          gl.shadowMap.enabled = true;
        }}
        shadows={true}
      >
        <AdaptiveDpr pixelated />

        {/* 轨道控制 控制器的焦点暂时设为【0，0，0】 */}
        <OrbitControls target={[0, 0.35, 0]} regress />
        {/* 相机默认事件 */}
        <PerspectiveCamera position={persPposition} fov={60} makeDefault />
        <axesHelper args={[5]} />
        <Lights />
        <AdaptiveEvents />
        {/* 将纹理作为渲染道具返回。它使子级在渲染到内部缓冲区时不可见，以便它们不包括在反射中。 */}
        <CubeCamera enablePan={true} resolution={256} frames={Infinity}>
          {(texture) => (
            <>
              <Environment map={texture} />
              <Rocket />
            </>
          )}
        </CubeCamera>
         <BackgroundScene />
        {/* <FloorGround /> */}
        <Boxes />
        <FloorGrid />
        <HaloRings />
        <Environment>
          <ControlMenu Pposition changeposition={changeposition}/>
        </Environment>
        <Stats />
        {/* 效果组件 */}
        <Effect />
      </Canvas>
    </div>
  );
};

export default RocketShuttle;
