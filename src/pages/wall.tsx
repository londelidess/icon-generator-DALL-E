'use client'

const Wall = () => {
  return (
    <mesh receiveShadow position={[0, 2, 0]} scale={[8, 4, 4]}>
      {/* Geometry */}
      <planeGeometry />
      {/* Material */}
      <meshStandardMaterial color="grey" metalness={0} roughness={2} />
      {/* #D3D3D3 */}
    </mesh>
  )
}

export default Wall
