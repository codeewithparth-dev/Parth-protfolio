import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { motion, useScroll, useSpring, AnimatePresence, useInView } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import './index.css'

interface SectionRevealProps {
  children: ReactNode
  delay?: number
}

function SectionReveal({ children, delay = 0 }: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

function App() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const [loaded, setLoaded] = useState(false)

  const { scrollYProgress, scrollY } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  
  const [showTopBtn, setShowTopBtn] = useState(false)
  
  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setShowTopBtn(latest > 400)
    })
  }, [scrollY])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100)

    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top = e.clientY + 'px'
      }
      if (followerRef.current) {
        setTimeout(() => {
          if (followerRef.current) {
            followerRef.current.style.left = e.clientX + 'px'
            followerRef.current.style.top = e.clientY + 'px'
          }
        }, 80)
      }
    }

    const handleHover = () => cursorRef.current?.classList.add('hover')
    const handleLeave = () => cursorRef.current?.classList.remove('hover')

    document.addEventListener('mousemove', moveCursor)
    document.querySelectorAll('a, button, .magnetic').forEach(el => {
      el.addEventListener('mouseenter', handleHover)
      el.addEventListener('mouseleave', handleLeave)
    })

    return () => {
      document.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return (
    <>
      {/* Custom cursor */}
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />

      {/* Scroll Progress Bar */}
      <motion.div
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'var(--lime)',
          transformOrigin: '0%',
          zIndex: 9999,
          boxShadow: '0 0 8px rgba(200,241,53,0.6)'
        }}
      />

      {/* Back to top btn */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            style={{
              position: 'fixed',
              bottom: '40px',
              right: '40px',
              width: '48px',
              height: '48px',
              background: 'var(--black-2)',
              border: '1px solid var(--lime)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--lime)',
              zIndex: 990,
              cursor: 'none',
              transition: 'background 0.3s, color 0.3s'
            }}
            onMouseEnter={e => {
              const el = e.currentTarget
              el.style.background = 'var(--lime)'
              el.style.color = 'var(--black)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget
              el.style.background = 'var(--black-2)'
              el.style.color = 'var(--lime)'
            }}
            className="magnetic"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Main app — Hero first (no scroll animation), then staggered sections */}
      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s ease' }}>
        <Navbar />
        <main>
          {/* Hero: no scroll animation — it's the first thing visible */}
          <Hero />

          {/* About: the story */}
          <SectionReveal>
            <About />
          </SectionReveal>

          {/* Work: portfolio projects */}
          <SectionReveal>
            <Work />
          </SectionReveal>

          {/* Contact: call to action */}
          <SectionReveal>
            <Contact />
          </SectionReveal>
        </main>
      </div>
    </>
  )
}

export default App
