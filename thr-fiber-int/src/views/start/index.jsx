import React, { useCallback, useEffect, useRef } from "react";
import * as THREE from "three";

import "./index.css";

const Start = () => {
  const Body = useRef();
  //const Scene =  new THREE.Scene() 这样每次都会实例化一次 重复渲染浪费性能
  const Scene = useRef(new THREE.Scene()).current; //场景
  const Camera = useRef(new THREE.PerspectiveCamera()).current; //相机
  const Render = useRef(new THREE.WebGLRenderer({ actialias: true })).current; // 渲染器
  const Meshs = useRef([]).current; // 物体
  const id = useRef(null);
  const Lights = useRef([]).current;
  const IsDown = useRef(false); //记录鼠标是否按下，用于控制页面移动
  const PI = useRef(15); //camera的半径
  const R = useRef(90); //初始的角度，物体在正前方，跟我们视角是90度
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

  /**创建线条几何体 */
  const createLine = useCallback(() => {
    // 线条材质
    const lineMater = new THREE.LineBasicMaterial({
      vertexColors: true,
    });
    // 几何体
    const geomatry = new THREE.BufferGeometry();
    const color = new THREE.Color();

    let vertices = [];
    let color1 = [];

    for (let i = 0; i < 8000; i++) {
      const x = Math.random() * 2 - 1;
      const y = Math.random() * 2 - 1;
      const z = Math.random() * 2 - 1;
      //geomatry.vertics.push(new THREE.Vector3(x, y, z));
      vertices.push(x, y, z);
      //geomatry.colors.push(Math.random(), Math.random(), Math.random());
      color.setHSL(Math.random(), Math.random(), Math.random());
      color1.push(color.r, color.g, color.b);
    }
    geomatry.setFromPoints(vertices);

    geomatry.setAttribute(
      "position",

      new THREE.Float32BufferAttribute(vertices, 3)
    );

    geomatry.setAttribute("color", new THREE.Float32BufferAttribute(color1, 3));
    const mesh = new THREE.Line(geomatry, lineMater);
    mesh.position.set(4, 0, 0);
    Scene.add(mesh);
    Meshs.push(mesh);
  }, []);

  /**创建lambert材质立方体 */
  const createLambert = useCallback(() => {
    //几何体
    const react = new THREE.BoxBufferGeometry(2, 2, 2);
    //材质
    const lambert = new THREE.MeshLambertMaterial({
      color: "white",
      side: THREE.DoubleSide, //两面可见
    });
    //网格
    const mesh = new THREE.Mesh(react, lambert);
    //var a = new THREE.Vector3(-4, 0, 0);
    mesh.position.set(-4, 0, 0);
    Scene.add(mesh);
    Meshs.push(mesh);
    // console.log(32323);
  }, [Scene]);

  /**MeshPhongMaterial材质球形状几何体*/
  const createPhong = useCallback(() => {
    const rect = new THREE.SphereGeometry(2, 32, 16); //球形几合体
    const phong = new THREE.MeshPhongMaterial({ color: "#ffcccc" }); //材质
    const mesh = new THREE.Mesh(rect, phong); //网格
    mesh.position.set(-8, 0, 0);
    Scene.add(mesh);
    Meshs.push(mesh);
  }, [Scene]);

  /**灯光 */
  const createLight = () => {
    // 平行光（太阳光）--直射
    // const dirLight = new THREE.DirectionalLight("#48dbfb", 1);
    // dirLight.position.set(100, 200, 200);
    // 环境光
    const amLight = new THREE.AmbientLight("#ff9f43", 0.5);
    // 点光源
    const point = new THREE.PointLight("#cd84f1", 4, 6);
    point.position.set(0, 5, 0);
    Scene.add(
      //dirLight,
      point,
      amLight
    );
    Lights.push(
      //dirLight,
      point,
      amLight
    );
  };

  /**鼠标事件-按下 */
  const down = useCallback(() => {
    IsDown.current = true;
  }, []);
  /**鼠标事件-抬起 */
  const up = useCallback(() => {
    IsDown.current = false;
  }, []);
  /**鼠标事件-移动--相机控制 */
  const move = useCallback((e) => {
    if (IsDown.current === false) return;
    //console.log(e,'e---move',Camera.position);
    R.current -= e.movementX * 0.5; //鼠标左右移动对角度自减
    // 重新设置相机位置，相机在XOY平面绕着坐标原点旋转运动
    const x = PI.current * Math.cos((R.current / 180) * Math.PI);
    const y = Camera.position.y + e.movementY * 0.1;
    const z = PI.current * Math.sin((R.current / 180) * Math.PI);

    Camera.position.set(x, y, z);

    // 相机位置改变后，注意执行.looAt()方法重新计算视图矩阵旋转部分
    // 如果不执行.looAt()方法，相当于相机镜头方向保持在首次执行`.lookAt()`的时候
    Camera.lookAt(0, 0, 0);
  }, []);

  /**鼠标滚轮事件---相机控制功能--缩放功能 */
  const wheel = useCallback((e) => {
    // console.log(e,'滚动滑轮');
    //判断滚轮方向 >0 滑轮向上 半径要自增 否则就是向下 半径自减
    if (e.deltaY > 0) PI.current += 1;
    else PI.current -= 1;
    // 半径变化 角度如果旋转果 要重新获取xy轴
    const x = PI.current * Math.cos((R.current / 180) * Math.PI);
    const y = Camera.position.y; //滑轮滚动默认y轴不变
    const z = PI.current * Math.sin((R.current / 180) * Math.PI);

    Camera.position.set(x, y, z);
    Camera.lookAt(0, 0, 0);
  }, []);

  /** 渲染 */
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

    //设置相机位置(眼睛位置或者说相机篇拍照位置
    Camera.position.set(0, 3, PI.current); //相机位置
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
    id.current = window.requestAnimationFrame(() => {
      renderScene();
    });
    console.log("Camera, Render, Scene");
  }, [Render, Meshs]);

  //执行
  useEffect(() => {
    Body.current.append(Render.domElement); //body元素中插入canvas对象
    init();
    createLight(); //灯光
    creatReact();
    createLine(); //创建线条几何体
    createLambert(); //创建第二个盒子
    createPhong(); //球形几何体
    renderScene();
    console.log("渲染执行");
    // 销毁 避免热更新一直渲染
    return () => {
      cancelAnimationFrame(id.current); //保证不会重复回调
      Meshs.forEach((item) => {
        Scene.remove(item);
        item.geometry.dispose(); //废弃几何体
        item.material.dispose(); //废弃材质
      });
      Lights.forEach((item) => {
        Scene.remove(item);
        item.dispose();
        console.log("lights 销毁");
      });
      Render.dispose();
      //Scene.dispose()
    };
  }, []);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
      }}
      ref={Body}
      onMouseUp={up}
      onMouseDown={down}
      onMouseMove={move}
      onWheel={wheel}
    ></div>
  );
};

export default Start;
