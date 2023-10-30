'use client'

import * as THREE from 'three'

const poles = [
  {
    position: [0, 0.2, 0.5],
    scale: [0.005, 8, 0.005],
    rotation: [0, 0, Math.PI / 2],
  },
  {
    position: [-0.75, 0.1, 0.5],
    scale: [0.02, 0.25, 0.02],
    rotation: [0, 0, 0],
  },
  {
    position: [0.75, 0.1, 0.5],
    scale: [0.02, 0.25, 0.02],
    rotation: [0, 0, 0],
  },
  {
    position: [2.1, 0.1, 0.5],
    scale: [0.02, 0.25, 0.02],
    rotation: [0, 0, 0],
  },
  {
    position: [-2.1, 0.1, 0.5],
    scale: [0.02, 0.25, 0.02],
    rotation: [0, 0, 0],
  },
]

const cylinderGeometry = new THREE.CylinderGeometry()

const Pole = () => {
  return (
    <>
      {poles.map((pole, index) => {
        return (
          <mesh
            key={index}
            castShadow
            position={new THREE.Vector3(...pole.position)}
            scale={new THREE.Vector3(...pole.scale)}
            rotation={new THREE.Euler(...pole.rotation)}
            geometry={cylinderGeometry}
          >
            {/* Material */}
            <meshStandardMaterial color="darkgoldenrod" metalness={0.8} roughness={0.4} />
          </mesh>
        )
      })}
    </>
  )
}

export default Pole
