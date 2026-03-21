import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import AnimatedBlob from './AnimatedBlob'

const projects = [
  {
    number: '01',
    title: 'Omnicraft',
    subtitle: 'Creative Agency Website',
    description: 'A bold, cinematic agency website built for Omnicraft — dark aesthetic, smooth animations, and a premium feel that wins clients.',
    tags: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
    status: 'Building',
    link: '#',
    featured: true,
  },
  {
    number: '02',
    title: 'Next Project',
    subtitle: 'Coming Soon',
    description: 'Something new is being crafted. Stay tuned.',
    tags: [],
    status: 'Soon',
    link: '#',
    featured: false,
  },
]

const Work = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="work" ref={ref} className="relative bg-[var(--black-2)] py-[100px] md:py-[140px] overflow-hidden">
      <AnimatedBlob 
        className="hidden md:block"
        style={{ top: '10%', right: '-5%', width: '300px', height: '300px', zIndex: 0 }}
        opacity={0.15} 
        scale={1} 
      />
      <div className="container relative z-10">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-[16px] mb-[60px] md:mb-[80px]"
        >
          <span className="text-[var(--lime)] text-[12px] tracking-[4px] uppercase font-display font-bold">
            02 / Work
          </span>
          <div className="flex-1 h-[1px] bg-[var(--gray-2)]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 4vw, 56px)',
            fontWeight: 800,
            letterSpacing: '-1px',
            color: 'var(--cream)',
            marginBottom: '40px',
          }}
          className="md:mb-[64px]"
        >
          Selected <span style={{ WebkitTextStroke: '2px var(--lime)', color: 'transparent' }}>Work</span>
        </motion.h2>

        <div className="flex flex-col gap-[16px] md:gap-[2px]">
          {projects.map((project, i) => (
            <motion.a
              key={project.number}
              href={project.link}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{ padding: '24px' }}
            className="flex flex-col md:grid md:grid-cols-[60px_1fr_auto] items-start md:items-center gap-[16px] md:gap-[24px] p-[24px] md:p-[40px_36px] border border-[var(--gray-2)] rounded-[16px] bg-[var(--black)] no-underline transition-all duration-400 mb-[16px] cursor-none relative overflow-hidden group hover:bg-[rgba(200,241,53,0.02)] hover:border-[rgba(200,241,53,0.4)]">
              
              {/* Number */}
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--lime)',
                letterSpacing: '2px',
              }}>
                {project.number}
              </span>

              {/* Info */}
              <div>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-[12px] md:gap-[16px] mb-[12px] md:mb-[8px]">
                  <h3 className="font-display text-[20px] md:text-[24px] font-extrabold text-[var(--cream)] tracking-[-0.5px]">
                    {project.title}
                  </h3>
                  <span style={{
                    fontSize: '11px',
                    letterSpacing: '2px',
                    color: project.status === 'Building' ? 'var(--lime)' : 'var(--gray)',
                    textTransform: 'uppercase',
                    padding: '3px 10px',
                    border: `1px solid ${project.status === 'Building' ? 'rgba(200,241,53,0.3)' : 'var(--gray-2)'}`,
                    borderRadius: '20px',
                    fontFamily: 'var(--font-display)',
                  }}>
                    {project.status}
                  </span>
                </div>
                <p style={{ color: 'var(--cream-muted)', fontSize: '14px', lineHeight: 1.7, maxWidth: '480px', marginBottom: '16px' }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{
                      fontSize: '11px',
                      letterSpacing: '1.5px',
                      color: 'var(--lime)',
                      padding: '6px 14px',
                      border: '1.5px solid var(--lime)',
                      borderRadius: '50px',
                      fontWeight: 600,
                      backgroundColor: 'rgba(200,241,53,0.08)',
                      fontFamily: 'var(--font-display)',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <motion.span
                className="hidden md:block text-[24px] text-[var(--lime)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                →
              </motion.span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
