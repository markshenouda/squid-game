import { useGLTF, useAnimations } from "@react-three/drei";

function Player2() {
  const { nodes, materials, animations } = useGLTF("/player.glb");
  const { actions } = useAnimations(animations, group);
  console.log(nodes);
  return <group></group>;
}

export default Player2;
