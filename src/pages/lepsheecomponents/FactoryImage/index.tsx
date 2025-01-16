

import { motion } from "framer-motion";
import FactoryImageSequence from "./FactorySeq";
const StartingFactory = () => {
  return (
    <>
    <motion.div className="h-full w-full scale-150">
     <FactoryImageSequence 
     folderPath="/factory-seq/factory-barvy" 
     frameCount={360} />
      </motion.div>
    </>
  );
};

export default StartingFactory;
