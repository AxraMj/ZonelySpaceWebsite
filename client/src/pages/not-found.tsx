
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Home, Search, ArrowLeft } from "lucide-react";
import HeaderNav from "@/components/header-nav";

function NotFound() {
  return (
    <div className="font-sans gradient-bg min-h-screen">
      <HeaderNav />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-light text-slate-300 mb-4">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-slate-800 mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
              The page you're looking for seems to have wandered off into the digital void. 
              Let's help you find your way back to a more peaceful state.
            </p>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-8 border border-slate-200/30 max-w-2xl mx-auto mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                <Search className="w-8 h-8 text-emerald-600" />
              </div>
            </div>
            <h3 className="text-xl font-medium text-slate-800 mb-4">
              While you're here, take a moment to breathe
            </h3>
            <p className="text-slate-600 mb-6">
              Even when things don't go as planned, a deep breath can help reset your mindset. 
              Try our one-minute breathing exercise to center yourself before continuing your journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-medium transition-colors inline-flex items-center justify-center"
              >
                <Home className="w-4 h-4 mr-2" />
                Take a Breathing Break
              </Link>
              <Link 
                href="/blog"
                className="bg-white hover:bg-slate-50 text-slate-700 px-6 py-3 rounded-full font-medium border border-slate-200 transition-colors inline-flex items-center justify-center"
              >
                <Search className="w-4 h-4 mr-2" />
                Explore Our Blog
              </Link>
            </div>
          </div>

          <div className="text-sm text-slate-500">
            <p className="mb-2">Looking for something specific? Try these popular pages:</p>
            <div className="flex flex-wrap justify-center gap-2">
              <Link href="/about-technique" className="hover:text-slate-700 transition-colors">About the Technique</Link>
              <span>•</span>
              <Link href="/benefits" className="hover:text-slate-700 transition-colors">Benefits</Link>
              <span>•</span>
              <Link href="/practice-guide" className="hover:text-slate-700 transition-colors">Practice Guide</Link>
              <span>•</span>
              <Link href="/contact" className="hover:text-slate-700 transition-colors">Contact</Link>
            </div>
          </div>
        </motion.div>
      </main>

      <footer className="mt-16 py-8 px-4 text-center border-t border-slate-200/50">
        <p className="text-slate-400 text-xs">
          © 2025 Zonely Space. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default NotFound;
