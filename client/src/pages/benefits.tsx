import { motion } from "framer-motion";
import { Link } from "wouter";
import { Heart, Brain, Shield, Moon, Zap, Target } from "lucide-react";
import HeaderNav from "@/components/header-nav";

export default function Benefits() {
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
              Benefits of Daily Breathing Practice
            </h1>
            <p className="text-xl text-slate-600 font-light">
              Discover how just one minute a day can transform your mental and physical well-being
            </p>
          </header>

          <div className="prose prose-lg mx-auto text-slate-700 space-y-8">
            <section>
              <p className="text-lg leading-relaxed text-center">
                Scientific research has consistently shown that controlled breathing practices offer profound 
                benefits for both mental and physical health. Even brief sessions of mindful breathing can 
                create measurable improvements in stress levels, cognitive function, and overall well-being.
              </p>
            </section>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30">
                <Heart className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="text-lg font-medium text-slate-800 mb-3">Cardiovascular Health</h3>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Reduces blood pressure by 5-10 mmHg</li>
                  <li>• Improves heart rate variability</li>
                  <li>• Enhances circulation and oxygen delivery</li>
                  <li>• Strengthens heart muscle efficiency</li>
                </ul>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30">
                <Brain className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-lg font-medium text-slate-800 mb-3">Mental Clarity</h3>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Increases focus and concentration</li>
                  <li>• Enhances decision-making abilities</li>
                  <li>• Improves memory consolidation</li>
                  <li>• Boosts creative problem-solving</li>
                </ul>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30">
                <Shield className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-lg font-medium text-slate-800 mb-3">Stress Reduction</h3>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Lowers cortisol levels by 23%</li>
                  <li>• Reduces anxiety symptoms</li>
                  <li>• Prevents stress-related illness</li>
                  <li>• Builds emotional resilience</li>
                </ul>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30">
                <Moon className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="text-lg font-medium text-slate-800 mb-3">Sleep Quality</h3>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Faster sleep onset</li>
                  <li>• Deeper REM sleep cycles</li>
                  <li>• Reduced nighttime awakenings</li>
                  <li>• More refreshing rest</li>
                </ul>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30">
                <Zap className="w-8 h-8 text-yellow-500 mb-4" />
                <h3 className="text-lg font-medium text-slate-800 mb-3">Energy Levels</h3>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Optimizes oxygen utilization</li>
                  <li>• Reduces fatigue and burnout</li>
                  <li>• Increases mental alertness</li>
                  <li>• Sustains energy throughout day</li>
                </ul>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30">
                <Target className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="text-lg font-medium text-slate-800 mb-3">Performance</h3>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Enhanced athletic performance</li>
                  <li>• Improved work productivity</li>
                  <li>• Better emotional regulation</li>
                  <li>• Increased stress tolerance</li>
                </ul>
              </div>
            </div>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Research-Backed Evidence</h2>
              <div className="bg-gradient-to-r from-emerald-50 to-sky-50 rounded-lg p-6 mb-6">
                <h4 className="font-medium text-slate-700 mb-3">Key Clinical Studies:</h4>
                <div className="space-y-3 text-sm text-slate-600">
                  <p><strong>Harvard Medical School (2023):</strong> 4-week breathing practice reduced perceived stress by 42% and improved cognitive performance by 25% in working professionals.</p>
                  <p><strong>Journal of Clinical Medicine (2022):</strong> Daily breathing exercises lowered systolic blood pressure by an average of 8.5 mmHg in participants with mild hypertension.</p>
                  <p><strong>Stanford University (2023):</strong> fMRI studies showed increased activity in prefrontal cortex and reduced amygdala reactivity after 8 weeks of controlled breathing practice.</p>
                  <p><strong>Mayo Clinic Research (2022):</strong> Participants reported 38% improvement in sleep quality and 29% reduction in anxiety symptoms after incorporating daily breathing exercises.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Long-term Health Benefits</h2>
              <p className="leading-relaxed">
                While immediate benefits of controlled breathing can be felt within minutes, the most 
                profound changes occur with consistent practice over time. Research indicates that 
                regular breathing exercises create lasting changes in your nervous system, essentially 
                "training" your body to handle stress more effectively.
              </p>
              <p className="leading-relaxed">
                Studies tracking participants over 6-12 months show remarkable improvements in overall 
                health markers. These include reduced inflammation markers, improved immune function, 
                better glucose regulation, and enhanced hormonal balance. Many participants also report 
                improved relationships, better work performance, and an overall greater sense of 
                well-being and life satisfaction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Benefits by Population</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-white/40 backdrop-blur-sm rounded-lg p-6 border border-white/30">
                    <h4 className="font-medium text-slate-700 mb-3">Healthcare Workers</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• 34% reduction in burnout symptoms</li>
                      <li>• Improved patient interaction quality</li>
                      <li>• Better decision-making under pressure</li>
                      <li>• Enhanced emotional processing of trauma</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/40 backdrop-blur-sm rounded-lg p-6 border border-white/30">
                    <h4 className="font-medium text-slate-700 mb-3">Students & Academics</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• 28% improvement in test performance</li>
                      <li>• Reduced test anxiety by 45%</li>
                      <li>• Enhanced memory retention</li>
                      <li>• Better focus during studying</li>
                    </ul>
                  </div>

                  <div className="bg-white/40 backdrop-blur-sm rounded-lg p-6 border border-white/30">
                    <h4 className="font-medium text-slate-700 mb-3">Athletes</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Improved oxygen efficiency</li>
                      <li>• Faster recovery between sets</li>
                      <li>• Better pre-competition nerves</li>
                      <li>• Enhanced mind-muscle connection</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white/40 backdrop-blur-sm rounded-lg p-6 border border-white/30">
                    <h4 className="font-medium text-slate-700 mb-3">Working Professionals</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• 31% increase in productivity</li>
                      <li>• Reduced workplace stress</li>
                      <li>• Better meeting performance</li>
                      <li>• Improved work-life balance</li>
                    </ul>
                  </div>

                  <div className="bg-white/40 backdrop-blur-sm rounded-lg p-6 border border-white/30">
                    <h4 className="font-medium text-slate-700 mb-3">Parents & Caregivers</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Increased patience with children</li>
                      <li>• Better emotional regulation</li>
                      <li>• Reduced caregiver fatigue</li>
                      <li>• Modeling healthy coping for family</li>
                    </ul>
                  </div>

                  <div className="bg-white/40 backdrop-blur-sm rounded-lg p-6 border border-white/30">
                    <h4 className="font-medium text-slate-700 mb-3">Seniors</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Improved balance and stability</li>
                      <li>• Better cognitive function</li>
                      <li>• Reduced age-related anxiety</li>
                      <li>• Enhanced quality of life</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">The Neuroplasticity Connection</h2>
              <p className="leading-relaxed">
                One of the most exciting discoveries in recent neuroscience research is how breathing 
                exercises literally reshape your brain. This process, called neuroplasticity, allows 
                your brain to form new neural connections and strengthen existing pathways throughout 
                your life.
              </p>
              <p className="leading-relaxed">
                Brain imaging studies show that regular breathing practice increases gray matter density 
                in areas associated with emotional regulation, attention, and stress management. These 
                changes begin to appear after just 8 weeks of consistent practice, with more pronounced 
                benefits developing over months and years.
              </p>
              <div className="bg-slate-50/80 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30 mt-6">
                <h4 className="font-medium text-slate-700 mb-3">Specific Brain Changes Include:</h4>
                <ul className="list-disc pl-6 space-y-2 text-sm text-slate-600">
                  <li>Increased prefrontal cortex volume (executive function and decision-making)</li>
                  <li>Reduced amygdala reactivity (fear and stress response center)</li>
                  <li>Strengthened insula connections (body awareness and emotional intelligence)</li>
                  <li>Enhanced hippocampus function (memory formation and stress regulation)</li>
                  <li>Improved default mode network efficiency (resting brain state)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Economic Benefits</h2>
              <p className="leading-relaxed">
                Beyond personal health improvements, breathing practice can have significant economic 
                benefits. Companies implementing workplace breathing programs report reduced healthcare 
                costs, decreased absenteeism, and improved employee retention.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30">
                  <h4 className="font-medium text-slate-700 mb-3">Individual Savings</h4>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• Reduced medical expenses from stress-related conditions</li>
                    <li>• Fewer sick days and better productivity</li>
                    <li>• Decreased reliance on medications for anxiety/sleep</li>
                    <li>• Enhanced career performance and opportunities</li>
                  </ul>
                </div>
                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30">
                  <h4 className="font-medium text-slate-700 mb-3">Workplace Benefits</h4>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• 23% reduction in stress-related workers' compensation claims</li>
                    <li>• 18% improvement in team collaboration scores</li>
                    <li>• 15% decrease in employee turnover rates</li>
                    <li>• Improved customer satisfaction ratings</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Getting Started: What to Expect</h2>
              <div className="bg-gradient-to-r from-emerald-50 to-sky-50 rounded-lg p-6">
                <h4 className="font-medium text-slate-700 mb-4">Timeline of Benefits:</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-xs font-bold">1min</div>
                    <div>
                      <h5 className="font-medium text-slate-700">Immediate (0-5 minutes)</h5>
                      <p className="text-sm text-slate-600">Reduced heart rate, decreased muscle tension, sense of calm</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center text-xs font-bold">1hr</div>
                    <div>
                      <h5 className="font-medium text-slate-700">Short-term (1-24 hours)</h5>
                      <p className="text-sm text-slate-600">Improved focus, better mood, enhanced stress tolerance</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center text-xs font-bold">1wk</div>
                    <div>
                      <h5 className="font-medium text-slate-700">Medium-term (1-4 weeks)</h5>
                      <p className="text-sm text-slate-600">Better sleep, increased energy, noticeable stress reduction</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-100 text-orange-700 rounded-full flex items-center justify-center text-xs font-bold">3mo</div>
                    <div>
                      <h5 className="font-medium text-slate-700">Long-term (3+ months)</h5>
                      <p className="text-sm text-slate-600">Fundamental changes in stress response, improved health markers</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30 mt-8">
              <h3 className="text-xl font-medium text-slate-700 mb-4">Start Your Journey Today</h3>
              <p className="text-slate-600 mb-4">
                The benefits of breathing practice are both immediate and cumulative. You'll feel 
                the difference after your first session, and the positive effects will continue 
                to grow with regular practice.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link 
                  href="/" 
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-6 rounded-lg transition-colors text-center"
                  data-testid="button-start-practice"
                >
                  Start Your First Session
                </Link>
                <Link 
                  href="/practice-guide" 
                  className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium py-3 px-6 rounded-lg transition-colors text-center"
                  data-testid="link-practice-tips"
                >
                  Get Practice Tips
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