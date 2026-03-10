'use client'

import { motion } from 'framer-motion'
import { FlaskConical, ShoppingCart, Code, Sparkles, ExternalLink } from 'lucide-react'

const experiments = [
  {
    title: 'Live POS System Demo',
    description: 'Interactive point of sale system demo with real-time inventory management.',
    icon: ShoppingCart,
    status: 'Live',
    color: 'from-seaBlue to-purple'
  },
  {
    title: 'API Testing Interface',
    description: 'A comprehensive API testing tool for developers to test REST endpoints.',
    icon: Code,
    status: 'Beta',
    color: 'from-purple to-gold'
  },
  {
    title: 'Frontend Animation Experiments',
    description: 'Collection of creative animations and interactive UI components.',
    icon: Sparkles,
    status: 'Experimental',
    color: 'from-gold to-seaBlue'
  },
]

export default function LabsPage() {
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
            <FlaskConical className="text-seaBlue mr-3" size={40} />
            <h1 className="text-5xl font-bold">
              <span className="text-gradient">Labs</span>
            </h1>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experimental projects, prototypes, and interactive demos. 
            This is where I test new technologies and creative ideas.
          </p>
        </motion.div>

        {/* Experiments Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {experiments.map((experiment, index) => (
            <motion.div
              key={experiment.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass rounded-xl overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${experiment.color}`} />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${experiment.color} rounded-xl flex items-center justify-center`}>
                    <experiment.icon className="text-white" size={28} />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    experiment.status === 'Live' ? 'bg-green-500/20 text-green-400' :
                    experiment.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {experiment.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{experiment.title}</h3>
                <p className="text-gray-400 mb-4">{experiment.description}</p>
                
                <button className="flex items-center text-seaBlue hover:text-white transition-colors">
                  <span className="mr-2">Try Demo</span>
                  <ExternalLink size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">More Experiments Coming Soon</h3>
          <p className="text-gray-400 max-w-xl mx-auto">
            I'm constantly working on new experiments and prototypes. 
            Check back soon for new demos and interactive tools.
          </p>
        </motion.div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl text-center"
        >
          <p className="text-yellow-400 text-sm">
            ⚠️ Note: These are experimental projects and may be in various stages of development.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
