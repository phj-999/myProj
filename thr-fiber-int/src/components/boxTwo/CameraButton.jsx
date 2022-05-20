/**相机按钮组件，点击切换视角 */

import React from "react";
import state from "../../views/car/config/state";

const style = {
  position: "absolute",
  buttom: "30vh",
  textAlign: "center",
  height: "30px",
  width: "30px",
  borderRadius: "100%",
  fontSize: 20,
  background: "white",
  fontWeight: "bold",
  opacity: 0.7,
  border: "1px solid black",
  zIndex: 1,
};

const CameraButton = (props) => {
  const sets = {
    1: {
      cameraPos: [0, -5, 4],
      target: [4, 0, 0],
      name: 'object001_Material009_0'
    },
    2: {
      cameraPos: [1, 2, 5],
      target: [-4, 0, 0],
      name: 'bonnet_ok_primary_0'
    },
  };
  const handleClick = (num) => {
    state.cameraPos.set(...sets[num].cameraPos);
    state.cameraPos.set(...sets[num].target);
    state.activeMeshName=sets[num].name
    state.shouldUpdate = true;
  };
  return (
    <>
      <button
        onClick={(e) => handleClick(2)}
        style={{
          left: "40vw",
          ...style,
        }}
      >
        {"<"}
      </button>
      <button
        onClick={(e) => handleClick(1)}
        style={{
          right: "40vw",
          ...style,
        }}
      >
        {">"}
      </button>
    </>
  );
};

export default CameraButton;
