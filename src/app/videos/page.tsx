'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Music, Tv, Film, X, Clock, Eye } from 'lucide-react'

// Video data with categories
const videos = [
  {
    id: 1,
    title: 'Blaq Mili ft Trust Bravo & Kweku Mortey - KaakaaMotobi',
    category: 'music',
    duration: '4:32',
    views: '15K',
    thumbnail: '🎵'
  },
  {
    id: 2,
    title: 'Lipssy J - Dorkordorkor',
    category: 'music',
    duration: '3:45',
    views: '8K',
    thumbnail: '🎵'
  },
  {
    id: 3,
    title: 'Netyark Mall December Sales',
    category: 'commercials',
    duration: '1:30',
    views: '25K',
    thumbnail: '🛒'
  },
  {
    id: 4,
    title: 'Netyark Mall Easter Sales',
    category: 'commercials',
    duration: '1:15',
    views: '12K',
    thumbnail: '🛒'
  },
  {
    id: 5,
    title: 'Brand Documentary - Success Story',
    category: 'commercials',
    duration: '5:00',
    views: '5K',
    thumbnail: '📽️'
  },
  {
    id: 6,
    title: 'Product Launch Teaser',
    category: 'commercials',
    duration: '0:30',
    views: '18K',
    thumbnail: '🚀'
  }
]

const categories = [
  { id: 'all', label: 'All Videos', icon: Film },
  { id: 'music', label: 'Music Videos', icon: Music },
  { id: 'commercials', label: 'Commercials', icon: Tv },
]

export default function VideosPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null)

  const filteredVideos = selectedCategory === 'all' 
    ? videos 
    : videos.filter(v => v.category === selectedCategory)

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
            <span className="text-gradient">Video Portfolio</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Professional video directing and editing for music videos and commercial content.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="glass rounded-full p-2 inline-flex">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
                    selectedCategory === category.id
                      ? 'bg-seaBlue text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Icon size={18} />
                  <span>{category.label}</span>
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Video Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedVideo(video)}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video glass rounded-xl overflow-hidden">
                  {/* Thumbnail Background */}
                  <div className={`absolute inset-0 transition-all duration-500 ${
                    video.category === 'music' 
                      ? 'bg-gradient-to-br from-purple/40 to-seaBlue/40 group-hover:from-purple/60 group-hover:to-seaBlue/60'
                      : 'bg-gradient-to-br from-gold/40 to-seaBlue/40 group-hover:from-gold/60 group-hover:to-seaBlue/60'
                  }`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl">{video.thumbnail}</span>
                    </div>
                  </div>

                  {/* Play Button Overlay */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/50">
                      <Play className="text-white ml-1" size={36} />
                    </div>
                  </motion.div>

                  {/* Video Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                    <h3 className="text-white font-semibold text-lg mb-2 line-clamp-1">
                      {video.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-gray-300 text-sm">
                      <span className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {video.duration}
                      </span>
                      <span className="flex items-center">
                        <Eye size={14} className="mr-1" />
                        {video.views}
                      </span>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      video.category === 'music'
                        ? 'bg-purple/80 text-white'
                        : 'bg-seaBlue/80 text-white'
                    }`}>
                      {video.category === 'music' ? 'Music Video' : 'Commercial'}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredVideos.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Film size={64} className="mx-auto text-gray-600 mb-4" />
            <p className="text-gray-400">No videos in this category yet</p>
          </motion.div>
        )}

        {/* Services Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 glass rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-4 text-center">Video Production Services</h3>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { title: 'Music Videos', description: 'Professional music video production with creative direction and cinematic storytelling' },
              { title: 'Commercials', description: 'High-quality advertisements for brands and businesses that convert' },
              { title: 'Post-Production', description: 'Expert editing, color grading, VFX, and visual effects' },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-dark-800/50"
              >
                <h4 className="text-lg font-semibold mb-2 text-seaBlue">{service.title}</h4>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition-colors"
              >
                <X size={32} />
              </button>

              {/* Video Player */}
              <div className="aspect-video bg-dark-800 rounded-2xl overflow-hidden flex items-center justify-center border border-gray-800">
                <div className="text-center">
                  <Play size={64} className="mx-auto mb-4 text-seaBlue" />
                  <p className="text-xl font-semibold text-white mb-2">{selectedVideo.title}</p>
                  <p className="text-gray-400">Video player integration with React Player</p>
                </div>
              </div>

              {/* Video Details */}
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedVideo.title}</h3>
                  <p className="text-gray-400 mt-1">
                    {selectedVideo.category === 'music' ? 'Music Video' : 'Commercial'} • {selectedVideo.views} views
                  </p>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Clock size={18} />
                  <span>{selectedVideo.duration}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
