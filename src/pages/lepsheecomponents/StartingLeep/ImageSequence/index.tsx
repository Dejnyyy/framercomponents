import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ImageSequenceProps {
  folderPath: string; 
  frameCount: number;
}

const ImageSequence: React.FC<ImageSequenceProps> = ({ folderPath, frameCount }) => {
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
    }, 100); 
    return () => clearInterval(interval);
  }, [frameCount]);

  return (
    <div className="mx-auto w-full flex justify-center">
      {images.length > 0 && (
        <motion.img
          key={currentFrame} // Use key to trigger re-render
          src={images[currentFrame]}
          alt={`Frame ${currentFrame}`}
          className="absolute top-4 left-1/2 transform -translate-x-1/2 w-64 h-64" // Center-top position
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0 }}
          width={50}
          height={50}
        />
      )}
    </div>
  );
};

export default ImageSequence;
