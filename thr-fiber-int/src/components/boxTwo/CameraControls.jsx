import React from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import state from "../../state";

const CameraControls = (props) => {
  //const vec = new THREE.Vector3() config/state里面直接用了，所以这里不用这个

  useFrame(({ camera, scene }) => {
    if (state.activeMesh?.name !== state.activeMeshName) {
      state.activeMesh = scene.getObjectByName(state.activeMeshName || {})
    }
    // 如果相机位置 ！= 原来状态
    if (state.shouldUpdate) {
      //.lerp ( v : Vector3, alpha : Float ) : this
      //v - 朝着进行插值的Vector3。
      //alpha - 插值因数，其范围在[0, 1]闭区间。

      camera.position.lerp(state.cameraPos, 0.1);
      scene.orbitControls.target.lerp(state.target, 0.1);
      scene.orbitControls.update();
      const diff = camera.position.clone().sub(state.cameraPos).length();
      if (diff < 0.1) {
        state.shouldUpdate = false;
      }
    }
  });

  return null;
};

export default CameraControls;
