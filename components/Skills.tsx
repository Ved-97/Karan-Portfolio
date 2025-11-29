'use client'

import { motion } from 'framer-motion'
import { Code, Database, Layout, TrendingUp } from 'lucide-react'

const skillCategories = [
  {
    title: 'Analysis & Documentation',
    icon: Layout,
    skills: [
      { name: 'Requirements Gathering', level: 95 },
      { name: 'Business Process Mapping', level: 90 },
      { name: 'UAT Planning & Execution', level: 92 },
      { name: 'Functional Specifications', level: 88 },
      { name: 'Technical Documentation', level: 85 },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: Code,
    skills: [
      { name: 'JIRA', level: 90 },
      { name: 'Azure DevOps', level: 85 },
      { name: 'Power BI', level: 88 },
      { name: 'SQL', level: 82 },
      { name: 'Confluence', level: 87 },
      { name: 'Figma', level: 80 },
    ],
  },
  {
    title: 'Data & Analytics',
    icon: Database,
    skills: [
      { name: 'Data Analysis', level: 90 },
      { name: 'Tableau', level: 85 },
      { name: 'MS Excel (Advanced)', level: 92 },
      { name: 'Data Validation', level: 88 },
    ],
  },
  {
    title: 'Methodologies',
    icon: TrendingUp,
    skills: [
      { name: 'Agile/Scrum', level: 95 },
      { name: 'Waterfall', level: 85 },
      { name: 'SDLC', level: 90 },
      { name: 'Project Management', level: 88 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16 gradient-text"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(6, 182, 212, 0.2)' }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-cyan-500/20 p-3 rounded-lg">
                    <Icon className="text-cyan-400" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Specialties */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Core Specialties</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Functional Analysis',
              'UAT Planning',
              'Deployment Support',
              'QA Testing',
              'Business Process Mapping',
              'Stakeholder Management',
              'Agile Facilitation',
              'Vendor Management',
            ].map((specialty, index) => (
              <motion.span
                key={index}
                className="px-6 py-3 bg-slate-800/70 border border-cyan-500/30 rounded-full text-cyan-400 font-medium"
                whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)' }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                {specialty}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
