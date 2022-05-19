import * as THREE from "three";

const state = {
  activeMesh: null,
  cameraPos: new THREE.Vector3(7, 7, 7), //也可以用new THREE.Vector3的形式写
  target: new THREE.Vector3(4, 0, 0),
  shouldUpdate: false,
};

export default state;
