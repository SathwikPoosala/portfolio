import { useEffect, useRef } from 'react'

const ParticlesBackground = ({ isLite = false }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)

    const setCanvasSize = () => {
      canvas.width = Math.floor(window.innerWidth * dpr)
      canvas.height = Math.floor(window.innerHeight * dpr)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    setCanvasSize()

    const particles = []
    const viewportArea = window.innerWidth * window.innerHeight
    const densityDivisor = isLite ? 65000 : 35000
    const baseCount = Math.floor(viewportArea / densityDivisor)
    const memoryCap = navigator.deviceMemory && navigator.deviceMemory <= 4 ? 0.7 : 1
    const particleCount = isLite
      ? Math.max(12, Math.min(22, Math.floor(baseCount * memoryCap)))
      : Math.max(18, Math.min(42, Math.floor(baseCount * memoryCap)))
    const maxDistance = isLite ? 88 : 110
    const maxDistanceSq = maxDistance * maxDistance
    let animationFrameId = 0
    let lastTimestamp = 0
    const targetFrameInterval = 1000 / (isLite ? 24 : 30)

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 1
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25
        this.opacity = Math.random() * 0.5 + 0.2
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > window.innerWidth) this.x = 0
        if (this.x < 0) this.x = window.innerWidth
        if (this.y > window.innerHeight) this.y = 0
        if (this.y < 0) this.y = window.innerHeight
      }

      draw() {
        ctx.fillStyle = `rgba(0, 245, 255, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    const animate = (timestamp) => {
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(animate)
        return
      }

      if (timestamp - lastTimestamp < targetFrameInterval) {
        animationFrameId = requestAnimationFrame(animate)
        return
      }

      lastTimestamp = timestamp

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const distanceSq = dx * dx + dy * dy

          if (distanceSq < maxDistanceSq) {
            const distanceRatio = 1 - distanceSq / maxDistanceSq
            const alpha = isLite ? 0.045 * distanceRatio : 0.1 * distanceRatio
            ctx.strokeStyle = `rgba(0, 245, 255, ${alpha})`
            ctx.lineWidth = isLite ? 0.4 : 0.5
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    const handleResize = () => {
      setCanvasSize()
    }

    window.addEventListener('resize', handleResize)
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
    }
  }, [isLite])

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${isLite ? 'opacity-38' : 'opacity-30'}`}
    />
  )
}

export default ParticlesBackground
