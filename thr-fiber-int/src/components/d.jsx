<Canvas>
        {/* 轨道控制 控制器的焦点暂时设为【0，0，0】 */}
        <OrbitControls targrt={[0, 0, 0]} />
        {/* 相机默认事件 */}
        <PerspectiveCamera position={[3, 2, 5]} fov={50} makeDefault />
        <mesh position={[0,0,0]}>
          <boxBufferGeometry args={[1, 1, 1]}/>
          <meshBasicMaterial />
        </mesh>
      </Canvas>