import { motion } from 'framer-motion'
import { FiArrowRight, FiMail } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)
  const [isMobile, setIsMobile] = useState(false)

  const titles = [
    'Full Stack Developer',
    'Problem Solver',
    'Tech Enthusiast'
  ]

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px), (pointer: coarse)')
    const updateMobileState = () => setIsMobile(mediaQuery.matches)

    updateMobileState()
    mediaQuery.addEventListener('change', updateMobileState)

    return () => mediaQuery.removeEventListener('change', updateMobileState)
  }, [])

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % titles.length
      const fullText = titles[current]

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      )

      setTypingSpeed(isDeleting ? 50 : 150)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const mobileTypingSpeed = isMobile ? Math.max(typingSpeed, 180) : typingSpeed
    const timer = setTimeout(handleTyping, mobileTypingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, isMobile])

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={isMobile ? { opacity: 0.7 } : {
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={isMobile ? { duration: 0.2 } : {
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute -top-1/2 -left-1/2 w-96 h-96 bg-neon-purple/5 rounded-full blur-xl"
        />
        <motion.div
          animate={isMobile ? { opacity: 0.7 } : {
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={isMobile ? { duration: 0.2 } : {
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute -bottom-1/2 -right-1/2 w-96 h-96 bg-neon-cyan/5 rounded-full blur-xl"
        />
      </div>

      <div className="container-custom relative z-10 px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold"
            >
              Hi, I'm{' '}
              <span className="gradient-text">
                Sathwik Poosala
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="h-16"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-text-muted">
                I'm a{' '}
                <span className="text-neon-cyan text-shadow-glow">
                  {text}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >
                    |
                  </motion.span>
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base text-text-muted max-w-xl"
            >
              I’m a passionate developer focused on building scalable backend systems and full-stack applications that solve real-world problems and deliver meaningful user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.05, boxShadow: '0 0 10px rgba(0, 245, 255, 0.22)' }}
                whileTap={{ scale: 0.95 }}
                className="group px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full font-semibold flex items-center gap-2 hover:shadow-neon-cyan transition-all duration-300"
              >
                View Projects
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 glass border border-neon-cyan/50 rounded-full font-semibold flex items-center gap-2 hover:bg-neon-cyan/10 transition-all duration-300"
              >
                <FiMail />
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 pt-4"
            >
              {[
                { icon: FaGithub, url: 'https://github.com/SathwikPoosala', label: 'GitHub' },
                { icon: FaLinkedin, url: 'https://www.linkedin.com/in/sathwik-poosala-379738279/', label: 'LinkedIn' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 glass rounded-full flex items-center justify-center text-text-muted hover:text-neon-cyan border border-transparent hover:border-neon-cyan transition-all duration-300"
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Avatar/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="relative"
            >
              {/* Glowing Circle Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full blur-xl opacity-10 scale-103" />
              
              {/* Avatar Circle */}
              <div className="relative w-80 h-80 rounded-full glass border-2 border-neon-cyan/25 p-2 shadow-[0_0_10px_rgba(0,245,255,0.2)]">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center overflow-hidden">
                  {/* Placeholder - replace with actual image */}
                  <div className="text-9xl gradient-text font-bold">
                    &lt;/&gt;
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -30, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 5 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                  className={`absolute ${
                    i === 0 ? 'top-10 -left-10' : i === 1 ? 'bottom-10 -right-10' : 'top-1/2 -right-16'
                  }`}
                >
                  <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center border border-neon-cyan/15">
                    <span className="text-3xl">{['⚡', '🚀', '💡'][i]}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-neon-cyan/50 rounded-full p-1"
          >
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-neon-cyan rounded-full mx-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
