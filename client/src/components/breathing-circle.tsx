import { motion } from "framer-motion";

interface BreathingCircleProps {
  isActive: boolean;
  breathPhase: string;
  breathText: string;
  timeLeft: number;
}

export default function BreathingCircle({ isActive, breathPhase, breathText, timeLeft }: BreathingCircleProps) {
  const getTextColor = () => {
    if (breathPhase === 'complete') return 'text-emerald-600';
    return 'text-slate-600';
  };

  return (
    <div className="mb-8 relative">
      <motion.div
        className="breathing-circle w-48 h-48 md:w-64 md:h-64 rounded-full flex items-center justify-center shadow-lg"
        animate={
          isActive
            ? {
                scale: [1, 1.4, 1.4, 1],
                opacity: [0.7, 0.9, 0.9, 0.7],
              }
            : { scale: 1, opacity: 0.7 }
        }
        transition={
          isActive
            ? {
                duration: 16,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : { duration: 0.5 }
        }
      >
        <div className="text-center">
          <motion.div
            className={`${getTextColor()} font-medium text-lg md:text-xl mb-2 breathing-text`}
            animate={isActive ? { opacity: [1, 0.7, 1] } : { opacity: 1 }}
            transition={
              isActive
                ? {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
                : {}
            }
          >
            {breathText}
          </motion.div>
          {isActive && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-slate-500 text-sm font-light"
            >
              <span>{timeLeft}</span>s
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
