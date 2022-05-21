import React, { useCallback, useEffect, useRef } from "react";
import * as THREE from "three";

import "./index.css";

const Start = () => {
  const Body = useRef();
  //const Scene =  new THREE.Scene() 这样每次都会实例化一次 重复渲染浪费性能
  const Scene = useRef(new THREE.Scene()).current; //场景
  const Camera = useRef(new THREE.PerspectiveCamera()).current; //相机
  const Render = useRef(new THREE.WebGL1Renderer({ actialias: true })).current; // 渲染器
  const Meshs = useRef([]).current; // 物体

  /**
   * 创建网格模型
   */
  const creatReact = useCallback(() => {
    // //创建一个球体几何对象
    const react = new THREE.BoxBufferGeometry(2, 2, 2);
    // 材质
    const mashBasicMaster = new THREE.MeshBasicMaterial({ color: "red" });
    // 网格
    const mesh = new THREE.Mesh(react, mashBasicMaster);
    mesh.position.set(0, 0, 0);
    Scene.add(mesh); ////网格模型添加到场景中
    Meshs.push(mesh); // 方便调用
  }, [Scene]);

  const init = useCallback(() => {
    //渲染器尺寸
    Render.setSize(Body.current.offsetWidth, Body.current.offsetHeight);
    // 设计相机参数
    /**PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )
       fov — 摄像机视锥体垂直视野角度
       aspect — 摄像机视锥体长宽比
       near — 摄像机视锥体近端面
       far — 摄像机视锥体远端面
    */
    Camera.fov = 45;
    Camera.aspect = Body.current.offsetWidth / Body.current.offsetHeight;
    Camera.near = 1;
    Camera.far = 1000;
    Camera.position.set(0, 10, 20); //相机位置
    Camera.lookAt(0, 0, 0); //设置相机方向
    // 相机参数动态设置完 必须调用此参数才可以更新
    Camera.updateProjectionMatrix();
    console.log("Render, Camera参数");
  }, [Render, Body]);

  //渲染画面函数
  const renderScene = useCallback(() => {
    //执行渲染操作   指定场景、相机作为参数
    Render.render(Scene, Camera);
    Meshs.forEach((item) => {
      // 旋转and速度  x轴
      item.rotation.x += (0.5 / 180) * Math.PI; //角度/180 * Math.PI
      // y轴
      item.rotation.y += (0.5 / 180) * Math.PI;
    });
    // 要重复的把相机拍到的东西通过渲染器输出到页面，所以要用到requestAnimationFrame
    window.requestAnimationFrame(() => {
      renderScene();
    });
    console.log("Camera, Render, Scene");
  }, [Render, Meshs]);

  //执行
  useEffect(() => {
    Body.current.append(Render.domElement); //body元素中插入canvas对象
    init();
    creatReact();
    renderScene();
    console.log("渲染执行");
  }, []);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
      }}
      ref={Body}
    ></div>
  );
};

export default Start;
