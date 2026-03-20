import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = ['About', 'Work', 'Contact']

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])



  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, { rootMargin: '-50% 0px -50% 0px' })

    const sections = document.querySelectorAll('section')
    sections.forEach(s => observer.observe(s))
    
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '20px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.4s ease',
          background: scrolled ? 'rgba(var(--black-rgb, 12, 12, 12), 0.8)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(200,241,53,0.08)' : 'none',
        }}
      >
        {/* Logo */}
        <a href="#hero" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '22px', letterSpacing: '-1px' }}>
          PK<span style={{ color: 'var(--lime)' }}>.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map(item => {
            const id = item.toLowerCase()
            const isActive = activeSection === id
            return (
              <a
                key={item}
                href={`#${id}`}
                style={{
                  position: 'relative',
                  fontSize: '13px',
                  letterSpacing: '1px',
                  color: isActive ? 'var(--lime)' : 'var(--cream-muted)',
                  fontWeight: 600,
                  transition: 'color 0.2s ease',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-display)',
                }}
                onMouseEnter={e => {
                  if (!isActive) (e.target as HTMLElement).style.color = 'var(--cream)'
                }}
                onMouseLeave={e => {
                  if (!isActive) (e.target as HTMLElement).style.color = 'var(--cream-muted)'
                }}
              >
                {item}
                {isActive && (
                  <motion.div
                    layoutId="activeDot"
                    style={{
                      position: 'absolute',
                      bottom: '-8px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--lime)',
                    }}
                  />
                )}
              </a>
            )
          })}



          {/* Availability Status */}
          <div style={{ position: 'relative', display: 'inline-block' }} className="group">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              <div style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: 'var(--lime)',
                boxShadow: '0 0 10px rgba(200,241,53,0.6)',
                animation: 'pulse 2s ease-in-out infinite',
              }} />
              <span style={{ fontSize: '13px', fontFamily: 'var(--font-display)', color: 'var(--cream)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>
                Available
              </span>
            </div>
            
            {/* Tooltip */}
            <div style={{
              position: 'absolute',
              top: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              marginTop: '12px',
              padding: '6px 12px',
              background: 'var(--black-2)',
              border: '1px solid var(--gray-2)',
              borderRadius: '4px',
              color: 'var(--cream-muted)',
              fontSize: '11px',
              whiteSpace: 'nowrap',
              opacity: 0,
              pointerEvents: 'none',
              transition: 'opacity 0.2s',
            }}
            className="group-hover:opacity-100"
            >
              Open for freelance projects
            </div>
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-4">

          
          <button
            onClick={() => setIsOpen(true)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--lime)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'var(--black)',
              zIndex: 1001,
              display: 'flex',
              flexDirection: 'column',
              padding: '24px 40px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '80px' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '22px', letterSpacing: '-1px' }}>
                PK<span style={{ color: 'var(--lime)' }}>.</span>
              </span>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--lime)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <X size={32} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {navLinks.map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  style={{
                    fontSize: '48px',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    color: activeSection === item.toLowerCase() ? 'var(--lime)' : 'var(--cream)',
                    textDecoration: 'none',
                    letterSpacing: '-1px',
                  }}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{ marginTop: 'auto', paddingBottom: '40px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '12px', height: '12px', borderRadius: '50%',
                  background: 'var(--lime)',
                  animation: 'pulse 2s ease-in-out infinite',
                }} />
                <span style={{ color: 'var(--cream-muted)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px' }}>
                  Open for freelance
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
