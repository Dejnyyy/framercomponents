import { motion } from "framer-motion";
import Link from "next/link";
import ImageSequence from "./ImageSequence";
const StartingLeep = () => {
  return (
    <>
     <motion.div className="h-64 w-full">
     <ImageSequence folderPath="/blob-seq" frameCount={89} />

     </motion.div>
    </>
  );
};

export default StartingLeep;
