import { useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'

const CursorGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  const updateMousePosition = useCallback((e) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
    setIsVisible(true)
  }, [])

  const hideGlow = useCallback(() => setIsVisible(false), [])

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseleave', hideGlow)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseleave', hideGlow)
    }
  }, [updateMousePosition, hideGlow])

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed pointer-events-none z-50 mix-blend-screen"
      animate={{
        x: mousePosition.x - 20,
        y: mousePosition.y - 20,
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
    >
      <div className="w-10 h-10 rounded-full bg-neon-cyan/20 blur-xl" />
    </motion.div>
  )
}

export default CursorGlow
