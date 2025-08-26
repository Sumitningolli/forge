"use client";

import React, { useRef, useEffect } from 'react';
import type { JSX } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { Object3D } from 'three';

export function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<Object3D>(null);
  const { nodes, materials, animations } = useGLTF('/3d-model.glb') as any;
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && actions.YourAnimationName) {
      actions.YourAnimationName.play();
    }
  }, [actions]);

  // Preload the GLB only on the client to avoid prerender errors
  useEffect(() => {
    useGLTF.preload('/3d-model.glb');
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="korpus__0003" rotation={[0, -1.571, 0]}>
          <mesh
            name="korpus__0001_1"
            castShadow
            receiveShadow
            geometry={nodes.korpus__0001_1.geometry}
            material={materials['Scene_-_Root.001']}
          />
          <mesh
            name="korpus__0001_2"
            castShadow
            receiveShadow
            geometry={nodes.korpus__0001_2.geometry}
            material={materials['Material.001']}
          />
          <mesh
            name="korpus__0001_3"
            castShadow
            receiveShadow
            geometry={nodes.korpus__0001_3.geometry}
            material={materials['Metal scratched.001']}
          />
          <mesh
            name="korpus__0001_4"
            castShadow
            receiveShadow
            geometry={nodes.korpus__0001_4.geometry}
            material={materials['Material.002']}
          />
          <mesh
            name="Computer_Fan_Blades002"
            castShadow
            receiveShadow
            geometry={nodes.Computer_Fan_Blades002.geometry}
            material={materials['PCFanBlade.001']}
            position={[0, -0.024, 1.469]}
            rotation={[Math.PI / 2, 1.372, 0]}
          />
          <group name="korpus__0001">
            <mesh
              name="korpus__0002"
              castShadow
              receiveShadow
              geometry={nodes.korpus__0002.geometry}
              material={materials['Scene_-_Root.001']}
            />
            <mesh
              name="korpus__0002_1"
              castShadow
              receiveShadow
              geometry={nodes.korpus__0002_1.geometry}
              material={materials['Material.002']}
            />
            <mesh
              name="korpus__0002_2"
              castShadow
              receiveShadow
              geometry={nodes.korpus__0002_2.geometry}
              material={materials.Motor_mat}
            />
          </group>
          <group
            name="Motor_close_Motor_mat_0"
            position={[0, -0.023, 0.083]}
            rotation={[0, 1.571, 0]}
            scale={0.044}>
            <mesh
              name="Motor_close_Motor_mat_0001"
              castShadow
              receiveShadow
              geometry={nodes.Motor_close_Motor_mat_0001.geometry}
              material={materials.Motor_mat}
            />
            <mesh
              name="Motor_close_Motor_mat_0001_1"
              castShadow
              receiveShadow
              geometry={nodes.Motor_close_Motor_mat_0001_1.geometry}
              material={materials['Material.001']}
            />
            <group
              name="Radial_ball_bearing_type_1000088"
              position={[-21.466, -0.021, -0.009]}
              rotation={[0, 1.571, 0]}
              scale={0.597}>
              <mesh
                name="1000088"
                castShadow
                receiveShadow
                geometry={nodes['1000088'].geometry}
                material={materials['Material_steel_chrome.001']}
              />
              <mesh
                name="1000088_1"
                castShadow
                receiveShadow
                geometry={nodes['1000088_1'].geometry}
                material={materials['Material.003']}
              />
            </group>
          </group>
        </group>

        <mesh
          name="Plane007"
          castShadow
          receiveShadow
          geometry={nodes.Plane007.geometry}
          material={materials['Material.011']}
          position={[0.367, 0.609, 0.96]}
        />
        <group name="Empty" position={[1.116, -0.712, 0.992]} scale={0.753}>
          <mesh
            name="NurbsPath"
            castShadow
            receiveShadow
            geometry={nodes.NurbsPath.geometry}
            material={materials['Material.009']}
            position={[0, -0.459, 0.003]}
          />
          <mesh
            name="Plane"
            castShadow
            receiveShadow
            geometry={nodes.Plane.geometry}
            material={materials['Material.008']}
            position={[-1.148, -0.519, 0.009]}
          />
        </group>
      </group>
    </group>
  );
}

export default Model;
