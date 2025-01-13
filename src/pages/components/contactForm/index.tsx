import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Checkbox from "./checkbox";

const ContactForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <Link href={"/"} className="text-white absolute top-4 left-8">
        <p>Back</p>
      </Link>
      <motion.form
        className="w-full max-w-lg p-8 rounded-3xl shadow-lg bg-gradient-to-tr from-zinc-700 to-black"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {/* First Name */}
          <input
            type="text"
            placeholder="First Name*"
            className="w-full px-4 py-2 text-white bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          {/* Last Name */}
          <input
            type="text"
            placeholder="Last Name*"
            className="w-full px-4 py-2 text-white bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </motion.div>
        {/* Email */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <input
            type="email"
            placeholder="Email*"
            className="w-full px-4 py-2 text-white bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </motion.div>
        {/* Message */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <textarea
            placeholder="Vaše Zpráva..."
            className="w-full px-4 py-2 text-white bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>
        </motion.div>
        {/* Consent */}
        <motion.div
          className="flex items-start mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Checkbox />
          <label htmlFor="consent" className="ml-2 text-gray-400 text-sm">
            I hereby give my consent to the processing of my personal data and
            declare that I’ve read the
            <a
              href="/privacy"
              className="text-green-400 underline hover:text-green-300"
            >
              privacy statement
            </a>
            .
          </label>
        </motion.div>
        {/* Submit Button */}
        <motion.div
          className="flex justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.button
            className="relative px-8 py-3 text-white font-bold rounded-full bg-black overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Gradient Border */}
            <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-cyan-400 to-lime-400 p-1">
              <div className="w-full h-full bg-black rounded-full"></div>
            </div>
            <span className="relative">ODESLAT</span>
          </motion.button>
        </motion.div>
      </motion.form>
    </div>
  );
};

export default ContactForm;
