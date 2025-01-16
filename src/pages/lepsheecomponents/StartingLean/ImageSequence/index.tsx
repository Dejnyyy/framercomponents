import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ImageSequenceProps {
  folderPath: string;
  frameCount: number;
  glowImage: string; // Path to the glow image
}

const ImageSequence: React.FC<ImageSequenceProps> = ({ folderPath, frameCount, glowImage }) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // Preload all images
    const imageArray = Array.from({ length: frameCount }, (_, index) =>
      `${folderPath}/lepshee-blop-idle${String(index).padStart(2, '0')}.webp`
    );
    setImages(imageArray);
  }, [folderPath, frameCount]);

  useEffect(() => {
    // Animate through frames
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frameCount);
    }, 50); // 50ms per frame
    return () => clearInterval(interval);
  }, [frameCount]);

  return (
    <div className="relative mx-auto w-full flex justify-center">
      {/* Animated Sequence */}
      <motion.div className="relative w-64 h-64">
        {/* Glow Image */}
        <motion.img
          src={glowImage}
          alt="Glow Effect"
          className="absolute top-0 left-0 w-full h-ful scale-150"
          initial={{ opacity: 1 }}
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />

        {/* Sequence Image */}
        <motion.img
          key={currentFrame}
          src={images[currentFrame]}
          alt={`Frame ${currentFrame}`}
          className="absolute top-0 left-0 w-full h-full"
        />
      </motion.div>
    </div>
  );
};

export default ImageSequence;
