import { Html, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export function Loader () {
  const {  progress } = useProgress()
  return (
    <Canvas>
      <Html center>
      {progress} % loaded
      </Html>
    </Canvas>
  );
}
