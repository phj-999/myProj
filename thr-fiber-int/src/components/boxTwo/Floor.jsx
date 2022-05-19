//地板

import React from 'react'
import { useBox } from 'use-cannon'

const Floor = props => {
  const [ref,api] = useBox(()=>({args:[20,1,10], ...props}))
  return (
    <mesh {...props} receiveshadow ref={ref} >
        <boxBufferGeometry args={[20,1,10]}/>
        <meshPhysicalMaterial />
    </mesh>
  )
}

export default Floor