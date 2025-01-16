import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Carousel from "../Carousel";
import Image from "next/image";
import Navbar from "../Navbar";

const HeroSection = () => {
  return (
    <div className="relative bg-black text-white min-h-screen">
      <div className="">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center m-auto"
      >
        <div className="grid grid-cols-2">
        <h1 className="text-5xl font-bold uppercase">
          <span className="text-transparent ml-0 bg-clip-text bg-gradient-to-r to-gray-200 from-gray-500">
            {" Stavíme kreativní "}
          </span>
          </h1>
        </div>
          <br />

          <div className="text-left ml-40 w-1/2">
          <h1 className="text-5xl font-bold uppercase">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
            {"digitální řešení na míru"}
          </span>
        </h1>
          <p className="mt-6 text-lg  text-zinc-400">
          </p>
          <p className="mt-6 text-lg  text-zinc-400 font-Montserrat">
          Začínali jsme kreativou. Od našich začátků tvoříme krásná, ale přesto skvěle funkční řešení aplikací a všeho dalšího. Vždy jsme ovšem měli dar – dar netvořit jen pro nás, kreativce. Dar tvořit pro svět. Věděli jsme, že naše nápady se realizovat dají. Proto vznikla i technologická divize, která s naprostou precizností přetváří naše návrhy na skutečnost.
          </p>
        </div>
       
      </motion.div>
      </div>


    </div>
  );
};

export default HeroSection;
