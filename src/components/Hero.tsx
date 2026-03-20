import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedBlob from './AnimatedBlob'

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%'

function useScramble(text: string, trigger: boolean) {
  const [display, setDisplay] = useState(text)

  useEffect(() => {
    if (!trigger) return
    let iteration = 0
    const interval = setInterval(() => {
      setDisplay(text.split('').map((char, i) => {
        if (char === ' ') return ' '
        if (i < iteration) return text[i]
        return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
      }).join(''))
      if (iteration >= text.length) clearInterval(interval)
      iteration += 0.5
    }, 30)
    return () => clearInterval(interval)
  }, [trigger, text])

  return display
}

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [scramble, setScramble] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setScramble(true), 400)
    return () => clearTimeout(timer)
  }, [])

  const nameDisplay = useScramble('PARTH KISHAN', scramble)

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()

    type Particle = { x: number; y: number; vx: number; vy: number; size: number; opacity: number }
    const particles: Particle[] = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      size: Math.random() * 1.2 + 0.3,
      opacity: Math.random() * 0.3 + 0.05,
    }))

    let animId: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200,241,53,${p.opacity})`
        ctx.fill()
      })
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const d = Math.hypot(p.x - p2.x, p.y - p2.y)
          if (d < 100) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(200,241,53,${0.05 * (1 - d / 100)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '0',
      background: 'var(--black)',
    }}>
      <div className="hidden md:block absolute inset-0 z-0">
        <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
      </div>

      <AnimatedBlob 
        className="hidden md:block"
        style={{ top: '5%', right: '5%', width: '500px', height: '500px', zIndex: 0 }}
        opacity={0.4} 
        scale={1.5} 
      />

      {/* Lime glow top right */}
      <div style={{
        position: 'absolute', top: '-100px', right: '-100px',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(200,241,53,0.04) 0%, transparent 70%)',
        borderRadius: '50%', zIndex: 0,
      }} />

      {/* Bottom left subtle glow */}
      <div style={{
        position: 'absolute', bottom: '-50px', left: '-50px',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(200,241,53,0.03) 0%, transparent 70%)',
        borderRadius: '50%', zIndex: 0,
      }} />

      <div className="container relative z-10 pt-[120px] pb-[80px] w-full flex flex-col items-center text-center md:items-start md:text-left">

        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-[10px] mb-[40px] md:mb-[60px]"
        >
          <div style={{
            width: '8px', height: '8px', borderRadius: '50%',
            background: 'var(--lime)',
            boxShadow: '0 0 10px rgba(200,241,53,0.6)',
            animation: 'pulse 2s ease-in-out infinite',
          }} />
          <span style={{ fontSize: '12px', letterSpacing: '3px', color: 'var(--cream-muted)', textTransform: 'uppercase' }}>
            Available for projects
          </span>
        </motion.div>

        {/* Main headline */}
        <div style={{ marginBottom: '32px' }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ color: 'var(--cream-muted)', fontSize: '18px', marginBottom: '16px', fontWeight: 300 }}
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(48px, 12vw, 130px)',
              fontWeight: 800,
              lineHeight: 0.9,
              letterSpacing: '-3px',
              color: 'var(--cream)',
              marginBottom: '24px',
            }}
          >
            {nameDisplay.split(' ').map((word, i) => (
              <span key={i} style={{ display: 'block' }}>
                {i === 1 ? (
                  <span style={{
                    WebkitTextStroke: '2px var(--lime)',
                    color: 'transparent',
                  }}>{word}</span>
                ) : word}
              </span>
            ))}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-[12px] md:gap-[16px] flex-wrap justify-center md:justify-start"
          >
            <span style={{
              color: 'var(--lime)',
              fontSize: '18px',
              fontWeight: 600,
              fontFamily: 'var(--font-display)',
            }}>
              Frontend Developer & UI Designer
            </span>
            <span className="hidden md:inline-block" style={{ color: 'var(--gray)', fontSize: '18px' }}>—</span>
            <a 
              href="#about"
              className="group relative flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[var(--black-2)] border border-[var(--gray-2)] cursor-pointer overflow-hidden transition-all duration-500 hover:border-[var(--lime)] hover:shadow-[0_0_15px_rgba(200,241,53,0.15)] no-underline"
            >
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(200,241,53,0.1)] to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              
              <div className="w-5 h-5 rounded-full bg-[var(--lime)] flex items-center justify-center text-[var(--black)] font-bold text-[10px] uppercase tracking-wider relative z-10 shadow-[0_0_10px_rgba(200,241,53,0.4)]">
                O
              </div>
              <span className="relative z-10 text-[var(--cream-muted)] group-hover:text-[var(--cream)] text-[13px] font-medium tracking-wide transition-colors">
                Founder at <span className="font-bold text-[var(--lime)]">Omnicraft</span>
              </span>
            </a>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-[480px] text-[var(--cream-muted)] text-[16px] leading-[1.8] mb-[40px] md:mb-[48px] font-light mx-auto md:mx-0"
        >
          I design AND build — so you get one focused person
          instead of two separate invoices. Based in Karachi,
          working for the world.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col md:flex-row gap-[16px] items-center flex-wrap mb-[60px] md:mb-[80px] w-full xl:w-auto px-4 md:px-0"
        >
          <a
            href="#work"
            className="w-full md:w-auto text-center"
            style={{
              background: 'var(--lime)',
              color: 'var(--black)',
              padding: '16px 36px',
              borderRadius: '50px',
              fontSize: '14px',
              fontWeight: 700,
              letterSpacing: '0.5px',
              fontFamily: 'var(--font-display)',
              transition: 'all 0.3s ease',
              display: 'inline-block',
            }}
            onMouseEnter={e => {
              const el = e.target as HTMLElement
              el.style.background = 'var(--lime-bright)'
              el.style.transform = 'translateY(-3px)'
              el.style.boxShadow = '0 12px 40px rgba(200,241,53,0.3)'
            }}
            onMouseLeave={e => {
              const el = e.target as HTMLElement
              el.style.background = 'var(--lime)'
              el.style.transform = 'translateY(0)'
              el.style.boxShadow = 'none'
            }}
          >
            See My Work →
          </a>

          <a
            href="#contact"
            className="w-full md:w-auto text-center"
            style={{
              border: '1px solid var(--gray)',
              color: 'var(--cream-muted)',
              padding: '16px 36px',
              borderRadius: '50px',
              fontSize: '14px',
              fontWeight: 400,
              letterSpacing: '0.5px',
              transition: 'all 0.3s ease',
              display: 'inline-block',
            }}
            onMouseEnter={e => {
              const el = e.target as HTMLElement
              el.style.borderColor = 'var(--lime)'
              el.style.color = 'var(--lime)'
              el.style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={e => {
              const el = e.target as HTMLElement
              el.style.borderColor = 'var(--gray)'
              el.style.color = 'var(--cream-muted)'
              el.style.transform = 'translateY(0)'
            }}
          >
            Let's Talk
          </a>
        </motion.div>

        {/* Bottom row — stack + scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col md:flex-row items-center justify-between flex-wrap gap-[24px] w-full"
        >
          <div className="flex gap-[12px] flex-wrap justify-center md:justify-start">
            {['React', 'TypeScript', 'Tailwind', 'Figma', 'Framer Motion'].map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.08 }}
                style={{
                  fontSize: '11px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: 'var(--gray)',
                  padding: '6px 12px',
                  border: '1px solid var(--gray-2)',
                  borderRadius: '4px',
                  fontFamily: 'var(--font-display)',
                  transition: 'all 0.2s',
                }}
                whileHover={{ borderColor: 'var(--lime)', color: 'var(--lime)' } as any}
              >
                {s}
              </motion.span>
            ))}
          </div>

          {/* Scroll indicator */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '10px', letterSpacing: '3px', color: 'var(--gray)', textTransform: 'uppercase' }}>Scroll</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, var(--lime), transparent)' }}
            />
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
      `}</style>
    </section>
  )
}

export default Hero
