import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Carousel from "../Carousel";
import Image from "next/image";
import Navbar from "../Navbar";
import StartingLeep from "../StartingLeep";

const HeroSection = () => {
  return (
    <div className="relative bg-black text-white min-h-screen">
        <Navbar />
        <StartingLeep />
      <div className="grid grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center m-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold uppercase">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-gray-200 from-gray-500">
            {"Děláme Digitální"}
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
            {"Svět Lepshee"}
          </span>
        </h1>
        <div className="w-2/3 mx-auto">
          <p className="mt-6 text-lg md:text-lg  text-zinc-400">
            Jsme kreativní gigafactory, která se specializuje na stavbu{" "}
            <span className=" text-white"><Carousel /></span> prostě
            lepshee&#39;ch řešení.
          </p>
        </div>
        <div className="mt-8 flex justify-center gap-4 ">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative px-8 py-3 text-white uppercase bg-gradient-to-r from-[#FE18DD] to-[#60F9FF] rounded-full overflow-hidden"
            >
            Co děláme?
          </motion.button>
          <motion.button
            className="relative px-8 py-3 text-white font-bold rounded-full bg-black overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Gradient Border with Color Rotation */}
            <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-[#5FF9FF] to-[#E0FF60] p-1 animate-gradient-rotate bg-[length:200%_200%]">
              <div className="w-full h-full bg-black rounded-full"></div>
            </div>
            <span className="relative uppercase text-zinc-400 font-medium">Kontaktujte nás</span>
          </motion.button>
        </div>
      </motion.div>
      <motion.div>
        <Image src="/lepsheeFactory.png" alt="Hero" className="w-full h-full scale-150" width={3000} height={3000} />
      </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
