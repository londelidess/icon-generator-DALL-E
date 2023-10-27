'use client'

import { useState, useRef, KeyboardEvent } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'

import Wall from './wall'
import Ground from './ground'
import Pole from './pole'
import FrameList from './frame-list'

const Gallery = () => {
  const [image, setImage] = useState('./art2.png')
  const inputRef = useRef<HTMLInputElement>(null)
  const [loading, setLoading] = useState(false)

  const images = [
    {
      id: '1',
      position: [-1.7, 0.5, 0.05],
      image: './pig.webp',
    },
    {
      id: '2',
      position: [0, 0.5, 0.05],
      image: './horse.webp',
    },
    {
      id: '3',
      position: [1.7, 0.5, 0.05],
      image: './sheep.webp',
    },
  ]


  return (
    <>
      {/* control */}
      {/* <OrbitControls makeDefault /> */}

      {/* monitor */}
      {/* <Perf position="top-left" /> */}

      <color args={['ivory']} attach="background" />

      <ambientLight intensity={0.9} />

      <group position={[0, -1, 0]}>

        <Wall />

        <Ground />

        <Pole />

        <FrameList images={images} />
      </group>
    </>
  )
}

export default Gallery
