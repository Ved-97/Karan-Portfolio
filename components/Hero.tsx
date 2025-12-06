'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Sparkles, Code, Database, TrendingUp } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const floatingIcons = [
    { icon: Code, delay: 0, position: 'top-20 left-10' },
    { icon: Database, delay: 0.5, position: 'top-40 right-20' },
    { icon: TrendingUp, delay: 1, position: 'bottom-40 left-20' },
    { icon: Sparkles, delay: 1.5, position: 'bottom-20 right-10' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F7F1DE] via-white to-[#A8BBA3]">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#A8BBA3] to-[#B87C4C] rounded-full opacity-15 blur-3xl animate-float" />
        <div className="absolute top-60 -left-32 w-80 h-80 bg-gradient-to-br from-[#F7F1DE] to-[#A8BBA3] rounded-full opacity-15 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-32 right-20 w-72 h-72 bg-gradient-to-br from-[#B87C4C] to-[#C4A484] rounded-full opacity-15 blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Floating icons */}
      {floatingIcons.map((item, index) => {
        const Icon = item.icon
        return (
          <motion.div
            key={index}
            className={`absolute ${item.position} text-[#A8BBA3] opacity-20`}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: item.delay,
            }}
          >
            <Icon size={48} />
          </motion.div>
        )
      })}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#A8BBA3]/20 rounded-full mb-6"
            >
              <Sparkles className="w-5 h-5 text-[#B87C4C]" />
              <span className="text-sm font-semibold text-[#2c3e2e]">Welcome to my portfolio</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight text-black"
            >
              Hi, I&apos;m{' '}
              <span className="gradient-text block mt-2">Karan Singh</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2c3e2e] mb-3 sm:mb-4"
            >
              Business Analyst & Data Analyst
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-base sm:text-lg text-[#2c3e2e] mb-6 sm:mb-8 leading-relaxed max-w-xl"
            >
              Transforming data into actionable insights | 6+ years driving business success through analytics, requirements engineering, and agile delivery
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#contact"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-[#B87C4C] text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:bg-[#A8BBA3] transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Let&apos;s Connect
                <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 rotate-[-90deg]" />
              </motion.a>
              <motion.a
                href="#projects"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-[#A8BBA3] text-[#A8BBA3] rounded-xl font-bold hover:bg-[#F7F1DE] transition-all duration-300 text-sm sm:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="grid grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#A8BBA3]/30"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#B87C4C]">6+</div>
                <div className="text-xs sm:text-sm text-[#2c3e2e] font-medium">Years Exp.</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#B87C4C]">15+</div>
                <div className="text-xs sm:text-sm text-[#2c3e2e] font-medium">Projects</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#B87C4C]">4</div>
                <div className="text-xs sm:text-sm text-[#2c3e2e] font-medium">Organizations</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#A8BBA3] to-[#F7F1DE] opacity-20 blur-2xl animate-pulse" />
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#B87C4C] to-[#C4A484] opacity-10 blur-3xl" />

              {/* Image container */}
              <div className="relative w-96 h-96 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F7F1DE] via-[#A8BBA3] to-[#B87C4C] rounded-3xl rotate-6 opacity-75" />
                <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                  <Image
                    src="/images/Karan.jpeg"
                    alt="Karan Singh"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-6 -right-6 px-6 py-3 glass rounded-2xl shadow-lg border border-[#A8BBA3]/30"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-sm font-bold text-[#1e293b]">PMP Certified</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 px-6 py-3 glass rounded-2xl shadow-lg border border-[#B87C4C]/30"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <div className="text-sm font-bold text-[#1e293b]">CSM Certified</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-[#B87C4C] hover:text-[#A8BBA3] transition-colors">
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown size={24} />
        </a>
      </motion.div>
    </section>
  )
}
