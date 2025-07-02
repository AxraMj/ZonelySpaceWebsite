import { motion } from "framer-motion";
import { Link } from "wouter";

export default function FooterLinks() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="py-8 px-4 text-center border-t border-slate-200/50"
    >
      <div className="flex justify-center space-x-6 mb-4">
        <Link href="/privacy" className="text-slate-500 hover:text-slate-700 text-sm transition-colors">
          Privacy Policy
        </Link>
      </div>
      <p className="text-slate-400 text-xs">
        © 2025 Zonely. All rights reserved.
      </p>
    </motion.footer>
  );
}
