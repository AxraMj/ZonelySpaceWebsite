import { motion } from "framer-motion";
import { Link, useRoute } from "wouter";
import { ArrowLeft, Calendar, Clock, Share2, Twitter, Facebook, Linkedin, Copy, Check } from "lucide-react";
import HeaderNav from "@/components/header-nav";
import { blogArticles } from "@/data/blog-articles";
import { useState, useEffect, useRef } from 'react';

export default function BlogArticle() {
  const [match, params] = useRoute("/blog/:slug");
  const slug = params?.slug;

  const article = blogArticles.find(a => a.slug === slug);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const shareMenuRef = useRef<HTMLDivElement>(null);

  // Close share menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (shareMenuRef.current && !shareMenuRef.current.contains(event.target as Node)) {
        setShowShareMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentUrl = window.location.href;
  const articleTitle = article?.title || '';
  const articleDescription = article?.excerpt || '';

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(articleTitle)}&url=${encodeURIComponent(currentUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`
  };


  if (!article) {
    return (
      <div className="font-sans gradient-bg min-h-screen">
        <HeaderNav />
        <main className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-light text-slate-800 mb-4">Article Not Found</h1>
          <p className="text-slate-600 mb-6">The article you're looking for doesn't exist.</p>
          <Link href="/blog" className="text-emerald-600 hover:text-emerald-700 font-medium">
            ← Back to Blog
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="font-sans gradient-bg min-h-screen">
      <HeaderNav />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Breadcrumb and Share Button */}
          <div className="flex items-center justify-between mb-8">
              <Link 
                href="/blog" 
                className="text-sky-600 hover:text-sky-700 font-medium inline-flex items-center transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>

              <div className="relative" ref={shareMenuRef}>
                <button 
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="text-slate-500 hover:text-slate-700 p-2 rounded-lg hover:bg-slate-100 transition-all"
                >
                  <Share2 className="w-5 h-5" />
                </button>

                {showShareMenu && (
                  <div className="absolute right-0 top-12 bg-white rounded-lg shadow-lg border border-slate-200 p-4 min-w-[200px] z-50">
                    <h4 className="font-medium text-slate-700 mb-3">Share this article</h4>
                    <div className="space-y-2">
                      <a
                        href={shareLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-2 rounded hover:bg-slate-50 transition-colors"
                      >
                        <Twitter className="w-4 h-4 text-blue-500" />
                        <span className="text-sm text-slate-600">Share on Twitter</span>
                      </a>
                      <a
                        href={shareLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-2 rounded hover:bg-slate-50 transition-colors"
                      >
                        <Facebook className="w-4 h-4 text-blue-600" />
                        <span className="text-sm text-slate-600">Share on Facebook</span>
                      </a>
                      <a
                        href={shareLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-2 rounded hover:bg-slate-50 transition-colors"
                      >
                        <Linkedin className="w-4 h-4 text-blue-700" />
                        <span className="text-sm text-slate-600">Share on LinkedIn</span>
                      </a>
                      <button
                        onClick={handleCopyLink}
                        className="flex items-center space-x-3 p-2 rounded hover:bg-slate-50 transition-colors w-full text-left"
                      >
                        {copied ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4 text-slate-500" />
                        )}
                        <span className="text-sm text-slate-600">
                          {copied ? 'Link copied!' : 'Copy link'}
                        </span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center mb-4">
              <span className="bg-emerald-100 text-emerald-700 text-sm font-medium px-3 py-1 rounded-full">
                {article.category}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-slate-800 mb-6 leading-tight" data-testid="article-title">
              {article.title}
            </h1>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center space-x-6 text-sm text-slate-600">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(article.date).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {article.readTime}
                </div>
              </div>

              {/* Share Buttons - No longer needed here as they are in the header */}
            </div>

            <p className="text-xl text-slate-600 leading-relaxed">
              {article.excerpt}
            </p>
          </header>

          {/* Article Content */}
          <article className="prose prose-sm md:prose-lg max-w-none text-slate-700">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </article>

          {/* Related Articles */}
          <section className="mt-16 pt-12 border-t border-slate-200/50">
            <h3 className="text-2xl font-medium text-slate-800 mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {blogArticles
                .filter(a => a.category === article.category && a.slug !== article.slug)
                .slice(0, 2)
                .map(relatedArticle => (
                  <Link
                    key={relatedArticle.slug}
                    href={`/blog/${relatedArticle.slug}`}
                    className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30 hover:shadow-lg transition-all duration-300 block"
                    data-testid={`link-related-${relatedArticle.slug}`}
                  >
                    <div className="mb-3">
                      <span className="text-xs font-medium text-sky-600 bg-sky-50 px-2 py-1 rounded">
                        {relatedArticle.category}
                      </span>
                    </div>
                    <h4 className="text-lg font-medium text-slate-800 mb-2 hover:text-emerald-600 transition-colors">
                      {relatedArticle.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {relatedArticle.excerpt}
                    </p>
                  </Link>
                ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="mt-16 bg-gradient-to-r from-emerald-50 to-sky-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-medium text-slate-800 mb-4">
              Ready to Try Mindful Breathing?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Put these techniques into practice with our free 1-minute guided breathing exercise. 
              Experience the benefits of mindful breathing right now.
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                href="/"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                data-testid="button-try-breathing"
              >
                Try Breathing Exercise
              </Link>
              <Link 
                href="/about-technique"
                className="bg-white hover:bg-slate-50 text-slate-700 font-medium py-3 px-6 rounded-lg border border-slate-200 transition-colors"
                data-testid="button-learn-technique"
              >
                Learn the Technique
              </Link>
            </div>
          </section>
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