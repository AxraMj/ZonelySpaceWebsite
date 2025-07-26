import { motion } from "framer-motion";
import { Link } from "wouter";
import { Linkedin } from "lucide-react";

export default function FooterLinks() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="py-8 px-4 text-center border-t border-slate-200/50"
    >
      <nav className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 mb-4">
        <Link href="/about" className="text-slate-500 hover:text-slate-700 text-sm transition-colors">
          About
        </Link>
        <Link href="/contact" className="text-slate-500 hover:text-slate-700 text-sm transition-colors">
          Contact
        </Link>
        <Link href="/privacy-policy" className="text-slate-500 hover:text-slate-700 text-sm transition-colors">
          Privacy Policy
        </Link>
        <Link href="/terms-and-conditions" className="text-slate-500 hover:text-slate-700 text-sm transition-colors">
          Terms of Service
        </Link>
      </nav>
      <div className="flex items-center justify-center space-x-2 text-slate-400">
        <p className="text-xs">
          © 2025 Zonely. All rights reserved.
        </p>
        <a 
          href="https://www.linkedin.com/company/zonely.space/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-slate-600 transition-colors"
          aria-label="Visit Zonely Space on LinkedIn"
        >
          <Linkedin size={16} />
        </a>
      </div>
    </motion.footer>
  );
}
