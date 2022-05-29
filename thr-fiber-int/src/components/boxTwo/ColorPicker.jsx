/**
 * 左上角呈现3个不同颜色方块，
 * 点击3维盒子后点击不同的颜色的盒子改变3维盒子颜色
 * */
import React from "react";
import * as THREE from "three";
import state from "../../views/car/config/state";

const sharedStyles = {
  height: 50,
  width: 50,
  borderRadius: "50%",
  cursor: "pointer",
};

const ColorPicker = (props) => {
  /**
   *
   *点击左上角颜色区块，改变所选中盒子的区块颜色
   * @param {*} e
   */
  const handleClick = (e) => {
    if (!state.activeMesh) return;
    state.activeMesh.material.color = new THREE.Color(
      e.target.style.background
    );
  };

  return (
    <div className={"absolute,flex, top-5 left-0, right-0, m-auto, w-fit,z-1"}>
      <div
        onClick={handleClick}
        style={{
          background: "rgb(243, 246, 247)",
          ...sharedStyles,
        }}
      />
      <div
        onClick={handleClick}
        style={{
          background: "black",
          ...sharedStyles,
        }}
      />
      <div
        onClick={handleClick}
        style={{
          background: "red",
          ...sharedStyles,
        }}
      />
      <div
        onClick={handleClick}
        style={{
          background: "rgb(30, 75, 93)",
          ...sharedStyles,
        }}
      />
      <div
        onClick={handleClick}
        style={{
          background: "#000d89",
          ...sharedStyles,
        }}
      />
      <div
        onClick={handleClick}
        style={{
          background: "#175421",
          ...sharedStyles,
        }}
      />
    </div>
  );
};

export default ColorPicker;
