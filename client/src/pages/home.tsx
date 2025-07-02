import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BreathingCircle from "@/components/breathing-circle";
import ZenButton from "@/components/zen-button";
import FooterLinks from "@/components/footer-links";

const breathingStates = [
  { phase: 'inhale', text: 'Breathe in...', duration: 4000 },
  { phase: 'hold1', text: 'Hold...', duration: 4000 },
  { phase: 'exhale', text: 'Breathe out...', duration: 4000 },
  { phase: 'hold2', text: 'Hold...', duration: 4000 }
];

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [breathPhase, setBreathPhase] = useState('ready');
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const phaseTimerRef = useRef<NodeJS.Timeout | null>(null);

  const startZenSession = () => {
    if (isActive) return;
    
    setIsActive(true);
    setTimeLeft(60);
    setCurrentPhaseIndex(0);
    setIsComplete(false);
    setBreathPhase('inhale');
    
    // Start breathing cycle
    cycleBreathingPhases();
    
    // Start countdown timer
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          endZenSession();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const cycleBreathingPhases = () => {
    const currentState = breathingStates[currentPhaseIndex];
    setBreathPhase(currentState.phase);
    
    phaseTimerRef.current = setTimeout(() => {
      setCurrentPhaseIndex((prev) => {
        const next = (prev + 1) % breathingStates.length;
        if (isActive) {
          cycleBreathingPhases();
        }
        return next;
      });
    }, currentState.duration);
  };

  const endZenSession = () => {
    setIsActive(false);
    setIsComplete(true);
    setBreathPhase('complete');
    
    // Clear timers
    if (timerRef.current) clearInterval(timerRef.current);
    if (phaseTimerRef.current) clearTimeout(phaseTimerRef.current);
  };

  const resetZenSession = () => {
    setIsActive(false);
    setTimeLeft(60);
    setCurrentPhaseIndex(0);
    setIsComplete(false);
    setBreathPhase('ready');
    
    // Clear timers
    if (timerRef.current) clearInterval(timerRef.current);
    if (phaseTimerRef.current) clearTimeout(phaseTimerRef.current);
  };

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (phaseTimerRef.current) clearTimeout(phaseTimerRef.current);
    };
  }, []);

  const getCurrentBreathText = () => {
    if (breathPhase === 'ready') return 'Ready to breathe?';
    if (breathPhase === 'complete') return 'Complete!';
    
    const currentState = breathingStates.find(state => state.phase === breathPhase);
    return currentState?.text || 'Breathe...';
  };

  return (
    <div className="font-sans gradient-bg min-h-screen">
      <main className="min-h-screen flex flex-col">
        {/* Header Section */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center pt-8 pb-4 px-4"
        >
          <h1 className="text-3xl md:text-4xl font-light text-slate-700 mb-2">
            Zonely Space
          </h1>
          <p className="text-slate-500 text-sm md:text-base font-light">
            One minute to inner peace
          </p>
        </motion.header>

        {/* Main Content */}
        <section className="flex-1 flex flex-col items-center justify-center px-4 py-8">
          <BreathingCircle
            isActive={isActive}
            breathPhase={breathPhase}
            breathText={getCurrentBreathText()}
            timeLeft={timeLeft}
          />

          <AnimatePresence mode="wait">
            {!isComplete ? (
              <motion.div
                key="zen-button"
                initial={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="mb-8"
              >
                <ZenButton
                  isActive={isActive}
                  onClick={startZenSession}
                />
              </motion.div>
            ) : (
              <motion.div
                key="completion-message"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-8"
              >
                <h2 className="text-2xl md:text-3xl font-light text-slate-700 mb-4">
                  You're done. Feel better?
                </h2>
                <button
                  onClick={resetZenSession}
                  className="bg-emerald-400 hover:bg-emerald-500 text-white font-medium py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-out transform hover:scale-105 active:scale-95"
                >
                  Try Again
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Educational Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-lg text-center mt-12 px-4"
          >
            <h3 className="text-lg font-medium text-slate-700 mb-3">
              The Science of Mindful Breathing
            </h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
              Controlled breathing activates your parasympathetic nervous system, reducing cortisol levels and promoting mental clarity. 
              This 4-4-4-4 breathing pattern helps regulate heart rate variability, creating an immediate sense of calm and improved focus.
            </p>
          </motion.div>
        </section>

        <FooterLinks />
      </main>
    </div>
  );
}
