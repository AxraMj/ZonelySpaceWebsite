import { motion } from "framer-motion";
import { Link } from "wouter";
import { MapPin, Clock, Smartphone, Users, AlertTriangle, CheckCircle } from "lucide-react";
import HeaderNav from "@/components/header-nav";

export default function PracticeGuide() {
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
              How to Practice Anywhere
            </h1>
            <p className="text-xl text-slate-600 font-light">
              Master the art of mindful breathing in any situation, from busy offices to quiet bedrooms
            </p>
          </header>

          <div className="prose prose-lg mx-auto text-slate-700 space-y-8">
            <section>
              <p className="text-lg leading-relaxed text-center">
                The beauty of controlled breathing is its universal accessibility. Whether you're in 
                a boardroom, on public transport, or lying in bed, you can practice this powerful 
                technique anywhere, anytime. Here's your complete guide to making breathing practice 
                a seamless part of your daily life.
              </p>
            </section>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30">
                <MapPin className="w-8 h-8 text-emerald-500 mb-4" />
                <h3 className="text-lg font-medium text-slate-800 mb-3">Anywhere Practice</h3>
                <p className="text-sm text-slate-600">
                  No special location required. Practice at your desk, in waiting rooms, 
                  on planes, or during walks.
                </p>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30">
                <Clock className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-lg font-medium text-slate-800 mb-3">Flexible Timing</h3>
                <p className="text-sm text-slate-600">
                  One minute is all you need. Practice multiple times daily 
                  or whenever stress levels rise.
                </p>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30">
                <Smartphone className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="text-lg font-medium text-slate-800 mb-3">Mobile-Friendly</h3>
                <p className="text-sm text-slate-600">
                  Works perfectly on phones, tablets, and computers. 
                  Practice with or without our guided tool.
                </p>
              </div>
            </div>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Getting Started: The Fundamentals</h2>
              <div className="bg-gradient-to-r from-emerald-50 to-sky-50 rounded-lg p-6 mb-6">
                <h4 className="font-medium text-slate-700 mb-4">Basic Setup (30 seconds or less):</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                    <p className="text-sm text-slate-600"><strong>Position:</strong> Sit or stand with spine naturally straight. No need to be rigid.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-sky-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                    <p className="text-sm text-slate-600"><strong>Hands:</strong> Rest comfortably on lap, desk, or by your sides. No special mudras needed.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                    <p className="text-sm text-slate-600"><strong>Eyes:</strong> Open or closed, whatever feels comfortable. In public, keep them open.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
                    <p className="text-sm text-slate-600"><strong>Begin:</strong> Start breathing naturally, then begin the 4-4-4-4 pattern.</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Location-Specific Guides</h2>
              
              <div className="space-y-6">
                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30">
                  <h4 className="font-medium text-slate-700 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                    At Work / Office
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-600">
                    <div>
                      <p className="font-medium mb-2">Best Times:</p>
                      <ul className="space-y-1">
                        <li>• Before important meetings</li>
                        <li>• Between tasks or projects</li>
                        <li>• After difficult phone calls</li>
                        <li>• During lunch breaks</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Pro Tips:</p>
                      <ul className="space-y-1">
                        <li>• Practice at your desk with eyes open</li>
                        <li>• Use bathroom breaks for private sessions</li>
                        <li>• Set phone reminders for regular practice</li>
                        <li>• Practice while reading emails (eyes open)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30">
                  <h4 className="font-medium text-slate-700 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mr-2"></span>
                    Commuting / Travel
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-600">
                    <div>
                      <p className="font-medium mb-2">Safe Situations:</p>
                      <ul className="space-y-1">
                        <li>• As a passenger in cars/rideshares</li>
                        <li>• On trains, buses, planes</li>
                        <li>• In traffic (when stopped)</li>
                        <li>• Walking (eyes open, natural pace)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Travel Benefits:</p>
                      <ul className="space-y-1">
                        <li>• Reduces travel anxiety</li>
                        <li>• Combats motion sickness</li>
                        <li>• Transforms dead time into wellness time</li>
                        <li>• Arrives feeling refreshed</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30">
                  <h4 className="font-medium text-slate-700 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    At Home
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-600">
                    <div>
                      <p className="font-medium mb-2">Ideal Times:</p>
                      <ul className="space-y-1">
                        <li>• Morning routine (wake-up ritual)</li>
                        <li>• Before meals for mindful eating</li>
                        <li>• After work to transition</li>
                        <li>• Before bed for better sleep</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Home Advantages:</p>
                      <ul className="space-y-1">
                        <li>• Privacy for deeper practice</li>
                        <li>• Can close eyes comfortably</li>
                        <li>• Create dedicated practice space</li>
                        <li>• Include family members</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30">
                  <h4 className="font-medium text-slate-700 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Public Spaces
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-600">
                    <div>
                      <p className="font-medium mb-2">Common Situations:</p>
                      <ul className="space-y-1">
                        <li>• Waiting rooms (medical, appointments)</li>
                        <li>• Lines and queues</li>
                        <li>• Parks and outdoor spaces</li>
                        <li>• Cafes and restaurants</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Discrete Practice:</p>
                      <ul className="space-y-1">
                        <li>• Keep eyes open and relaxed</li>
                        <li>• Breathe through nose quietly</li>
                        <li>• Maintain normal posture</li>
                        <li>• No one will notice you're practicing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Tips for Beginners</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-emerald-50 rounded-lg p-4">
                    <h4 className="font-medium text-slate-700 mb-2 flex items-center">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                      Do These Things
                    </h4>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Start with just one session per day</li>
                      <li>• Practice at the same time daily to build habit</li>
                      <li>• Use our guided tool until rhythm feels natural</li>
                      <li>• Focus on the exhale for maximum relaxation</li>
                      <li>• Be patient - benefits increase with practice</li>
                      <li>• Celebrate small wins and consistency</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-medium text-slate-700 mb-2 flex items-center">
                      <AlertTriangle className="w-4 h-4 text-red-600 mr-2" />
                      Common Mistakes to Avoid
                    </h4>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Don't strain or force the breath</li>
                      <li>• Avoid practicing when driving</li>
                      <li>• Don't hold breath if it causes discomfort</li>
                      <li>• Skip practice if feeling dizzy or unwell</li>
                      <li>• Don't expect instant transformation</li>
                      <li>• Avoid judging your "performance"</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Building a Sustainable Practice</h2>
              <div className="bg-gradient-to-r from-emerald-50 to-sky-50 rounded-lg p-6">
                <h4 className="font-medium text-slate-700 mb-4">The 21-Day Challenge:</h4>
                <p className="text-sm text-slate-600 mb-4">
                  Research shows it takes approximately 21 days to form a new habit. Start with this simple 
                  progression to build lasting practice:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-emerald-600 font-bold text-sm">Week 1</span>
                    </div>
                    <h5 className="font-medium text-slate-700 mb-1">Foundation</h5>
                    <p className="text-xs text-slate-600">Practice once daily at the same time. Focus on learning the rhythm.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-sky-600 font-bold text-sm">Week 2</span>
                    </div>
                    <h5 className="font-medium text-slate-700 mb-1">Expansion</h5>
                    <p className="text-xs text-slate-600">Add a second session. Practice in different locations and situations.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-purple-600 font-bold text-sm">Week 3</span>
                    </div>
                    <h5 className="font-medium text-slate-700 mb-1">Integration</h5>
                    <p className="text-xs text-slate-600">Practice as needed throughout day. Notice benefits and habit formation.</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Advanced Practice Tips</h2>
              <div className="space-y-4">
                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30">
                  <h4 className="font-medium text-slate-700 mb-3">Habit Stacking</h4>
                  <p className="text-sm text-slate-600 mb-3">
                    Link breathing practice to existing habits for automatic consistency:
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 text-xs text-slate-600">
                    <ul className="space-y-1">
                      <li>• After morning coffee → breathing practice</li>
                      <li>• Before checking emails → breathing practice</li>
                      <li>• After lunch → breathing practice</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>• Before entering meetings → breathing practice</li>
                      <li>• After arriving home → breathing practice</li>
                      <li>• Before brushing teeth → breathing practice</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30">
                  <h4 className="font-medium text-slate-700 mb-3">Environmental Optimization</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-600">
                    <div>
                      <p className="font-medium mb-2">Enhance Your Practice:</p>
                      <ul className="space-y-1">
                        <li>• Choose consistent, quiet spaces when possible</li>
                        <li>• Maintain comfortable temperature</li>
                        <li>• Use natural lighting when available</li>
                        <li>• Consider soft background sounds in private</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Adapt to Constraints:</p>
                      <ul className="space-y-1">
                        <li>• Practice effectively in noisy environments</li>
                        <li>• Use internal focus when surroundings are chaotic</li>
                        <li>• Embrace imperfect conditions as part of training</li>
                        <li>• View challenges as opportunities to deepen practice</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Sharing the Practice</h2>
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30">
                <h4 className="font-medium text-slate-700 mb-3 flex items-center">
                  <Users className="w-5 h-5 text-sky-600 mr-2" />
                  Teaching Others
                </h4>
                <p className="text-sm text-slate-600 mb-4">
                  Once you've established your own practice, consider sharing the benefits with others:
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-600">
                  <div>
                    <p className="font-medium mb-2">Family & Friends:</p>
                    <ul className="space-y-1">
                      <li>• Model the practice during stressful moments</li>
                      <li>• Teach children simple breathing games</li>
                      <li>• Practice together during family time</li>
                      <li>• Share our guided tool as a resource</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Workplace:</p>
                    <ul className="space-y-1">
                      <li>• Suggest team breathing breaks</li>
                      <li>• Share the tool with stressed colleagues</li>
                      <li>• Advocate for wellness programs</li>
                      <li>• Lead by example during high-pressure situations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30 mt-8">
              <h3 className="text-xl font-medium text-slate-700 mb-4">Ready to Practice Everywhere?</h3>
              <p className="text-slate-600 mb-4">
                Remember: the best breathing practice is the one you actually do. Start where you are, 
                use what you have, and practice consistently. Every breath is an opportunity for greater calm and clarity.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link 
                  href="/" 
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-6 rounded-lg transition-colors text-center"
                  data-testid="button-start-practicing"
                >
                  Start Practicing Now
                </Link>
                <Link 
                  href="/about-technique" 
                  className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium py-3 px-6 rounded-lg transition-colors text-center"
                  data-testid="link-learn-technique"
                >
                  Learn the Technique
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