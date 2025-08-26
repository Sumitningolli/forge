"use client";

import React, { useEffect } from 'react';
import type { JSX } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export function Model(props: JSX.IntrinsicElements['group']) {
  const gltf = useGLTF('/3d-model.glb') as any;

  useEffect(() => {
    useGLTF.preload('/3d-model.glb');
  }, []);

  return (
    <group {...props} dispose={null}>
      {gltf?.scene ? <primitive object={gltf.scene} /> : null}
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


