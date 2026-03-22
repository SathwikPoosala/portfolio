import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { FaJava } from 'react-icons/fa'
import { 
  SiJavascript, SiTypescript, SiPython, SiCplusplus, SiPhp, SiReact, SiNextdotjs, 
  SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, 
  SiGit, SiDocker, SiFigma 
} from 'react-icons/si'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: none), (pointer: coarse)')
    const updateTouchState = () => setIsTouchDevice(mediaQuery.matches)

    updateTouchState()
    mediaQuery.addEventListener('change', updateTouchState)

    return () => mediaQuery.removeEventListener('change', updateTouchState)
  }, [])

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', icon: <FaJava />, color: 'from-red-500 to-red-600', level: 88 },
        { name: 'C++', icon: <SiCplusplus />, color: 'from-blue-600 to-indigo-600', level: 82 },
        { name: 'JavaScript', icon: <SiJavascript />, color: 'from-yellow-500 to-yellow-600', level: 84 },
        { name: 'PHP', icon: <SiPhp />, color: 'from-indigo-500 to-purple-600', level: 78 },
        { name: 'Python', icon: <SiPython />, color: 'from-green-500 to-green-600', level: 80 },
      ]
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: <SiReact />, color: 'from-cyan-400 to-cyan-500', level: 85 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'from-cyan-500 to-blue-500', level: 88 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs />, color: 'from-green-500 to-green-600', level: 80 },
        { name: 'Express', icon: <SiExpress />, color: 'from-gray-600 to-gray-700', level: 78 },
      ]
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, color: 'from-green-500 to-green-700', level: 82 },
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'from-blue-400 to-blue-600', level: 76 },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: <SiGit />, color: 'from-orange-500 to-red-600', level: 86 },
        { name: 'Docker', icon: <SiDocker />, color: 'from-blue-400 to-blue-600', level: 74 },
      ]
    }
  ]

  const SkillTile = ({ skill, index, categoryIndex }) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: categoryIndex * 0.1 + index * 0.1 }}
        whileHover={isTouchDevice ? {} : { scale: 1.05, y: -4 }}
        className="group rounded-xl border border-white/10 bg-white/5 p-4 text-center md:hover:border-neon-cyan/50 transition-all"
      >
        <div className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r ${skill.color} text-xl text-white shadow-lg group-hover:scale-110 transition-transform`}>
          {skill.icon}
        </div>
        <p className="text-sm font-semibold text-text-primary">{skill.name}</p>
      </motion.div>
    )
  }

  return (
    <div ref={ref} className="section-padding relative bg-primary-secondary/30">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(0,245,255,0.1) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(0,245,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full mb-4" />
          <p className="text-base text-text-muted max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass rounded-2xl p-6 border border-neon-cyan/20 md:hover:border-neon-cyan/50 transition-all md:hover:shadow-neon-cyan"
            >
              <h3 className="text-xl font-bold mb-6 gradient-text flex items-center gap-2">
                <span className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse" />
                {category.title}
              </h3>

              <div className="sm:hidden space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 text-sm">
                      <span className="text-text-primary">{skill.name}</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="hidden sm:grid grid-cols-2 gap-5 sm:grid-cols-3">
                {category.skills.map((skill, index) => (
                  <SkillTile
                    key={skill.name} 
                    skill={skill} 
                    index={index}
                    categoryIndex={categoryIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Skill Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {['Responsive Design', 'API Development', 'CI/CD'].map((badge, index) => (
            <motion.div
              key={badge}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              whileHover={isTouchDevice ? {} : { scale: 1.1, y: -5 }}
              className="glass px-6 py-3 rounded-full border border-neon-purple/30 md:hover:border-neon-purple transition-all cursor-pointer"
            >
              <span className="text-sm font-medium text-text-muted">{badge}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Skills
