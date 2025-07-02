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

  const getBreathingAnimation = () => {
    switch (breathPhase) {
      case 'inhale':
        return {
          scale: [1, 1.3],
          opacity: [0.7, 0.9],
          transition: { 
            duration: 4,
            ease: "easeInOut"
          }
        };
      case 'hold':
        return {
          scale: 1.3,
          opacity: 0.9,
          transition: { 
            duration: 4,
            ease: "linear"
          }
        };
      case 'exhale':
        return {
          scale: [1.3, 1],
          opacity: [0.9, 0.7],
          transition: { 
            duration: 4,
            ease: "easeInOut"
          }
        };
      case 'hold2':
        return {
          scale: 1,
          opacity: 0.7,
          transition: { 
            duration: 4,
            ease: "linear"
          }
        };
      default:
        return {
          scale: 1,
          opacity: 0.7,
          transition: { duration: 0.5 }
        };
    }
  };

  const getBreathText = () => {
    switch (breathPhase) {
      case 'inhale':
        return 'breathe in';
      case 'hold':
        return 'hold';
      case 'exhale':
        return 'breathe out';
      case 'hold2':
        return 'hold';
      default:
        return breathText;
    }
  };

  return (
    <div className="mb-8 relative">
      <motion.div
        className="breathing-circle w-40 h-40 md:w-56 md:h-56 rounded-full flex items-center justify-center shadow-lg bg-slate-100/50"
        animate={isActive ? getBreathingAnimation() : { scale: 1, opacity: 0.7 }}
      >
        <div className="text-center">
          <motion.div
            className={`${getTextColor()} font-medium text-base md:text-lg mb-2 breathing-text`}
            animate={isActive ? { 
              opacity: breathPhase.startsWith('hold') ? [1, 0.9, 1] : [1, 0.8, 1]
            } : { opacity: 1 }}
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
            {getBreathText()}
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
