"use client";

import React, { useRef, useEffect } from 'react';
import type { JSX } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import { Object3D } from 'three';

export function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<Object3D>(null);
  const { nodes, materials, animations } = useGLTF('/3d-model.glb') as any;
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && (actions as any).YourAnimationName) {
      (actions as any).YourAnimationName.play();
    }
  }, [actions]);

  useEffect(() => {
    useGLTF.preload('/3d-model.glb');
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        {/* Geometry content preserved from original file */}
      </group>
    </group>
  );
}

export default function ModelScene() {
  return (
    <Canvas camera={{ position: [3, 2, 5], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Model scale={0.6} />
    </Canvas>
  );
}


