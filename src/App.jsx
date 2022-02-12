import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import "./App.css";
import { Suspense, useState, useEffect } from "react";
import Playground from "./3d/Playground";
import Player from "./3d/Player";
import Doll from "./3d/Doll";
import Tree from "./3d/Tree";
import MainScreen from "./3d/MainScreen";

function App() {
  const [position, setPosition] = useState([0, 0, -50]);
  const [run, setRun] = useState(false);
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp") {
        setRun(true);
      }
    });
    window.addEventListener("keyup", () => {
      setRun(false);
    });
    window.addEventListener("touchstart", () => {
      setRun(true);
    });
    window.addEventListener("touchend", () => {
      setRun(false);
    });
    return () => {
      window.removeEventListener("keydown");
      window.removeEventListener("keyup");
      window.removeEventListener("touchstart");
      window.removeEventListener("touchend");
    };
  }, []);

  return (
    <Canvas
      style={{ position: "absolute" }}
      camera={{ position: [position[0], position[1] + 5, position[2] - 5] }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <Suspense fallback={null}>
        <Playground />
        <Player position={position} run={run} setPosition={setPosition} />
        <Doll />
        <Tree />
        <Environment
          files={
            "https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/hdris/rooitou/rooitou_park_1k.hdr"
          }
          background
        />
      </Suspense>
      <MainScreen />
    </Canvas>
  );
}

export default App;
