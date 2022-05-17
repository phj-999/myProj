import { Canvas, extend } from "@react-three/fiber";
import * as THREE from "three";
import { Face3, Geometry } from "three/examples/jsm/deprecated/Geometry";
import "./App.css";
//import BoxOne from "./views/box1demo";
import BoxTwo from "./components/boxTwo/Box"; //盒子
import Floor from "./components/boxTwo/Floor";
import Orbit from "./components/boxTwo/Orbit"; //轨道控制器
extend({ Face3, Geometry });

function App() {
  return (
    <>
      {/* <BoxOne /> */}
      <div style={{ height: "100vh", width: "100vw" }}>
        <Canvas camera={{ position: [3, 3, 3] }} style={{ background: "red" }}>
          <ambientLight intensity={0.2}/>
          <pointLight />
          <Orbit />
          <axesHelper args={[5]} />
          <BoxTwo position={[-1, 1, 2]} />
          
          <Floor position={[0,-0.5,0]}/>
        </Canvas>
      </div>
    </>
  );
}

export default App;
