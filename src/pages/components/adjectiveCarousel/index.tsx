import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from "next/link";
const PositiveAdjectivesCarousel = () => {
  const adjectives = [
    'Amazing',
    'Brilliant',
    'Creative',
    'Dynamic',
    'Energetic',
    'Fantastic',
    'Generous',
    'Humble',
    'Innovative',
    'Kindhearted',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % adjectives.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, [adjectives.length]);

  return (
    <div className="flex justify-center items-center h-screen bg-blue-50 text-blue-900 text-2xl font-bold">
      
    <Link href={"/"}><p className='text-black absolute top-4 left-8'>Back</p></Link>

      <div className="inline-flex items-center">
        <p>Dejny is </p>
        <motion.span
          key={adjectives[currentIndex]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="ml-2 relative text-transparent bg-clip-text bg-gradient-to-tr from-blue-700 to-fuchsia-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-tr after:from-blue-700 after:to-fuchsia-600"
          >
          {adjectives[currentIndex]} 
        </motion.span>
        <p>&ensp;programator</p>
      </div>
    </div>
  );
};

export default PositiveAdjectivesCarousel;
