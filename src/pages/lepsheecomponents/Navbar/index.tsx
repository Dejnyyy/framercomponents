import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed w-full z-50">
      {/* Gradient Line */}
      <motion.div
        className={`gradient-line ${scrolled ? "opacity-100" : "opacity-0"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      ></motion.div>

      {/* Navbar */}
      <motion.nav
        className="bg-black text-white p-4 rounded-b-3xl shadow-lg w-full flex justify-between items-center z-50"
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

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-white text-2xl mr-4 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>

        {/* Right Section (Links and Language Selector) */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex gap-6 items-center text-sm font-medium absolute md:static bg-black md:bg-transparent top-16 left-0 w-full md:w-auto p-4 md:p-0 transition-all duration-300 ease-in-out`}
        >
          <motion.li
            className="cursor-pointer text-gray-400 hover:text-white mb-4 md:mb-0"
            whileHover={{ scale: 1.1 }}
          >
            CO DĚLÁME
          </motion.li>
          <motion.li
            className="cursor-pointer text-gray-400 hover:text-white mb-4 md:mb-0"
            whileHover={{ scale: 1.1 }}
          >
            REFERENCE
          </motion.li>
          <motion.li
            className="cursor-pointer text-gray-400 hover:text-white mb-4 md:mb-0"
            whileHover={{ scale: 1.1 }}
          >
            NAŠE ZÁZEMÍ
          </motion.li>
          <motion.li
            className="cursor-pointer text-gray-400 hover:text-white mb-4 md:mb-0"
            whileHover={{ scale: 1.1 }}
          >
            KONTAKT
          </motion.li>

          {/* Language Selector Component */}
          <li className="mb-4 md:mb-0">
            <LanguageSelector />
          </li>
        </ul>
      </motion.nav>
    </div>
  );
};

export default Navbar;
