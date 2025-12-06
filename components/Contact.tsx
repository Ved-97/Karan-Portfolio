'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, MapPin, Phone, Github } from 'lucide-react'

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'karanscy@gmail.com',
      href: 'mailto:karanscy@gmail.com',
      gradient: 'from-[#B87C4C] to-[#A8BBA3]',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (437) 218-6090',
      href: 'tel:+14372186090',
      gradient: 'from-[#B87C4C] to-[#A8BBA3]',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/karansinghchambial',
      href: 'https://linkedin.com/in/karansinghchambial',
      gradient: 'from-[#B87C4C] to-[#A8BBA3]',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/KTriesCode',
      href: 'https://github.com/KTriesCode',
      gradient: 'from-[#B87C4C] to-[#A8BBA3]',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Toronto, Canada',
      href: null,
      gradient: 'from-[#B87C4C] to-[#A8BBA3]',
    },
  ]

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#F7F1DE] to-white overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#A8BBA3] to-[#B87C4C] rounded-full opacity-15 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#F7F1DE] to-[#C4A484] rounded-full opacity-15 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-black text-center mb-6 sm:mb-8"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-[#2c3e2e] text-center max-w-2xl mx-auto mb-8 sm:mb-12"
        >
          I&apos;m currently open to new opportunities and collaborations. Whether you have a question
          or just want to say hi, I&apos;ll try my best to get back to you!
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {contactInfo.map((item, index) => {
            const Icon = item.icon
            const content = (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative glass rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-2xl transition-all duration-300 text-center h-full overflow-hidden group"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                <div className="relative z-10">
                  <div className={`bg-gradient-to-br ${item.gradient} w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white" size={20} />
                  </div>
                  <h3 className={`text-base sm:text-lg font-semibold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-1 sm:mb-2`}>{item.label}</h3>
                  <p className="text-[#2c3e2e] text-xs sm:text-sm break-words">{item.value}</p>
                </div>
              </motion.div>
            )

            return item.href ? (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block h-full"
              >
                {content}
              </a>
            ) : (
              <div key={index} className="h-full">
                {content}
              </div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative glass rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center shadow-lg overflow-hidden group"
        >
          {/* Decorative gradient elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#B87C4C] via-[#A8BBA3] to-transparent opacity-15 rounded-full blur-3xl group-hover:opacity-20 transition-opacity" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#F7F1DE] via-[#C4A484] to-transparent opacity-15 rounded-full blur-3xl group-hover:opacity-20 transition-opacity" />

          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">Ready to Work Together?</h3>
            <p className="text-sm sm:text-base text-[#2c3e2e] mb-4 sm:mb-6 max-w-2xl mx-auto">
              I&apos;m available for freelance projects, consulting opportunities, or full-time positions.
              Let&apos;s discuss how I can help drive your business objectives with data-driven insights
              and strategic analysis.
            </p>
            <motion.a
              href="mailto:karanscy@gmail.com"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#B87C4C] to-[#A8BBA3] text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 text-sm sm:text-base"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Send me an Email
            </motion.a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 bg-[#B87C4C] text-center"
        >
          <p className="text-white mb-3 sm:mb-4 font-medium text-sm sm:text-base">
            Open to Relocation • Canadian Nationality
          </p>
          <p className="text-white/90 text-xs sm:text-sm">
            © 2025 Karan Singh. Built with Next.js, TypeScript, Three.js & Framer Motion
          </p>
        </motion.footer>
      </div>
    </section>
  )
}
