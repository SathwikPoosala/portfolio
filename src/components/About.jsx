import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiAward, FiBook, FiCode, FiTarget } from 'react-icons/fi'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const education = [
    {
      year: '2023 - 2027',
      degree: 'Bachelor of Technology',
      institution: 'Lovely Professional University',
      description: 'Computer Science & Engineering',
      icon: <FiBook />
    },
    {
      year: '2021 - 2023',
      degree: 'Higher Secondary',
      institution: 'Narayana Junior College',
      description: 'MPC Stream',
      icon: <FiAward />
    }
  ]

  const stats = [
    { label: 'Projects Completed', value: '3', icon: <FiCode /> },
    { label: 'Problems Solved on LeetCode', value: '80+', icon: <FiTarget /> },
    
  ]

  return (
    <div ref={ref} className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative max-w-[320px] md:max-w-[360px] mx-auto lg:mx-0 lg:ml-20"
          >
            <div className="relative group w-full">
              {/* Glowing border effect */}
              {/* <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient" /> */}

              {/* Image container */}
              <div className="relative glass rounded-2xl p-4 aspect-square flex items-center justify-center overflow-hidden">
                <img 
                  src="/IMG_20251202_112802.jpg.jpeg" 
                  alt="Sathwik Poosala" 
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Floating stats */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 glass rounded-2xl p-3 border border-neon-cyan/30"
            >
              <div className="text-2xl font-bold gradient-text">2+</div>
              <div className="text-sm text-text-muted">Years Coding</div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold gradient-text">
              Passionate Developer & Designer
            </h3>
            
            <p className="text-lg text-text-muted leading-relaxed">
              I’m a dedicated full-stack developer with a strong foundation in JAVA, C++, and data structures, 
              currently expanding my skills in modern web development. I enjoy building practical, 
              user-focused applications that solve real-world problems, while continuously improving my 
              technical and problem-solving abilities.
            </p>

            

            <p className="text-lg text-text-muted leading-relaxed">
              Currently, I’m sharpening my skills in full-stack development and working towards creating impactful 
              projects that reflect both functionality and simplicity. I’m always eager to learn, stay consistent, 
              and push myself closer to achieving my goal of securing a high-paying software role.
            </p>

            <div className="space-y-4 pt-4">

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-neon-purple/10 flex items-center justify-center text-neon-purple">
                  <FiTarget className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary">Problem Solver</h4>
                  <p className="text-sm text-text-muted">Turning complex problems into simple solutions</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-neon-glow/10 flex items-center justify-center text-neon-glow">
                  <FiBook className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary">Continuous Learner</h4>
                  <p className="text-sm text-text-muted">Always exploring new technologies and trends</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-2xl p-5 text-center border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all"
            >
              <div className="text-3xl mb-3 flex justify-center text-neon-cyan">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
            <h3 className="text-2xl font-bold text-center mb-8">
            Education <span className="gradient-text">Journey</span>
          </h3>

          <div className="max-w-3xl mx-auto space-y-8">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <div className="glass rounded-2xl p-5 border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center text-2xl flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-bold text-text-primary">{item.degree}</h4>
                        <span className="text-sm text-neon-cyan font-medium">{item.year}</span>
                      </div>
                      <h5 className="text-lg text-text-muted mb-2">{item.institution}</h5>
                      <p className="text-text-muted">{item.description}</p>
                    </div>
                  </div>
                </div>

                {/* Timeline connector */}
                {index < education.length - 1 && (
                  <div className="absolute left-[27px] top-full h-8 w-0.5 bg-gradient-to-b from-neon-cyan to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
