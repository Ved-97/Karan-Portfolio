'use client'

import { motion } from 'framer-motion'
import {
  BarChart3,
  Database,
  Layout,
  TrendingUp,
  PieChart,
  Code2,
  FileText,
  Users,
  GitBranch,
  Zap,
  CheckCircle,
  Settings,
  Target,
  Lightbulb,
  Workflow
} from 'lucide-react'

const expertiseAreas = [
  {
    title: 'Business Analysis',
    icon: Target,
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
    description: 'Bridging business needs with technical solutions',
    skills: [
      { name: 'Requirements Engineering', icon: FileText },
      { name: 'Process Mapping', icon: Workflow },
      { name: 'UAT Management', icon: CheckCircle },
      { name: 'Stakeholder Alignment', icon: Users },
      { name: 'Solution Design', icon: Lightbulb },
      { name: 'BRD/FSD Creation', icon: FileText },
    ],
  },
  {
    title: 'Data Analytics',
    icon: BarChart3,
    gradient: 'from-purple-500 via-pink-500 to-rose-500',
    description: 'Transforming data into actionable insights',
    skills: [
      { name: 'Python & Pandas', icon: Code2 },
      { name: 'SQL Mastery', icon: Database },
      { name: 'Statistical Analysis', icon: TrendingUp },
      { name: 'Data Validation', icon: CheckCircle },
      { name: 'Exploratory Analysis', icon: BarChart3 },
      { name: 'Predictive Modeling', icon: TrendingUp },
    ],
  },
  {
    title: 'Visualization & BI',
    icon: PieChart,
    gradient: 'from-pink-500 via-rose-500 to-orange-500',
    description: 'Creating compelling data stories',
    skills: [
      { name: 'Power BI', icon: BarChart3 },
      { name: 'Tableau', icon: PieChart },
      { name: 'Dashboard Design', icon: Layout },
      { name: 'Excel Advanced', icon: FileText },
      { name: 'Report Automation', icon: Zap },
      { name: 'Data Storytelling', icon: Lightbulb },
    ],
  },
  {
    title: 'Agile & SDLC',
    icon: Zap,
    gradient: 'from-teal-500 via-cyan-500 to-blue-500',
    description: 'Driving efficient project delivery',
    skills: [
      { name: 'Scrum Framework', icon: Zap },
      { name: 'Sprint Planning', icon: Target },
      { name: 'Backlog Management', icon: CheckCircle },
      { name: 'JIRA Expertise', icon: Settings },
      { name: 'Azure DevOps', icon: GitBranch },
      { name: 'Continuous Delivery', icon: Workflow },
    ],
  },
]

const toolsAndTech = [
  {
    category: 'Analytics',
    icon: BarChart3,
    items: ['Python', 'SQL', 'R', 'Excel'],
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    category: 'Visualization',
    icon: PieChart,
    items: ['Power BI', 'Tableau', 'Looker', 'Matplotlib'],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    category: 'Project Management',
    icon: Target,
    items: ['JIRA', 'Azure DevOps', 'Confluence', 'Trello'],
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    category: 'Design & Collaboration',
    icon: Layout,
    items: ['Figma', 'Miro', 'Lucidchart', 'Visio'],
    gradient: 'from-teal-500 to-cyan-500'
  },
  {
    category: 'Methodologies',
    icon: Zap,
    items: ['Agile/Scrum', 'Waterfall', 'SDLC', 'Lean'],
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    category: 'Industry Domains',
    icon: Database,
    items: ['Digital Banking', 'SaaS', 'FinTech', 'E-commerce'],
    gradient: 'from-blue-500 to-indigo-500'
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-60 -right-40 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block mb-4"
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-semibold">
                Core Expertise
              </span>
            </motion.div>

            <h2 className="text-5xl sm:text-6xl font-black mb-6 gradient-text">
              What I Do
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Delivering end-to-end business analysis and data-driven solutions across{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 font-semibold">
                digital banking, SaaS, and enterprise platforms
              </span>
            </p>
          </motion.div>
        </div>

        {/* Main Expertise Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {expertiseAreas.map((area, index) => {
            const AreaIcon = area.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="group relative"
              >
                {/* Card Container */}
                <div className="relative h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-slate-600 transition-all duration-500 overflow-hidden">

                  {/* Gradient Glow on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  {/* Animated Corner Accents */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${area.gradient} opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-500`} />
                  <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${area.gradient} opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <motion.div
                            className={`p-3 rounded-2xl bg-gradient-to-br ${area.gradient} shadow-lg`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <AreaIcon className="w-7 h-7 text-white" />
                          </motion.div>
                          <h3 className={`text-2xl font-bold bg-gradient-to-r ${area.gradient} bg-clip-text text-transparent`}>
                            {area.title}
                          </h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {area.description}
                        </p>
                      </div>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {area.skills.map((skill, skillIdx) => {
                        const SkillIcon = skill.icon
                        return (
                          <motion.div
                            key={skillIdx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: index * 0.1 + skillIdx * 0.05,
                              type: "spring",
                              stiffness: 200
                            }}
                            whileHover={{
                              scale: 1.05,
                              y: -2,
                              transition: { duration: 0.2 }
                            }}
                            className="relative bg-slate-700/30 backdrop-blur-sm rounded-xl p-4 border border-slate-600/50 hover:border-slate-500 transition-all duration-300 group/skill cursor-pointer"
                          >
                            {/* Skill hover gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover/skill:opacity-10 rounded-xl transition-opacity duration-300`} />

                            <div className="relative flex items-center gap-3">
                              <div className={`p-2 rounded-lg bg-gradient-to-br ${area.gradient} group-hover/skill:scale-110 transition-transform duration-300`}>
                                <SkillIcon className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-sm font-medium text-gray-300 group-hover/skill:text-white transition-colors">
                                {skill.name}
                              </span>
                            </div>
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Tools & Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-4xl font-bold gradient-text mb-3">
                Tools & Technologies
              </h3>
              <p className="text-gray-400 text-lg">
                Mastering industry-leading platforms and frameworks
              </p>
            </motion.div>
          </div>

          {/* Technology Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {toolsAndTech.map((tech, idx) => {
              const TechIcon = tech.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30, rotateX: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: idx * 0.08,
                    type: "spring",
                    stiffness: 120
                  }}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="relative h-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/60 hover:border-slate-600/80 transition-all duration-500 overflow-hidden">

                    {/* Animated gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                    {/* Corner glow effect */}
                    <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500`} />

                    <div className="relative z-10">
                      {/* Icon and Title */}
                      <div className="flex items-center gap-3 mb-5">
                        <motion.div
                          className={`p-2.5 rounded-xl bg-gradient-to-br ${tech.gradient} shadow-lg`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <TechIcon className="w-5 h-5 text-white" />
                        </motion.div>
                        <h4 className={`text-lg font-bold bg-gradient-to-r ${tech.gradient} bg-clip-text text-transparent`}>
                          {tech.category}
                        </h4>
                      </div>

                      {/* Tools Grid */}
                      <div className="space-y-2">
                        {tech.items.map((item, itemIdx) => (
                          <motion.div
                            key={itemIdx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: idx * 0.08 + itemIdx * 0.05,
                              type: "spring"
                            }}
                            whileHover={{
                              x: 5,
                              transition: { duration: 0.2 }
                            }}
                            className="flex items-center gap-2 group/item"
                          >
                            <motion.div
                              className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${tech.gradient}`}
                              animate={{
                                scale: [1, 1.3, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: itemIdx * 0.2
                              }}
                            />
                            <span className="text-sm text-gray-400 group-hover/item:text-gray-200 transition-colors font-medium">
                              {item}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${tech.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Additional Expertise Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 overflow-hidden"
          >
            {/* Decorative glows */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-indigo-500/10 to-transparent blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-purple-500/10 to-transparent blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-6">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Lightbulb className="w-5 h-5 text-indigo-400" />
                </motion.div>
                <h4 className="text-xl font-bold text-gray-300">
                  Additional Expertise
                </h4>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'FATCA/CRS Compliance',
                  'Digital Transformation',
                  'Process Automation',
                  'API Integration',
                  'Cloud Platforms',
                  'Git/GitHub',
                  'CI/CD Pipelines',
                  'Accessibility (WCAG)',
                  'Data Governance',
                  'Business Intelligence',
                ].map((item, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0, rotateZ: -45 }}
                    whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: idx * 0.04,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{
                      scale: 1.1,
                      y: -3,
                      boxShadow: "0 10px 30px rgba(99, 102, 241, 0.3)",
                      transition: { duration: 0.2 }
                    }}
                    className="px-4 py-2.5 bg-gradient-to-r from-slate-700/50 to-slate-600/50 backdrop-blur-sm text-gray-300 rounded-full text-sm font-medium border border-slate-600/50 hover:border-indigo-500/50 hover:from-indigo-500/20 hover:to-purple-500/20 hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
