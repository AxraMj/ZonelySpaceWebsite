import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function About() {
  return (
    <div className="font-sans gradient-bg min-h-screen">
      <header className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-slate-200/50 z-50">
        <nav className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 text-slate-700 hover:text-slate-900 transition-colors">
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Zonely Space</span>
          </Link>
          <div className="flex space-x-6">
            <Link href="/about" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">About</Link>
            <Link href="/contact" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</Link>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-slate-800 mb-4">
              About Zonely Space
            </h1>
            <p className="text-xl text-slate-600 font-light">
              Your gateway to instant mindfulness and stress relief
            </p>
          </header>

          <div className="prose prose-lg mx-auto text-slate-700 space-y-8">
            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Our Mission</h2>
              <p className="leading-relaxed">
                Zonely Space was created with a simple yet powerful mission: to make mindfulness accessible to everyone, 
                anywhere, at any time. In today's fast-paced world, stress and anxiety have become commonplace, affecting 
                millions of people daily. We believe that everyone deserves access to effective, science-backed tools 
                for mental wellness that don't require extensive training or time commitments.
              </p>
              <p className="leading-relaxed">
                Our platform provides a free, instant solution for stress relief through guided breathing exercises 
                that can be completed in just one minute. By combining ancient mindfulness practices with modern 
                technology and scientific research, we've created a tool that fits seamlessly into busy lifestyles 
                while delivering measurable benefits for mental health and well-being.
              </p>
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
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Our Commitment to Accessibility</h2>
              <p className="leading-relaxed">
                Mental health resources should be available to everyone, regardless of economic status, location, 
                or technical expertise. That's why Zonely Space is completely free to use, requires no registration 
                or personal information, and works on any device with a web browser.
              </p>
              <p className="leading-relaxed">
                We've designed our platform with accessibility in mind, ensuring it works for users with various 
                abilities and technical comfort levels. The interface is intuitive, the instructions are clear, 
                and the experience is consistent across desktop and mobile devices.
              </p>
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
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Looking Forward</h2>
              <p className="leading-relaxed">
                As we continue to develop Zonely Space, we remain committed to our core values of accessibility, 
                scientific accuracy, and user privacy. We're constantly researching new techniques and technologies 
                that can enhance the effectiveness of brief mindfulness interventions while maintaining the simplicity 
                and immediate accessibility that makes our platform unique.
              </p>
              <p className="leading-relaxed">
                Your feedback and experiences help us improve and ensure that Zonely Space continues to meet the 
                needs of people seeking practical, effective tools for stress management and mental wellness.
              </p>
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