'use client'

import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

function Avatar() {
  const meshRef = useRef<THREE.Group>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { viewport } = useThree()

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse coordinates to -1 to 1 range
      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = -(event.clientY / window.innerHeight) * 2 + 1
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Animate avatar to look at mouse
  useFrame(() => {
    if (meshRef.current) {
      // Smooth rotation towards mouse position
      const targetRotationY = mousePosition.x * 0.5
      const targetRotationX = mousePosition.y * 0.3

      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        targetRotationY,
        0.1
      )
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        targetRotationX,
        0.1
      )
    }
  })

  return (
    <group ref={meshRef}>
      {/* Head */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#8ABEB9" metalness={0.3} roughness={0.4} />
      </mesh>

      {/* Eyes */}
      <mesh position={[-0.15, 0.6, 0.4]} castShadow>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>
      <mesh position={[0.15, 0.6, 0.4]} castShadow>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>

      {/* Pupils */}
      <mesh position={[-0.15, 0.6, 0.48]} castShadow>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0.15, 0.6, 0.48]} castShadow>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Nose */}
      <mesh position={[0, 0.45, 0.45]} castShadow>
        <coneGeometry args={[0.08, 0.15, 8]} />
        <meshStandardMaterial color="#334155" />
      </mesh>

      {/* Mouth */}
      <mesh position={[0, 0.25, 0.4]} castShadow>
        <torusGeometry args={[0.12, 0.03, 8, 16, Math.PI]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>

      {/* Body/Torso */}
      <mesh position={[0, -0.5, 0]} castShadow>
        <cylinderGeometry args={[0.35, 0.5, 1.2, 32]} />
        <meshStandardMaterial color="#8ABEB9" metalness={0.2} roughness={0.6} />
      </mesh>

      {/* Neck */}
      <mesh position={[0, 0.05, 0]} castShadow>
        <cylinderGeometry args={[0.15, 0.15, 0.3, 16]} />
        <meshStandardMaterial color="#334155" />
      </mesh>

      {/* Shoulders */}
      <mesh position={[-0.5, -0.2, 0]} castShadow>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#8ABEB9" metalness={0.2} roughness={0.6} />
      </mesh>
      <mesh position={[0.5, -0.2, 0]} castShadow>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#8ABEB9" metalness={0.2} roughness={0.6} />
      </mesh>

      {/* Arms */}
      <mesh position={[-0.6, -0.7, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.1, 0.8, 16]} />
        <meshStandardMaterial color="#334155" />
      </mesh>
      <mesh position={[0.6, -0.7, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.1, 0.8, 16]} />
        <meshStandardMaterial color="#334155" />
      </mesh>

      {/* Hands */}
      <mesh position={[-0.6, -1.1, 0]} castShadow>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#8ABEB9" />
      </mesh>
      <mesh position={[0.6, -1.1, 0]} castShadow>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#8ABEB9" />
      </mesh>
    </group>
  )
}

export default function AvatarModel() {
  return (
    <div className="w-full h-full">
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <pointLight position={[-5, 5, 5]} intensity={0.4} color="#8ABEB9" />
        <pointLight position={[5, -5, -5]} intensity={0.4} color="#B7E5CD" />
        <spotLight
          position={[0, 5, 3]}
          angle={0.3}
          penumbra={1}
          intensity={0.6}
          color="#8ABEB9"
          castShadow
        />

        {/* Avatar */}
        <Avatar />

        {/* Background sphere for depth */}
        <mesh position={[0, 0, -3]}>
          <sphereGeometry args={[3, 32, 32]} />
          <meshStandardMaterial
            color="#B7E5CD"
            side={THREE.BackSide}
            metalness={0.1}
            roughness={0.9}
          />
        </mesh>

        {/* Floor plane for shadows */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
          <planeGeometry args={[10, 10]} />
          <shadowMaterial opacity={0.2} />
        </mesh>
      </Canvas>
    </div>
  )
}
