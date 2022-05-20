//地板

import React from 'react'
import { useBox } from '@react-three/cannon'

const Floor = props => {
  const [ref,api] = useBox(()=>({args:[20,1,10], ...props}))
  return (
    <mesh {...props} receiveshadow ref={ref} >
        <boxBufferGeometry args={[50,0.7,50]}/>
        <meshPhysicalMaterial  color={'black'} transparent opacity={1} />
    </mesh>
  )
}

export default Floor