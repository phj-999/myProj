//地板

import React from 'react'
import { useBox } from '@react-three/cannon'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'

const Floor = props => {
  const [ref,api] = useBox(()=>({args:[40,1,50], ...props}))
  const texture = useLoader(THREE.TextureLoader, '/threebox/wood.jpg')

  return (
    <mesh {...props} receiveshadow ref={ref} >
        <boxBufferGeometry args={[50,0.7,50]}/>
        <meshPhysicalMaterial transparent opacity={0.5} map={texture} />
    </mesh>
  )
}

export default Floor