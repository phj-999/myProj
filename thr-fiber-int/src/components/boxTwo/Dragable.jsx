import React, { useEffect, useRef, useState } from "react";
import { DragControls } from "three/examples/jsm/controls/DragControls";
import { extend, useThree } from "@react-three/fiber";
extend({ DragControls });

const Dragable = (props) => {
  //DragControls在three.js文档中可见有三个参数在构造函数中
  //（object：Array，camera：Camera，domElement：HTMLDOMElement）,所以这里从useThree里面解构出来
  const { camera, gl } = useThree();
  const [children, setChildren] = useState([]);
  const groupRef = useRef();
  useEffect(() => {
    setChildren(groupRef.current.children);
  }, []);

  return (
    <group ref={groupRef}>
      <dragControls args={[children, camera, gl.domElement]} />
      {props.children}
    </group>
  );
};

export default Dragable;
