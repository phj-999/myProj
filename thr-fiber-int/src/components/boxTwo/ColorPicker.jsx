 /**
  * 左上角呈现3个不同颜色方块， 
  * 点击3维盒子后点击不同的颜色的盒子改变3维盒子颜色
  * */
import React from "react";
import * as THREE from "three";

const ColorPicker = (props) => {
  /**
   *
   *点击左上角颜色区块，改变所选中盒子的区块颜色
   * @param {*} e
   */
  const handleClick = (e) => {
    if (!window.activeMesh) {
      return;
    } else {
      window.activeMesh.material.color = new THREE.Color(
        e.target.style.background
      );
    }
  };

  return (
    <div style={{ position: "absolute", zIndex: 1 }}>
      <div
        onClick={handleClick}
        style={{ background: "blue", height: 50, width: 50 }}
      ></div>
      <div
        onClick={handleClick}
        style={{ background: "yellow", height: 50, width: 50 }}
      ></div>
      <div
        onClick={handleClick}
        style={{ background: "white", height: 50, width: 50 }}
      ></div>
    </div>
  );
};

export default ColorPicker;
