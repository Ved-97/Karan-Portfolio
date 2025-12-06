'use client'

import { motion } from 'framer-motion'
import {
  SiPython,
  SiPandas,
  SiNumpy,
  SiJupyter,
  SiTableau,
  SiGooglesheets,
  SiJira,
  SiConfluence,
  SiFigma,
  SiLucid,
  SiMiro,
  SiGithub,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiR
} from 'react-icons/si'
import {
  Database,
  FileText,
  Users,
  Lightbulb,
  Workflow,
  CheckCircle,
  Zap,
  TrendingUp,
  BarChart3,
  FileSpreadsheet,
  CloudCog,
  NotebookPen
} from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Programming & Analytics',
      color: 'from-[#B87C4C] to-[#A8BBA3]',
      skills: [
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'Pandas', icon: SiPandas, color: '#150458' },
        { name: 'NumPy', icon: SiNumpy, color: '#013243' },
        { name: 'SQL', icon: SiMysql, color: '#4479A1' },
        { name: 'R', icon: SiR, color: '#276DC3' },
        { name: 'Jupyter', icon: SiJupyter, color: '#F37626' },
      ]
    },
    {
      category: 'Business Intelligence & Visualization',
      color: 'from-[#F7F1DE] to-[#A8BBA3]',
      skills: [
        { name: 'Power BI', icon: BarChart3, color: '#F2C811' },
        { name: 'Tableau', icon: SiTableau, color: '#E97627' },
        { name: 'Excel', icon: FileSpreadsheet, color: '#217346' },
        { name: 'Google Sheets', icon: SiGooglesheets, color: '#34A853' },
      ]
    },
    {
      category: 'Project Management Tools',
      color: 'from-[#B87C4C] to-[#C4A484]',
      skills: [
        { name: 'JIRA', icon: SiJira, color: '#0052CC' },
        { name: 'Azure DevOps', icon: CloudCog, color: '#0078D4' },
        { name: 'Confluence', icon: SiConfluence, color: '#172B4D' },
        { name: 'GitHub', icon: SiGithub, color: '#181717' },
      ]
    },
    {
      category: 'Design & Collaboration',
      color: 'from-[#A8BBA3] to-[#F7F1DE]',
      skills: [
        { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
        { name: 'Lucidchart', icon: SiLucid, color: '#F96E02' },
        { name: 'Miro', icon: SiMiro, color: '#050038' },
        { name: 'MS Office', icon: NotebookPen, color: '#D83B01' },
      ]
    },
    {
      category: 'Databases',
      color: 'from-[#C4A484] to-[#B87C4C]',
      skills: [
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      ]
    },
  ]

  const expertise = [
    { name: 'Requirements Engineering', icon: FileText },
    { name: 'Process Mapping', icon: Workflow },
    { name: 'UAT Management', icon: CheckCircle },
    { name: 'Stakeholder Alignment', icon: Users },
    { name: 'Solution Design', icon: Lightbulb },
    { name: 'Agile/Scrum', icon: Zap },
    { name: 'Data Analysis', icon: TrendingUp },
    { name: 'Business Intelligence', icon: Database },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#F7F1DE] to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -right-40 w-96 h-96 bg-gradient-to-br from-[#A8BBA3] to-[#B87C4C] rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-20 -left-40 w-96 h-96 bg-gradient-to-br from-[#F7F1DE] to-[#C4A484] rounded-full opacity-10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-3 sm:mb-4">
            Skills & Technologies
          </h2>
          <p className="text-base sm:text-lg text-[#2c3e2e] max-w-2xl mx-auto">
            Proficient in industry-leading tools and technologies for business analysis and data analytics
          </p>
        </motion.div>

        {/* Skills Grid by Category */}
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: catIndex * 0.1, duration: 0.5 }}
            className="mb-12"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${category.color}`} />
              {category.category}
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4"
            >
              {category.skills.map((skill, skillIndex) => {
                const Icon = skill.icon
                return (
                  <motion.div
                    key={skillIndex}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="group"
                  >
                    <div className="relative glass rounded-xl sm:rounded-2xl p-4 sm:p-6 h-full flex flex-col items-center justify-center gap-2 sm:gap-3 border border-[#A8BBA3]/20 hover:border-[#A8BBA3]/50 transition-all duration-300 overflow-hidden">
                      {/* Hover gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                      {/* Glow effect on hover */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"
                        style={{ background: skill.color }}
                      />

                      <div className="relative z-10 flex flex-col items-center gap-3">
                        {/* Logo */}
                        <motion.div
                          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon
                            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 transition-all duration-300"
                            style={{ color: skill.color }}
                          />
                        </motion.div>

                        {/* Name */}
                        <span className="text-xs sm:text-sm font-semibold text-[#2c3e2e] group-hover:text-black transition-colors text-center">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        ))}

        {/* Core Expertise Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6 text-center">
            Core Business Analysis Expertise
          </h3>

          <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-[#A8BBA3]/30">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {expertise.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg sm:rounded-xl hover:bg-white/50 transition-all duration-300 cursor-pointer"
                  >
                    <div className="bg-gradient-to-br from-[#B87C4C] to-[#A8BBA3] p-1.5 sm:p-2 rounded-lg flex-shrink-0">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-[#2c3e2e]">
                      {item.name}
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto border border-[#A8BBA3]/30">
            <p className="text-[#2c3e2e] leading-relaxed">
              With a strong foundation in both business and technical domains, I leverage these tools to bridge the gap between
              stakeholders and development teams, ensuring successful project delivery through clear communication,
              data-driven insights, and agile methodologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
