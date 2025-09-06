
import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      className="flex justify-center items-center h-32"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
    >
      <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
    </motion.div>
  );
}