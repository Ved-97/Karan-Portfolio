'use client'

import { motion } from 'framer-motion'
import { ExternalLink, TrendingUp } from 'lucide-react'

const projects = [
  {
    title: 'Secure Message Enhancement',
    company: 'Libro Credit Union',
    description: 'Delivered secure communication module for online banking platform',
    impact: 'Boosted client adoption by 30% in 1 month',
    tags: ['Requirements Analysis', 'UAT', 'Agile', 'Financial Systems'],
    metrics: [
      { label: 'Adoption Increase', value: '30%' },
      { label: 'Timeline', value: '1 Month' },
    ],
  },
  {
    title: 'FATCA & CRS Reporting Automation',
    company: 'Libro Credit Union',
    description: 'Automated CRA compliance reporting for international tax requirements',
    impact: 'Reduced reporting cycle time by 60%',
    tags: ['Process Automation', 'Compliance', 'SQL', 'Data Analysis'],
    metrics: [
      { label: 'Cycle Time Reduction', value: '60%' },
      { label: 'Automation Rate', value: '100%' },
    ],
  },
  {
    title: 'AODA-2 Accessibility Redesign',
    company: 'Libro Credit Union',
    description: 'Improved accessibility and UX across online and mobile banking platforms',
    impact: 'Achieved AODA Level AA compliance',
    tags: ['UX/UI Analysis', 'WCAG', 'Accessibility', 'User Testing'],
    metrics: [
      { label: 'Compliance Level', value: 'AA' },
      { label: 'User Satisfaction', value: '+25%' },
    ],
  },
  {
    title: 'Government Digital Portals',
    company: 'Delphi Technologies',
    description: 'Delivered VacSingh & COVID-19 Awareness portals for government initiatives',
    impact: 'Enabled digital reach to 10,000+ users',
    tags: ['Full SDLC', 'Government Systems', 'UAT', 'Documentation'],
    metrics: [
      { label: 'Users Reached', value: '10K+' },
      { label: 'Performance Gain', value: '15%' },
    ],
  },
  {
    title: 'Vendor Evaluation Framework',
    company: 'Libro Credit Union',
    description: 'Led vendor selection for communication tools with structured evaluation process',
    impact: 'Reduced evaluation cycle time by 30%',
    tags: ['Vendor Management', 'Strategic Planning', 'Stakeholder Engagement'],
    metrics: [
      { label: 'Cycle Time Reduction', value: '30%' },
      { label: 'Cost Savings', value: 'Significant' },
    ],
  },
  {
    title: 'TiffinFinds Platform',
    company: 'Tazwiz Inc',
    description: 'Food-tech platform with operational dashboards and automated workflows',
    impact: 'Improved efficiency by 20% and reduced delays by 25%',
    tags: ['Power BI', 'Process Optimization', 'CRM', 'Analytics'],
    metrics: [
      { label: 'Efficiency Gain', value: '20%' },
      { label: 'Delay Reduction', value: '25%' },
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16 gradient-text"
        >
          Key Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 flex flex-col"
              whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(6, 182, 212, 0.2)' }}
            >
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white flex-1">{project.title}</h3>
                  <TrendingUp className="text-cyan-400 flex-shrink-0 ml-2" size={20} />
                </div>

                <p className="text-sm text-cyan-400 font-semibold mb-3">{project.company}</p>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-3 mb-4">
                  <p className="text-cyan-400 font-semibold text-sm flex items-center gap-2">
                    <ExternalLink size={16} />
                    {project.impact}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  {project.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-700/50 rounded-lg p-3 text-center"
                    >
                      <div className="text-2xl font-bold text-cyan-400">{metric.value}</div>
                      <div className="text-xs text-gray-400">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-slate-700/50 border border-cyan-500/20 rounded text-xs text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
