'use client'

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Code, AppWindow, Video, Palette, Database, Server, Globe, Github, ExternalLink, Layers, Box, Cpu } from 'lucide-react'

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

// Animated text reveal component
const AnimatedText = ({ text, className, delay = 0 }: { text: string, className?: string, delay?: number }) => {
  const words = text.split(' ')
  return (
    <span className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + index * 0.1, duration: 0.5 }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

// Floating particles
const Particle = ({ delay, duration, size, x, y }: { delay: number, duration: number, size: number, x: string, y: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0, 0.5, 0],
      scale: [0, 1, 0],
      x: [0, Math.random() * 100 - 50],
      y: [0, Math.random() * 100 - 50]
    }}
    transition={{ 
      duration, 
      delay, 
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="absolute rounded-full bg-seaBlue/30 blur-sm"
    style={{
      width: size,
      height: size,
      left: x,
      top: y,
    }}
  />
)

// Counter component with animation
const Counter = ({ value, suffix = "", duration = 2 }: { value: number, suffix?: string, duration?: number }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = value
      const incrementTime = (duration * 1000) / end
      
      const timer = setInterval(() => {
        start += 1
        setCount(start)
        if (start >= end) {
          clearInterval(timer)
        }
      }, incrementTime)

      return () => clearInterval(timer)
    }
  }, [isInView, value, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background with Gradient Motion */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-seaBlue/20 to-purple/20" />
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 25%, rgba(15, 110, 140, 0.1) 50%, transparent 75%),
                             linear-gradient(-45deg, transparent 25%, rgba(139, 92, 246, 0.1) 50%, transparent 75%)`,
            backgroundSize: '400% 400%',
          }}
        />
        
        {/* Floating gradient orbs */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-seaBlue/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            x: [0, -20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            x: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-gold/10 rounded-full blur-[80px]"
        />

        {/* Floating Particles */}
        <Particle delay={0} duration={6} size={4} x="10%" y="20%" />
        <Particle delay={1} duration={8} size={3} x="20%" y="60%" />
        <Particle delay={2} duration={7} size={5} x="70%" y="30%" />
        <Particle delay={3} duration={9} size={4} x="80%" y="70%" />
        <Particle delay={4} duration={6} size={3} x="50%" y="80%" />
        <Particle delay={5} duration={8} size={4} x="30%" y="40%" />
        <Particle delay={6} duration={7} size={5} x="60%" y="50%" />
        <Particle delay={7} duration={9} size={3} x="90%" y="20%" />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiLz48cGF0aCBkPSJNMCAwaDFWNDBIMHoiIGZpbGw9IiMyMTIxMzEiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PHBhdGggZD0iTTAgMGg0MHYxSDB6IiBmaWxsPSIjMjEyMTMxIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvZz48L3N2Zz4=')] opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center pt-20">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {/* Greeting */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-seaBlue font-medium mb-4 tracking-widest uppercase text-sm"
              >
                Welcome to My Portfolio
              </motion.p>

              {/* Name with gradient */}
              <h1 className="text-5xl md:text-8xl font-bold mb-6">
                <AnimatedText text="Narh H.P Dromor" className="text-gradient" delay={0.3} />
              </h1>

              {/* Role with typewriter effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="text-xl md:text-2xl text-gray-300 mb-4"
              >
                <span className="text-gradient">Software Engineer</span> • 
                <span className="text-purple"> App Developer</span> • 
                <span className="text-seaBlue"> Creative Director</span>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.6 }}
                className="text-lg text-gray-400 max-w-3xl mb-10 leading-relaxed"
              >
                I design and build <span className="text-seaBlue">powerful software systems</span>, 
                modern <span className="text-purple">digital platforms</span>, and 
                <span className="text-gold"> cinematic visual experiences</span> that inspire and transform businesses.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/projects">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(15, 110, 140, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-seaBlue text-white rounded-xl font-semibold hover:bg-seaBlue/90 transition-all flex items-center space-x-2 group"
                  >
                    <span>View Projects</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)' }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 glass text-white rounded-xl font-semibold hover:bg-white/10 transition-all"
                  >
                    Hire Me
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: Portrait Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="relative hidden lg:block"
            >
              {/* Gradient glow behind image */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 bg-gradient-to-br from-seaBlue/40 via-purple/30 to-gold/20 blur-3xl rounded-full"
              />
              
              {/* Image container with floating animation */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 1, 0, -1, 0]
                }}
                transition={{ 
                  y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                  rotate: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
                }}
                className="relative"
              >
                <div className="relative w-80 h-96 md:w-96 md:h-[500px] mx-auto">
                  <Image
                    src="/images/photo_2026-03-09_18-25-02.jpg"
                    alt="Narh H.P Dromor"
                    fill
                    className="object-cover rounded-2xl shadow-2xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  {/* Subtle border */}
                  <div className="absolute inset-0 rounded-2xl border border-white/10" />
                  {/* Top highlight */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator with enhanced animation */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-8 h-14 border-2 border-seaBlue/30 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 40, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-3 bg-gradient-to-b from-seaBlue to-purple rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Developer Activity Section */}
      <section className="py-20 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-gradient">Developer Activity</span>
            </h2>
            <p className="text-gray-400">Real-time GitHub statistics and project metrics</p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <motion.div
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass p-6 rounded-xl text-center group cursor-pointer"
            >
              <div className="w-16 h-16 bg-seaBlue/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-seaBlue/30 transition-colors">
                <Github className="text-seaBlue" size={32} />
              </div>
              <div className="text-3xl font-bold text-gradient mb-2"><Counter value={50} suffix="+" /></div>
              <div className="text-gray-400 text-sm">Repositories</div>
              <div className="text-xs text-seaBlue mt-2">View GitHub Profile</div>
            </motion.div>

            <motion.div
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass p-6 rounded-xl text-center group cursor-pointer"
            >
              <div className="w-16 h-16 bg-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple/30 transition-colors">
                <Globe className="text-purple" size={32} />
              </div>
              <div className="text-3xl font-bold text-gradient mb-2"><Counter value={30} suffix="+" /></div>
              <div className="text-gray-400 text-sm">Websites Built</div>
              <div className="text-xs text-purple mt-2">View Projects</div>
            </motion.div>

            <motion.div
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass p-6 rounded-xl text-center group cursor-pointer"
            >
              <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/30 transition-colors">
                <AppWindow className="text-gold" size={32} />
              </div>
              <div className="text-3xl font-bold text-gradient mb-2"><Counter value={20} suffix="+" /></div>
              <div className="text-gray-400 text-sm">Applications Created</div>
              <div className="text-xs text-gold mt-2">View Apps</div>
            </motion.div>

            <motion.div
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass p-6 rounded-xl text-center group cursor-pointer"
            >
              <div className="w-16 h-16 bg-seaBlue/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-seaBlue/30 transition-colors">
                <Server className="text-seaBlue" size={32} />
              </div>
              <div className="text-3xl font-bold text-gradient mb-2"><Counter value={15} suffix="+" /></div>
              <div className="text-gray-400 text-sm">APIs Developed</div>
              <div className="text-xs text-seaBlue mt-2">View Tech Stack</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* Web Development */}
            <motion.div
              variants={item}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass p-6 rounded-xl group"
            >
              <div className="w-12 h-12 bg-seaBlue/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-seaBlue/30 transition-colors">
                <Globe className="text-seaBlue" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-gray-400">Modern, responsive websites and web applications built with cutting-edge technologies.</p>
            </motion.div>

            {/* App Development */}
            <motion.div
              variants={item}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass p-6 rounded-xl group"
            >
              <div className="w-12 h-12 bg-purple/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple/30 transition-colors">
                <AppWindow className="text-purple" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">App Development</h3>
              <p className="text-gray-400">Powerful mobile and desktop applications tailored to your business needs.</p>
            </motion.div>

            {/* Backend Systems */}
            <motion.div
              variants={item}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass p-6 rounded-xl group"
            >
              <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-colors">
                <Server className="text-gold" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Backend Systems</h3>
              <p className="text-gray-400">Robust APIs, database architecture, and scalable server solutions.</p>
            </motion.div>

            {/* Video Production */}
            <motion.div
              variants={item}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass p-6 rounded-xl group"
            >
              <div className="w-12 h-12 bg-seaBlue/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-seaBlue/30 transition-colors">
                <Video className="text-seaBlue" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Video Production</h3>
              <p className="text-gray-400">Professional video directing and editing for music videos and commercials.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient">Featured Projects</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A showcase of my recent work in web development, app creation, and video production.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { name: 'Netyark Mall', category: 'E-commerce Platform', color: 'from-seaBlue to-purple', image: '/images/Netyark.jfif' },
              { name: 'Rezar Aluminium', category: 'Business Website', color: 'from-purple to-gold', image: '/images/rezarlogo.jpg' },
              { name: 'Dhrone Tech POS', category: 'Desktop Application', color: 'from-gold to-seaBlue', image: null },
            ].map((project, index) => (
              <motion.div
                key={project.name}
                variants={item}
                whileHover={{ scale: 1.03, y: -10 }}
                className="group relative overflow-hidden rounded-xl cursor-pointer"
              >
                {project.image ? (
                  <div className="relative h-72">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-dark-900/60 group-hover:bg-dark-900/40 transition-colors" />
                  </div>
                ) : (
                  <>
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity`} />
                    <div className="absolute inset-0 bg-dark-900/80 group-hover:bg-dark-900/60 transition-colors" />
                  </>
                )}
                <div className="absolute p-6 h-72 flex flex-col justify-end">
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                  <p className="text-gray-400">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-seaBlue text-white rounded-lg font-semibold hover:bg-seaBlue/90 transition-colors"
              >
                View All Projects
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: 50, label: 'Projects Completed' },
              { number: 30, label: 'Happy Clients' },
              { number: 5, label: 'Years Experience' },
              { number: 100, label: 'Client Satisfaction', suffix: '%' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2"><Counter value={stat.number} suffix={stat.suffix || "+"} /></div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
