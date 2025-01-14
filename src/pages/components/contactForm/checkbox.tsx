import { useState } from "react";
import { motion } from "framer-motion";

const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <motion.div
      className={`w-6 h-6 rounded-md border-2 cursor-pointer transition-all ${
        checked ? "border-lime-400 bg-lime-400" : "border-gray-400 bg-transparent"
      }`}
      onClick={handleChange}
      whileTap={{ scale: 0.95 }}
    >
      {checked && (
        <motion.div
          className="w-3 h-3 bg-black rounded-md mx-auto my-auto"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.div>
  );
};

export default Checkbox;
