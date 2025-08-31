import { motion } from "framer-motion";
import { Link, useRoute } from "wouter";
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import HeaderNav from "@/components/header-nav";
import { blogArticles } from "@/data/blog-articles";

export default function BlogArticle() {
  const [match, params] = useRoute("/blog/:slug");
  const slug = params?.slug;
  
  const article = blogArticles.find(a => a.slug === slug);
  
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
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link 
              href="/blog" 
              className="text-slate-600 hover:text-slate-900 transition-colors flex items-center"
              data-testid="link-back-to-blog"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center mb-4">
              <span className="bg-emerald-100 text-emerald-700 text-sm font-medium px-3 py-1 rounded-full">
                {article.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-light text-slate-800 mb-6 leading-tight" data-testid="article-title">
              {article.title}
            </h1>
            
            <div className="flex items-center justify-between mb-6">
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
              
              {/* Share Buttons */}
              <div className="flex items-center space-x-3">
                <span className="text-sm text-slate-600 mr-2">Share:</span>
                <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors" data-testid="button-share-facebook">
                  <Facebook className="w-4 h-4" />
                </button>
                <button className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors" data-testid="button-share-twitter">
                  <Twitter className="w-4 h-4" />
                </button>
                <button className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors" data-testid="button-share-linkedin">
                  <Linkedin className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              {article.excerpt}
            </p>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none text-slate-700">
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