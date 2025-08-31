import { Link } from "wouter";

export default function HeaderNav() {
  return (
    <nav className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-slate-200/50 z-50">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <h1 className="text-xl font-medium text-slate-800">Zonely Space</h1>
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/about-technique" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">Technique</Link>
          <Link href="/benefits" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">Benefits</Link>
          <Link href="/practice-guide" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">Practice</Link>
          <Link href="/blog" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">Blog</Link>
          <Link href="/about" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">About</Link>
          <Link href="/contact" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">Contact</Link>
        </div>
        <div className="md:hidden">
          <button className="text-slate-600 hover:text-slate-900 transition-colors" data-testid="button-mobile-menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
} 