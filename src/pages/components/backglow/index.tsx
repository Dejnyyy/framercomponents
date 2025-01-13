import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const BackGlow = () => {
  return (
    <div className="relative flex flex-col items-center text-center bg-black">
      {/* Back Button */}
      <Link href={"/"}>
        <p className="text-white absolute top-4 left-8">
          Back
        </p>
      </Link>

      {/* Glowing Background Behind "UP" */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
      >
        <div className="w-[300px] h-[300px] rounded-full bg-green-400 blur-3xl"></div>
      </motion.div>

      {/* 3D Glassy "UP" Text with Glow */}
      <motion.div 
        className="relative text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <span className="drop-shadow-[0_0_20px_rgba(0,255,128,0.8)] filter brightness-125">
          UP
        </span>
        {/* Arrow Above */}
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full drop-shadow-[0_0_20px_rgba(0,255,128,0.8)]"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          }}
          initial={{ y: -20, scale: 0 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        ></motion.div>
      </motion.div>

      {/* Glowing Background Behind Description */}
      <motion.div 
        className="absolute w-[400px] h-[200px] bg-blue-500 rounded-2xl blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
      ></motion.div>

      {/* Glassmorphic Text Container */}
      <motion.div 
        className="relative mt-10 p-8 rounded-2xl bg-white/10 text-white max-w-lg shadow-lg backdrop-blur-md drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <h2 className="text-4xl font-bold drop-shadow-[0_0_15px_rgba(0,255,128,0.8)]">
          SWIPE UP
        </h2>
        <p className="mt-4 text-lg">
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        </p>
      </motion.div>
    </div>
  );
};

export default BackGlow;
