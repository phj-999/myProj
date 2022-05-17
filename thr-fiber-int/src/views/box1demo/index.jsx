import React from 'react'
import * as THREE from 'three'

const BoxOne = () => {
    const scene = new THREE.Scene() //场景
    //相机
    const camera = new THREE.PerspectiveCamera(  
      75,window.innerWidth / window.innerHeight, 0.1,1000
    );
    const renderer = new THREE.WebGL1Renderer(); //渲染器
    renderer.setSize(Window.innerWidth,Window.innerHeight)
    
    document.body.innerHTML=''
    document.body.appendChild(renderer.domElement)
    
    const geometry = new THREE.BoxGeometry(); // 创建一个3维盒子
    //创建一个材质
    const material = new THREE.MeshBasicMaterial({ 
      color:'blue'
    })
    camera.position.z = 5
    const cube = new THREE.Mesh(geometry,material); //创建一个网格
    scene.add(cube)
   
    //创建动画循环
    function animate() {
      requestAnimationFrame(animate)
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
  
       //执行渲染操作   指定场景、相机作为参数
      renderer.render(scene,camera)
    }
   animate()
   
   window.addEventListener('resize',()=>{
     renderer.setSize(window.innerWidth,window.innerHeight)
     camera.aspect = window.innerWidth / window.innerHeight
     //改变相机的参数后，注意需要执行相机对象
     //.updateProjectionMatrix ()方法更新相机对象的投影矩阵
     camera.updateProjectionMatrix()
   })
  
  return (
    <div>box1</div>
  )
}

export default BoxOne