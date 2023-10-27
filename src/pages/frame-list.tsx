'use client'

import { useRef, useState, useMemo, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import type { imagesType } from './types'
import { easing } from 'maath'

import * as THREE from 'three'
import FrameItem from './frame-item'

const FrameList = ({ images }: { images: imagesType[] }) => {
  const frameRef = useRef<THREE.Group>(null)
  const clickRef: any = useRef(null)
  const [select, setSelect] = useState<string>('/')
  const targetPosition = useMemo(() => new THREE.Vector3(), [])
  const targetQuaternion = useMemo(() => new THREE.Quaternion(), [])

    useEffect(() => {
      if (frameRef.current) {
        clickRef.current = frameRef.current.getObjectByName(select);

        if (clickRef.current) {
          const parent = clickRef.current.parent;
          parent.updateWorldMatrix(true, true);
          parent.localToWorld(targetPosition.set(0, 1 / 2, 2.2));
        } else {
          targetPosition.set(0, 0, 4);
          targetQuaternion.identity();
        }
      }
    }, [select, targetPosition, targetQuaternion]);

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, targetPosition, 0.4, delta);
    easing.dampQ(state.camera.quaternion, targetQuaternion, 0.4, delta);
  });

  return (
    <group
      ref={frameRef}
      onClick={(e) => {
        console.log("Group clicked");
        e.stopPropagation()
        setSelect(e.object.name)
      }}
      onPointerMissed={() => setSelect('/')}
    >
      {images.map((data, index) => (
        <FrameItem key={index} data={data} />
      ))}
    </group>
  )
}

export default FrameList
