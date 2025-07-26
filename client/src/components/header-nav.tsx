import { Link } from "wouter";

export default function HeaderNav() {
  return (
    <nav className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-slate-200/50 z-50">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <h1 className="text-xl font-medium text-slate-800">Zonely Space</h1>
        </Link>
        <div className="flex space-x-6">
          <Link href="/about" className="text-slate-600 hover:text-slate-900 transition-colors">About</Link>
          <Link href="/contact" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
} 