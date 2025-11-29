'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Scene3D from './Scene3D'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-white">Hi, I'm </span>
            <span className="gradient-text">Karan Singh</span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Functional Business Analyst
          </motion.p>

          <motion.p
            className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            7+ years of experience specializing in financial systems, SaaS delivery,
            and enterprise transformation. Expert in Agile execution, requirements analysis,
            and driving measurable results.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.a
              href="#contact"
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full font-semibold transition-colors duration-300"
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(6, 182, 212, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#projects"
              className="px-8 py-3 border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white rounded-full font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <a href="#about" className="text-cyan-400">
            <ArrowDown size={32} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
