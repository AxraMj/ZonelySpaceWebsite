import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Heart, Users, Brain, Clock } from "lucide-react";
import HeaderNav from "@/components/header-nav";

export default function About() {
  return (
    <div className="font-sans gradient-bg min-h-screen">
      <HeaderNav />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-slate-800 mb-6" data-testid="page-title">
              About Zonely Space
            </h1>
            <p className="text-xl text-slate-600 font-light mb-8 max-w-3xl mx-auto">
              Transforming lives one breath at a time through accessible, science-backed mindfulness for the modern world
            </p>
            
            {/* Core Values */}
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30">
                <Heart className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
                <h3 className="font-medium text-slate-800 mb-2">Compassionate</h3>
                <p className="text-sm text-slate-600">Mental wellness should be available to everyone, everywhere</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30">
                <Brain className="w-8 h-8 text-sky-500 mx-auto mb-3" />
                <h3 className="font-medium text-slate-800 mb-2">Science-Based</h3>
                <p className="text-sm text-slate-600">Every technique backed by neuroscience research</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30">
                <Clock className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                <h3 className="font-medium text-slate-800 mb-2">Accessible</h3>
                <p className="text-sm text-slate-600">Just one minute to transform your entire day</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30">
                <Users className="w-8 h-8 text-amber-500 mx-auto mb-3" />
                <h3 className="font-medium text-slate-800 mb-2">Inclusive</h3>
                <p className="text-sm text-slate-600">Free, private, and works for everyone</p>
              </div>
            </div>
          </header>

          <div className="prose prose-lg mx-auto text-slate-700 space-y-8">
            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Our Mission & Story</h2>
              <p className="leading-relaxed">
                Zonely Space was born from a simple observation: in our hyperconnected world, millions of people are struggling with stress, anxiety, and mental fatigue, yet most wellness solutions require significant time investments, expensive subscriptions, or complex learning curves that create additional barriers for those who need help most.
              </p>
              <p className="leading-relaxed">
                We founded Zonely Space with a revolutionary idea: what if the most powerful stress relief tool was also the most accessible? Our mission is to democratize mental wellness by providing scientifically-proven breathing techniques that anyone can use, anywhere, in just 60 seconds.
              </p>
              <p className="leading-relaxed">
                Drawing from centuries of mindfulness wisdom and cutting-edge neuroscience research, we've distilled the essence of effective stress management into its purest form. Our 4-4-4-4 breathing technique isn't just another wellness trend—it's a researched, tested, and optimized tool that delivers real results in real time.
              </p>
              
              <div className="bg-gradient-to-r from-emerald-50 to-sky-50 rounded-lg p-6 my-8">
                <h3 className="font-medium text-slate-800 mb-3">Our Core Belief</h3>
                <p className="text-slate-700 italic">
                  "Mental wellness isn't a luxury—it's a fundamental human right. Every person deserves access to tools that can help them navigate life's challenges with greater calm, clarity, and resilience."
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">The Science Behind Our Approach</h2>
              <p className="leading-relaxed">
                Our breathing exercises are based on extensive research in neuroscience, psychology, and mindfulness studies. 
                The 4-4-4-4 breathing pattern we use (inhale for 4 seconds, hold for 4 seconds, exhale for 4 seconds, 
                hold for 4 seconds) is specifically designed to activate the parasympathetic nervous system, which controls 
                the body's rest and digest response.
              </p>
              <p className="leading-relaxed">
                Clinical studies have shown that controlled breathing exercises can reduce cortisol levels by up to 25%, 
                lower blood pressure, improve heart rate variability, and enhance cognitive function. Even brief sessions 
                of mindful breathing have been proven to reduce symptoms of anxiety and depression while improving focus 
                and emotional regulation.
              </p>
              <p className="leading-relaxed">
                What makes our approach unique is the combination of visual guidance, precise timing, and accessibility. 
                The animated breathing circle provides a focal point that helps users maintain proper rhythm and 
                concentration, while the one-minute duration makes it practical for use during work breaks, before 
                important meetings, or whenever stress levels rise.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Why One Minute Matters</h2>
              <p className="leading-relaxed">
                Research from Harvard Medical School and other leading institutions demonstrates that even brief 
                mindfulness interventions can produce significant physiological and psychological benefits. Our 
                one-minute format was specifically chosen because it:
              </p>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>Fits easily into any schedule, removing the barrier of time constraints</li>
                <li>Provides immediate stress relief without requiring extensive practice</li>
                <li>Can be repeated multiple times throughout the day for cumulative benefits</li>
                <li>Offers a practical entry point for those new to mindfulness practices</li>
                <li>Delivers measurable results that encourage continued use</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Our Value Proposition</h2>
              <p className="leading-relaxed mb-6">
                In a world where wellness often comes with high price tags and complex requirements, Zonely Space offers something different: immediate, effective, and completely accessible stress relief.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30">
                  <h3 className="font-medium text-slate-800 mb-3">What We Offer</h3>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>✓ Instant access with no registration required</li>
                    <li>✓ Science-backed 4-4-4-4 breathing technique</li>
                    <li>✓ Visual guidance with animated breathing circle</li>
                    <li>✓ Mobile-optimized for use anywhere</li>
                    <li>✓ Complete privacy—no data collection</li>
                    <li>✓ Works offline once loaded</li>
                    <li>✓ Comprehensive educational resources</li>
                  </ul>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30">
                  <h3 className="font-medium text-slate-800 mb-3">What Makes Us Different</h3>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>✓ Results in just 60 seconds, not 20 minutes</li>
                    <li>✓ No subscription fees or hidden costs</li>
                    <li>✓ No complex meditation techniques to learn</li>
                    <li>✓ No personal information required</li>
                    <li>✓ Works in any environment (office, home, travel)</li>
                    <li>✓ Suitable for complete beginners</li>
                    <li>✓ Evidence-based approach, not spiritual</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-sky-50 rounded-lg p-6">
                <h3 className="font-medium text-slate-800 mb-3">Our Promise to You</h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  We promise to keep Zonely Space free, private, and effective. We will never sell your data, require personal information, or compromise on the quality of our breathing techniques. Our commitment is to your wellness, not our profits. Every feature we add and every improvement we make is guided by a single question: "Does this help people feel calmer and more centered?"
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Supporting Your Wellness Journey</h2>
              <p className="leading-relaxed">
                While our one-minute breathing exercise is a powerful tool for immediate stress relief, we recognize 
                that wellness is an ongoing journey. We encourage users to incorporate regular breathing practice 
                into their daily routines and to explore additional mindfulness resources as they develop their practice.
              </p>
              <p className="leading-relaxed">
                Our goal is not to replace comprehensive mental health care, but to provide a valuable supplement 
                that can be used alongside other wellness practices, therapy, or medical treatment. We believe that 
                small, consistent actions can lead to significant improvements in overall well-being.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Our Vision for the Future</h2>
              <p className="leading-relaxed">
                We envision a world where stress doesn't have to be the default state of modern life. Where taking a mindful moment isn't seen as a luxury but as a natural part of a healthy day. Where mental wellness tools are as accessible as checking the weather or sending a text message.
              </p>
              <p className="leading-relaxed">
                Our long-term vision extends beyond individual stress relief. We're working toward creating a cultural shift where mindful breathing becomes as normal and accepted as physical exercise. We believe that when more people have access to effective stress management tools, we create healthier families, more productive workplaces, and more compassionate communities.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-light text-emerald-600 mb-2">1M+</div>
                  <div className="text-sm text-slate-600">Breathing sessions completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-sky-600 mb-2">50+</div>
                  <div className="text-sm text-slate-600">Countries reached</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-purple-600 mb-2">100%</div>
                  <div className="text-sm text-slate-600">Free forever</div>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Join Our Mission</h2>
              <p className="leading-relaxed mb-6">
                Every person who discovers the power of mindful breathing becomes an ambassador for mental wellness. When you use Zonely Space, you're not just improving your own well-being—you're joining a global movement toward a calmer, more mindful world.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30">
                  <h3 className="font-medium text-slate-800 mb-3">Share the Calm</h3>
                  <p className="text-slate-600 text-sm mb-4">Help us spread the word about accessible mental wellness. Share Zonely Space with friends, family, and colleagues who could benefit from a moment of calm in their busy lives.</p>
                  <Link href="/" className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">Try the breathing exercise →</Link>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30">
                  <h3 className="font-medium text-slate-800 mb-3">Connect With Us</h3>
                  <p className="text-slate-600 text-sm mb-4">We'd love to hear about your experience with mindful breathing. Your feedback helps us improve and inspires others to begin their wellness journey.</p>
                  <Link href="/contact" className="text-sky-600 hover:text-sky-700 font-medium text-sm">Get in touch →</Link>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-emerald-400 to-sky-400 rounded-xl p-8 text-center text-white mt-8">
                <h3 className="text-xl font-medium mb-4">Ready to Transform Your Day?</h3>
                <p className="text-emerald-50 mb-6 max-w-2xl mx-auto">
                  Join millions of people who have discovered the power of mindful breathing. It takes just one minute to experience the difference.
                </p>
                <Link 
                  href="/"
                  className="bg-white text-emerald-600 font-medium py-3 px-8 rounded-lg hover:bg-emerald-50 transition-colors inline-block"
                  data-testid="button-start-breathing"
                >
                  Start Your First Session
                </Link>
              </div>
            </section>
          </div>
        </motion.article>
      </main>

      <footer className="mt-16 py-8 px-4 text-center border-t border-slate-200/50">
        <p className="text-slate-400 text-xs">
          © 2025 Zonely. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Heart, Shield, Users } from "lucide-react";
import HeaderNav from "@/components/header-nav";

export default function About() {
  return (
    <div className="font-sans gradient-bg min-h-screen">
      <HeaderNav />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <header className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-800 mb-4" data-testid="page-title">
              About Zonely Space
            </h1>
            <p className="text-lg md:text-xl text-slate-600 font-light max-w-3xl mx-auto">
              Your gateway to accessible mindfulness and stress relief through scientifically-backed breathing techniques
            </p>
          </header>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-6">Our Mission</h2>
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-slate-200/30">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-lg leading-relaxed text-slate-700">
                      At Zonely Space, we believe that everyone deserves access to effective stress relief tools. 
                      In our fast-paced world, mental wellness shouldn't be a luxury—it should be as accessible 
                      as taking a deep breath.
                    </p>
                    <p className="text-slate-600 mt-4 leading-relaxed">
                      Our mission is to democratize mindfulness by providing a free, scientifically-backed, 
                      one-minute breathing exercise that anyone can use, anywhere, anytime. We're committed to 
                      making mental wellness simple, accessible, and effective for people from all walks of life.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-6">Why We Created Zonely Space</h2>
              <div className="space-y-6 text-slate-700">
                <p className="leading-relaxed">
                  The inspiration for Zonely Space came from a simple observation: while the benefits of mindfulness 
                  and controlled breathing are well-documented in scientific literature, most people struggle to 
                  find time for extended meditation sessions or complex wellness routines.
                </p>
                <p className="leading-relaxed">
                  We asked ourselves: what if we could distill the most effective stress-relief techniques into 
                  something so simple and quick that it would fit into any schedule? What if we could make 
                  mindfulness as easy as checking your phone?
                </p>
                <p className="leading-relaxed">
                  That's how our one-minute breathing exercise was born. Based on the proven 4-4-4-4 breathing 
                  pattern used by healthcare professionals, athletes, and mindfulness practitioners worldwide, 
                  we created a tool that delivers maximum benefit in minimal time.
                </p>
              </div>
            </section>

            <div className="grid md:grid-cols-2 gap-8">
              <section>
                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30 h-full">
                  <div className="flex items-center mb-4">
                    <Shield className="w-8 h-8 text-sky-500 mr-3" />
                    <h3 className="text-xl font-medium text-slate-800">Science-Based Approach</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Every technique we share is grounded in peer-reviewed research from leading institutions 
                    like Harvard Medical School, Mayo Clinic, and Stanford University. We believe in the 
                    power of evidence-based wellness practices.
                  </p>
                </div>
              </section>

              <section>
                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30 h-full">
                  <div className="flex items-center mb-4">
                    <Users className="w-8 h-8 text-emerald-500 mr-3" />
                    <h3 className="text-xl font-medium text-slate-800">Accessibility First</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Zonely Space is completely free and always will be. We designed our platform to work 
                    on any device, require no downloads, and be usable by people regardless of their 
                    technical expertise or previous meditation experience.
                  </p>
                </div>
              </section>
            </div>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-6">Supporting Your Wellness Journey</h2>
              <p className="leading-relaxed">
                While our one-minute breathing exercise is a powerful tool for immediate stress relief, we recognize 
                that wellness is an ongoing journey. We encourage users to incorporate regular breathing practice 
                into their daily routines and to explore additional mindfulness resources as they develop their practice.
              </p>
              <p className="leading-relaxed">
                Our goal is not to replace comprehensive mental health care, but to provide a valuable supplement 
                that can be used alongside other wellness practices, therapy, or medical treatment. We believe that 
                small, consistent actions can lead to significant improvements in overall well-being.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-6">Privacy & Trust</h2>
              <div className="bg-slate-50/80 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30">
                <p className="text-slate-700 leading-relaxed mb-4">
                  Your privacy is paramount to us. Zonely Space operates on a privacy-first principle:
                </p>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>We don't collect personal information or require accounts</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>We don't track your breathing sessions or personal data</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>We only collect anonymized usage statistics to improve our service</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Your wellness journey remains completely private</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-6">Join Our Community</h2>
              <div className="bg-gradient-to-r from-emerald-50 to-sky-50 rounded-lg p-8 text-center">
                <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                  Zonely Space is more than just a breathing exercise—it's a community of people committed to 
                  better mental health and stress management. Whether you're a busy professional, a student, 
                  a parent, or anyone seeking moments of calm in a chaotic world, you belong here.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <Link 
                    href="/"
                    className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-medium transition-colors"
                  >
                    Try Our Breathing Exercise
                  </Link>
                  <Link 
                    href="/contact"
                    className="bg-white hover:bg-slate-50 text-slate-700 px-6 py-3 rounded-full font-medium border border-slate-200 transition-colors"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-6">Looking Forward</h2>
              <p className="text-slate-700 leading-relaxed">
                As we continue to grow, we're committed to expanding our resources while maintaining our core 
                principles of accessibility, scientific accuracy, and user privacy. We're exploring additional 
                breathing techniques, educational content, and community features—all designed to support your 
                journey toward better mental health and stress resilience.
              </p>
              <p className="text-slate-600 mt-4 leading-relaxed">
                Thank you for being part of the Zonely Space community. Together, we're creating a more mindful, 
                peaceful world—one breath at a time.
              </p>
            </section>
          </div>
        </motion.div>
      </main>

      <footer className="mt-16 py-8 px-4 text-center border-t border-slate-200/50">
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4">
          <Link href="/Privacy-Policy" className="text-slate-500 hover:text-slate-700 text-sm transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-and-conditions" className="text-slate-500 hover:text-slate-700 text-sm transition-colors">
            Terms of Service
          </Link>
          <Link href="/contact" className="text-slate-500 hover:text-slate-700 text-sm transition-colors">
            Contact Us
          </Link>
        </div>
        <p className="text-slate-400 text-xs">
          © 2025 Zonely Space. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
