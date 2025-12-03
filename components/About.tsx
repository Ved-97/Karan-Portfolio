'use client'

import { motion } from 'framer-motion'
import { MapPin, Mail, Linkedin, Github, Award, Briefcase, FolderKanban, Building2 } from 'lucide-react'
import Image from 'next/image'

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

  const stats = [
    { icon: Briefcase, label: 'Years Experience', value: '6+', gradient: 'from-indigo-500 to-purple-500' },
    { icon: FolderKanban, label: 'Projects', value: '15+', gradient: 'from-purple-500 to-pink-500' },
    { icon: Building2, label: 'Organizations', value: '4', gradient: 'from-teal-500 to-cyan-500' },
  ]

  const certifications = [
    { name: 'PMP', org: 'PMI', year: '2024', gradient: 'from-indigo-500 to-purple-500' },
    { name: 'CSM', org: 'Scrum Alliance', year: '2023', gradient: 'from-purple-500 to-pink-500' },
    { name: 'Business Analysis', org: 'Techno Canada', year: '2021', gradient: 'from-teal-500 to-cyan-500' },
  ]

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Vibrant Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-br from-indigo-300 to-purple-400 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full opacity-20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-teal-50 to-transparent opacity-30" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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

          {/* Statistics Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  className="relative glass rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  {/* Vibrant gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                  <div className="relative z-10">
                    <div className={`bg-gradient-to-br ${stat.gradient} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white" size={32} />
                    </div>
                    <div className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>{stat.value}</div>
                    <div className="text-gray-300 font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Profile & About Me Content */}
          <div className="grid lg:grid-cols-5 gap-12 items-start mb-12">
            {/* Profile Image */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 flex justify-center"
            >
              <div className="relative group">
                {/* Decorative vibrant elements around image */}
                <div className="absolute -inset-4 bg-gradient-to-br from-indigo-400 via-purple-400 to-teal-400 rounded-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 blur-xl animate-pulse" />
                <div className="absolute -inset-2 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl opacity-20" />

                <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 to-transparent z-10" />
                  <Image
                    src="/images/Karan.jpeg"
                    alt="Karan Singh - Business Analyst"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Dynamic vibrant accent elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl opacity-30 blur-2xl group-hover:opacity-50 transition-opacity" />
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-indigo-500 to-teal-500 rounded-full opacity-30 blur-2xl group-hover:opacity-50 transition-opacity" />
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div variants={itemVariants} className="lg:col-span-3 space-y-6">
              <h3 className="text-3xl font-bold gradient-text mb-6">About Me</h3>

              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a Functional Business Analyst with{' '}
                <span className="font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">6+ years of experience</span>{' '}
                delivering business and technology solutions across finance, SaaS platforms,
                digital banking, and enterprise transformation.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in requirements analysis, Agile delivery, stakeholder communication,
                SQL-based insights, UAT management, and process automation.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                I help bridge business objectives and technical implementation—ensuring clarity,
                functionality, and measurable results.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                I've worked with financial institutions, SaaS startups, consulting agencies,
                and government-funded digital projects.
              </p>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin size={20} className="text-indigo-400" />
                  <span>Toronto, Canada</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Mail size={20} className="text-purple-400" />
                  <a href="mailto:karanscy@gmail.com" className="hover:text-purple-300 transition-colors">
                    karanscy@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Linkedin size={20} className="text-teal-400" />
                  <a
                    href="https://linkedin.com/in/karansinghchambial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-teal-300 transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Github size={20} className="text-indigo-400" />
                  <a
                    href="https://github.com/KTriesCode"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-300 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Certifications & Education */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold gradient-text mb-6 flex items-center gap-2">
                <Award className="text-indigo-600" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="relative glass rounded-xl p-6 hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${cert.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    <div className="relative flex justify-between items-center">
                      <div>
                        <h4 className={`text-xl font-semibold bg-gradient-to-r ${cert.gradient} bg-clip-text text-transparent`}>{cert.name}</h4>
                        <p className="text-gray-300">{cert.org}</p>
                      </div>
                      <span className="text-gray-400 font-medium">{cert.year}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative glass rounded-xl p-8 hover:shadow-xl transition-all duration-300 overflow-hidden group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-300 via-pink-300 to-transparent rounded-bl-full opacity-30 group-hover:opacity-50 transition-opacity" />
              <h4 className="text-2xl font-bold gradient-text mb-6 relative z-10 flex items-center gap-2">
                <Award className="text-purple-400" />
                Education
              </h4>
              <div className="space-y-3 text-gray-300 relative z-10">
                <p className="flex items-start gap-2">
                  <span className="text-indigo-400 font-bold">•</span>
                  <span>PG Certificate - Project Management, Centennial College</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">•</span>
                  <span>PG Certificate - International Business, Centennial College</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-teal-400 font-bold">•</span>
                  <span>B.E. Civil Engineering, Lovely Professional University</span>
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
