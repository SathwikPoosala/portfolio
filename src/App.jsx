import { useEffect, useState, lazy, Suspense } from 'react'
import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ScrollProgress from './components/ScrollProgress'
import CursorGlow from './components/CursorGlow'
import ParticlesBackground from './components/ParticlesBackground'

const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Certificates = lazy(() => import('./components/Certificates'))
const Achievements = lazy(() => import('./components/Achievements'))
const Resume = lazy(() => import('./components/Resume'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  const [isMobile, setIsMobile] = useState(false)
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false)

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 768px)')
    const coarsePointerQuery = window.matchMedia('(pointer: coarse)')
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const updatePreferences = () => {
      const mobile = mobileQuery.matches || coarsePointerQuery.matches
      setIsMobile(mobile)
      setShouldReduceMotion(mobile || reducedMotionQuery.matches)
    }

    updatePreferences()

    mobileQuery.addEventListener('change', updatePreferences)
    coarsePointerQuery.addEventListener('change', updatePreferences)
    reducedMotionQuery.addEventListener('change', updatePreferences)

    return () => {
      mobileQuery.removeEventListener('change', updatePreferences)
      coarsePointerQuery.removeEventListener('change', updatePreferences)
      reducedMotionQuery.removeEventListener('change', updatePreferences)
    }
  }, [])

  const sectionFallback = <div className="section-padding" aria-hidden="true" />

  return (
    <MotionConfig reducedMotion={shouldReduceMotion ? 'always' : 'never'}>
      <div className="relative min-h-screen bg-primary-bg overflow-x-hidden">
        {isMobile && (
          <div className="pointer-events-none fixed inset-0 z-0">
            <div className="absolute -top-24 -left-24 w-[65vw] h-[65vw] max-w-[420px] max-h-[420px] rounded-full bg-neon-purple/10 blur-3xl" />
            <div className="absolute -bottom-28 -right-24 w-[70vw] h-[70vw] max-w-[460px] max-h-[460px] rounded-full bg-neon-cyan/10 blur-3xl" />
          </div>
        )}

        {!isMobile && <CursorGlow />}
        <ScrollProgress />
        <ParticlesBackground isLite={isMobile} />

        <Navbar />

        <main>
          <section id="home">
            <Hero />
          </section>

          <Suspense fallback={sectionFallback}>
            <section id="about">
              <About />
            </section>

            <section id="skills">
              <Skills />
            </section>

            <section id="projects">
              <Projects />
            </section>

            <section id="certificates">
              <Certificates />
            </section>

            <section id="achievements">
              <Achievements />
            </section>

            <section id="resume">
              <Resume />
            </section>

            <section id="contact">
              <Contact />
            </section>
          </Suspense>
        </main>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </MotionConfig>
  )
}

export default App
