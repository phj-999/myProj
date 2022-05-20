import React, { useEffect, useRef, useState } from "react";
import { DragControls } from "three/examples/jsm/controls/DragControls";
import { extend, useThree } from "@react-three/fiber";
extend({ DragControls });

const Dragable = (props) => {
  //DragControls在three.js文档中可见有三个参数在构造函数中
  //（object：Array，camera：Camera，domElement：HTMLDOMElement）,所以这里从useThree里面解构出来
  const { camera, gl, scene } = useThree();
  const [children, setChildren] = useState([]);
  const groupRef = useRef();
  const controlsRef = useRef();

  useEffect(() => {
    setChildren(groupRef.current.children);
  }, []);

  //监听鼠标在3D object上的事件
  // hoveron 当指针移动到一个3D Object或者其某个子级上时触发
  // hoveroff 当指针移出一个3D Object时触发。
  useEffect(() => {
    controlsRef.current.addEventListener("hoveron", (e) => {
      scene.orbitControls.enabled = false;
    });
    controlsRef.current.addEventListener("hoveroff", (e) => {
      scene.orbitControls.enabled = true;
    });
    controlsRef.current.addEventListener("dragstart", (e) => {
      e.object.api?.mass.set(0);
      console.log(e.object,'dragstart--e.object');
    });
    controlsRef.current.addEventListener("dragend", (e) => {
      e.object.api?.mass.set(1);
    });
    controlsRef.current.addEventListener("drag", (e) => {
      e.object.api?.position.copy(e.object.position);
      e.object.api?.velocity.set(0, 0, 0);
    });
  }, [children, scene.orbitControls]);

  return (
    <group ref={groupRef}>
      <dragControls
        ref={controlsRef}
        args={[children, camera, gl.domElement]}
        transformGroup={props.transformGroup}
      />
      {props.children}
    </group>
  );
};

export default Dragable;
