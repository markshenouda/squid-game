import React, { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model({ run, setPosition, ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/player/scene.gltf");
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    if (run) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [run]);
  const camera = useThree().camera;
  useFrame(() => {
    if (run && props.position[2] < 42) {
      setPosition((p) => [p[0], p[1], p[2] + 0.1]);
      camera.position.set(
        props.position[0],
        props.position[1] + 5,
        props.position[2] - 5
      );
    }
  });
  return (
    <group ref={group} {...props} dispose={null} scale={0.1}>
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

useGLTF.preload("/player/scene.gltf");
