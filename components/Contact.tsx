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
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (437) 218-6090',
      href: 'tel:+14372186090',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/karansinghchambial',
      href: 'https://linkedin.com/in/karansinghchambial',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Toronto, Canada',
      href: null,
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
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
          className="text-xl text-gray-300 text-center max-w-2xl mx-auto mb-12"
        >
          I'm currently open to new opportunities and collaborations. Whether you have a question
          or just want to say hi, I'll try my best to get back to you!
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((item, index) => {
            const Icon = item.icon
            const content = (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 text-center h-full"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(6, 182, 212, 0.2)' }}
              >
                <div className="bg-cyan-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-cyan-400" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.label}</h3>
                <p className="text-gray-300 text-sm break-words">{item.value}</p>
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
          className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Work Together?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm available for freelance projects, consulting opportunities, or full-time positions.
            Let's discuss how I can help drive your business objectives with data-driven insights
            and strategic analysis.
          </p>
          <motion.a
            href="mailto:karanscy@gmail.com"
            className="inline-block px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full font-semibold transition-colors duration-300"
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(6, 182, 212, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            Send me an Email
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-cyan-500/20 text-center"
        >
          <p className="text-gray-400 mb-4">
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
