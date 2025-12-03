'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react'

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
    color: 'from-indigo-500 to-purple-500',
    bgColor: 'bg-gradient-to-br from-indigo-50 to-purple-50',
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
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
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
    color: 'from-teal-500 to-cyan-500',
    bgColor: 'bg-gradient-to-br from-teal-50 to-cyan-50',
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
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-gradient-to-br from-pink-50 to-rose-50',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 via-white to-teal-50 overflow-hidden">
      {/* Vibrant background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-300 to-purple-300 rounded-full opacity-15 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-teal-300 to-cyan-300 rounded-full opacity-15 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
            Professional Experience
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            7+ years of driving business transformation through data-driven insights and strategic analysis
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className={`relative ${exp.bgColor} rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-200 overflow-hidden`}>
                {/* Gradient accent bar */}
                <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${exp.color}`} />

                {/* Decorative gradient orb */}
                <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${exp.color} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity duration-500`} />

                <div className="relative">
                  {/* Header Section */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 gap-4">
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${exp.color} p-0.5 shadow-lg`}>
                        <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                          <Briefcase className={`w-6 h-6 bg-gradient-to-br ${exp.color} bg-clip-text text-transparent`} style={{
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text'
                          }} />
                        </div>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-1">{exp.role}</h3>
                        <p className={`text-xl font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mb-2`}>
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2.5">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                          <div className={`flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${exp.color} mt-2`} />
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Projects */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      Projects
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.projects.map((project, idx) => (
                        <span
                          key={idx}
                          className={`px-4 py-2 rounded-full text-sm font-medium bg-white border-2 border-gray-200 text-gray-700 hover:border-transparent hover:bg-gradient-to-r hover:${exp.color} hover:text-white transition-all duration-300 cursor-default shadow-sm`}
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
