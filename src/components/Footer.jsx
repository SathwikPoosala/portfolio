import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiHeart } from 'react-icons/fi'
import { useState, useEffect } from 'react'

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com/SathwikPoosala', label: 'GitHub' },
    { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/sathwik-poosala-379738279/', label: 'LinkedIn' },
    { icon: <FiMail />, href: 'mailto:poosalasathwik05@gmail.com', label: 'Email' },
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="relative bg-primary-secondary border-t border-neon-cyan/10">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />

      <div className="container-custom py-8 md:py-9 px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 mb-5">
          {/* Brand Section */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold gradient-text mb-4 inline-block cursor-pointer"
              onClick={scrollToTop}
            >
              &lt;Dev /&gt;
            </motion.div>
            <p className="text-text-muted mb-4 leading-relaxed">
              Building innovative digital solutions with clean code and creative design. 
              Passionate about creating meaningful user experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-10 h-10 glass rounded-full flex items-center justify-center border border-neon-cyan/30 hover:border-neon-cyan hover:text-neon-cyan transition-all group"
                  aria-label={social.label}
                >
                  <span className="text-lg group-hover:animate-pulse">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-text-primary mb-4">Quick Links</h3>
            <ul className="grid grid-cols-5 gap-x-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="text-text-muted hover:text-neon-cyan transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-neon-cyan group-hover:w-4 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-5 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-3">
            <p className="text-text-muted text-sm text-center md:text-left">
              © {new Date().getFullYear()} <span className="text-neon-cyan font-semibold">Sathwik Poosala</span>. 
              All rights reserved.
            </p>
            
            <p className="text-text-muted text-sm flex items-center gap-2">
              Made using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0,
          y: showScrollTop ? 0 : 20,
          pointerEvents: showScrollTop ? 'auto' : 'none'
        }}
        onClick={scrollToTop}
          whileHover={{ scale: 1.1, boxShadow: '0 0 12px rgba(0, 245, 255, 0.24)' }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full flex items-center justify-center shadow-neon-cyan z-40 cursor-pointer"
        aria-label="Scroll to top"
      >
        <FiArrowUp className="text-xl" />
      </motion.button>
    </footer>
  )
}

export default Footer
