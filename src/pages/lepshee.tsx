import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import HeroSection from "./lepsheecomponents/HeroSection";
import SectionTwo from "./lepsheecomponents/SectionTwo";

export default function Home() {
  return (
    <>
      <Head>
        <title>LandingPage</title>
        <meta name="description" content="Swipe Up Marketing Agency" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen text-white flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900">
       <HeroSection />
       <div className="w-full h-64 bg-black"></div>
       <SectionTwo />
       
      </main>
    </>
  );
}
