import { Canvas, extend } from "@react-three/fiber";
import * as THREE from "three";
import { Face3, Geometry } from "three/examples/jsm/deprecated/Geometry";
import "./App.css";
//import BoxOne from "./views/box1demo";
import BoxTwo from "./components/boxTwo/Box"; //盒子
import Orbit from "./components/boxTwo/Orbit"; //轨道控制器
extend({ Face3, Geometry });

function App() {
  return (
    <>
      {/* <BoxOne /> */}
      <div style={{ height: "100vh", width: "100vw" }}>
        <Canvas camera={{ position: [3, 3, 3] }} style={{ background: "red" }}>
          <axesHelper args={[5]} />
          <BoxTwo position={[-1, 1, 2]} />
          <Orbit />
          <mesh>
            <meshBasicMaterial side={THREE.DoubleSide} />
            <geometry>
              <face3 args={[0, 1, 2]} attachArray="face" />
              <vector3 attachArray="vertices" />
              <vector3 attachArray="vertices" args={[0, 1, 1]} />
              <vector3 attachArray="vertices" args={[0, 1, -1]} />
            </geometry>
          </mesh>
        </Canvas>
      </div>
    </>
  );
}

export default App;
