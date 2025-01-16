import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ImageSequenceProps {
  folderPath: string;
  frameCount: number;
  glowImage: string; // Path to the glow image
}

const ImageSequence: React.FC<ImageSequenceProps> = ({ folderPath, frameCount, glowImage }) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [images, setImages] = useState<string[]>([]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Preload all images
    const imageArray = Array.from({ length: frameCount }, (_, index) =>
      `${folderPath}/lepshee-blop-idle${String(index).padStart(2, "0")}.webp`
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

  useEffect(() => {
    // Listen to scroll events
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full flex justify-center"
      style={{
        transform: `translateY(${scrollY}px)`,
        zIndex: 9999, // Ensure it's in front of all other elements
        pointerEvents: "none", // Optional: Prevent interaction if it's purely decorative
      }}
    >
      {/* Animated Sequence */}
      <motion.div className="relative w-64 h-64">
        {/* Glow Image */}
        <motion.img
          src={glowImage}
          alt="Glow Effect"
          className="absolute top-0 left-0 w-full h-full scale-150"
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
