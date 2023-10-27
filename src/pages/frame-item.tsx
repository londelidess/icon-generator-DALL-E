'use client'

import * as THREE from 'three'
import { imagesType } from './types'
import { useTexture, useCursor, Decal } from '@react-three/drei'
import { useState, useRef, useEffect } from 'react'

const boxGeometry = new THREE.BoxGeometry(1, 1, 0.05)

const FrameItem = ({ data }: { data: imagesType }) => {
  const frameRef = useRef<THREE.Mesh>(null)
  const [hover, setHover] = useState(false)
  const texture = useTexture(data.image)
  const spotLightRef = useRef<THREE.SpotLight>(null)

  useEffect(() => {
    if (spotLightRef.current && frameRef.current) {
      // spotlight on frame
      spotLightRef.current.target = frameRef.current
    }
  }, [spotLightRef, frameRef])

  // using cursor on hover
  useCursor(hover)

  const scaleY = 1;
  const scaleX = 1;

  return (
    <group position={new THREE.Vector3(...data.position)}>
      {/* SpotLight */}
      <spotLight
        ref={spotLightRef}
        castShadow
        color="white"
        intensity={10}//2
        position={[0, 4, 1]}////0,4,1
        angle={Math.PI / 13}//5
        penumbra={0.1}//0.7
      />

      {/* frame */}
      <mesh position={[0, 0.8, 0]} geometry={boxGeometry} castShadow>
        <meshStandardMaterial color="darkgoldenrod" metalness={0.4} roughness={0.9} />
      </mesh>

      {/* image */}
      <mesh
        ref={frameRef}
        name={data.id}
        onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
        onPointerOut={() => setHover(false)}
        geometry={boxGeometry}
        position={[0, 0.8, 0.01]}
        scale={[0.9, 0.94, 0.9]}
        material-roughness={1}
        dispose={null}
      >
        {/* texcha on object */}
        <Decal
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          scale={[scaleX, scaleY, 1]}
          map={texture}
        />
      </mesh>
    </group>
  )
}

export default FrameItem
