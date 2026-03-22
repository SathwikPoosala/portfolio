import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FiX, FiAward, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const Certificates = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedCert, setSelectedCert] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isPaused, setIsPaused] = useState(false)

  const certificates = [
    {
      id: 1,
      title: 'MERN Stack Development',
      organization: 'GOBORU Tech',
      date: '2025',
      image: '/cert1.png',
      description: 'Successfully completed MERN Stack Development training focused on building responsive web interfaces, backend APIs, and full-stack project integration using MongoDB, Express.js, React, and Node.js.',
      credentialUrl: 'https://drive.google.com/file/d/1ucjf-3RpG3VJZTqUCcIYUyBC8vlvpKzl/view?usp=drive_link'
    },
    {
      id: 2,
      title: 'Data Structures & Algorithms',
      organization: 'Neo colab LPU',
      date: '2024',
      image: '/cert2.png',
      description: 'Completed comprehensive training on data structures and algorithms, covering topics such as arrays, linked lists, trees, sorting algorithms, and problem-solving techniques to optimize code performance.',
      credentialUrl: 'https://drive.google.com/file/d/194YRfLVVmhkRPc3Z2e7ZWD1hbe35IthR/view?usp=sharing'
    },
    {
      id: 3,
      title: 'Objective-Oriented Programming (OOP) in CPP',
      organization: 'Neo colab LPU',
      date: '2024',
      image: '/cert3.png',
      description: 'Completed training on Object-Oriented Programming (OOP) in C++, covering concepts such as classes, objects, inheritance, polymorphism, and encapsulation to build modular and reusable code.',
      credentialUrl: 'https://drive.google.com/file/d/1C4j2rZeX3A4Pi00KAjLjaLgqQEYkfVen/view?usp=sharing'
    },
    {
      id: 4,
      title: 'Fundamentals of Network Communication',
      organization: 'Coursera',
      date: '2024',
      image: '/cert4.png',
      description: 'Completed a comprehensive course on network communication fundamentals, covering topics such as TCP/IP protocols, network architecture, and data transmission techniques to enhance understanding of how devices communicate over the internet.',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/GUX8V4FCUDP0'
    },
    {
      id: 5,
      title: 'The Bits and Bytes of Computer Networking',
      organization: 'coursera (google)',
      date: '2024',
      image: '/cert5.png',
      description: 'Finished a detailed course on computer networking, exploring the underlying principles of data communication, network protocols, and the architecture of the internet to gain a deeper understanding of how networks operate.',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/ZSX9Q73TSGER'
    },
    {
      id: 6,
      title: 'TCP/IP and Advanced Topics',
      organization: 'coursera',
      date: '2024',
      image: '/cert6.png',
      description: 'Completed an advanced course on TCP/IP protocols, delving into topics such as network security, routing, and performance optimization to enhance knowledge of how data is transmitted securely and efficiently across networks.',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/DRRIB5ANI22N'
    }
  ]

  const goToNext = () => {
    setDirection(1)
    setActiveIndex((prev) => (prev + 1) % certificates.length)
  }

  const goToPrev = () => {
    setDirection(-1)
    setActiveIndex((prev) => (prev - 1 + certificates.length) % certificates.length)
  }

  useEffect(() => {
    if (isPaused) return

    const intervalId = setInterval(() => {
      setDirection(1)
      setActiveIndex((prev) => (prev + 1) % certificates.length)
    }, 3500)

    return () => clearInterval(intervalId)
  }, [certificates.length, isPaused])

  const getRelativePosition = (index) => {
    const diff = (index - activeIndex + certificates.length) % certificates.length
    if (diff === 0) return 0
    if (diff === 1) return 1
    if (diff === certificates.length - 1) return -1
    return 2
  }

  const sideOffset = '76%'
  const offscreenOffset = '116%'
  const carouselTransition = { type: 'tween', duration: 0.18, ease: [0.22, 0.9, 0.3, 1] }

  return (
    <div ref={ref} className="section-padding !pt-8 pb-20 md:pb-24 relative bg-primary-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0 }}
          className="text-center mb-5 md:mb-6"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certificates & <span className="gradient-text">Credentials</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full mb-4" />
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Professional certifications and courses I've completed to enhance my skills
          </p>
        </motion.div>

        <div className="md:hidden space-y-3">
          {certificates.map((cert, index) => (
            <motion.button
              key={cert.id}
              type="button"
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.28, delay: index * 0.04 }}
              onClick={() => setSelectedCert(cert)}
              className="w-full text-left glass rounded-xl p-4 border border-neon-cyan/20 active:scale-[0.99] transition-all hover:border-neon-cyan/50 hover:bg-neon-cyan/5 group"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-text-primary truncate underline decoration-neon-cyan/0 group-hover:decoration-neon-cyan/60 transition-all duration-200 underline-offset-2">{cert.title}</h3>
                  <p className="text-xs text-text-muted mt-1 truncate">{cert.organization}</p>
                </div>
                <span className="text-xs text-neon-cyan font-semibold whitespace-nowrap">→</span>
              </div>
            </motion.button>
          ))}
        </div>

        <div
          className="hidden md:flex relative mt-6 w-full justify-center items-center"
        >
          <div className="relative h-[540px] w-full max-w-[1080px] overflow-hidden flex items-end justify-center">
            {certificates.map((cert, index) => {
              const position = getRelativePosition(index)
              const isCenter = position === 0
              const isSide = position === -1 || position === 1
              const isVisible = isCenter || isSide
              const cardTransition = isVisible ? carouselTransition : { duration: 0 }

              const animateState = isCenter
                ? { x: '0%', y: -20, scale: 1, opacity: 1, zIndex: 30 }
                : position === -1
                  ? { x: `-${sideOffset}`, y: 10, scale: 0.9, opacity: 0.68, zIndex: 20 }
                  : position === 1
                    ? { x: sideOffset, y: 10, scale: 0.9, opacity: 0.68, zIndex: 20 }
                    : {
                        x: direction === 1 ? offscreenOffset : `-${offscreenOffset}`,
                        y: 10,
                        scale: 0.86,
                        opacity: 0,
                        zIndex: 10,
                      }

              return (
                <div
                  key={cert.id}
                  className={`absolute inset-0 flex items-end justify-center pointer-events-none ${isCenter ? 'z-30' : isSide ? 'z-20' : 'z-10'}`}
                >
                  <motion.div
                    initial={{ x: direction === 1 ? offscreenOffset : `-${offscreenOffset}`, y: 10, scale: 0.86, opacity: 0 }}
                    animate={isInView ? animateState : {}}
                    transition={cardTransition}
                    style={{ willChange: 'transform, opacity' }}
                    onHoverStart={() => {
                      if (isVisible) setIsPaused(true)
                    }}
                    onHoverEnd={() => setIsPaused(false)}
                    onClick={() => setSelectedCert(cert)}
                    whileHover={{ scale: isCenter ? 1.015 : 1.01 }}
                    className={`group transform-gpu w-[380px] lg:w-[430px] h-[440px] flex flex-col glass rounded-2xl overflow-hidden border border-neon-cyan/25 transition-all duration-300 cursor-pointer pointer-events-auto origin-bottom ${isCenter ? 'bg-primary-bg/96 hover:border-neon-cyan/55' : 'hover:border-neon-cyan/40'}`}
                  >
                    <div className="relative h-56 bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 overflow-hidden">
                      {cert.image ? (
                        <img
                          src={cert.image}
                          alt={cert.title}
                          loading="lazy"
                          decoding="async"
                          fetchPriority="low"
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <FiAward className="text-8xl text-neon-cyan/30" />
                        </div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-semibold flex items-center gap-2 px-4 py-2 rounded-lg bg-black/25">
                          <FiExternalLink /> View Certificate
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 p-5 bg-gradient-to-b from-primary-bg/85 to-primary-bg/95 flex flex-col">
                      <h3 className="text-xl font-bold text-text-primary group-hover:text-neon-cyan transition-colors line-clamp-2 mb-2">
                        {cert.title}
                      </h3>

                      <p className="text-base text-neon-purple font-medium mb-3">{cert.organization}</p>

                      <div className="mt-auto pt-3 border-t border-white/10 flex items-center justify-between">
                        <span className="text-sm text-text-muted">{cert.date}</span>
                        <FiAward className="text-neon-cyan" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>

          <button
            type="button"
            onClick={goToPrev}
            className="absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 w-11 h-11 glass rounded-full border border-neon-cyan/35 flex items-center justify-center text-neon-cyan z-40 hover:bg-neon-cyan/10 active:scale-95 transition-colors duration-200"
            aria-label="Previous certificate"
          >
            <FiChevronLeft className="text-xl transition-transform duration-150 hover:scale-110" />
          </button>

          <button
            type="button"
            onClick={goToNext}
            className="absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 w-11 h-11 glass rounded-full border border-neon-cyan/35 flex items-center justify-center text-neon-cyan z-40 hover:bg-neon-cyan/10 active:scale-95 transition-colors duration-200"
            aria-label="Next certificate"
          >
            <FiChevronRight className="text-xl transition-transform duration-150 hover:scale-110" />
          </button>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.12, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.96, y: 10, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.97, y: 6, opacity: 0 }}
                transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
                style={{ willChange: 'transform, opacity' }}
                className="glass rounded-2xl border border-neon-cyan/50 w-full max-w-md md:max-w-2xl p-5 md:p-6 relative"
              >
                {/* Close Button */}
                <motion.button
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-3 right-3 md:top-4 md:right-4 w-9 h-9 md:w-10 md:h-10 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center text-red-500 hover:bg-red-500/30 transition-all"
                >
                  <FiX className="text-xl" />
                </motion.button>

                {/* Certificate Preview */}
                <div className="mb-5 md:mb-6 h-48 md:h-64 rounded-xl bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 overflow-hidden border border-neon-cyan/30">
                  {selectedCert.image ? (
                    <img
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <FiAward className="text-9xl text-neon-cyan/50" />
                    </div>
                  )}
                </div>

                {/* Details */}
                <h3 className="text-xl md:text-2xl font-bold gradient-text mb-3">
                  {selectedCert.title}
                </h3>
                
                <p className="text-base md:text-lg text-neon-purple font-semibold mb-4">
                  {selectedCert.organization}
                </p>
                
                <p className="text-sm md:text-base text-text-muted mb-5 md:mb-6 whitespace-pre-line leading-relaxed">
                  {selectedCert.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-muted">
                    Issued: {selectedCert.date}
                  </span>
                  
                  <motion.a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full font-semibold flex items-center gap-2"
                  >
                    View Credential <FiExternalLink />
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

export default Certificates
