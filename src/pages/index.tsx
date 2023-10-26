import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { PrimaryLinkButton } from "~/component/PrimaryLinkButton";

function HeroBanner() {
  return (
    <section className="mt-12 mb-24 grid grid-cols-1 gap-12 px-8 sm:mt-24 sm:grid-cols-2">
      <div className="flex flex-col gap-4">
      <h1 className="text-6xl">Unleash Creative Freedom Instantly</h1>
        <p className="text-2xl mt-4">
        Transform your ideas into vibrant, high-quality icons in seconds with our AI-powered generator. It's time-saving, cost-effective, and fun!
        </p>
        <PrimaryLinkButton href="/generate" className="self-start">
          Generate your Icons
        </PrimaryLinkButton>
      </div>
      <Image
        src="/banner.png"
        alt="A collection of beautifully generated icons"
        width="400"
        height="300"
        className="order-first sm:-order-none"
      />
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
