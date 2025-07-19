import React from 'react'
import { useGLTF } from '@react-three/drei'

export function CupModel(props) {
  const { nodes, materials } = useGLTF('/cupModel.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[0, -Math.PI / 2, 0]}>
          <group position={[2.641, 5.52, 0]}>
            <mesh geometry={nodes.cup_vkusnoitochka_cup_vkusnoitochka_1_0.geometry} material={materials.cup_vkusnoitochka_1} />
            <mesh geometry={nodes.cup_vkusnoitochka_cup_vkusnoitochka_2_cup_up_0.geometry} material={materials.cup_vkusnoitochka_2_cup_up} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/cupModel.glb')
