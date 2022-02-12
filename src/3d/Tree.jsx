import { useGLTF } from "@react-three/drei";

function Tree() {
  const { scene } = useGLTF("/tree.gltf");
  return <primitive object={scene} scale={4} position={[0, 0, 47]} />;
}

useGLTF.preload("/tree.gltf");

export default Tree;
