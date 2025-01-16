import { useState } from "react";
import { motion } from "framer-motion";

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const languages = ["EN", "DE", "CZ"];

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <motion.li className="relative cursor-pointer text-gray-400 hover:text-white flex items-center">
      <div className="flex items-center">
        {/* Language Display */}
        <motion.div
          className="ml-2 bg-black text-center border-2 border-gray-600 rounded-full px-6 cursor-pointer hover:border-white focus:outline-none"
          onClick={toggleDropdown}
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-lg bg-gradient-to-t from-green-500 to-green-200 text-transparent bg-clip-text">
            {selectedLanguage}
          </span>
        </motion.div>

        {/* Arrow Button Positioned Outside */}
        <motion.button
          onClick={toggleDropdown}
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="ml-3 text-zinc-400 text-md focus:outline-none relative"
        >
          ▼
        </motion.button>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, height: 0 }}
          animate={{ opacity: 1, y: 0, height: "auto" }}
          exit={{ opacity: 0, y: -20, height: 0 }}
          className="absolute top-14 left-0 w-full bg-black rounded-lg shadow-lg overflow-hidden border border-gray-600"
        >
          {languages
            .filter((lang) => lang !== selectedLanguage) // Exclude the selected language
            .map((lang) => (
              <div
                key={lang}
                className="text-center text-gray-300 py-2 cursor-pointer hover:bg-gray-700"
                onClick={() => handleLanguageSelect(lang)}
              >
                {lang}
              </div>
            ))}
        </motion.div>
      )}
    </motion.li>
  );
};

export default LanguageSelector;
