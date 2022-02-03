import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import "./App.css";
import { Suspense } from "react";
import Playground from "./3d/Playground";
import Player from "./3d/Player";

function App() {
  return (
    <Canvas
      style={{ position: "absolute" }}
      camera={{ position: [50, 10, 50] }}
    >
      <OrbitControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Playground />
        <Player />
        <Environment preset="park" background />
      </Suspense>
    </Canvas>
  );
}

export default App;
