import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi'
import { Tilt } from 'react-tilt'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Mock Interview & Assessment Platform',
      description: 'A scalable backend system for a mock interview platform where users can take subject-wise assessments (DSA, OS, DBMS, CN). Implements performance tracking and analytics to identify strong and weak areas based on historical test data. Uses JWT for secure authentication and integrates Redis caching to optimize frequently accessed data like questions and user sessions.',
      image: '/project1.jpg',
      category: 'Backend',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Redis'],
      github: 'https://github.com/SathwikPoosala/mock-interview-platform',
      live: 'https://github.com/SathwikPoosala/mock-interview-platform',
      featured: true
    },
    {
      id: 2,
      title: 'AR-Based Anatomy Learning Tool ',
      description: 'A full-stack educational platform designed to enhance learning through interactive 3D anatomical models. Teachers can upload GLB-based models and create quizzes, while students can visualize models, attempt assessments, and track their scores. Implements role-based access control with separate dashboards for teachers and students, ensuring secure and efficient content management.',
      image: '/project3.jpg',
      category: 'Fullstack',
      tags: ['React', 'Node.js', 'Express', 'MongoDB',],
      github: 'https://github.com/SathwikPoosala/anatomy-3d-models',
      live: 'https://github.com/SathwikPoosala/anatomy-3d-models',
      featured: false
    },
    {
      id: 3,
      title: 'Movie Review',
      description: 'A MERN stack movie review platform that integrates with an external movie API to fetch real-time data. Implements secure user authentication and complete CRUD operations for reviews, allowing users to create, edit, and delete their feedback. Includes advanced search and filtering features based on categories to improve user experience.',
      image: '/project2.jpg',
      category: 'Fullstack',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
      github: 'https://github.com/SathwikPoosala/Moviereview',
      live: 'https://github.com/SathwikPoosala/Moviereview',
      featured: true
    },
    {
      id: 4,
      title: 'Event Happening',
      description: 'A platform that allows users to create and publish events with details such as images, descriptions, and categories. Other users can explore local events, register for them, and filter events based on interests like music, cultural, religious, and more. Implements secure ownership where only the event creator can manage or delete their events.',
      image: '/project4.jpg',
      category: 'Fullstack',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/SathwikPoosala/eventhappening',
      live: 'https://github.com/SathwikPoosala/eventhappening',
      featured: false
    },
  ]

  const filters = ['All', 'Backend', 'Fullstack']

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const ProjectCard = ({ project, index }) => {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="group relative"
      >
        <Tilt
          options={{
            max: 15,
            scale: 1.02,
            speed: 400,
            glare: true,
            'max-glare': 0.3,
          }}
          className="h-full"
        >
          <div className="h-full glass rounded-2xl overflow-hidden border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-300">
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden bg-primary-secondary">
              {/* Placeholder gradient - replace with actual images */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center">
                <span className="text-6xl opacity-50">📱</span>
              </div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-primary-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full bg-neon-cyan/20 backdrop-blur-sm border border-neon-cyan flex items-center justify-center text-neon-cyan hover:bg-neon-cyan/30 transition-all"
                >
                  <FiGithub className="text-xl" />
                </motion.a>
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full bg-neon-purple/20 backdrop-blur-sm border border-neon-purple flex items-center justify-center text-neon-purple hover:bg-neon-purple/30 transition-all"
                >
                  <FiExternalLink className="text-xl" />
                </motion.a>
              </div>

              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-neon-cyan to-neon-purple px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <FiStar className="text-xs" />
                  Featured
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-neon-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-text-muted line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={`${project.id}-tag-${tagIndex}`}
                    className="px-3 py-1 bg-neon-cyan/10 border border-neon-cyan/30 rounded-full text-xs text-neon-cyan"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Category Badge */}
              <div className="pt-4 border-t border-white/5">
                <span className="text-xs text-text-muted">Category: <span className="text-neon-purple font-semibold">{project.category}</span></span>
              </div>
            </div>
          </div>
        </Tilt>
      </motion.div>
    )
  }

  return (
    <div ref={ref} className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full mb-4" />
          {/* <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Showcasing my best work and creative solutions to real-world problems
          </p> */}
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-neon-cyan to-neon-purple text-white'
                  : 'glass border border-neon-cyan/30 text-text-muted hover:border-neon-cyan hover:text-neon-cyan'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Mobile List */}
        <div className="md:hidden space-y-3">
          {filteredProjects.map((project, index) => (
            <motion.button
              key={project.id}
              type="button"
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.28, delay: index * 0.05 }}
              onClick={() => setSelectedProject(project)}
              className="w-full text-left glass rounded-xl p-4 border border-neon-cyan/20 active:scale-[0.99] transition-all hover:border-neon-cyan/50 hover:bg-neon-cyan/5 group"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-text-primary truncate underline decoration-neon-cyan/0 group-hover:decoration-neon-cyan/60 transition-all duration-200 underline-offset-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-text-muted mt-1 line-clamp-1">
                    {project.description}
                  </p>
                </div>
                <span className="text-xs text-neon-cyan font-semibold whitespace-nowrap">
                  →
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            onClick={() => window.open('https://github.com/SathwikPoosala', '_blank')}
            whileHover={{ scale: 1.05, boxShadow: '0 0 12px rgba(157, 0, 255, 0.24)' }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 glass border border-neon-purple/50 rounded-full font-semibold hover:bg-neon-purple/10 transition-all duration-300 cursor-pointer"
          >
            View All Projects on GitHub →
          </motion.button>
        </motion.div>

        {/* Mobile Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="md:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="glass rounded-2xl border border-neon-cyan/40 w-full max-w-md p-5"
              >
                <h3 className="text-xl font-bold gradient-text mb-2">{selectedProject.title}</h3>
                <p className="text-sm text-neon-purple font-semibold mb-3">{selectedProject.category}</p>
                <p className="text-sm text-text-muted leading-relaxed mb-4">{selectedProject.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {selectedProject.tags.map((tag, tagIndex) => (
                    <span
                      key={`${selectedProject.id}-tag-${tagIndex}`}
                      className="px-2.5 py-1 bg-neon-cyan/10 border border-neon-cyan/30 rounded-full text-[11px] text-neon-cyan"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2.5 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg font-semibold flex items-center justify-center gap-2"
                  >
                    <FiGithub /> GitHub
                  </motion.a>
                  <motion.a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2.5 glass border border-neon-purple/40 rounded-lg font-semibold flex items-center justify-center gap-2"
                  >
                    <FiExternalLink /> Live
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Projects
