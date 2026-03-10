'use client'

import { motion } from 'framer-motion'
import { Code, Globe, Smartphone, AppWindow, Palette, Video, Scissors, Layers } from 'lucide-react'

const services = [
  {
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs. From concept to deployment.',
    icon: Code,
    features: ['Custom Applications', 'System Architecture', 'Performance Optimization', 'Maintenance & Support'],
    color: 'from-seaBlue to-purple'
  },
  {
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
    icon: Globe,
    features: ['Responsive Design', 'E-commerce Solutions', 'CMS Development', 'SEO Optimization'],
    color: 'from-purple to-gold'
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android devices.',
    icon: Smartphone,
    features: ['iOS Development', 'Android Development', 'Cross-platform Apps', 'App Store Deployment'],
    color: 'from-gold to-seaBlue'
  },
  {
    title: 'Desktop Application Development',
    description: 'Powerful desktop applications for Windows and MacOS platforms.',
    icon: AppWindow,
    features: ['Windows Apps', 'MacOS Apps', 'Cross-platform Solutions', 'System Integration'],
    color: 'from-seaBlue to-gold'
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design that combines aesthetics with functionality.',
    icon: Palette,
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    color: 'from-purple to-seaBlue'
  },
  {
    title: 'Video Production',
    description: 'Professional video content creation from concept to final delivery.',
    icon: Video,
    features: ['Music Videos', 'Commercials', 'Documentaries', 'Event Coverage'],
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

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to bring your vision to life.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={item}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass rounded-xl overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`} />
              <div className="p-6">
                <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                  <service.icon className="text-white" size={28} />
                </div>
                
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-sm text-gray-300 flex items-center">
                      <span className="w-1.5 h-1.5 bg-seaBlue rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="text-gradient">How I Work</span>
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your requirements and goals' },
              { step: '02', title: 'Design', description: 'Creating wireframes and visual designs' },
              { step: '03', title: 'Development', description: 'Building your solution with clean code' },
              { step: '04', title: 'Delivery', description: 'Testing and deploying your project' },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-gradient mb-4">{process.step}</div>
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-gray-400">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 glass rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Let's discuss your project and see how I can help bring your ideas to life.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-seaBlue text-white rounded-lg font-semibold hover:bg-seaBlue/90 transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  )
}
