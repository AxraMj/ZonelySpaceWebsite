import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Mail, MessageCircle, Heart } from "lucide-react";

export default function Contact() {
  return (
    <div className="font-sans gradient-bg min-h-screen">
      <header className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-slate-200/50 z-50">
        <nav className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 text-slate-700 hover:text-slate-900 transition-colors">
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Zonely Space</span>
          </Link>
          <div className="flex space-x-6">
            <Link href="/about" className="text-slate-600 hover:text-slate-900 transition-colors">About</Link>
            <Link href="/contact" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Contact</Link>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-slate-800 mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-600 font-light">
              We'd love to hear from you and support your wellness journey
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12">
            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-6">How We Can Help</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800 mb-2">General Questions</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Have questions about our breathing exercises, the science behind them, or how to get the most 
                      from your practice? We're here to help you understand and optimize your wellness routine.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800 mb-2">Share Your Experience</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Your success stories and feedback help us improve Zonely Space and inspire others on their 
                      wellness journey. We'd love to hear how our breathing exercises have helped you.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800 mb-2">Technical Support</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Experiencing technical issues with the website or breathing exercises? Let us know the details 
                      and we'll work to resolve any problems quickly.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-6">Contact Information</h2>
              
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-slate-800 mb-2">Email Us</h3>
                    <a 
                      href="mailto:hello@zonelyspace.com"
                      className="text-sky-600 hover:text-sky-700 transition-colors"
                    >
                      hello@zonelyspace.com
                    </a>
                    <p className="text-slate-500 text-sm mt-1">
                      We typically respond within 24 hours
                    </p>
                  </div>

                  <div className="border-t border-slate-200/50 pt-4">
                    <h3 className="font-medium text-slate-800 mb-2">Response Time</h3>
                    <p className="text-slate-600 text-sm">
                      Monday - Friday: Within 24 hours<br />
                      Weekends: Within 48 hours
                    </p>
                  </div>

                  <div className="border-t border-slate-200/50 pt-4">
                    <h3 className="font-medium text-slate-800 mb-2">Privacy</h3>
                    <p className="text-slate-600 text-sm">
                      We respect your privacy and will never share your contact information with third parties. 
                      All communications are confidential and secure.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <section className="mt-16">
            <div className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-medium text-slate-800 mb-4">
                Join Our Community
              </h2>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                While we work on building a community platform, we encourage you to share Zonely Space with friends, 
                family, and colleagues who might benefit from quick, effective stress relief. Together, we can create 
                a more mindful and peaceful world, one breath at a time.
              </p>
              <div className="flex justify-center space-x-4">
                <Link 
                  href="/"
                  className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-full font-medium transition-colors"
                >
                  Try Breathing Exercise
                </Link>
                <Link 
                  href="/about"
                  className="bg-white hover:bg-slate-50 text-slate-700 px-6 py-3 rounded-full font-medium border border-slate-200 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-medium text-slate-800 mb-6 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30">
                <h3 className="font-medium text-slate-800 mb-2">Is Zonely Space really free?</h3>
                <p className="text-slate-600 text-sm">
                  Yes, absolutely! Zonely Space is completely free to use with no hidden fees, subscriptions, or premium features. 
                  We believe everyone should have access to effective stress relief tools.
                </p>
              </div>

              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30">
                <h3 className="font-medium text-slate-800 mb-2">How often should I use the breathing exercise?</h3>
                <p className="text-slate-600 text-sm">
                  You can use our breathing exercise as often as you'd like! Many users find it helpful to practice 2-3 times 
                  per day - once in the morning, during a midday break, and before bed. Listen to your body and use it whenever 
                  you feel stressed or need to refocus.
                </p>
              </div>

              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30">
                <h3 className="font-medium text-slate-800 mb-2">Can I use this if I have anxiety or breathing problems?</h3>
                <p className="text-slate-600 text-sm">
                  Our breathing exercises are gentle and designed to be safe for most people. However, if you have any medical 
                  conditions, anxiety disorders, or breathing problems, please consult with your healthcare provider before 
                  beginning any new breathing practice.
                </p>
              </div>

              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30">
                <h3 className="font-medium text-slate-800 mb-2">Why is it only one minute?</h3>
                <p className="text-slate-600 text-sm">
                  We chose one minute because research shows that even brief mindfulness practices can provide significant benefits, 
                  and it's easy to fit into any schedule. Many people find longer sessions intimidating or impractical, but everyone 
                  can spare one minute for their mental health.
                </p>
              </div>
            </div>
          </section>
        </motion.div>
      </main>

      <footer className="mt-16 py-8 px-4 text-center border-t border-slate-200/50">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="/privacy" className="text-slate-500 hover:text-slate-700 text-sm transition-colors">
            Privacy Policy
          </Link>
        </div>
        <p className="text-slate-400 text-xs">
          © 2025 Zonely. All rights reserved.
        </p>
      </footer>
    </div>
  );
}