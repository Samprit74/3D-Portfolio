import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { Computer2Model } from './Computer2Model'
import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'

const Computer2ModelContainer = () => {

    const LoaderFallback = () => (
        <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="hotpink" />
        </mesh>
    )

    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <Suspense fallback={<LoaderFallback />}>
                <Stage environment="park" intensity={0.5}>
                    <Computer2Model />
                </Stage>
                <OrbitControls enableZoom={false}  autoRotate />
                <PerspectiveCamera position={[-1,0,1.8]} zoom={0.7} makeDefault/>
            </Suspense>
        </Canvas>
    )
}

export default Computer2ModelContainer
