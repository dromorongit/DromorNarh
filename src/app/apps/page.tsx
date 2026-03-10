'use client'

import { motion } from 'framer-motion'
import { Package, ShoppingCart, Database, BarChart3, Users, Settings } from 'lucide-react'

const apps = [
  {
    name: 'Inventory Management System',
    description: 'A comprehensive business inventory and stock tracking system for monitoring products, stock levels and business operations.',
    features: ['Product Management', 'Stock Tracking', 'Low Stock Alerts', 'Sales Reporting', 'Multi-user Access'],
    icon: Package,
    color: 'from-seaBlue to-purple'
  },
  {
    name: 'Dhrone Tech POS System',
    description: 'A retail point of sale platform with inventory management, sales analytics and transaction management.',
    features: ['Point of Sale', 'Inventory Management', 'Sales Analytics', 'Transaction History', 'Customer Management'],
    icon: ShoppingCart,
    color: 'from-purple to-gold'
  }
]

const apiProjects = [
  {
    name: 'Task Manager RESTful API',
    description: 'A secure REST API with authentication, CRUD operations and protected routes for task management.',
    features: ['JWT Authentication', 'RESTful Endpoints', 'Protected Routes', 'MongoDB Integration', 'Input Validation'],
    icon: Database,
    color: 'from-gold to-seaBlue'
  }
]

export default function AppsPage() {
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
            <span className="text-gradient">Software & Applications</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Powerful desktop and mobile applications built to streamline business operations and enhance productivity.
          </p>
        </motion.div>

        {/* Desktop Applications */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold mb-8 flex items-center"
          >
            <span className="w-2 h-8 bg-seaBlue rounded mr-3" />
            Desktop Applications
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {apps.map((app, index) => (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${app.color}`} />
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${app.color} rounded-xl flex items-center justify-center`}>
                      <app.icon className="text-white" size={32} />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{app.name}</h3>
                  <p className="text-gray-400 mb-6">{app.description}</p>
                  
                  <div className="space-y-2">
                    {app.features.map((feature) => (
                      <div key={feature} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-seaBlue rounded-full mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* API Development */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold mb-8 flex items-center"
          >
            <span className="w-2 h-8 bg-purple rounded mr-3" />
            API Development
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apiProjects.map((api, index) => (
              <motion.div
                key={api.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-xl overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${api.color}`} />
                <div className="p-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${api.color} rounded-lg flex items-center justify-center mb-4`}>
                    <api.icon className="text-white" size={24} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{api.name}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{api.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {api.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: '2+', label: 'Desktop Apps' },
              { number: '5+', label: 'APIs Built' },
              { number: '100+', label: 'Endpoints' },
              { number: '99.9%', label: 'Uptime' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-gradient mb-1">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
