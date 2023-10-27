import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { PrimaryLinkButton } from "~/component/PrimaryLinkButton";

import { Canvas } from '@react-three/fiber'

import * as THREE from 'three'
import Basic from './basic'
import Gallery from './gallery'

function HeroBanner() {
  return (
    // <section className="mt-4 grid grid-cols-1 gap-12 px-8 sm:mt-20 " >
    <section className="grid grid-cols-1 gap-12 px-8">

    <div className="flex flex-col gap-4">
      <h1 className="text-6xl">Unleash Creative Freedom Instantly</h1>
      <p className="text-2xl mt-4">
        Transform your ideas into vibrant, high-quality icons in seconds with our AI-powered generator. It's time-saving, cost-effective, and fun!
      </p>
      <PrimaryLinkButton href="/generate" className="self-start">
        Generate your Icons
      </PrimaryLinkButton>
    </div>
    {/* <div className="w-full h-screen"> */}
    <div style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }} className="h-screen">
      <Canvas
        flat
        shadows
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          outputEncoding: THREE.sRGBEncoding,
        }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 100,
          position: [0, 0, 4],
        }}
      >
        <Gallery />
      </Canvas>
    </div>
  </section>
  );
}

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>DALL-E icon generator</title>
        <meta name="description" content="Transform your ideas into vibrant icons instantly with our AI-powered generator." />
        <link rel="icon" href="dall-e-icon-generator-favicon-color.png" />
      </Head>
      {/* <main className="container mx-auto flex min-h-screen flex-col items-center justify-center"> */}
      <main className="container mx-auto flex flex-col items-center justify-center">
      <HeroBanner />
      </main>
    </>
  );
};

export default HomePage;
