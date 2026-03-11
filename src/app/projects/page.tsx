'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, ArrowRight, Globe, ShoppingCart, Building, Briefcase, AppWindow, Video } from 'lucide-react'
import { projects } from '@/data/projects'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

// Map categories to icons
const getCategoryIcon = (category: string) => {
  if (category.includes('E-commerce')) return ShoppingCart
  if (category.includes('Business') || category.includes('Portfolio')) return Globe
  if (category.includes('Desktop')) return AppWindow
  if (category.includes('Video') || category.includes('Streaming')) return Video
  return Building
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Decorative background image */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5 }}
          className="absolute -right-32 -top-32 w-96 h-96"
        >
          <Image
            src="/images/photo_2026-03-09_18-25-01.jpg"
            alt=""
            fill
            className="object-cover rounded-full blur-3xl"
            sizes="400px"
            loading="lazy"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute -left-32 bottom-32 w-80 h-80"
        >
          <Image
            src="/images/photo_2026-03-09_18-24-59.jpg"
            alt=""
            fill
            className="object-cover rounded-full blur-3xl"
            sizes="400px"
            loading="lazy"
          />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Web Platforms</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of modern, responsive websites and web applications I've built for clients across various industries.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => {
            const Icon = getCategoryIcon(project.category)
            return (
              <motion.div
                key={project.slug}
                variants={item}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group relative overflow-hidden rounded-xl glass cursor-pointer"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  index % 3 === 0 ? 'from-seaBlue/20 to-purple/20' :
                  index % 3 === 1 ? 'from-purple/20 to-gold/20' :
                  'from-gold/20 to-seaBlue/20'
                } opacity-0 group-hover:opacity-100 transition-opacity`} />
                
                <Link href={`/projects/${project.slug}`}>
                  <div className="relative p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-seaBlue/20 transition-colors">
                        <Icon className="text-gray-400 group-hover:text-seaBlue transition-colors" size={24} />
                      </div>
                      <ExternalLink className="text-gray-500 group-hover:text-white transition-colors" size={20} />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 group-hover:text-seaBlue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{project.shortDescription}</p>
                    <span className="text-xs text-seaBlue">{project.category}</span>
                  </div>
                </Link>

                {/* Bottom border accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-seaBlue via-purple to-gold transform scale-x-0 group-hover:scale-x-100 transition-transform" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 glass rounded-2xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: projects.length.toString(), label: 'Projects' },
              { number: '5+', label: 'Industries' },
              { number: '100%', label: 'Client Satisfaction' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-gradient mb-1">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-seaBlue text-white rounded-xl font-semibold hover:bg-seaBlue/90 transition-colors inline-flex items-center space-x-2"
            >
              <span>Start Your Project</span>
              <ArrowRight size={20} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
