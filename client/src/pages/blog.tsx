import { motion } from "framer-motion";
import { Link } from "wouter";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import HeaderNav from "@/components/header-nav";
import { blogPosts } from "@/data/blog-articles";

const categories = ["All", "Science", "Workplace", "Sleep", "Family", "Fitness", "Technology", "Lifestyle", "Mental Health", "Practice"];

const displayPosts = [
  {
    id: 1,
    title: "The Science of Stress: Why Your Body Needs Breathing Breaks",
    excerpt: "Discover how chronic stress rewires your brain and why controlled breathing is your most powerful tool for restoration and resilience.",
    date: "2025-01-15",
    readTime: "6 min read",
    category: "Science",
    slug: "science-of-stress-breathing-breaks"
  },
  {
    id: 2,
    title: "Workplace Wellness: Integrating Mindful Moments into Your 9-to-5",
    excerpt: "Transform your workday with strategic breathing practices that boost productivity, reduce burnout, and improve team dynamics.",
    date: "2025-01-12",
    readTime: "5 min read",
    category: "Workplace",
    slug: "workplace-wellness-mindful-moments"
  },
  {
    id: 3,
    title: "Sleep Better Tonight: Using Breathing Techniques for Deeper Rest",
    excerpt: "Learn specific breathing patterns that activate your parasympathetic nervous system and prepare your body for restorative sleep.",
    date: "2025-01-10",
    readTime: "7 min read",
    category: "Sleep",
    slug: "sleep-better-breathing-techniques"
  },
  {
    id: 4,
    title: "Teaching Kids to Breathe: Family-Friendly Mindfulness Activities",
    excerpt: "Age-appropriate breathing exercises and games that help children develop emotional regulation skills and stress management tools.",
    date: "2025-01-08",
    readTime: "5 min read",
    category: "Family",
    slug: "teaching-kids-breathe-family-mindfulness"
  },
  {
    id: 5,
    title: "The Athletic Edge: How Breathing Enhances Physical Performance",
    excerpt: "Professional athletes reveal how controlled breathing improves endurance, focus, and recovery across all sports and fitness levels.",
    date: "2025-01-05",
    readTime: "6 min read",
    category: "Fitness",
    slug: "athletic-edge-breathing-enhances-performance"
  },
  {
    id: 6,
    title: "Digital Detox Through Mindful Breathing: Reducing Screen Stress",
    excerpt: "Combat digital overwhelm and screen fatigue with targeted breathing exercises designed for our hyper-connected world.",
    date: "2025-01-03",
    readTime: "4 min read",
    category: "Technology",
    slug: "digital-detox-mindful-breathing-screen-stress"
  },
  {
    id: 7,
    title: "Seasonal Stress Management: Breathing Through Life's Transitions",
    excerpt: "Adapt your breathing practice to navigate seasonal changes, holidays, and major life transitions with greater ease and stability.",
    date: "2024-12-30",
    readTime: "5 min read",
    category: "Lifestyle",
    slug: "seasonal-stress-management-breathing-transitions"
  },
  {
    id: 8,
    title: "The Neuroscience of Calm: How Breathing Rewires Your Brain",
    excerpt: "Explore the fascinating research on neuroplasticity and how controlled breathing creates lasting positive changes in brain structure and function.",
    date: "2024-12-28",
    readTime: "8 min read",
    category: "Science",
    slug: "neuroscience-calm-breathing-rewires-brain"
  },
  {
    id: 9,
    title: "Breathing Through Anxiety: Emergency Techniques for Panic Relief",
    excerpt: "Learn rapid-response breathing methods that can interrupt panic attacks and provide immediate relief from overwhelming anxiety.",
    date: "2024-12-25",
    readTime: "6 min read",
    category: "Mental Health",
    slug: "breathing-through-anxiety-panic-relief"
  },
  {
    id: 10,
    title: "Creating Sacred Space: Building Your Personal Mindfulness Ritual",
    excerpt: "Design a sustainable daily practice that fits your lifestyle and deepens your connection to inner peace and present-moment awareness.",
    date: "2024-12-22",
    readTime: "7 min read",
    category: "Practice",
    slug: "creating-sacred-space-mindfulness-ritual"
  }
];

export default function Blog() {
  return (
    <div className="font-sans gradient-bg min-h-screen">
      <HeaderNav />

      <main className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-slate-800 mb-4" data-testid="page-title">
              Mindfulness & Breathing Blog
            </h1>
            <p className="text-xl text-slate-600 font-light max-w-3xl mx-auto">
              Explore evidence-based insights on breathing techniques, stress management, 
              and mindfulness practices for modern life
            </p>
          </header>

          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${ 
                  category === "All" 
                    ? "bg-emerald-500 text-white" 
                    : "bg-white/60 text-slate-600 hover:bg-white/80"
                }`}
                data-testid={`filter-${category.toLowerCase()}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <motion.article
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-r from-emerald-50 to-sky-50 rounded-xl p-8 border border-white/30"
            >
              <div className="flex items-center mb-4">
                <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">FEATURED</span>
                <span className="ml-3 text-emerald-600 text-sm font-medium">Science</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">
                The Science of Stress: Why Your Body Needs Breathing Breaks
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Discover how chronic stress rewires your brain and why controlled breathing is your most 
                powerful tool for restoration and resilience. New research reveals the surprising ways 
                that just one minute of focused breathing can reverse stress-related cellular damage.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-slate-500">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    January 15, 2025
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    6 min read
                  </div>
                </div>
                <Link
                  href="/blog/science-of-stress-breathing-breaks"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 px-6 rounded-lg transition-colors flex items-center"
                  data-testid="link-featured-post"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.article>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center mb-3">
                  <span className="text-xs font-medium text-sky-600 bg-sky-50 px-2 py-1 rounded">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-medium text-slate-800 mb-3 group-hover:text-emerald-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-emerald-600 hover:text-emerald-700 font-medium text-sm flex items-center group-hover:underline"
                  data-testid={`link-post-${post.id}`}
                >
                  Read More
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 bg-gradient-to-r from-emerald-400 to-sky-400 rounded-xl p-8 text-center text-white"
          >
            <h3 className="text-2xl font-light mb-4">Stay Updated with New Articles</h3>
            <p className="text-emerald-50 mb-6 max-w-2xl mx-auto">
              Get weekly insights on mindfulness, breathing techniques, and stress management 
              delivered to your inbox. Plus exclusive access to guided breathing sessions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white"
                data-testid="input-newsletter-email"
              />
              <button
                className="bg-white text-emerald-600 font-medium py-3 px-6 rounded-lg hover:bg-emerald-50 transition-colors"
                data-testid="button-newsletter-subscribe"
              >
                Subscribe
              </button>
            </div>
            <p className="text-xs text-emerald-100 mt-3">
              No spam, unsubscribe at any time. Read our <Link href="/Privacy-Policy" className="underline">Privacy Policy</Link>.
            </p>
          </motion.div>
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