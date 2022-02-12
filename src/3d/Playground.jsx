import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useLoader } from "@react-three/fiber";
import Wall from "./Wall";

function Playground() {
  const planeTexture = useLoader(TextureLoader, "/textures/plane.jpeg");
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeBufferGeometry attach="geometry" args={[100, 100]} />
        <meshStandardMaterial attach="material" map={planeTexture} />
      </mesh>
      <mesh rotation={[-Math.PI, 0, 0]} position={[0, 0.1, 40]}>
        <planeBufferGeometry attach="geometry" args={[100, 0.1]} />
        <meshBasicMaterial attach="material" color="red" />
      </mesh>
      <Wall position={[0, 12.5, -50]} />
      <Wall position={[0, 12.5, 50]} rotation={[0, Math.PI, 0]} />
      <Wall position={[50, 12.5, 0]} rotation={[0, -Math.PI / 2, 0]} />
      <Wall position={[-50, 12.5, 0]} rotation={[0, Math.PI / 2, 0]} />
    </group>
  );
}

export default Playground;
