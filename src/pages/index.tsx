import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>LandingPage</title>
        <meta name="description" content="Swipe Up Marketing Agency" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen text-white flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900">
        <motion.h1
          className="text-5xl font-extrabold mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          FRAMER MOTION <br /> Components
        </motion.h1>
        <motion.div
          className="flex space-x-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href={"/components/adjectiveCarousel"}>
              <p className="cursor-pointer text-lg font-medium px-6 py-2 rounded bg-gradient-to-tr from-blue-500 to-green-500 hover:scale-105 transform transition duration-300 shadow-lg">
                Adjective Carousel
              </p>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href={"/components/contactForm"}>
              <p className="cursor-pointer text-lg font-medium px-6 py-2 rounded bg-gradient-to-tr from-yellow-500 to-orange-500 hover:scale-105 transform transition duration-300 shadow-lg">
                Contact Form
              </p>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href={"/components/backglow"}>
              <p className="cursor-pointer text-lg font-medium px-6 py-2 rounded bg-gradient-to-tr from-pink-500 to-purple-500 hover:scale-105 transform transition duration-300 shadow-lg">
                Back Glow
              </p>
            </Link>
          </motion.div>
         
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href={"/components/Navbar"}>
              <p className="cursor-pointer text-lg font-medium px-6 py-2 rounded bg-gradient-to-tr from-zinc-500 to-black hover:scale-105 transform transition duration-300 shadow-lg">
                Navbar
              </p>
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </>
  );
}
