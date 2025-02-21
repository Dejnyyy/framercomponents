import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
const HeroSection = ({ title, subtitle, onPrimaryClick, onSecondaryClick }) => {
  return (
    <div className="relative bg-black text-white min-h-screen flex flex-col justify-center items-center px-6">
      <Link href={"/"}><p className="absolute top-4 left-4">Back</p></Link>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold uppercase">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-gray-200 from-gray-500">
            {title?.partOne || "Děláme Digitální"}
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
            {title?.partTwo || "Svět Lepshee"}
          </span>
        </h1>
        <div className="w-2/3 mx-auto">
          <p className="mt-6 text-lg md:text-xl font-light text-zinc-400">
            {subtitle || (
              <>
                Jsme kreativní gigafactory, která se specializuje na stavbu{" "}
                <span className="font-bold text-white">Krásných</span> prostě
                lepshee’ch řešení.
              </>
            )}
          </p>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-8 rounded-full py-3 bg-gradient-to-r from-pink-500 via-purple-600 to-teal-400 text-white font-medium"
            onClick={onPrimaryClick}
          >
            Co děláme?
          </motion.button>
          <motion.button
            className="relative px-8 py-3 text-white font-bold rounded-full bg-black overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onSecondaryClick}
          >
            {/* Gradient Border with Color Rotation */}
            <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-cyan-400 to-lime-400 p-1 animate-gradient-rotate bg-[length:200%_200%]">
              <div className="w-full h-full bg-black rounded-full"></div>
            </div>
            <span className="relative uppercase text-zinc-400 font-medium">Kontaktujte nás</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
