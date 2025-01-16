import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ImageSequenceProps {
  folderPath: string;
  frameCount: number;
  
}

const FactoryImageSequence: React.FC<ImageSequenceProps> = ({ folderPath, frameCount }) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // Preload all images
    const imageArray = Array.from({ length: frameCount }, (_, index) =>
      `${folderPath}/lepshee-factory-barvy${String(index).padStart(3, "0")}.png`
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
    <div
      className=" top-0 left-0 w-full flex justify-center"
    >
        {/* Sequence Image */}
        <motion.img
          src={images[currentFrame]}
          alt={`Lean Factory`}
          className="absolute top-0 left-0 w-full h-full"
        />
    
    </div>
  );
};

export default FactoryImageSequence;
