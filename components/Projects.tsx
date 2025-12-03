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
  const cardGradients = [
    'from-indigo-500 to-purple-500',
    'from-purple-500 to-pink-500',
    'from-pink-500 to-rose-500',
    'from-teal-500 to-cyan-500',
    'from-cyan-500 to-blue-500',
    'from-indigo-500 to-blue-500',
  ]

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800 overflow-hidden">
      {/* Vibrant background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-300 to-pink-300 rounded-full opacity-15 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-300 to-teal-300 rounded-full opacity-15 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16 gradient-text"
        >
          Key Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const gradient = cardGradients[index % cardGradients.length]

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative glass rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden group"
                whileHover={{ scale: 1.03, y: -5 }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                <div className="flex-1 relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className={`text-xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent flex-1`}>{project.title}</h3>
                    <div className={`flex-shrink-0 ml-2 p-2 rounded-lg bg-gradient-to-br ${gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <TrendingUp className="text-white" size={20} />
                    </div>
                  </div>

                  <p className={`text-sm font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-3`}>{project.company}</p>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                  <div className={`glass border-2 border-transparent bg-gradient-to-r ${gradient} bg-clip-border rounded-xl p-3 mb-4`}>
                    <p className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent font-semibold text-sm flex items-center gap-2`}>
                      <ExternalLink size={16} className="text-purple-600" />
                      {project.impact}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {project.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="glass rounded-xl p-3 text-center hover:shadow-md transition-shadow"
                      >
                        <div className={`text-2xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>{metric.value}</div>
                        <div className="text-xs text-gray-400 font-medium">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1.5 glass rounded-lg text-xs text-gray-300 font-medium hover:bg-gradient-to-r hover:${gradient} hover:text-white transition-all duration-300 cursor-default border border-slate-600`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
