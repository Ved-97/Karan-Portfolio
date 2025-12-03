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
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (437) 218-6090',
      href: 'tel:+14372186090',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/karansinghchambial',
      href: 'https://linkedin.com/in/karansinghchambial',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/KTriesCode',
      href: 'https://github.com/KTriesCode',
      gradient: 'from-teal-500 to-cyan-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Toronto, Canada',
      href: null,
      gradient: 'from-cyan-500 to-blue-500',
    },
  ]

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-50 via-white to-purple-50 overflow-hidden">
      {/* Vibrant background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full opacity-15 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-300 to-teal-300 rounded-full opacity-15 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-center mb-8 gradient-text"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-700 text-center max-w-2xl mx-auto mb-12"
        >
          I'm currently open to new opportunities and collaborations. Whether you have a question
          or just want to say hi, I'll try my best to get back to you!
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {contactInfo.map((item, index) => {
            const Icon = item.icon
            const content = (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative glass rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 text-center h-full overflow-hidden group"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                <div className="relative z-10">
                  <div className={`bg-gradient-to-br ${item.gradient} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className={`text-lg font-semibold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-2`}>{item.label}</h3>
                  <p className="text-gray-600 text-sm break-words">{item.value}</p>
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
          className="relative glass rounded-2xl p-8 text-center shadow-lg overflow-hidden group"
        >
          {/* Decorative gradient elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-indigo-300 via-purple-300 to-transparent opacity-20 rounded-full blur-3xl group-hover:opacity-30 transition-opacity" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-teal-300 via-pink-300 to-transparent opacity-20 rounded-full blur-3xl group-hover:opacity-30 transition-opacity" />

          <div className="relative z-10">
            <h3 className="text-2xl font-bold gradient-text mb-4">Ready to Work Together?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              I'm available for freelance projects, consulting opportunities, or full-time positions.
              Let's discuss how I can help drive your business objectives with data-driven insights
              and strategic analysis.
            </p>
            <motion.a
              href="mailto:karanscy@gmail.com"
              className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
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
          className="mt-16 pt-8 border-t border-gray-300 text-center"
        >
          <p className="text-gray-600 mb-4">
            Open to Relocation • Canadian Nationality
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 Karan Singh. Built with Next.js, TypeScript, Three.js & Framer Motion
          </p>
        </motion.footer>
      </div>
    </section>
  )
}
