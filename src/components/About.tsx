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
    <section id="about" ref={ref} className="relative bg-[var(--black)] py-20 md:py-48 overflow-hidden">

      <AnimatedBlob
        className="hidden md:block"
        style={{ bottom: '10%', left: '-5%', width: '400px', height: '400px', zIndex: 0 }}
        opacity={0.2}
        scale={1.2}
      />

      <div className="container relative z-10 flex flex-col gap-16 md:gap-24">

        {/* --- BLOCK 1: THE PERSON --- */}
        <div className="flex flex-col md:grid md:grid-cols-[60%_1fr] gap-10 md:gap-24 items-start">

          {/* Left Side (60%) */}
          <div className="flex flex-col gap-6 md:gap-12">
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
              className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-[-1px] md:tracking-[-1.5px] text-[var(--cream)]"
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
              className="text-[var(--cream-muted)] text-base md:text-lg leading-relaxed font-light w-full md:max-w-[600px]"
            >
              I'm Parth Kishan — a Frontend Developer & UI Designer from Karachi, Pakistan. Two years ago I started with a free course and YouTube tutorials. No degree, no bootcamp, just pure curiosity and a laptop open at 2am.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[var(--cream-muted)] text-base md:text-lg leading-relaxed font-light w-full md:max-w-[600px]"
            >
              What started as watching tutorials turned into building real websites for real clients. I design AND build — which means you get one focused person instead of two separate invoices. That's not a feature, that's the whole point.
            </motion.p>
          </div>

          {/* Right Side (40%) */}
          <div className="flex flex-col gap-10 md:gap-20 w-full">
            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 0 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-[var(--black-2)] p-5 md:p-10 border-l-[3px] border-[var(--lime)] w-full ml-0 overflow-hidden"
            >
              <div className="flex flex-col gap-5 md:gap-7">
                {[
                  { label: "Based in", value: "Karachi, Pakistan 🇵🇰" },
                  { label: "Started", value: "2 years ago" },
                  { label: "Approach", value: "Design + Code" },
                  { label: "Status", value: <span className="flex items-center justify-end gap-2"><span className="w-2 h-2 rounded-full bg-[var(--lime)] animate-pulse shadow-[0_0_10px_rgba(200,241,53,0.6)]" /> Available</span> },
                  {
                    label: "Agency",
                    value: (
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--lime)] border border-[var(--lime)] text-[var(--black)] text-xs tracking-wider uppercase font-bold transition-all duration-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--black)] animate-pulse" />
                        Omnicraft
                      </span>
                    )
                  },
                ].map((row, idx, arr) => (
                  <div key={row.label} className={`flex flex-row justify-between items-center gap-4 py-4 md:py-5 ${idx !== arr.length - 1 ? 'border-b border-[var(--gray-2)]' : ''}`}>
                    <span className="text-[10px] md:text-xs uppercase tracking-wider text-[var(--cream-muted)] font-semibold flex-shrink-0">{row.label}</span>
                    <span className="text-sm md:text-base text-[var(--cream)] font-medium text-right flex items-center justify-end min-h-[24px] min-w-0 max-w-[60%]">{row.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Skills — taller bars + visible label */}
            <div className="w-full mb-12 md:mb-20">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-xs tracking-[3px] text-[var(--cream-muted)] uppercase mb-6 md:mb-8 font-display font-semibold"
              >
                Skills & Tools
              </motion.h3>

              <div className="flex flex-col gap-5 md:gap-6 w-full">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
                    className="w-full"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-[var(--cream)] font-medium">{skill.name}</span>
                      <span className="text-xs text-[var(--lime)] font-display font-bold">{skill.level}%</span>
                    </div>
                    {/* Track: visible 4px height, brighter bg */}
                    <div className="h-[4px] bg-[#2a2a2a] rounded-full overflow-hidden w-full">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.8 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        style={{ boxShadow: '0 0 8px rgba(200,241,53,0.5)' }}
                        className="h-full bg-[var(--lime)] rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- BLOCK 2: WHAT MAKES ME DIFFERENT --- */}
        <div className="w-full flex flex-col items-center text-center gap-16 md:gap-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:mb-20 flex flex-col justify-center items-center"
          >
            <span className="inline-block text-[var(--lime)] text-xs tracking-[4px] uppercase font-display font-bold mb-4 md:mb-6">
              Why me?
            </span>
            <h2 className="font-display text-2xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-[-1px] md:tracking-[-1.5px] text-[var(--cream)]">
              One person.<br />
              <span style={{ WebkitTextStroke: '1.5px var(--lime)', color: 'transparent' }}>
                Full package.
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 w-full text-left sm:mt-0">
            {diffCards.map((card, i) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + (i * 0.15) }}
                className="relative bg-[var(--black-2)] p-6 sm:p-7 md:p-12 overflow-hidden group border border-transparent hover:border-[rgba(200,241,53,0.5)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,241,53,0.05)]"
              >
                <span className="absolute -top-6 -right-2 text-7xl sm:text-9xl font-display font-extrabold text-transparent opacity-5 transition-colors duration-300 group-hover:text-[var(--lime)] group-hover:opacity-10" style={{ WebkitTextStroke: '1.5px var(--cream-muted)', pointerEvents: 'none' }}>
                  {card.id}
                </span>
                <h3 className="relative z-10 font-display text-lg md:text-2xl font-bold text-[var(--cream)] mb-2 md:mb-4">
                  {card.title}
                </h3>
                <p className="relative z-10 text-[var(--cream-muted)] text-[13px] md:text-[15px] leading-relaxed font-light">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- BLOCK 3: THE VISION --- */}
        <div className="relative gap-16 md:gap-24 items-center overflow-hidden">
          {/* Watermark moved to background layer */}
          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none z-0">
            <span className="font-display text-[12vw] font-extrabold leading-none text-transparent opacity-[0.03]" style={{ WebkitTextStroke: '4px var(--cream)' }}>
              OMNICRAFT
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex gap-5 md:gap-8 relative z-10"
          >
            {/* Timeline marker */}
            <div className="w-[3px] bg-[var(--lime)] flex-shrink-0" />

            <div className="flex flex-col py-2">
              <span className="flex items-center gap-3 md:gap-4 text-[var(--lime)] text-xs tracking-[4px] uppercase font-display font-bold mb-8 md:mb-6">
                <div className="relative w-7 h-7 md:w-8 md:h-8 rounded-full bg-[rgba(200,241,53,0.1)] flex items-center justify-center border border-[rgba(200,241,53,0.3)] shadow-[0_0_15px_rgba(200,241,53,0.2)]">
                  <div className="absolute w-2 h-2 rounded-full bg-[var(--lime)] animate-[ping_2s_ease-in-out_infinite]" />
                  <div className="w-2 h-2 rounded-full bg-[var(--lime)]" />
                </div>
                OMNICRAFT
              </span>

              <h2 className="font-display italic text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-[-0.5px] md:tracking-[-1px] text-[var(--cream)] mb-6 md:mb-8 break-words">
                A worldwide creative agency.
              </h2>

              <p className="text-[var(--cream-muted)] text-base md:text-lg leading-relaxed font-light w-full md:max-w-[560px] mb-8 md:mb-12">
                Omnicraft isn't just a project — it's a vision. A team of designers, developers, motion artists, and storytellers from Karachi, building bold digital experiences for brands across the globe. We're just getting started.
              </p>

              <div className="flex flex-wrap justify-start items-center gap-3 mt-2">
                {roles.map((role, i) => (
                  <motion.span
                    key={role}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + (i * 0.1) }}
                    className="px-4 md:px-5 py-2 md:py-2.5 bg-[rgba(200,241,53,0.08)] border-[1.5px] border-[var(--lime)] text-[var(--lime)] text-xs md:text-sm font-semibold rounded-full tracking-wider uppercase transition-all duration-300 hover:bg-[rgba(200,241,53,0.15)] hover:shadow-[0_0_12px_rgba(200,241,53,0.2)]"
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
        <div className="mt-0">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-display text-3xl md:text-5xl font-bold text-[var(--cream)] mb-12 md:mb-12"
          >
            What I Do
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
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

                  <div className="relative z-10 w-11 h-11 md:w-12 md:h-12 rounded-full bg-[rgba(200,241,53,0.1)] flex items-center justify-center text-[var(--lime)] mb-5 md:mb-6">
                    <Icon size={22} />
                  </div>
                  <h4 className="relative z-10 font-display text-lg md:text-xl font-bold text-[var(--cream)] mb-2 md:mb-3">
                    {service.title}
                  </h4>
                  <p className="text-[var(--cream-muted)] text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* --- BLOCK 5: PROCESS --- */}
        <div className="relative pt-8 md:pt-0">
          {/* Desktop: horizontal timeline */}
          <div className="hidden md:block">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-display text-5xl font-bold text-[var(--cream)] mb-16"
            >
              My Process
            </motion.h3>
            <div className="relative">
              <div className="absolute left-0 top-6 w-full h-[2px] border-t-2 border-dotted border-[var(--lime)] opacity-30 z-0" />
              <div className="flex flex-row justify-between gap-4 md:gap-8 relative z-10">
                {processSteps.map((step, i) => (
                  <div key={`step-wrapper-${step.id}`} className="flex items-center gap-4 md:gap-8 flex-1" style={{ position: 'relative' }}>
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
                      className="flex flex-col items-center text-center flex-1 min-w-0"
                    >
                      <div className="w-12 h-12 rounded-full bg-[var(--black)] border-2 border-[var(--lime)] flex items-center justify-center font-display font-bold text-[var(--lime)] text-lg mb-6 shadow-[0_0_15px_rgba(200,241,53,0.2)]">
                        {step.id}
                      </div>
                      <div>
                        <h4 className="font-display text-lg font-bold text-[var(--cream)] mb-2">
                          {step.title}
                        </h4>
                        <p className="text-[var(--cream-muted)] text-[13px] leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                    {i < processSteps.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
                        className="hidden md:flex items-center justify-center text-[var(--lime)] text-xl font-bold flex-shrink-0"
                      >
                        →
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="md:hidden flex flex-col gap-8">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-display text-3xl font-bold text-[var(--cream)]"
            >
              My Process
            </motion.h3>
            <div className="flex flex-col">
              {processSteps.map((step, i) => (
                <div key={step.id} className="flex gap-5">
                  {/* Left: circle + connecting line */}
                  <div className="flex flex-col items-center flex-shrink-0 w-12">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.12 }}
                      className="w-12 h-12 rounded-full bg-[var(--black-2)] border-2 border-[var(--lime)] flex items-center justify-center font-display font-bold text-[var(--lime)] text-lg shadow-[0_0_12px_rgba(200,241,53,0.15)]"
                    >
                      {step.id}
                    </motion.div>
                    {i < processSteps.length - 1 && (
                      <div
                        className="flex-1 my-2"
                        style={{ width: '2px', background: 'rgba(200,241,53,0.25)', minHeight: '32px' }}
                      />
                    )}
                  </div>
                  {/* Right: text content */}
                  <motion.div
                    initial={{ opacity: 0, x: -16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
                    className="pt-2 pb-6"
                  >
                    <h4 className="font-display text-lg font-bold text-[var(--cream)] mb-1">
                      {step.title}
                    </h4>
                    <p className="text-[var(--cream-muted)] text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
