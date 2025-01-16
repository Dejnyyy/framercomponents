import { motion } from "framer-motion";
import Link from "next/link";
import ImageSequence from "./ImageSequence";
const StartingLean = () => {
  return (
    <>
     <motion.div className="h-64 w-full">
     <ImageSequence 
     folderPath="/blob-seq" 
     glowImage="/lean-bg-gradient.png"
     frameCount={89} />

     </motion.div>
    </>
  );
};

export default StartingLean;
