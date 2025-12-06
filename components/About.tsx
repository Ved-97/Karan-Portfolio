'use client'

import { motion } from 'framer-motion'
import { MapPin, Mail, Linkedin, Github, Award, Briefcase, FolderKanban, Building2 } from 'lucide-react'

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
    { icon: Briefcase, label: 'Years Experience', value: '6+', gradient: 'from-[#B87C4C] to-[#A8BBA3]' },
    { icon: FolderKanban, label: 'Projects', value: '15+', gradient: 'from-[#B87C4C] to-[#A8BBA3]' },
    { icon: Building2, label: 'Organizations', value: '4', gradient: 'from-[#B87C4C] to-[#A8BBA3]' },
  ]

  const certifications = [
    { name: 'PMP', org: 'PMI', year: '2024', gradient: 'from-[#B87C4C] to-[#A8BBA3]' },
    { name: 'CSM', org: 'Scrum Alliance', year: '2023', gradient: 'from-[#B87C4C] to-[#A8BBA3]' },
    { name: 'Business Analysis', org: 'Techno Canada', year: '2021', gradient: 'from-[#B87C4C] to-[#A8BBA3]' },
  ]

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#F7F1DE] to-white overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-br from-[#A8BBA3] to-[#B87C4C] rounded-full opacity-15 blur-3xl" />
        <div className="absolute bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#F7F1DE] to-[#C4A484] rounded-full opacity-15 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#A8BBA3]/5 to-transparent opacity-30" />
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
            className="text-4xl sm:text-5xl font-black text-center mb-12 text-black"
          >
            About Me
          </motion.h2>

          {/* Statistics Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
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
                    <div className="text-[#2c3e2e] font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* About Me Content */}
          <div className="max-w-4xl mx-auto mb-12">
            <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
              <h3 className="text-2xl sm:text-3xl font-black text-black mb-4 sm:mb-6">About Me</h3>

              <p className="text-base sm:text-lg text-[#2c3e2e] leading-relaxed">
                I&apos;m a Functional Business Analyst with{' '}
                <span className="font-semibold bg-gradient-to-r from-[#B87C4C] to-[#A8BBA3] bg-clip-text text-transparent">6+ years of experience</span>{' '}
                delivering business and technology solutions across finance, SaaS platforms,
                digital banking, and enterprise transformation.
              </p>

              <p className="text-base sm:text-lg text-[#2c3e2e] leading-relaxed">
                I specialize in requirements analysis, Agile delivery, stakeholder communication,
                SQL-based insights, UAT management, and process automation.
              </p>

              <p className="text-base sm:text-lg text-[#2c3e2e] leading-relaxed">
                I help bridge business objectives and technical implementation—ensuring clarity,
                functionality, and measurable results.
              </p>

              <p className="text-base sm:text-lg text-[#2c3e2e] leading-relaxed">
                I&apos;ve worked with financial institutions, SaaS startups, consulting agencies,
                and government-funded digital projects.
              </p>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-[#2c3e2e]">
                  <MapPin size={20} className="text-[#B87C4C]" />
                  <span>Toronto, Canada</span>
                </div>
                <div className="flex items-center gap-2 text-[#2c3e2e]">
                  <Mail size={20} className="text-[#B87C4C]" />
                  <a href="mailto:karanscy@gmail.com" className="hover:text-[#A8BBA3] transition-colors">
                    karanscy@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-[#2c3e2e]">
                  <Linkedin size={20} className="text-[#B87C4C]" />
                  <a
                    href="https://linkedin.com/in/karansinghchambial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#A8BBA3] transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className="flex items-center gap-2 text-[#2c3e2e]">
                  <Github size={20} className="text-[#B87C4C]" />
                  <a
                    href="https://github.com/KTriesCode"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#A8BBA3] transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Certifications & Education */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold gradient-text mb-4 sm:mb-6 flex items-center gap-2">
                <Award className="text-[#B87C4C]" />
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
                        <p className="text-[#2c3e2e]">{cert.org}</p>
                      </div>
                      <span className="text-[#B87C4C] font-medium">{cert.year}</span>
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
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#B87C4C] via-[#A8BBA3] to-transparent rounded-bl-full opacity-20 group-hover:opacity-30 transition-opacity" />
              <h4 className="text-2xl font-bold gradient-text mb-6 relative z-10 flex items-center gap-2">
                <Award className="text-[#B87C4C]" />
                Education
              </h4>
              <div className="space-y-3 text-[#2c3e2e] relative z-10">
                <p className="flex items-start gap-2">
                  <span className="text-[#B87C4C] font-bold">•</span>
                  <span>PG Certificate - Project Management, Centennial College</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-[#B87C4C] font-bold">•</span>
                  <span>PG Certificate - International Business, Centennial College</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-[#B87C4C] font-bold">•</span>
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
