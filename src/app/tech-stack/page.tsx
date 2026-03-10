'use client'

import { motion } from 'framer-motion'
import { Code2, Layout, Server, Database, Terminal, Box, Zap, Shield, Cloud, Search } from 'lucide-react'

const techCategories = [
  {
    title: 'Languages',
    icon: Code2,
    items: [
      { name: 'JavaScript', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Python', level: 75 },
    ],
    color: 'from-seaBlue to-purple'
  },
  {
    title: 'Frontend',
    icon: Layout,
    items: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TailwindCSS', level: 95 },
      { name: 'Framer Motion', level: 85 },
    ],
    color: 'from-purple to-gold'
  },
  {
    title: 'Backend',
    icon: Server,
    items: [
      { name: 'Node.js', level: 90 },
      { name: 'Express', level: 85 },
      { name: 'REST APIs', level: 95 },
      { name: 'GraphQL', level: 75 },
    ],
    color: 'from-gold to-seaBlue'
  },
  {
    title: 'Database',
    icon: Database,
    items: [
      { name: 'MongoDB', level: 90 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MySQL', level: 85 },
      { name: 'Redis', level: 75 },
    ],
    color: 'from-seaBlue to-gold'
  },
  {
    title: 'Tools & DevOps',
    icon: Terminal,
    items: [
      { name: 'Git', level: 95 },
      { name: 'GitHub', level: 95 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 75 },
    ],
    color: 'from-purple to-seaBlue'
  },
  {
    title: 'Desktop & Mobile',
    icon: Box,
    items: [
      { name: 'Electron', level: 85 },
      { name: 'React Native', level: 80 },
      { name: 'Capacitor', level: 85 },
      { name: 'PWA', level: 90 },
    ],
    color: 'from-gold to-purple'
  },
]

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

export default function TechStackPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Tech Stack</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The technologies and tools I use to build modern, high-performance applications.
          </p>
        </motion.div>

        {/* Tech Grid with Animated Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {techCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={item}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative glass rounded-2xl p-6 overflow-hidden"
            >
              {/* Animated Background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />
              
              {/* Header */}
              <div className="relative z-10 flex items-center mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mr-4 shadow-lg`}
                >
                  <category.icon className="text-white" size={28} />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                  <p className="text-gray-400 text-sm">{category.items.length} technologies</p>
                </div>
              </div>
              
              {/* Tech Items with Progress Bars */}
              <div className="relative z-10 space-y-4">
                {category.items.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: techIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-300 font-medium">{tech.name}</span>
                      <span className="text-gray-500 text-sm">{tech.level}%</span>
                    </div>
                    <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: techIndex * 0.1 }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Additional Skills</h2>
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {[
              { name: 'UI/UX Design', icon: Layout },
              { name: 'Figma', icon: Box },
              { name: 'Adobe Premiere', icon: Zap },
              { name: 'After Effects', icon: Zap },
              { name: 'Agile', icon: Shield },
              { name: 'Scrum', icon: Shield },
              { name: 'RESTful APIs', icon: Server },
              { name: 'GraphQL', icon: Database },
              { name: 'Authentication', icon: Shield },
              { name: 'Payment Integration', icon: Zap },
              { name: 'Cloud Services', icon: Cloud },
              { name: 'Performance Optimization', icon: Zap },
              { name: 'SEO', icon: Search },
              { name: 'Accessibility', icon: Shield },
            ].map((skill) => {
              const Icon = skill.icon
              return (
                <motion.span
                  key={skill.name}
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  className="px-5 py-2.5 glass rounded-full text-gray-300 hover:text-seaBlue hover:border-seaBlue/50 transition-all cursor-default flex items-center space-x-2"
                >
                  <Icon size={16} />
                  <span>{skill.name}</span>
                </motion.span>
              )
            })}
          </motion.div>
        </motion.section>

        {/* Currently Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
            <Zap className="text-seaBlue mr-3" size={28} />
            Currently Learning
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Rust', progress: 30 },
              { name: 'Go', progress: 25 },
              { name: 'AWS', progress: 40 },
              { name: 'Kubernetes', progress: 20 },
            ].map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-4 bg-gradient-to-r from-seaBlue/10 to-purple/10 rounded-xl border border-seaBlue/20 min-w-[140px] text-center"
              >
                <div className="text-lg font-semibold mb-2">{tech.name}</div>
                <div className="h-1.5 bg-dark-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="h-full bg-gradient-to-r from-seaBlue to-purple rounded-full"
                  />
                </div>
                <div className="text-xs text-gray-500 mt-1">{tech.progress}% complete</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
