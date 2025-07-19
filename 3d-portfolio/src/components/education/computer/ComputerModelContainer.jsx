import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { ComputerModel } from './ComputerModel'
import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'

const ComputerModelContainer = () => {

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
                    <ComputerModel />
                </Stage>
                <OrbitControls enableZoom={false}  autoRotate />
                <PerspectiveCamera position={[-1,0,1.8]} zoom={0.7} makeDefault/>
            </Suspense>
        </Canvas>
    )
}

export default ComputerModelContainer
