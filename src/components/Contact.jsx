import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiSend, FiCheck, FiGithub, FiMail, FiLinkedin } from 'react-icons/fi'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const web3FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')

    if (!web3FormsAccessKey) {
      setIsSubmitting(false)
      setSubmitError('Email service is not configured. Please set VITE_WEB3FORMS_ACCESS_KEY.')
      return
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: web3FormsAccessKey,
          subject: 'New Portfolio Contact Form Submission',
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      const result = await response.json()

      if (!result.success) {
        throw new Error('W3Forms submission failed')
      }

      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch {
      setSubmitError('Failed to send message. Please try again in a moment.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div ref={ref} className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute -top-16 -left-12 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-16 w-72 h-72 bg-neon-purple/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full mb-4" />
          <p className="text-base md:text-lg text-text-muted max-w-2xl mx-auto">
            Share your idea and I will get back with a clear plan to build it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass rounded-3xl border border-neon-cyan/30 p-4 sm:p-6 md:p-8">

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="glass rounded-2xl p-6 border border-neon-cyan/20 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary-secondary rounded-xl border border-neon-cyan/30 focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 text-text-primary transition-all placeholder-text-muted"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary-secondary rounded-xl border border-neon-cyan/30 focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 text-text-primary transition-all placeholder-text-muted"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                  Project Brief
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="7"
                  className="w-full px-4 py-3 bg-primary-secondary rounded-xl border border-neon-cyan/30 focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 text-text-primary transition-all resize-none placeholder-text-muted"
                  placeholder="Tell me what you are building, timeline, and expected features..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                whileHover={!isSubmitting ? { scale: 1.02, boxShadow: '0 0 12px rgba(157, 0, 255, 0.24)' } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
                  isSubmitted
                    ? 'bg-green-500/20 border-2 border-green-500 text-green-500'
                    : 'bg-gradient-to-r from-neon-purple to-neon-cyan shadow-neon-purple'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <FiCheck className="text-xl" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <FiSend />
                    Send Message
                  </>
                )}
              </motion.button>

              {submitError && (
                <p className="text-sm text-red-400 text-center">{submitError}</p>
              )}
            </motion.form>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 pt-4 border-t border-neon-cyan/20"
            >
              <div className="flex justify-center gap-4">
                <motion.a
                  href="https://github.com/SathwikPoosala"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-10 h-10 glass rounded-full flex items-center justify-center border border-neon-cyan/30 hover:border-neon-cyan hover:text-neon-cyan transition-all group"
                  aria-label="GitHub"
                >
                  <span className="text-lg group-hover:animate-pulse"><FiGithub /></span>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/sathwik-poosala-379738279/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-10 h-10 glass rounded-full flex items-center justify-center border border-neon-cyan/30 hover:border-neon-cyan hover:text-neon-cyan transition-all group"
                  aria-label="LinkedIn"
                >
                  <span className="text-lg group-hover:animate-pulse"><FiLinkedin /></span>
                </motion.a>

                <motion.a
                  href="mailto:poosalasathwik05@gmail.com"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-10 h-10 glass rounded-full flex items-center justify-center border border-neon-cyan/30 hover:border-neon-cyan hover:text-neon-cyan transition-all group"
                  aria-label="Email"
                >
                  <span className="text-lg group-hover:animate-pulse"><FiMail /></span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
