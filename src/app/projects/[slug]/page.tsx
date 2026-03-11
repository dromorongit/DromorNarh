'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { ArrowLeft, ExternalLink, Github, Calendar, User, Layers, ChevronRight } from 'lucide-react'
import { projects, getProjectBySlug } from '@/data/projects'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function ProjectDetail() {
  const params = useParams()
  const slug = params?.slug as string
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gradient mb-4">Project Not Found</h1>
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-seaBlue text-white rounded-lg"
            >
              Back to Projects
            </motion.button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`} />
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 blur-3xl`}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link href="/projects" className="inline-flex items-center text-gray-400 hover:text-seaBlue transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              Back to Projects
            </Link>
          </motion.div>

          {/* Category & Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-seaBlue font-medium tracking-wider uppercase text-sm">
              {project.category}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              <span className="text-gradient">{project.title}</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          {/* Quick Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-6 mt-10"
          >
            <div className="flex items-center text-gray-400">
              <Calendar size={20} className="mr-2 text-seaBlue" />
              {project.year}
            </div>
            <div className="flex items-center text-gray-400">
              <User size={20} className="mr-2 text-purple" />
              {project.client}
            </div>
            {project.websiteUrl !== '#' && (
              <Link href={project.websiteUrl} target="_blank">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-seaBlue text-white rounded-lg flex items-center space-x-2"
                >
                  <span>Visit Website</span>
                  <ExternalLink size={18} />
                </motion.button>
              </Link>
            )}
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-12"
          >
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Project Gallery */}
              <motion.div variants={item} className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.gallery.map((image, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className={`relative rounded-xl overflow-hidden aspect-video ${
                        index === 0 ? 'md:col-span-2' : ''
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 66vw"
                        loading="lazy"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Role in Project */}
              <motion.div variants={item}>
                <h2 className="text-2xl font-bold mb-6">Role in Project</h2>
                <div className="glass p-6 rounded-xl">
                  <p className="text-gray-300 leading-relaxed">{project.role}</p>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Technologies */}
              <motion.div variants={item} className="glass p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Layers size={20} className="mr-2 text-seaBlue" />
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-dark-800 text-gray-300 text-sm rounded-full border border-gray-700 hover:border-seaBlue transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Project Info */}
              <motion.div variants={item} className="glass p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-gray-400 text-sm">Category</span>
                    <p className="text-white">{project.category}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Year</span>
                    <p className="text-white">{project.year}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Client</span>
                    <p className="text-white">{project.client}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.02, x: -5 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 glass rounded-xl flex items-center justify-center space-x-2"
            >
              <ChevronRight size={20} className="rotate-180" />
              <span>View All Projects</span>
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  )
}
