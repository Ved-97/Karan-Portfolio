'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

const experiences = [
  {
    company: 'Libro Credit Union',
    role: 'Business Analyst',
    location: 'London, ON',
    period: 'March 2022 – May 2025',
    highlights: [
      'Led requirement elicitation workshops, stakeholder interviews, and JAD sessions for digital banking initiatives',
      'Authored BRDs, FSDs, Technical Solution Documents, and migration plans',
      'Achieved 30% reduction in vendor evaluation cycle time through strategic vendor management',
      'Boosted client adoption by 30% through Secure Message Enhancement project',
      'Reduced FATCA & CRS compliance reporting cycle time by 60% through automation',
    ],
    projects: ['Secure Message Enhancement', 'FATCA & CRS Automation', 'AODA-2 Accessibility Redesign'],
  },
  {
    company: 'Delphi Technologies',
    role: 'Business Analyst',
    location: 'Toronto, ON',
    period: 'August 2021 – February 2022',
    highlights: [
      'Delivered functional analysis, UAT management, and Agile support for government-funded digital portals',
      'Improved front-end system performance by 15% through workflow optimization',
      'Reduced rework and testing time by 20% through precise documentation',
      'Enabled digital reach to 10,000+ users across two projects',
    ],
    projects: ['VacSingh Portal', 'COVID-19 Awareness Portal'],
  },
  {
    company: 'Tazwiz Inc',
    role: 'Business Analyst',
    location: 'Toronto, ON',
    period: 'February 2021 – August 2021',
    highlights: [
      'Built Power BI dashboards reducing turnaround and delivery delays by 25%',
      'Streamlined workflows improving efficiency by 20% through process automation',
      'Created technical design documents and business process workflows',
    ],
    projects: ['TiffinFinds Platform'],
  },
  {
    company: 'Amazon',
    role: 'Business Transportation Analyst',
    location: 'Hyderabad, India',
    period: 'September 2017 – August 2019',
    highlights: [
      'Designed reporting dashboards across global fulfillment centers (NA, EU, JP)',
      'Improved SLA adherence by 20% through process improvement initiatives',
      'Conducted data validation and QA testing for logistics processes',
    ],
    projects: ['Global Fulfillment Optimization'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16 gradient-text"
        >
          Professional Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 to-blue-500" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:w-1/2" />

                <motion.div
                  className="md:w-1/2 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(6, 182, 212, 0.2)' }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-cyan-500/20 p-3 rounded-lg">
                      <Briefcase className="text-cyan-400" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                      <p className="text-xl text-cyan-400 font-semibold">{exp.company}</p>
                      <div className="flex items-center gap-2 text-gray-400 mt-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                        <span className="mx-2">•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start">
                        <span className="text-cyan-400 mr-2">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.projects.map((project, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-400"
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                  <motion.div
                    className="w-6 h-6 bg-cyan-500 rounded-full border-4 border-slate-900"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
