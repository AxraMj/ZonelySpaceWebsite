import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Heart, Shield, Users } from "lucide-react";
import HeaderNav from "@/components/header-nav";
import FooterLinks from "@/components/footer-links";

function About() {
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

export default About;