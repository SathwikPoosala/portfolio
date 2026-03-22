import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiStar, FiAward, FiZap } from 'react-icons/fi'

const Achievements = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const achievements = [
    {
      id: 1,
      icon: <FiAward />,
      title: 'Binary Blitz Hackathon',
      description: 'Participated in Binary Blitz hackathon - Certificate received',
      year: 'Mar 2024',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 2,
      icon: <FiZap />,
      title: '24 Hours Hackathon',
      description: 'Participated in 24-hour hackathon focused on building interactive website design',
      year: '2024',
      color: 'from-neon-cyan to-blue-500'
    }
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
            Extra-Curricular <span className="gradient-text">Activities</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full mb-4" />
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Active participation in hackathons and coding competitions
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-glow" />

          <div className="space-y-8 md:space-y-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } md:gap-6`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 sm:left-6 md:left-1/2 top-6 md:top-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple transform md:-translate-x-1/2 md:-translate-y-1/2 z-10">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple animate-ping opacity-75" />
                </div>

                {/* Content Card */}
                <div className={`w-full pl-10 sm:pl-14 md:pl-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="glass rounded-2xl p-4 sm:p-5 border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all group"
                  >
                    {/* Icon */}
                    <div className={`inline-flex mb-3 md:mb-4 ${
                      index % 2 === 0 ? 'md:ml-auto' : ''
                    }`}>
                      <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center text-xl md:text-2xl text-white shadow-lg`}>
                        {achievement.icon}
                      </div>
                    </div>

                    {/* Year Badge */}
                    <div className={`inline-block mb-3 ${
                      index % 2 === 0 ? 'md:float-right md:ml-4' : 'md:float-left md:mr-4'
                    }`}>
                      <span className="px-3 py-1 bg-neon-purple/20 border border-neon-purple/50 rounded-full text-xs sm:text-sm text-neon-purple font-semibold">
                        {achievement.year}
                      </span>
                    </div>

                    <h3 className="clear-both text-lg sm:text-xl font-bold text-text-primary mb-2 sm:mb-3 group-hover:text-neon-cyan transition-colors">
                      {achievement.title}
                    </h3>

                    <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                      {achievement.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default Achievements
