import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <>
     {/* Gradient Line */}
     <div className="gradient-line"></div>
      
    <motion.nav
      className="bg-black text-white p-4 fixed rounded-b-3xl border-gray-300 border-b top-1 left-0 w-full flex justify-between items-center shadow-md z-50"
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
        <motion.li
          className="relative cursor-pointer text-gray-400 hover:text-white"
          whileHover={{ scale: 1.1 }}
        >
          <div className="ml-2 bg-black text-center border border-gray-600 rounded-full p-2 cursor-pointer hover:border-white focus:outline-none relative">
            <select
              className="bg-black text-center text-lime-400 cursor-pointer appearance-none focus:outline-none rounded-full px-4 py-1"
              style={{
                appearance: 'none', // Ensure the default browser styling is overridden
                WebkitAppearance: 'none', // For Safari
                MozAppearance: 'none', // For Firefox
                backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'white\' strokeWidth=\'2\' strokeLinecap=\'round\' strokeLinejoin=\'round\'%3E%3Cpath d=\'M6 9l6 6 6-6\' /%3E%3C/svg%3E")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.5rem center',
                backgroundSize: '1rem',
                paddingRight: '2rem', // Ensure space for the arrow
              }}
                 >
              <option value="en">EN</option>
              <option value="cz">CZ</option>
              <option value="es">ES</option>
            </select>
          </div>
        </motion.li>
      </ul>
    </motion.nav>
    </>
  );
};

export default Navbar;
