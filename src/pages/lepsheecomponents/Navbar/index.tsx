import { motion } from "framer-motion";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  return (
    <div className="fixed w-full">
      {/* Gradient Line */}
      <div className="gradient-line"></div>
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
