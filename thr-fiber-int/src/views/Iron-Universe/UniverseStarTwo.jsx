import React, { useCallback, useEffect, useRef } from "react";
import * as THREE from "three";
import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader'

import "./index.css";

const UniverseStarTwo = () => {
  const Body = useRef();
  //const Scene =  new THREE.Scene() 这样每次都会实例化一次 重复渲染浪费性能
  const Scene = useRef(new THREE.Scene()).current; //场景
  const Camera = useRef(new THREE.PerspectiveCamera()).current; //相机
  const Render = useRef(new THREE.WebGLRenderer({ actialias: true })).current; // 渲染器

  const Meshs = useRef([]).current; // 存储3d Object物体
  const id = useRef(null);
  const Lights = useRef([]).current; //存储灯光
  const IsDown = useRef(false); //记录鼠标是否按下，用于控制页面移动
  const PI = useRef(100); //camera的半径 控制相机的距离
  const R = useRef(90); //初始的角度，物体在正前方，跟我们视角是90度
  const Floor = useRef(null); //存储地板

  const loaderFbx = useCallback(
    () => {
      const loader = new FBXLoader()
      loader.setPath('/Iron_man/')
      loader.load('gtx.fbx',function(object){
          //console.log(obj,'loaderFbx');
          object.position.set(0,0,0)
          object.scale.set(0.1,0.1,0.1)
          //Meshs.push(object)
          Scene.add(object)
      })
    },
    [],
  )
  

  /**灯光 */
  const createLight = () => {
    // 平行光（太阳光）--直射
    const dirLight = new THREE.DirectionalLight("#ffc773", 1);
    dirLight.position.set(0, 0, 2000);
    dirLight.castShadow = true; //平行光配置阴影就行了 环境光不需要
    // 投影显示范围
    dirLight.shadow.camera.top = -10;
    dirLight.shadow.camera.bottom = 10;
    dirLight.shadow.camera.right = -10;
    dirLight.shadow.camera.left = 10;
    // 把阴影变清晰(比较费性能)
    dirLight.shadow.mapSize.width = 2000;
    dirLight.shadow.mapSize.height = 2000;
    // 环境光
    const amLight = new THREE.AmbientLight("#ff9f43", 0.5);
    // 点光源
    // const point = new THREE.PointLight("#cd84f1", 4, 6);
    // point.position.set(0, 5, 0);
    Scene.add(
      dirLight,
      //point,
      amLight
    );
    Lights.push(
      dirLight,
      //point,
      amLight
    );
  };

  /**创建星球和星云几何体*/
//   const createStar = useCallback((x, y, z, color) => {
//     const width = Math.random() * 2;
//     //球体
//     const BallGeometry = new THREE.SphereBufferGeometry(width, 64, 64);
//     //圆环
//     const RingGeometry = new THREE.RingGeometry(
//       width + 0.3,
//       width + 0.3 + width * 0.5,
//       64
//     );

//     //材质
//     const phong = new THREE.MeshPhongMaterial({ color }); //phong材质 用于球体
//     const lambert = new THREE.MeshLambertMaterial({
//       color: "#fff",
//       side: THREE.DoubleSide,
//     }); //lamber材质 用于圆环
//     const Ballmesh = new THREE.Mesh(BallGeometry, phong); //星球
//     const Ringmesh = new THREE.Mesh(RingGeometry, lambert); //星球

//     //位置
//     Ballmesh.position.set(x, y, z); //星球
//     Ringmesh.position.set(x, y, z); //星云

//     //旋转星云
//     Ringmesh.rotation.x = (-90 * 180) / Math.PI;
//     // add
//     // Scene.add(Ballmesh, Ringmesh);
//     // Meshs.push(Ballmesh, Ringmesh)
//     //有两个mesh，上面太麻烦 所以用组group添加
//     const group = new THREE.Group();
//     group.add(Ballmesh, Ringmesh);
//     Scene.add(group);
//   }, []);

  /** 创建地板 floor*/
  const createFloor = useCallback(() => {
    // 平面几何
    const plane = new THREE.PlaneBufferGeometry(40, 30);
    //材质：一种非光泽表面的材质，没有镜面高光。
    const lambert = new THREE.MeshLambertMaterial({ color: "white",side:THREE.DoubleSide });
    const mesh = new THREE.Mesh(plane, lambert);
    //阴影
    mesh.castShadow = true; //是否被渲染到阴影贴图中
    mesh.receiveShadow = true; //材质是否接受阴影
    mesh.position.set(0, 0, 0);
    //此时是竖在页面， 需要旋转
    mesh.rotation.x = (-90 / 180) * Math.PI;
    Scene.add(mesh);
    Floor.current = mesh;
  }, [Scene]);

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

  /**
   * 点击事件
   * 点击随机生成方块
   */
  const handleClick = useCallback(() => {
    //const array = Array.of(createLine, createLambert, createPhong);
    const index = Math.floor(Math.random() * 3);
    const x = 30 - Math.random() * 60;
    const y = 5 - Math.random() * 10;
    const z = 30 - Math.random() * 60;
    const color = new THREE.Color(Math.random(), Math.random(), Math.random());
    //const linenum = index === 0 ? Math.ceil(Math.random() * 10000) : 0;
    //array[index](x, y, z, color, linenum);
    //createStar(x, y, z, color);
  }, []);

  /** 渲染器部分配置+相机参数设计 */
  const init = useCallback(() => {
    //渲染器尺寸
    Render.setSize(Body.current.offsetWidth, Body.current.offsetHeight);
    Render.shadowMap.enabled = true; //开启阴影
    //导入的3d模型太模糊：原因是因为高分屏显示像素是不像我们的普通屏幕，要设置成我们电脑的像素配置才不模糊
    Render.setPixelRatio(window.devicePixelRatio)
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
    // Meshs.forEach((item) => {
    //   // 旋转and速度  x轴
    //   item.rotation.x += (0.5 / 180) * Math.PI; //角度/180 * Math.PI
    //   // y轴
    //   item.rotation.y += (0.5 / 180) * Math.PI;
    // });
    // 要重复的把相机拍到的东西通过渲染器输出到页面，所以要用到requestAnimationFrame
    id.current = window.requestAnimationFrame(() => {
      renderScene();
    });
    console.log("Camera, Render, Scene");
  }, [Render, Meshs]);
  /**
   * 浏览器窗口变化时候的监听函数
   * */
  const setView = () => {
    Render.setSize(document.body.clientWidth, document.body.clientHeight);
    Camera.aspect = Body.current.offsetWidth / Body.current.offsetHeight;
    Camera.updateProjectionMatrix(); //更新矩阵
  };
  //执行
  useEffect(() => {
    Body.current.append(Render.domElement); //body元素中插入canvas对象
    init();
    createLight(); //灯光
    createFloor(); //平面地板
    loaderFbx();
    renderScene();
    document.addEventListener("resize", setView);
    console.log("渲染执行");
    // 销毁 避免热更新一直渲染
    return () => {
      cancelAnimationFrame(id.current); //保证不会重复回调
      document.addEventListener("resize", setView);
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
      Floor.current && Scene.remove(Floor.current); //销毁地板
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
      onClick={handleClick}
    ></div>
  );
};

export default UniverseStarTwo;
