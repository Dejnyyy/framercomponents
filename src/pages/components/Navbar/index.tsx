import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      className="bg-black text-white p-4 fixed top-0 left-0 w-full flex justify-between items-center shadow-md z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 75 }}
    >
      {/* Left Section */}
      <motion.div
        className="text-xl font-bold cursor-pointer"
        whileHover={{ scale: 1.1 }}
      >
        lepshee
      </motion.div>

      {/* Right Section */}
      <ul className="flex gap-6 items-center text-sm font-medium">
        <motion.li
          className="cursor-pointer hover:text-gray-400"
          whileHover={{ scale: 1.1 }}
        >
          About Us
        </motion.li>
        <motion.li
          className="cursor-pointer hover:text-gray-400"
          whileHover={{ scale: 1.1 }}
        >
          Contact
        </motion.li>
        <motion.li
          className="cursor-pointer hover:text-gray-400"
          whileHover={{ scale: 1.1 }}
        >
          Reference
        </motion.li>
        <motion.li
          className="cursor-pointer hover:text-gray-400"
          whileHover={{ scale: 1.1 }}
        >
          What We Do
        </motion.li>
        <motion.li
          className="relative cursor-pointer hover:text-gray-400"
          whileHover={{ scale: 1.1 }}
        >
          Language
          <select
            className="ml-2 bg-black text-white border border-gray-600 rounded p-1 cursor-pointer hover:bg-gray-700 focus:outline-none"
          >
            <option value="en">English</option>
            <option value="cz">Čeština</option>
            <option value="es">Español</option>
          </select>
        </motion.li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
