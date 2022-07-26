import React, { useCallback, useEffect, useMemo, useRef } from "react"
import * as THREE from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Stats from "stats.js"

const WareHouse = () => {
  const scene = useMemo(() => new THREE.Scene(), []) //初始化场景
  const renderer = useMemo(
    () => new THREE.WebGLRenderer({ actialias: true }),
    []
  )
  const camera = useMemo(
    () =>
      new THREE.PerspectiveCamera(),
    []
  )
  const controls = useMemo(
    () => new OrbitControls(camera, renderer.domElement),
    [camera, renderer.domElement]
  )
  const renderRef = useRef()
  const statsRef = useRef()

  // 初始化render
  const RenderTnt = useCallback(
    (currentDom) => {
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setClearColor(0x4682b4, 1.0)
      currentDom.appendChild(renderer.domElement)
    },
    [renderer]
  )

  //初始化相机
  const CameraInit = useCallback((currentdom) => {
    camera.fov=45
    camera.aspect = currentdom.offsetWidth / currentdom.offsetHeight
    camera.near = 1
    camera.far = 1000
    camera.position.set(0, 800, 1500)
    camera.lookAt(new THREE.Vector3(0, 0, 0))
  }, [camera])

  //初始化灯光(平行光+环境光)
  const LightsInit = useCallback(() => {
    //平行光
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
    directionalLight.color.setHSL(0.1, 1, 0.95)
    directionalLight.position.set(0, 200, 0).normalize() //归一化
    //环境光
    const ambientLight = new THREE.AmbientLight(0xffffff, 1)
    ambientLight.position.set(0, 0, 0)
    scene.add(directionalLight, ambientLight)
  }, [scene])

  //stats性能显示
  const StatsInit = useCallback((statsdom) => {
    const stats = new Stats()
    statsdom.appendChild(stats.dom)
  }, [])

  //初始化控制器
  const ControlInit = useCallback(() => {
    controls.target.set(0, 10, 0)
    controls.enableDamping = true
    controls.dampingFactor = 0.1
    controls.minPolarAngle = Math.PI / 12
    controls.maxPolarAngle = (Math.PI * 19) / 40
    //是否可以缩放
    controls.enableZoom = true
    //是否自动旋转
    controls.autoRotate = true
    controls.autoRotateSpeed = 0.5
    //设置相机距离原点的最远距离
    controls.minDistance = 10
    //设置相机距离原点的最远距离
    controls.maxDistance = 200
    //是否开启右键拖拽
    controls.enablePan = true
    controls.update()
  }, [controls])

  const render = useCallback(() => {
    if (renderer && scene && camera) {
      renderer.render(scene, camera)
       //初始化相机
    }
  }, [camera, renderer, scene])

  const animate = useCallback(() => {
    //更新控制器
    render()
    if (controls) {
      controls.update()
    }
    window.requestAnimationFrame(()=>animate())
  }, [controls, render])

  useEffect(() => {
    if (renderRef && renderRef.current) {
      RenderTnt(renderRef.current)
      CameraInit(renderRef.current)
      animate()
    }
    if (scene) {
      LightsInit()
    }
    if (camera) {
      ControlInit()
    }
    StatsInit(statsRef.current)
    return () => {
      cancelAnimationFrame(1)
      renderer.dispose()
    }
  }, [
    CameraInit,
    ControlInit,
    LightsInit,
    RenderTnt,
    StatsInit,
    animate,
    camera,
    renderer,
    scene,
  ])

  return (
    <div>
      <div ref={statsRef} className={"absolute left-0 top-0"} />
      <div ref={renderRef} />
    </div>
  )
}

export default WareHouse
