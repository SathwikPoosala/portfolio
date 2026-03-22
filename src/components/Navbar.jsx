import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiMenu, FiX } from 'react-icons/fi'

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Extra-Curricular Activities', href: '#achievements' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
]

const SECTION_IDS = NAV_LINKS.map((link) => link.href.substring(1))

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isScrollLocked, setIsScrollLocked] = useState(false)

  useEffect(() => {
    let rafId = 0

    const updateOnScroll = () => {
      setScrolled(window.scrollY > 50)

      // Only auto-update active section if not locked by manual click
      if (isScrollLocked) return

      // Find the section whose top is closest to the detection zone (80px from top)
      let closestSection = null
      let closestDistance = Infinity

      SECTION_IDS.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          // Only consider sections that are reasonably visible
          if (rect.top > -rect.height && rect.top < window.innerHeight) {
            // Calculate distance from ideal detection point (80px)
            const distance = Math.abs(rect.top - 80)
            if (distance < closestDistance) {
              closestDistance = distance
              closestSection = section
            }
          }
        }
      })

      if (closestSection) setActiveSection(closestSection)
    }

    const handleScroll = () => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        updateOnScroll()
        rafId = 0
      })
    }

    updateOnScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [isScrollLocked])

  const scrollToSection = useCallback((href) => {
    const sectionName = href.substring(1)
    setActiveSection(sectionName)
    setIsScrollLocked(true)
    
    const element = document.querySelector(href)
    if (element) {
      // Use a larger offset to ensure section is clearly in active zone (100+ px from top)
      const navOffset = window.innerWidth < 1024 ? 100 : 110
      const targetTop = element.getBoundingClientRect().top + window.scrollY - navOffset

      setMobileMenuOpen(false)
      setTimeout(() => {
        window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' })
        // Keep lock longer to ensure smooth scroll completes
        setTimeout(() => setIsScrollLocked(false), 800)
      }, 120)
    }
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`hidden lg:block fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="glass bg-white/3 rounded-2xl px-5 py-3.5 flex items-center justify-between transition-all duration-300 hover:shadow-neon-cyan">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold gradient-text cursor-pointer"
              onClick={() => scrollToSection('#home')}
            >
              &lt;Dev /&gt;
            </motion.div>

            <div className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <motion.button
                  key={link.name}
                  type="button"
                  onClick={() => scrollToSection(link.href)}
                  className={`relative text-sm font-medium transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'text-neon-cyan'
                      : 'text-text-muted hover:text-text-primary'
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                  {activeSection === link.href.substring(1) && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <motion.a
              href="https://github.com/SathwikPoosala"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.3 }}
              className="text-2xl text-text-muted hover:text-neon-cyan transition-colors"
            >
              <FiGithub />
            </motion.a>
          </div>
        </div>
      </motion.nav>

      <div className="lg:hidden fixed top-16 right-4 z-[60]">
        <motion.button
          type="button"
          whileTap={{ scale: 0.95 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="w-12 h-12 glass bg-white/8 rounded-full border border-neon-cyan/30 flex items-center justify-center text-xl text-text-primary"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </motion.button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 z-40 bg-black/45 backdrop-blur-[1px]"
              aria-label="Close navigation menu"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -8, x: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -8, x: 8 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="lg:hidden fixed top-24 right-4 z-50 w-[66vw] max-w-[220px] glass bg-white/8 rounded-xl p-3.5 border border-neon-cyan/30"
            >
              <div className="space-y-2">
                {NAV_LINKS.map((link, index) => (
                  <motion.button
                    key={link.name}
                    type="button"
                    onClick={() => scrollToSection(link.href)}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                    className={`block w-full text-left rounded-lg px-2.5 py-2 text-sm font-medium transition-colors ${
                      activeSection === link.href.substring(1)
                        ? 'text-neon-cyan bg-neon-cyan/10'
                        : 'text-text-muted hover:text-text-primary hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
