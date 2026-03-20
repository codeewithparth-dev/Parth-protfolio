import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { PenTool, Code, Monitor } from 'lucide-react'
import AnimatedBlob from './AnimatedBlob'

const skills = [
  { name: 'React.js', level: 85 },
  { name: 'UI/UX Design', level: 80 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'TypeScript', level: 70 },
  { name: 'Figma', level: 75 },
  { name: 'Framer Motion', level: 72 },
]

const services = [
  { id: '01', title: 'UI/UX Design', icon: PenTool, bg: 'var(--black-2)', desc: 'Crafting intuitive, user-centric interfaces that blend aesthetics with functionality.' },
  { id: '02', title: 'Frontend Dev', icon: Code, bg: 'var(--black-2)', desc: 'Writing clean, scalable code using modern technologies like React, TS, and Vite.' },
  { id: '03', title: 'Landing Pages', icon: Monitor, bg: 'var(--black-2)', desc: 'Building high-converting pages that clearly communicate your value proposition.' },
]

const processSteps = [
  { id: '1', title: 'Discovery', desc: 'Understand your vision & goals' },
  { id: '2', title: 'Design', desc: 'Wireframes & visual direction' },
  { id: '3', title: 'Build', desc: 'Clean, production-ready code' },
  { id: '4', title: 'Launch', desc: 'Deploy & seamless handoff' },
]

const diffCards = [
  {
    id: '01',
    title: 'I Design & Build',
    desc: "Most developers can't design. Most designers can't code. I do both — fluently."
  },
  {
    id: '02',
    title: 'AI-Powered Workflow',
    desc: 'I use cutting-edge AI tools to ship faster without cutting corners on quality.'
  },
  {
    id: '03',
    title: 'Founder Mindset',
    desc: 'Running Omnicraft means I think about your business, not just your website.'
  }
]

const roles = ["UI Designer", "Web Developer", "Motion Editor", "Lead Generation", "AI Developer"]

const About = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10px' })

  return (
    <section id="about" ref={ref} className="relative bg-[var(--black)] py-32 md:py-48 overflow-hidden">
      
      <AnimatedBlob 
        className="hidden md:block"
        style={{ bottom: '10%', left: '-5%', width: '400px', height: '400px', zIndex: 0 }}
        opacity={0.2} 
        scale={1.2} 
      />

      {/* Changed space-y to flex flex-col gap to prevent animation overlaps */}
      <div className="container relative z-10 flex flex-col gap-32 md:gap-48">

        {/* --- BLOCK 1: THE PERSON --- */}
        <div className="grid grid-cols-1 md:grid-cols-[60%_1fr] gap-16 md:gap-24 items-start">
          
          {/* Left Side (60%) */}
          <div className="flex flex-col gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <span className="text-[var(--lime)] text-xs tracking-[4px] uppercase font-display font-bold">
                01 / About
              </span>
              <div className="flex-1 h-[1px] bg-[var(--gray-2)]" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-[-1.5px] text-[var(--cream)]"
            >
              18 years old. Self-taught.<br />
              <span className="inline-block mt-2" style={{ WebkitTextStroke: '2px var(--lime)', color: 'transparent' }}>
                Building for the world.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[var(--cream-muted)] text-base md:text-lg leading-relaxed font-light max-w-[600px]"
            >
              I'm Parth Kishan — a Frontend Developer & UI Designer from Karachi, Pakistan. Two years ago I started with a free course and YouTube tutorials. No degree, no bootcamp, just pure curiosity and a laptop open at 2am.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[var(--cream-muted)] text-base md:text-lg leading-relaxed font-light max-w-[600px]"
            >
              What started as watching tutorials turned into building real websites for real clients. I design AND build — which means you get one focused person instead of two separate invoices. That's not a feature, that's the whole point.
            </motion.p>
          </div>

          {/* Right Side (40%) */}
          <div className="flex flex-col gap-16 md:gap-20">
            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-[var(--black-2)] p-8 md:p-10 border-l-[3px] border-[var(--lime)] w-full"
            >
              <div className="flex flex-col gap-6">
                {[
                  { label: "Based in", value: "Karachi, Pakistan 🇵🇰" },
                  { label: "Started", value: "2 years ago" },
                  { label: "Approach", value: "Design + Code" },
                  { label: "Status", value: <span className="flex items-center justify-end gap-2"><span className="w-2 h-2 rounded-full bg-[var(--lime)] animate-pulse shadow-[0_0_10px_rgba(200,241,53,0.6)]" /> Available</span> },
                  { 
                    label: "Agency", 
                    value: (
                      <a href="#about" className="group flex items-center gap-2 px-3 py-1 mt-[-4px] mb-[-4px] rounded-full bg-[var(--black)] border border-[var(--gray-2)] hover:border-[var(--lime)] hover:shadow-[0_0_10px_rgba(200,241,53,0.15)] transition-all duration-300 no-underline cursor-pointer">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--lime)] animate-pulse" />
                        <span className="text-xs tracking-wider uppercase font-bold text-[var(--cream)] group-hover:text-[var(--lime)] transition-colors">Omnicraft</span>
                      </a>
                    ) 
                  },
                ].map((row, idx, arr) => (
                  <div key={row.label} className={`flex justify-between items-center pb-5 ${idx !== arr.length - 1 ? 'border-b border-[var(--gray-2)]' : 'pb-0'}`}>
                    <span className="text-sm text-[var(--cream-muted)]">{row.label}</span>
                    <span className="text-sm md:text-base text-[var(--cream)] font-medium text-right flex items-center">{row.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <div className="w-full">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-xs tracking-[3px] text-[var(--cream-muted)] uppercase mb-8 font-display font-semibold"
              >
                Skills & Tools
              </motion.h3>

              <div className="flex flex-col gap-6 w-full">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
                    className="w-full"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-[var(--cream)] font-normal">{skill.name}</span>
                      <span className="text-xs text-[var(--lime)] font-display font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-[2px] bg-[var(--gray-2)] rounded-sm overflow-hidden w-full">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.8 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full bg-[var(--lime)] rounded-sm"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- BLOCK 2: WHAT MAKES ME DIFFERENT --- */}
        <div className="w-full flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16 md:mb-20 flex flex-col justify-center items-center"
          >
            <span className="inline-block text-[var(--lime)] text-xs tracking-[4px] uppercase font-display font-bold mb-6">
              Why me?
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-[-1.5px] text-[var(--cream)]">
              One person.<br />
              <span style={{ WebkitTextStroke: '2px var(--lime)', color: 'transparent' }}>
                Full package.
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
            {diffCards.map((card, i) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + (i * 0.15) }}
                className="relative bg-[var(--black-2)] p-10 md:p-12 overflow-hidden group border border-transparent hover:border-[rgba(200,241,53,0.5)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,241,53,0.05)]"
              >
                <span className="absolute -top-4 -right-2 text-9xl font-display font-extrabold text-transparent opacity-5 transition-colors duration-300 group-hover:text-[var(--lime)] group-hover:opacity-10" style={{ WebkitTextStroke: '2px var(--cream-muted)', pointerEvents: 'none' }}>
                  {card.id}
                </span>
                <h3 className="relative z-10 font-display text-2xl font-bold text-[var(--cream)] mb-4">
                  {card.title}
                </h3>
                <p className="relative z-10 text-[var(--cream-muted)] text-base md:text-[15px] leading-relaxed font-light">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- BLOCK 3: THE VISION --- */}
        <div className="relative grid grid-cols-1 gap-16 md:gap-24 items-center">
           {/* Watermark moved to background layer */}
           <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none z-0">
             <span className="font-display text-[12vw] font-extrabold leading-none text-transparent opacity-[0.03]" style={{ WebkitTextStroke: '4px var(--cream)' }}>
               OMNICRAFT
             </span>
           </div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex gap-8 relative z-10"
          >
            {/* Timeline marker */}
            <div className="w-[3px] bg-[var(--lime)] flex-shrink-0" />
            
            <div className="flex flex-col py-2">
              <span className="flex items-center gap-4 text-[var(--lime)] text-xs tracking-[4px] uppercase font-display font-bold mb-6">
                <div className="relative w-8 h-8 rounded-full bg-[rgba(200,241,53,0.1)] flex items-center justify-center border border-[rgba(200,241,53,0.3)] shadow-[0_0_15px_rgba(200,241,53,0.2)]">
                  <div className="absolute w-2 h-2 rounded-full bg-[var(--lime)] animate-[ping_2s_ease-in-out_infinite]" />
                  <div className="w-2 h-2 rounded-full bg-[var(--lime)]" />
                </div>
                OMNICRAFT
              </span>
              
              <h2 className="font-display italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-[-1px] text-[var(--cream)] mb-8">
                A worldwide creative agency.
              </h2>
              
              <p className="text-[var(--cream-muted)] text-base md:text-lg leading-relaxed font-light max-w-[560px] mb-12">
                Omnicraft isn't just a project — it's a vision. A team of designers, developers, motion artists, and storytellers from Karachi, building bold digital experiences for brands across the globe. We're just getting started.
              </p>

              <div className="flex flex-wrap gap-3">
                {roles.map((role, i) => (
                  <motion.span
                    key={role}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + (i * 0.1) }}
                    className="px-4 py-2 bg-[var(--black-2)] border border-[var(--lime)] text-[var(--cream)] text-sm font-medium rounded-full"
                  >
                    {role}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- EXPANDED SECTIONS (EXISTING) --- */}
        
        {/* Services - What I Do */}
        <div className="mt-8 md:mt-16">
          <motion.h3
             initial={{ opacity: 0, y: 20 }}
             animate={inView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.6, delay: 0.3 }}
             className="font-display text-4xl md:text-5xl font-bold text-[var(--cream)] mb-12"
          >
            What I Do
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                  className="relative p-8 md:p-10 rounded-2xl bg-[var(--black-2)] border border-[var(--gray-2)] overflow-hidden group transition-colors duration-300 hover:border-[var(--lime)]"
                >
                  <span className="absolute -top-4 -right-2 text-8xl font-display font-extrabold text-transparent opacity-10 transition-colors group-hover:text-[var(--lime)]" style={{ WebkitTextStroke: '1px var(--cream-muted)', pointerEvents: 'none' }}>
                    {service.id}
                  </span>
                  
                  <div className="w-12 h-12 rounded-full bg-[rgba(200,241,53,0.1)] flex items-center justify-center text-[var(--lime)] mb-6">
                    <Icon size={24} />
                  </div>
                  <h4 className="font-display text-xl font-bold text-[var(--cream)] mb-3">
                    {service.title}
                  </h4>
                  <p className="text-[var(--cream-muted)] text-sm leading-relaxed max-w-[260px]">
                    {service.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Process - How I Work */}
        <div className="mt-8 md:mt-12">
          <motion.h3
             initial={{ opacity: 0, y: 20 }}
             animate={inView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.6, delay: 0.4 }}
             className="font-display text-4xl md:text-5xl font-bold text-[var(--cream)] mb-16"
          >
            My Process
          </motion.h3>

          <div className="relative">
            <div className="absolute left-6 md:left-0 top-0 md:top-6 bottom-0 md:bottom-auto w-[2px] md:w-full h-full md:h-[2px] border-l-2 md:border-l-0 md:border-t-2 border-dotted border-[var(--lime)] opacity-30 z-0" />
            
            <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-6 relative z-10 w-full pl-14 md:pl-0">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
                  className="flex flex-col relative md:items-center md:text-center w-full md:w-1/4"
                >
                  <div className="absolute -left-14 top-0 md:relative md:left-auto md:top-auto w-12 h-12 rounded-full bg-[var(--black)] border-2 border-[var(--lime)] flex items-center justify-center font-display font-bold text-[var(--lime)] text-lg md:mb-6 shadow-[0_0_15px_rgba(200,241,53,0.2)]">
                    {step.id}
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-[var(--cream)] mb-2 mt-2 md:mt-0">
                      {step.title}
                    </h4>
                    <p className="text-[var(--cream-muted)] text-[13px] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
