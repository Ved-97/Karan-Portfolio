'use client'

import { motion } from 'framer-motion'
import { MapPin, Mail, Linkedin, Award } from 'lucide-react'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const certifications = [
    { name: 'PMP', org: 'PMI', year: '2024' },
    { name: 'CSM', org: 'Scrum Alliance', year: '2023' },
    { name: 'Business Analysis', org: 'Techno Canada', year: '2021' },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-center mb-12 gradient-text"
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Results-driven Functional Business Analyst with{' '}
                <span className="text-cyan-400 font-semibold">7+ years of experience</span>{' '}
                specializing in financial systems, SaaS delivery, and enterprise transformation.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Expert in requirements gathering, Agile execution, UAT management, and project rollout —
                bridging business goals with technical delivery. Proficient in SQL, JIRA, Power BI,
                and Azure DevOps, consistently driving efficiency and measurable results.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin size={20} className="text-cyan-400" />
                  <span>Toronto, Canada</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Mail size={20} className="text-cyan-400" />
                  <a href="mailto:karanscy@gmail.com" className="hover:text-cyan-400 transition-colors">
                    karanscy@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Linkedin size={20} className="text-cyan-400" />
                  <a
                    href="https://linkedin.com/in/karansinghchambial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Award className="text-cyan-400" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4 hover:border-cyan-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(6, 182, 212, 0.2)' }}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-xl font-semibold text-cyan-400">{cert.name}</h4>
                        <p className="text-gray-400">{cert.org}</p>
                      </div>
                      <span className="text-gray-500 font-medium">{cert.year}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-6 mt-6"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-xl font-bold text-white mb-3">Education</h4>
                <div className="space-y-2 text-gray-300">
                  <p><span className="text-cyan-400">•</span> PG Certificate - Project Management, Centennial College</p>
                  <p><span className="text-cyan-400">•</span> PG Certificate - International Business, Centennial College</p>
                  <p><span className="text-cyan-400">•</span> B.E. Civil Engineering, Lovely Professional University</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
