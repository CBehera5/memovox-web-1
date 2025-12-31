import { ArrowRight } from "lucide-react";
import Link from "next/link";

const articles = [
  {
    title: "The Future of Voice AI",
    excerpt: "How voice interfaces are changing the way we interact with technology and organize our lives.",
    date: "Dec 28, 2025",
    readTime: "5 min read",
    tag: "AI Technology",
    color: "bg-indigo-500",
  },
  {
    title: "Productivity Hacks 2026",
    excerpt: "Top strategies to stay organized and efficient in an increasingly distracted world.",
    date: "Dec 15, 2025",
    readTime: "4 min read",
    tag: "Productivity",
    color: "bg-pink-500",
  },
  {
    title: "Building Privacy-First Apps",
    excerpt: "Why we chose local-first processing for Memovox and what it means for your data security.",
    date: "Nov 30, 2025",
    readTime: "6 min read",
    tag: "Engineering",
    color: "bg-violet-500",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-white/5 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Latest from our blog
            </h2>
            <p className="text-xl text-gray-400 max-w-xl">
              Insights on AI, productivity, and the future of work.
            </p>
          </div>
          <Link 
            href="/blog" 
            className="group flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
          >
            View all articles
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article 
              key={index}
              className="group flex flex-col bg-black/20 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`h-48 ${article.color} opacity-80 group-hover:opacity-100 transition-opacity relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/20 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full border border-white/10">
                    {article.tag}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center text-sm font-medium text-white group-hover:text-primary transition-colors">
                  Read Article
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
