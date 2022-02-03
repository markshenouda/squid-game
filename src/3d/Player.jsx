import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/player.glb");
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    actions["Take 001"].play();
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <primitive object={nodes._rootJoint} />
          <skinnedMesh
            geometry={nodes.Object001__0.geometry}
            material={materials["Scene_-_Root"]}
            skeleton={nodes.Object001__0.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/player.glb");
