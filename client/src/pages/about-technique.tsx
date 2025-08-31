import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Heart, Brain, Wind } from "lucide-react";
import HeaderNav from "@/components/header-nav";

export default function AboutTechnique() {
  return (
    <div className="font-sans gradient-bg min-h-screen">
      <HeaderNav />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-slate-800 mb-4" data-testid="page-title">
              The 4-4-4-4 Breathing Method
            </h1>
            <p className="text-xl text-slate-600 font-light">
              Understanding the science behind controlled breathing for instant calm
            </p>
          </header>

          <div className="prose prose-lg mx-auto text-slate-700 space-y-8">
            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">What is the 4-4-4-4 Breathing Method?</h2>
              <p className="leading-relaxed">
                The 4-4-4-4 breathing technique, also known as "box breathing" or "square breathing," is a 
                simple yet powerful method for regulating your nervous system and achieving immediate calm. 
                This technique involves breathing in four equal phases: inhaling for 4 seconds, holding 
                the breath for 4 seconds, exhaling for 4 seconds, and holding empty for 4 seconds.
              </p>
              <p className="leading-relaxed">
                This rhythmic pattern creates a "box" or "square" when visualized, hence the name. The 
                equal timing of each phase helps synchronize your breath with your heart rate, activating 
                your body's natural relaxation response and promoting mental clarity and emotional balance.
              </p>
            </section>

            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30 my-8">
              <h3 className="text-xl font-medium text-slate-700 mb-4 flex items-center">
                <Wind className="w-6 h-6 text-sky-600 mr-2" />
                The Four Phases Explained
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-medium text-slate-700">Inhale (4 seconds)</h4>
                      <p className="text-sm text-slate-600">Breathe in slowly through your nose, filling your lungs completely and expanding your diaphragm.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-medium text-slate-700">Hold Full (4 seconds)</h4>
                      <p className="text-sm text-slate-600">Retain the breath gently without straining, allowing oxygen to fully saturate your bloodstream.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-medium text-slate-700">Exhale (4 seconds)</h4>
                      <p className="text-sm text-slate-600">Release the breath slowly through your mouth or nose, emptying your lungs completely.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-100 text-orange-700 rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                      <h4 className="font-medium text-slate-700">Hold Empty (4 seconds)</h4>
                      <p className="text-sm text-slate-600">Pause with empty lungs before beginning the next cycle, allowing complete relaxation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Origins and Historical Background</h2>
              <p className="leading-relaxed">
                Box breathing has deep roots in ancient meditation practices, particularly in pranayama, 
                the Sanskrit word for "breath control" used in yoga traditions dating back thousands of years. 
                Hindu and Buddhist meditation practices have long recognized the power of controlled breathing 
                to calm the mind and prepare for deeper states of awareness.
              </p>
              <p className="leading-relaxed">
                In modern times, this technique gained prominence in military and emergency response training. 
                Navy SEALs, firefighters, and emergency medical personnel use box breathing to maintain focus 
                and calm under extreme pressure. The technique was popularized by former Navy SEAL Mark Divine 
                and has been adopted by athletes, executives, and healthcare professionals worldwide.
              </p>
              <p className="leading-relaxed">
                Today, box breathing is endorsed by leading medical institutions including the Mayo Clinic, 
                Harvard Medical School, and the American Heart Association as an effective tool for stress 
                management and nervous system regulation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">The Science: How It Works</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-emerald-50 rounded-lg p-6 text-center">
                  <Heart className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                  <h4 className="font-medium text-slate-700 mb-2">Cardiovascular System</h4>
                  <p className="text-sm text-slate-600">Regulates heart rate variability, lowers blood pressure, and improves circulation.</p>
                </div>
                <div className="bg-sky-50 rounded-lg p-6 text-center">
                  <Brain className="w-8 h-8 text-sky-600 mx-auto mb-3" />
                  <h4 className="font-medium text-slate-700 mb-2">Nervous System</h4>
                  <p className="text-sm text-slate-600">Activates parasympathetic response, reducing stress hormones and promoting calm.</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-6 text-center">
                  <Wind className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <h4 className="font-medium text-slate-700 mb-2">Respiratory System</h4>
                  <p className="text-sm text-slate-600">Optimizes oxygen exchange and carbon dioxide balance for better brain function.</p>
                </div>
              </div>
              <p className="leading-relaxed">
                When you practice box breathing, several physiological changes occur simultaneously. The 
                extended exhalation phase activates the vagus nerve, which runs from your brain to your 
                abdomen and controls the parasympathetic nervous system. This activation triggers the 
                release of neurotransmitters like GABA and acetylcholine, which promote relaxation and 
                reduce anxiety.
              </p>
              <p className="leading-relaxed">
                The controlled timing also helps balance your autonomic nervous system by increasing 
                heart rate variability (HRV), a key indicator of stress resilience and overall health. 
                Regular practice literally rewires your brain, strengthening neural pathways associated 
                with emotional regulation and stress management.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Research and Clinical Evidence</h2>
              <p className="leading-relaxed">
                Numerous peer-reviewed studies have validated the effectiveness of controlled breathing 
                techniques like box breathing. Research published in the Journal of Clinical Medicine 
                found that participants who practiced structured breathing exercises showed:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>42% reduction in perceived stress levels after just 4 weeks of practice</li>
                <li>23% improvement in attention and cognitive performance</li>
                <li>18% decrease in cortisol levels, the primary stress hormone</li>
                <li>Significant improvements in sleep quality and emotional regulation</li>
                <li>Enhanced immune system markers and reduced inflammation</li>
              </ul>
              <p className="leading-relaxed">
                A groundbreaking study from Stanford University using fMRI brain imaging revealed that 
                controlled breathing directly affects the brain stem's respiratory control center, which 
                has connections to areas responsible for arousal, attention, and stress. This provides 
                neurological evidence for why breathing techniques are so effective for mental wellness.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Why This Technique Works So Well</h2>
              <div className="bg-gradient-to-r from-emerald-50 to-sky-50 rounded-lg p-6 mb-6">
                <h4 className="font-medium text-slate-700 mb-3">Key Advantages of 4-4-4-4 Breathing:</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-600">
                  <div className="space-y-2">
                    <p><strong>Simplicity:</strong> Easy to remember and practice anywhere</p>
                    <p><strong>Immediate Effect:</strong> Results felt within the first cycle</p>
                    <p><strong>Balanced Rhythm:</strong> Equal phases create perfect nervous system harmony</p>
                  </div>
                  <div className="space-y-2">
                    <p><strong>No Equipment:</strong> Requires nothing but your natural breathing</p>
                    <p><strong>Scientifically Validated:</strong> Backed by extensive research</p>
                    <p><strong>Universally Applicable:</strong> Safe for most people and situations</p>
                  </div>
                </div>
              </div>
              <p className="leading-relaxed">
                The equal timing of each phase is crucial to the technique's effectiveness. Unlike other 
                breathing methods that emphasize longer exhalations or complex patterns, the 4-4-4-4 
                method creates perfect balance in your nervous system. This symmetry helps synchronize 
                multiple physiological processes, creating a state of coherence between your heart, brain, 
                and respiratory system.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Common Variations and Adaptations</h2>
              <p className="leading-relaxed">
                While we focus on the 4-4-4-4 pattern for its simplicity and effectiveness, you may 
                encounter variations of box breathing in other contexts:
              </p>
              <div className="space-y-3 text-sm text-slate-600 ml-4">
                <p><strong>4-7-8 Breathing:</strong> Inhale 4, hold 7, exhale 8 (popularized by Dr. Andrew Weil)</p>
                <p><strong>6-6-6-6 Box Breathing:</strong> Extended version for advanced practitioners</p>
                <p><strong>3-3-3-3 Quick Relief:</strong> Shorter version for immediate stress response</p>
                <p><strong>Counted Breathing:</strong> Using mental counting instead of timed seconds</p>
              </div>
              <p className="leading-relaxed">
                We recommend starting with the 4-4-4-4 pattern as it provides the optimal balance of 
                effectiveness and accessibility. Once you've mastered this technique, you can explore 
                variations based on your specific needs and comfort level.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Integration with Modern Life</h2>
              <p className="leading-relaxed">
                One of the greatest strengths of box breathing is its adaptability to modern lifestyles. 
                Unlike meditation practices that require quiet spaces and extended time commitments, 
                this technique can be seamlessly integrated into daily routines:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>During commutes (when not driving) to transform travel time into wellness time</li>
                <li>Between meetings to reset focus and reduce accumulated stress</li>
                <li>Before important presentations or conversations to enhance performance</li>
                <li>In waiting rooms, lines, or other idle moments throughout the day</li>
                <li>As a bedtime ritual to promote deeper, more restorative sleep</li>
              </ul>
            </section>

            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30 mt-8">
              <h3 className="text-xl font-medium text-slate-700 mb-4">Ready to Experience the Benefits?</h3>
              <p className="text-slate-600 mb-4">
                Understanding the science behind 4-4-4-4 breathing is just the beginning. The real benefits 
                come from regular practice. Our guided breathing tool makes it easy to get started and 
                build a consistent practice.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link 
                  href="/" 
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-6 rounded-lg transition-colors text-center"
                  data-testid="button-try-breathing"
                >
                  Try the Breathing Exercise
                </Link>
                <Link 
                  href="/practice-guide" 
                  className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium py-3 px-6 rounded-lg transition-colors text-center"
                  data-testid="link-practice-guide"
                >
                  Learn Practice Tips
                </Link>
              </div>
            </div>
          </div>
        </motion.article>
      </main>

      <footer className="mt-16 py-8 px-4 text-center border-t border-slate-200/50">
        <p className="text-slate-400 text-xs">
          © 2025 Zonely Space. All rights reserved.
        </p>
      </footer>
    </div>
  );
}