// components/Checkbox.js

import { useState } from 'react';
import { motion } from 'framer-motion';

const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="flex items-center">
      <motion.div
        className={`w-6 h-6 mr-2 rounded-full border-2 border-gray-300 transition-all ${
          checked ? 'bg-blue-500' : 'bg-white'
        }`}
        onClick={handleChange}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        {checked && (
          <motion.div
            className="w-4 h-4 bg-white rounded-md mx-auto my-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </motion.div>
      
    </div>
  );
};

export default Checkbox;
