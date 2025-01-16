import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const languages = ["EN", "DE", "CS"];

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Gradient Line */}
      <div className="gradient-line"></div>
      <motion.nav
        className="bg-black text-white p-4 rounded-b-3xl border-gray-700 border-b w-full flex justify-between items-center shadow-md z-50"
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

          {/* Language Selector */}
          <motion.li
            className="relative cursor-pointer text-gray-400 hover:text-white flex items-center"
          >
            <div className="flex items-center relative">
              {/* Language Display */}
              <motion.div
                className="ml-2 bg-black text-center border border-gray-600 rounded-full px-4 py-2 cursor-pointer hover:border-white focus:outline-none"
                onClick={toggleDropdown}
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-lg text-white">
                  {selectedLanguage}
                </span>
              </motion.div>

              {/* Arrow Button Positioned Outside */}
              <motion.button
                onClick={toggleDropdown}
                initial={{ rotate: 0 }}
                animate={{ rotate: isOpen ? 180 : 0 }}
                className="ml-3 text-zinc-400 text-lg focus:outline-none relative"
              >
                ▲
              </motion.button>
            </div>

            {/* Dropdown */}
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-14 left-0 w-32 bg-gradient-to-b from-black to-zinc-400 rounded-lg shadow-lg"
              >
                {languages.map((lang) => (
                  <div
                    key={lang}
                    className={`text-center text-gray-300 py-2 cursor-pointer ${
                      lang === selectedLanguage ? " text-white" : ""
                    } hover:bg-gray-700`}
                    onClick={() => handleLanguageSelect(lang)}
                  >
                    {lang}
                  </div>
                ))}
              </motion.div>
            )}
          </motion.li>
        </ul>
      </motion.nav>
    </>
  );
};

export default Navbar;
