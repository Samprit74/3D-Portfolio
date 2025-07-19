import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'
import { PlaystationModel } from './PlaystationModel'

const PlaystationModelContainer = () => {

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
                    <PlaystationModel />
                </Stage>
                <OrbitControls enableZoom={false}  autoRotate />
                <PerspectiveCamera position={[-1,0,1.8]} zoom={0.5} makeDefault/>
            </Suspense>
        </Canvas>
    )
}

export default PlaystationModelContainer
