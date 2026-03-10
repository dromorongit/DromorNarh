'use client'

import { motion } from 'framer-motion'
import { BookOpen, Clock, ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    title: 'Building Scalable Web Applications with Next.js',
    excerpt: 'Learn how to build high-performance web applications using Next.js 14 and modern best practices.',
    category: 'Web Development',
    date: 'March 2024',
    readTime: '8 min read',
    slug: 'building-scalable-web-applications-nextjs'
  },
  {
    title: 'The Future of App Development: Cross-Platform Solutions',
    excerpt: 'Exploring the benefits and challenges of cross-platform mobile development with React Native.',
    category: 'Mobile Development',
    date: 'February 2024',
    readTime: '6 min read',
    slug: 'future-of-app-development-cross-platform'
  },
  {
    title: 'Introduction to RESTful API Development',
    excerpt: 'A comprehensive guide to designing and building RESTful APIs with Node.js and Express.',
    category: 'Backend',
    date: 'January 2024',
    readTime: '10 min read',
    slug: 'intro-to-restful-api-development'
  },
  {
    title: 'Video Production Basics for Developers',
    excerpt: 'Essential video editing techniques and tools for developers creating content.',
    category: 'Creative Production',
    date: 'December 2023',
    readTime: '5 min read',
    slug: 'video-production-basics-developers'
  },
]

const categories = ['All', 'Web Development', 'Mobile Development', 'Backend', 'Creative Production']

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="text-seaBlue mr-3" size={40} />
            <h1 className="text-5xl font-bold">
              <span className="text-gradient">Blog</span>
            </h1>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on software engineering, web development, and creative production.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === 'All'
                  ? 'bg-seaBlue text-white'
                  : 'glass text-gray-300 hover:text-seaBlue hover:border-seaBlue/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass rounded-xl overflow-hidden cursor-pointer group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-seaBlue/20 text-seaBlue rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock size={14} className="mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <h2 className="text-xl font-bold mb-3 group-hover:text-seaBlue transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{post.date}</span>
                  <span className="flex items-center text-seaBlue text-sm group-hover:text-white transition-colors">
                    Read More <ArrowRight size={16} className="ml-1" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Subscribe to My Newsletter</h3>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Get the latest articles, tutorials, and updates delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-seaBlue"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-seaBlue text-white rounded-lg font-semibold hover:bg-seaBlue/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
