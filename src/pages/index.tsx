import { type NextPage } from "next";
import Head from "next/head";
// import Image from "next/image";
import { PrimaryLinkButton } from "~/component/PrimaryLinkButton";
import { signIn, useSession } from "next-auth/react";
import { Button } from "~/component/Button";

import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import Gallery from '~/component/gallery'

import { useRef } from 'react';


function HeroBanner() {
  const session = useSession();
  const canvasRef = useRef(null);

  const isLoggedIn = !!session.data;

  const handleCanvasClick = () => {
    if (canvasRef.current) {
      const topPosition = canvasRef.current.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: topPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="grid grid-cols-1 gap-12 px-8">
      <div className=" mt-14 flex flex-col gap-4">
        <h1 className="text-6xl">Unleash Creative Freedom Instantly</h1>
        <p className="text-2xl mt-4">
          Transform your ideas into vibrant, high-quality icons in seconds with our AI-powered generator. It&apos;s time-saving, cost-effective, and fun!
        </p>
        {isLoggedIn && (
          <PrimaryLinkButton href="/generate" className="self-start">
            Generate your Icons
          </PrimaryLinkButton>
        )}

        {!isLoggedIn && (
          <div className="self-start text-left">
            <Button
            onClick={() => {
               signIn().catch(console.error);
              }}
            >
              Login
            </Button>
          </div>
        )}

      </div>
      <div className="w-screen relative left-1/2 -translate-x-1/2 h-screen" ref={canvasRef} onClick={handleCanvasClick}>

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
