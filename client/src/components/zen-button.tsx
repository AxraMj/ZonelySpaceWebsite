import { motion } from "framer-motion";

interface ZenButtonProps {
  isActive: boolean;
  onClick: () => void;
}

export default function ZenButton({ isActive, onClick }: ZenButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      disabled={isActive}
      className={`bg-sky-400 hover:bg-sky-500 text-white font-medium py-4 px-8 md:px-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-out ${
        isActive ? 'opacity-50 cursor-not-allowed' : 'transform hover:scale-105 active:scale-95'
      }`}
      whileHover={!isActive ? { scale: 1.05 } : {}}
      whileTap={!isActive ? { scale: 0.95 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <span>
        {isActive ? 'Breathing...' : 'Start 1-Minute Zen'}
      </span>
    </motion.button>
  );
}
