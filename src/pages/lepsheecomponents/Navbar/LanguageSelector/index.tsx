import { useState } from "react";
import { motion } from "framer-motion";

const LanguageSelector: React.FC = () => {
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
    <div className="relative w-32">
      {/* Language Selector and Button */}
      <div className="flex items-center justify-between h-12 w-full bg-black rounded-full px-4">
        {/* Language Display (clickable to toggle dropdown) */}
        <span
          className="text-lg font-bold text-white cursor-pointer"
          onClick={toggleDropdown}
        >
          {selectedLanguage}
        </span>
     
      </div>

      {/* Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-14 left-0 w-full bg-black rounded-lg shadow-lg"
        >
          {languages.map((lang) => (
            <div
              key={lang}
              className={`text-center text-gray-300 py-2 cursor-pointer ${
                lang === selectedLanguage ? "font-bold text-white" : ""
              } hover:bg-gray-700`}
              onClick={() => handleLanguageSelect(lang)}
            >
              {lang}
            </div>
          ))}
        </motion.div>
        
      )}
         {/* Arrow Button */}
         <motion.button
          onClick={toggleDropdown}
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-white text-lg focus:outline-none"
        >
          ▲
        </motion.button>
    </div>
  );
};

export default LanguageSelector;
