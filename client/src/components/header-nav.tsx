import { useState } from "react";
import { Link } from "wouter";
import { X, Menu } from "lucide-react";

export default function HeaderNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-slate-200/50 z-50">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <h1 className="text-xl font-medium text-slate-800">Zonely Space</h1>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/about-technique" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">Technique</Link>
          <Link href="/benefits" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">Benefits</Link>
          <Link href="/practice-guide" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">Practice</Link>
          <Link href="/blog" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">Blog</Link>
          <Link href="/about" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">About</Link>
          <Link href="/contact" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">Contact</Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-600 hover:text-slate-900 transition-colors p-2" 
            data-testid="button-mobile-menu"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-slate-200/50">
          <div className="px-4 py-2 space-y-1">
            <Link 
              href="/about-technique" 
              className="block px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Technique
            </Link>
            <Link 
              href="/benefits" 
              className="block px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Benefits
            </Link>
            <Link 
              href="/practice-guide" 
              className="block px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Practice
            </Link>
            <Link 
              href="/blog" 
              className="block px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/about" 
              className="block px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="block px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 