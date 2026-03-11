'use client'

import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-900">
      <div className="flex flex-col items-center">
        <motion.div
          animate={{ 
            rotate: 360,
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-12 h-12 border-4 border-seaBlue/30 border-t-seaBlue rounded-full"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-400 text-sm"
        >
          Loading...
        </motion.p>
      </div>
    </div>
  )
}
