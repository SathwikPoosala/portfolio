import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiDownload, FiFileText, FiEye } from 'react-icons/fi'

const Resume = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const handleDownload = () => {
    // Replace with actual resume file
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'SathwikPoosala_Resume.pdf'
    link.click()
  }

  const handleView = () => {
    window.open('https://drive.google.com/file/d/1ubOY67D63XsMBd2gzl3Y-6Bfn7h0-dWC/view?usp=sharing', '_blank', 'noopener,noreferrer')
  }

  return (
    <div ref={ref} className="section-padding relative bg-primary-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full mb-4" />
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Download my resume to learn more about my experience and qualifications
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            {/* Glowing Background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-glow rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition duration-1000 animate-gradient" />
            
            {/* Resume Preview Card */}
            <div className="relative glass rounded-3xl p-6 md:p-8 border border-neon-cyan/20">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Left - Resume Icon/Preview */}
                <motion.div
                  whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                  transition={{ duration: 0.5 }}
                  className="flex-shrink-0"
                >
                  <div className="w-48 h-64 rounded-2xl bg-gradient-to-br from-neon-cyan/15 to-neon-purple/15 border-2 border-neon-cyan/30 flex items-center justify-center relative overflow-hidden group-hover:shadow-[0_0_10px_rgba(0,245,255,0.22)] transition-all">
                    {/* Paper Lines Effect */}
                    <div className="absolute inset-0 flex flex-col gap-2 p-5">
                      {[...Array(10)].map((_, i) => (
                        <div
                          key={i}
                          className="h-1 bg-white/10 rounded"
                          style={{ width: `${Math.random() * 30 + 70}%` }}
                        />
                      ))}
                    </div>
                    
                    <FiFileText className="text-6xl text-neon-cyan relative z-10" />
                  </div>
                </motion.div>

                {/* Right - Content */}
                <div className="hidden md:block flex-1 text-left">
                  <h3 className="text-3xl font-bold gradient-text mb-4">
                    Professional Resume
                  </h3>
                  
                  <p className="text-text-muted mb-6 text-lg">
                    A comprehensive overview of my skills, experience, education, and achievements. 
                    Updated regularly to reflect my latest work and accomplishments.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-neon-cyan rounded-full" />
                      <span className="text-text-muted">Full Stack Development Experience</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-neon-purple rounded-full" />
                      <span className="text-text-muted">Technical Skills & Certifications</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-neon-glow rounded-full" />
                      <span className="text-text-muted">Project Portfolio & Achievements</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <motion.button
                      onClick={handleDownload}
                      whileHover={{ scale: 1.05, boxShadow: '0 0 10px rgba(0, 245, 255, 0.2)' }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full font-semibold flex items-center gap-2 transition-all"
                    >
                      <FiDownload className="text-xl" />
                      Download Resume
                    </motion.button>

                    <motion.button
                      onClick={handleView}
                      whileHover={{ scale: 1.05, boxShadow: '0 0 9px rgba(157, 0, 255, 0.16)' }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 glass border border-neon-purple/30 rounded-full font-semibold flex items-center gap-2 hover:bg-neon-purple/8 transition-all"
                    >
                      <FiEye className="text-xl" />
                      View Online
                    </motion.button>
                  </div>
                </div>

                {/* Mobile - only buttons below the preview */}
                <div className="md:hidden w-full space-y-3">
                  <motion.button
                    onClick={handleDownload}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full font-semibold flex items-center justify-center gap-2 transition-all"
                  >
                    <FiDownload className="text-xl" />
                    Download Resume
                  </motion.button>

                  <motion.button
                    onClick={handleView}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-3 glass border border-neon-purple/30 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-neon-purple/8 transition-all"
                  >
                    <FiEye className="text-xl" />
                    View Online
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-text-muted">
              Last updated: <span className="text-neon-cyan font-semibold">March 2026</span>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Resume
