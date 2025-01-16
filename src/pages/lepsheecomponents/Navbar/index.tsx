import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed w-full">
      {/* Gradient Line */}
      <motion.div
        className={`gradient-line ${scrolled ? "opacity-100" : "opacity-0"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 1 : 0 }}
        transition={{
          duration: 0.5,
        }}
      ></motion.div>

      {/* Navbar */}
      <motion.nav
        className="bg-black text-white p-4 rounded-b-3xl border-gray-700 border-b w-full flex justify-between items-center z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 75 }}
      >
        {/* Left Section */}
        <motion.div
          className="text-xl font-bold cursor-pointer ml-4"
          whileHover={{ scale: 1.1 }}
        >
          lepshee
        </motion.div>

        {/* Right Section */}
        <ul className="flex gap-6 items-center text-sm font-medium">
          <motion.li
            className="cursor-pointer text-gray-400 hover:text-white"
            whileHover={{ scale: 1.1 }}
          >
            CO DĚLÁME
          </motion.li>
          <motion.li
            className="cursor-pointer text-gray-400 hover:text-white"
            whileHover={{ scale: 1.1 }}
          >
            REFERENCE
          </motion.li>
          <motion.li
            className="cursor-pointer text-gray-400 hover:text-white"
            whileHover={{ scale: 1.1 }}
          >
            NAŠE ZÁZEMÍ
          </motion.li>
          <motion.li
            className="cursor-pointer text-gray-400 hover:text-white"
            whileHover={{ scale: 1.1 }}
          >
            KONTAKT
          </motion.li>

          {/* Language Selector Component */}
          <LanguageSelector />
        </ul>
      </motion.nav>
    </div>
  );
};

export default Navbar;
