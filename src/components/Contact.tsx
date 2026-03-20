import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import AnimatedBlob from './AnimatedBlob'

const Contact = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" ref={ref} className="relative bg-[var(--black)] py-[100px] md:py-[140px] overflow-hidden">
      <AnimatedBlob 
        className="hidden md:block"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', zIndex: 0 }}
        opacity={0.1} 
        scale={2} 
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
            03 / Contact
          </span>
          <div className="flex-1 h-[1px] bg-[var(--gray-2)]" />
        </motion.div>

        <div className="w-full md:max-w-[800px] mx-auto text-center md:mx-0 md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="font-display text-[clamp(40px,7vw,96px)] font-extrabold leading-[0.95] tracking-[-2px] text-[var(--cream)] mb-[24px] md:mb-[40px]"
          >
            Let's work
            <br />
            <span style={{ WebkitTextStroke: '2px var(--lime)', color: 'transparent' }}>
              together.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[var(--cream-muted)] text-[16px] md:text-[18px] leading-[1.7] mb-[40px] md:mb-[56px] font-light w-full md:max-w-[480px] mx-auto md:mx-0"
          >
            Have a project in mind? I'm open to freelance work
            and collaborations. Let's build something great.
          </motion.p>

          {/* Email */}
          <motion.a
            href="mailto:codeewithparth@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-block font-display text-[clamp(16px,4vw,28px)] font-bold text-[var(--lime)] border-b border-[rgba(200,241,53,0.3)] pb-[4px] md:pb-[8px] mb-[48px] md:mb-[64px] transition-all duration-300 tracking-[-0.5px] hover:border-[var(--lime)] hover:tracking-[1px] break-all md:break-normal"
          >
            codeewithparth@gmail.com
          </motion.a>

          {/* Social + footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-center gap-[32px] md:gap-[24px] pt-[32px] md:pt-[40px] border-t border-[var(--gray-2)] w-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] md:gap-[24px] w-full md:w-auto text-left">
              {[
                { label: 'GitHub', href: 'https://github.com/codeewithparth-dev', icon: Github },
                { label: 'Instagram', href: 'https://instagram.com/codeewithparth', icon: Instagram },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/parthkishanlinkdeinp/', icon: Linkedin },
                { label: 'Twitter/X', href: 'https://x.com/codeewithparth', icon: Twitter },
              ].map((social, i) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                    className="flex items-center justify-between gap-[24px] md:gap-[40px] p-[16px_24px] bg-[var(--black-2)] border-l-[2px] border-[var(--lime)] rounded-[8px] group hover:bg-[rgba(200,241,53,0.06)] hover:shadow-[0_0_15px_rgba(200,241,53,0.05)] transition-all duration-300 w-full"
                  >
                    <div className="flex items-center gap-[16px]">
                      <span className="text-[var(--cream-muted)] group-hover:text-[var(--cream)] transition-colors"><Icon size={20} /></span>
                      <span className="font-display font-semibold text-[14px] text-[var(--cream)] tracking-[0.5px] uppercase">{social.label}</span>
                    </div>
                    <span className="text-[var(--lime)] font-display font-bold text-[18px] transform transition-transform duration-300 group-hover:translate-x-[4px] group-hover:-translate-y-[4px]">↗</span>
                  </motion.a>
                )
              })}
            </div>

          
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
