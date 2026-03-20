import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface BlobProps {
  color?: string
  opacity?: number
  scale?: number
}

const BlobMesh = ({ color = '#c8f135', opacity = 0.15, scale = 1 }: BlobProps) => {
  const meshRef = useRef<THREE.Mesh>(null)
  const geometryRef = useRef<THREE.IcosahedronGeometry>(null)

  // Store original vertex positions for sine wave displacement
  const originalPositionsRef = useRef<THREE.Vector3[]>([])

  useFrame((state) => {
    if (!meshRef.current || !geometryRef.current) return

    // Slowly rotate on all 3 axes
    meshRef.current.rotation.x += 0.001
    meshRef.current.rotation.y += 0.002
    meshRef.current.rotation.z += 0.0015

    // Sine wave displacement
    const time = state.clock.getElapsedTime()
    const positionAttribute = geometryRef.current.attributes.position
    
    const originalPositions = originalPositionsRef.current
    
    // Quick initialize original positions if empty
    if (originalPositions.length === 0 && positionAttribute) {
      for (let i = 0; i < positionAttribute.count; i++) {
        originalPositions.push(
          new THREE.Vector3().fromBufferAttribute(positionAttribute, i)
        )
      }
    }

    const vertex = new THREE.Vector3()
    for (let i = 0; i < positionAttribute.count; i++) {
      if (!originalPositions[i]) continue
      
      const v = originalPositions[i]
      // Organic morph effect based on time and original vertex position
      const noise = Math.sin(v.x * 2 + time) * Math.sin(v.y * 2 + time) * Math.sin(v.z * 2 + time)
      const displacementAmount = 0.15
      
      vertex.copy(v).addScaledVector(v.clone().normalize(), noise * displacementAmount)
      positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z)
    }
    
    positionAttribute.needsUpdate = true
    geometryRef.current.computeVertexNormals()
  })

  return (
    <mesh ref={meshRef} scale={scale}>
      <icosahedronGeometry ref={geometryRef} args={[1, 4]} />
      <meshStandardMaterial
        color={color}
        wireframe={true}
        opacity={opacity}
        transparent={true}
        depthWrite={false}
      />
    </mesh>
  )
}

interface AnimatedBlobProps extends BlobProps {
  className?: string
  style?: React.CSSProperties
}

const AnimatedBlob = ({ className, style, color, opacity, scale }: AnimatedBlobProps) => {
  return (
    <div className={className} style={{ position: 'absolute', pointerEvents: 'none', ...style }}>
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }} gl={{ alpha: true }}>
        <ambientLight intensity={1} />
        <BlobMesh color={color} opacity={opacity} scale={scale} />
      </Canvas>
    </div>
  )
}

export default AnimatedBlob
