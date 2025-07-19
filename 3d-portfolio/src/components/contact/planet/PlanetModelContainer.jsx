// src/components/contact/planet/PlanetModelContainer.jsx
import React, { Suspense, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Stage, Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import PlanetModel from './PlanetModel'

const Stars = () => {
    const sphere = useMemo(() => {
        const positions = []
        for (let i = 0; i < 1000; i++) {
            const x = (Math.random() - 0.5) * 20
            const y = (Math.random() - 0.5) * 20
            const z = (Math.random() - 0.5) * 20
            positions.push(x, y, z)
        }
        return new Float32Array(positions)
    }, [])

    return (
        <Points positions={sphere} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#ffffff"
                size={0.03}
                sizeAttenuation={true}
                depthWrite={false}
            />
        </Points>
    )
}

const PlanetModelContainer = () => {
    const LoaderFallback = () => (
        <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="hotpink" />
        </mesh>
    )

    return (
        <div style={{ width: '90%', height: '80vh', background: '#03001C' }}>
            <Canvas
                camera={{ position: [0, 0, 10], fov: 50 }}
                gl={{ antialias: true }}
                style={{ background: '#0b061f' }}
            >
                <ambientLight intensity={0.5} />
                <Suspense fallback={<LoaderFallback />}>
                    <Stage environment="night" intensity={0.6}>
                        <PlanetModel scale={2.5} />
                    </Stage>
                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={-1.5} />
                    <PerspectiveCamera makeDefault position={[0, 0, 6]} />
                    <Stars />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default PlanetModelContainer
