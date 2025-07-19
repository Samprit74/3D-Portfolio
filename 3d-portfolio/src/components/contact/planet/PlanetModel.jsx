// src/components/contact/planet/PlanetModel.jsx
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function PlanetModel(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/planetModel.glb')

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-1.54, -0.064, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Clouds_1">
                <mesh geometry={nodes.Object_4.geometry} material={materials.Clouds} />
              </group>
              <group name="Planet_2">
                <mesh geometry={nodes.Object_6.geometry} material={materials.Planet} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

export default PlanetModel
