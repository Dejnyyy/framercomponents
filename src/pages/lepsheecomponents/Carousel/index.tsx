import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from "next/link";

const PositiveAdjectivesCarousel = () => {
  const adjectives = [
    'Krásných',
    'Skvělých',
    'Kreativních',
    'Dynamických',
    'Energetických',
    'Fantastických',
    'Generózních',
    'Hlubokých',
    'Inovativních',
    'Laskavých',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % adjectives.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, [adjectives.length]);

  return (
    <>
        <motion.span
          key={adjectives[currentIndex]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          >
          {adjectives[currentIndex]} 
        </motion.span>
    </>
  );
};

export default PositiveAdjectivesCarousel;
