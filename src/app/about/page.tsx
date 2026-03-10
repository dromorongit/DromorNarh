'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Code, Smartphone, Video, Database, Server, Globe, Palette, Users } from 'lucide-react'

const skills = {
  engineering: {
    title: 'Software Engineering',
    icon: Code,
    skills: ['Web Applications', 'Backend Systems', 'API Development', 'Database Architecture']
  },
  development: {
    title: 'App Development',
    icon: Smartphone,
    skills: ['Mobile Applications', 'Desktop Applications', 'SaaS Platforms', 'Cross-platform Apps']
  },
  creative: {
    title: 'Creative Production',
    icon: Video,
    skills: ['Video Directing', 'Video Editing', 'Commercial Production', 'Visual Effects']
  }
}

const timeline = [
  { year: '2020', title: 'Started Journey', description: 'Began professional software development' },
  { year: '2021', title: 'First Client Projects', description: 'Delivered first web development projects' },
  { year: '2022', title: 'Expanded to Apps', description: 'Started building mobile and desktop applications' },
  { year: '2023', title: 'Creative Studio', description: 'Launched video production services' },
  { year: '2024', title: '50+ Projects', description: 'Completed over 50 successful projects' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-gradient">About Me</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get to know the person behind the code
            </p>
          </motion.div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-8 md:p-12 mb-16"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Biography */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-seaBlue">Who I Am</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Narh H.P Dromor is a software engineer, developer and creative technologist based in Accra, Ghana. 
                  He specializes in building high-performance web platforms, APIs, mobile applications and desktop systems.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Alongside software engineering, he is also a video director and editor producing music videos and 
                  commercial visual content. With a passion for innovation and attention to detail, he delivers 
                  exceptional digital solutions that meet client needs.
                </p>
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass p-4 rounded-xl text-center">
                    <div className="text-3xl font-bold text-gradient mb-1">50+</div>
                    <div className="text-gray-400 text-sm">Projects</div>
                  </div>
                  <div className="glass p-4 rounded-xl text-center">
                    <div className="text-3xl font-bold text-gradient mb-1">30+</div>
                    <div className="text-gray-400 text-sm">Clients</div>
                  </div>
                  <div className="glass p-4 rounded-xl text-center">
                    <div className="text-3xl font-bold text-gradient mb-1">5+</div>
                    <div className="text-gray-400 text-sm">Years</div>
                  </div>
                  <div className="glass p-4 rounded-xl text-center">
                    <div className="text-3xl font-bold text-gradient mb-1">100%</div>
                    <div className="text-gray-400 text-sm">Satisfaction</div>
                  </div>
                </div>
              </div>

              {/* Right: Portrait Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                {/* Main portrait */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative aspect-[4/5] rounded-2xl overflow-hidden"
                >
                  <Image
                    src="/images/photo_2026-03-09_18-25-04.jpg"
                    alt="Narh H.P Dromor - Software Engineer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent" />
                </motion.div>

                {/* Secondary small image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="absolute -bottom-6 -left-6 w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden shadow-2xl border-2 border-dark-800"
                >
                  <Image
                    src="/images/photo_2026-03-09_18-25-05.jpg"
                    alt="Narh H.P Dromor - Creative Work"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold mb-4">
                  <span className="text-gradient">Skills & Expertise</span>
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(skills).map(([key, category], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass rounded-xl p-6"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-seaBlue to-purple rounded-xl flex items-center justify-center mb-4">
                      <category.icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.skills.map((skill) => (
                        <li key={skill} className="text-gray-400 flex items-center">
                          <span className="w-2 h-2 bg-seaBlue rounded-full mr-3" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Timeline Section */}
          <section className="py-20 bg-dark-800 rounded-2xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold mb-4">
                  <span className="text-gradient">My Journey</span>
                </h2>
              </motion.div>

              <div className="relative">
                <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-seaBlue via-purple to-gold" />
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                    >
                      <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                        <div className="glass rounded-lg p-4 inline-block">
                          <div className="text-seaBlue font-bold mb-1">{item.year}</div>
                          <div className="font-semibold">{item.title}</div>
                          <div className="text-gray-400 text-sm">{item.description}</div>
                        </div>
                      </div>
                      <div className="w-4 h-4 bg-seaBlue rounded-full relative z-10" />
                      <div className="flex-1" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
