import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useLoader } from "@react-three/fiber";

function Wall(props) {
  const wallTexture = useLoader(
    TextureLoader,

    "/textures/wall.jpeg"
  );
  return (
    <mesh {...props}>
      <planeBufferGeometry attach="geometry" args={[100, 25]} />
      <meshStandardMaterial
        attach="material"
        map={wallTexture}
        metalness={1}
        roughness={1}
      />
    </mesh>
  );
}

export default Wall;
