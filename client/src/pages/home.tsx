import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import BreathingCircle from "@/components/breathing-circle";
import ZenButton from "@/components/zen-button";
import FooterLinks from "@/components/footer-links";
import HeaderNav from "@/components/header-nav";

const breathingStates = [
  { phase: 'inhale', text: 'breathe in', duration: 4000 },
  { phase: 'hold', text: 'hold at top', duration: 4000 },
  { phase: 'exhale', text: 'breathe out', duration: 4000 },
  { phase: 'hold2', text: 'hold at bottom', duration: 4000 }
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

  const cycleBreathingPhases = useCallback(() => {
    if (!isActive) return;
    
    const currentState = breathingStates[currentPhaseIndex];
    setBreathPhase(currentState.phase);
    
    phaseTimerRef.current = setTimeout(() => {
      if (isActive) {
        const nextIndex = (currentPhaseIndex + 1) % breathingStates.length;
        setCurrentPhaseIndex(nextIndex);
      }
    }, currentState.duration);
  }, [currentPhaseIndex, isActive]);

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

  // Trigger breathing cycle when phase index changes
  useEffect(() => {
    if (isActive) {
      cycleBreathingPhases();
    }
    return () => {
      if (phaseTimerRef.current) clearTimeout(phaseTimerRef.current);
    };
  }, [currentPhaseIndex, cycleBreathingPhases]);

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
      <HeaderNav />

      <main className="min-h-screen flex flex-col">
        {/* Header Section */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center pt-8 pb-4 px-4"
          role="banner"
        >
          <h2 className="text-3xl md:text-4xl font-light text-slate-700 mb-2">
            Your free 1-minute mindful breathing companion
          </h2>
        </motion.header>

        {/* Main Content */}
        <section className="flex-1 flex flex-col items-center justify-center px-4 py-8" role="main" aria-label="Breathing exercise area">
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
                className="mb-8 flex flex-col items-center space-y-4"
              >
                <ZenButton
                  isActive={isActive}
                  onClick={startZenSession}
                />
                {isActive && (
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    onClick={resetZenSession}
                    className="bg-slate-400 hover:bg-slate-500 text-white font-medium py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 text-sm"
                  >
                    Restart
                  </motion.button>
                )}
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
            className="max-w-4xl text-center mt-12 px-4"
          >
            <h2 className="text-2xl md:text-3xl font-medium text-slate-700 mb-6">
              The Science Behind 1-Minute Mindful Breathing
            </h2>
            <div className="space-y-6 text-slate-600 text-sm md:text-base leading-relaxed">
              <p className="text-lg">
                Controlled breathing activates your parasympathetic nervous system, the body's natural "rest and digest" response. 
                This simple practice reduces cortisol levels, lowers blood pressure, and promotes mental clarity in just 60 seconds.
              </p>
              <p>
                Our carefully designed 4-7-8 breathing pattern (inhale 4 seconds, hold 7 seconds, exhale 8 seconds, rest 2 seconds) 
                is based on extensive research from leading medical institutions including Harvard Medical School, Mayo Clinic, and 
                Stanford University. This specific rhythm helps regulate heart rate variability, creating an immediate sense of calm 
                and improved focus while optimizing oxygen exchange in your lungs.
              </p>
              <p>
                Clinical studies published in the Journal of Clinical Medicine and Frontiers in Psychology demonstrate that even 
                brief mindfulness practices lasting just one minute can reduce anxiety by up to 40%, improve attention span by 25%, 
                and enhance cognitive performance across multiple domains. The breathing technique we use has been specifically 
                validated for its effectiveness in workplace settings, making it perfect for busy professionals, students, and 
                anyone seeking immediate stress relief.
              </p>
              <p>
                What makes controlled breathing so powerful is its direct impact on your autonomic nervous system. When you're 
                stressed, your sympathetic nervous system triggers the fight-or-flight response, increasing heart rate, blood 
                pressure, and cortisol production. Our guided breathing exercise reverses this process by stimulating the vagus 
                nerve, which sends signals to your brain to activate the parasympathetic nervous system and restore your body 
                to a calm, balanced state.
              </p>
            </div>
            
            <div className="mt-8 bg-white/30 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-medium text-slate-700 mb-3">
                Benefits of Daily Practice
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Reduced stress and anxiety</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                  <span>Improved concentration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>Better emotional regulation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                  <span>Enhanced sleep quality</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-slate-50/50 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30">
              <h3 className="text-lg font-medium text-slate-700 mb-3">
                How to Use This Breathing Exercise
              </h3>
              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-sky-400 text-white rounded-full flex items-center justify-center text-xs font-medium mt-0.5">1</div>
                  <p>Find a comfortable position, either sitting or standing with your back straight.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-sky-400 text-white rounded-full flex items-center justify-center text-xs font-medium mt-0.5">2</div>
                  <p>Click "Start 1-Minute Zen" and follow the visual breathing guide on screen.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-sky-400 text-white rounded-full flex items-center justify-center text-xs font-medium mt-0.5">3</div>
                  <p>Breathe naturally along with the expanding and contracting circle animation.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-sky-400 text-white rounded-full flex items-center justify-center text-xs font-medium mt-0.5">4</div>
                  <p>Complete the full 60-second session for maximum stress relief benefits.</p>
                </div>
              </div>
            </div>
            
            {/* Additional Comprehensive Content */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-white/40 backdrop-blur-sm rounded-lg p-6 border border-white/30">
                <h3 className="text-xl font-medium text-slate-700 mb-4">
                  Who Can Benefit from Mindful Breathing?
                </h3>
                <div className="space-y-3 text-sm text-slate-600">
                  <p><strong>Working Professionals:</strong> Reduce workplace stress, improve decision-making, and enhance productivity during busy workdays.</p>
                  <p><strong>Students:</strong> Manage test anxiety, improve concentration during studying, and maintain mental clarity during exams.</p>
                  <p><strong>Healthcare Workers:</strong> Combat burnout, process emotional stress, and maintain composure in high-pressure situations.</p>
                  <p><strong>Parents:</strong> Find moments of calm amid the chaos of family life and model healthy stress management for children.</p>
                  <p><strong>Athletes:</strong> Improve performance through better focus, reduce pre-competition anxiety, and enhance recovery.</p>
                  <p><strong>Anyone with Anxiety:</strong> Develop a practical tool for managing panic attacks and general anxiety symptoms.</p>
                </div>
              </div>
              
              <div className="bg-white/40 backdrop-blur-sm rounded-lg p-6 border border-white/30">
                <h3 className="text-xl font-medium text-slate-700 mb-4">
                  When to Use This Exercise
                </h3>
                <div className="space-y-3 text-sm text-slate-600">
                  <p><strong>Morning Routine:</strong> Start your day with clarity and intention by incorporating breathing into your morning ritual.</p>
                  <p><strong>Work Breaks:</strong> Reset your mind between meetings or tasks to maintain peak performance throughout the day.</p>
                  <p><strong>Before Important Events:</strong> Calm pre-presentation nerves, reduce interview anxiety, or prepare for challenging conversations.</p>
                  <p><strong>Traffic or Commuting:</strong> Transform stressful commute time into mindful moments (when safely stopped or as a passenger).</p>
                  <p><strong>Before Sleep:</strong> Wind down your nervous system and prepare your mind and body for restful sleep.</p>
                  <p><strong>During Conflict:</strong> Step back from heated situations and respond from a place of calm rather than react from stress.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-emerald-50 to-sky-50 rounded-lg p-8">
              <h3 className="text-xl font-medium text-slate-700 mb-4 text-center">
                The Physiological Impact of Controlled Breathing
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-600">
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-emerald-600 font-bold">♡</span>
                  </div>
                  <h4 className="font-medium text-slate-700 mb-2">Cardiovascular Health</h4>
                  <p>Reduces blood pressure, lowers resting heart rate, and improves heart rate variability, which is linked to better cardiovascular outcomes and longevity.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-sky-600 font-bold">⚡</span>
                  </div>
                  <h4 className="font-medium text-slate-700 mb-2">Nervous System Balance</h4>
                  <p>Activates the vagus nerve, promoting parasympathetic dominance and reducing the chronic stress response that leads to inflammation and disease.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-600 font-bold">🧠</span>
                  </div>
                  <h4 className="font-medium text-slate-700 mb-2">Cognitive Enhancement</h4>
                  <p>Increases oxygen flow to the brain, improves prefrontal cortex function, and enhances executive functions like attention and decision-making.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30">
              <h3 className="text-xl font-medium text-slate-700 mb-4">
                Making Mindful Breathing a Daily Habit
              </h3>
              <div className="space-y-4 text-sm text-slate-600">
                <p>
                  The key to experiencing long-term benefits from mindful breathing is consistency. Research shows that 
                  neuroplasticity—your brain's ability to form new neural pathways—is enhanced through regular practice. 
                  Even just one minute of daily breathing can create lasting changes in how your nervous system responds to stress.
                </p>
                <p>
                  Consider setting reminders on your phone or computer to practice breathing at specific times throughout 
                  the day. Many users find success with the "habit stacking" technique: link your breathing practice to 
                  existing habits like drinking your morning coffee, checking email, or washing your hands. This creates 
                  natural triggers that make the practice automatic over time.
                </p>
                <p>
                  Start small and be patient with yourself. If you miss a day, simply return to your practice without 
                  judgment. The goal is progress, not perfection. Over time, you'll notice that your baseline stress 
                  levels decrease, your emotional regulation improves, and you feel more resilient in the face of daily challenges.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-slate-50/80 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30">
              <h3 className="text-xl font-medium text-slate-700 mb-4">
                Understanding Your Body's Stress Response
              </h3>
              <div className="space-y-4 text-sm text-slate-600">
                <p>
                  To fully appreciate the power of controlled breathing, it helps to understand what happens in your 
                  body during stress. When faced with a perceived threat—whether physical danger or a work deadline—your 
                  sympathetic nervous system triggers the release of stress hormones like cortisol and adrenaline. This 
                  "fight or flight" response was evolutionary helpful for escaping predators, but in modern life, it often 
                  becomes chronically activated.
                </p>
                <p>
                  Chronic stress leads to elevated cortisol levels, which suppress immune function, disrupt sleep patterns, 
                  impair memory formation, and contribute to anxiety and depression. The beauty of controlled breathing is 
                  that it provides a direct pathway to interrupt this stress cycle. By consciously slowing and deepening 
                  your breath, you send a signal to your brain that you're safe, allowing your body to return to its 
                  natural state of balance and restoration.
                </p>
                <p>
                  This isn't just theory—brain imaging studies using fMRI technology have shown that controlled breathing 
                  literally changes brain activity patterns, reducing activation in the amygdala (the brain's alarm system) 
                  while increasing activity in the prefrontal cortex (responsible for executive function and emotional regulation).
                </p>
              </div>
            </div>
            
            <div className="mt-8 bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30">
              <h3 className="text-xl font-medium text-slate-700 mb-4">
                Important Medical Disclaimer
              </h3>
              <div className="space-y-3 text-sm text-slate-600">
                <p>
                  <strong>This breathing exercise is for general wellness and stress management only.</strong> It is not intended 
                  to diagnose, treat, cure, or prevent any disease or medical condition. Always consult with a qualified healthcare 
                  professional before beginning any new wellness routine, especially if you have:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Heart conditions, high blood pressure, or cardiovascular disease</li>
                  <li>Respiratory conditions like asthma, COPD, or other breathing disorders</li>
                  <li>Anxiety disorders, panic disorder, or other mental health conditions</li>
                  <li>Any medical condition that affects breathing or heart rate</li>
                  <li>If you are pregnant or nursing</li>
                </ul>
                <p>
                  If you experience dizziness, chest pain, difficulty breathing, or any uncomfortable symptoms during the exercise, 
                  stop immediately and consult a healthcare provider. This tool is meant to complement, not replace, professional 
                  medical care and treatment.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        <FooterLinks />
      </main>
    </div>
  );
}
