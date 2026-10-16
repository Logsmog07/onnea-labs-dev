"use client";

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Sparkles } from 'lucide-react';

const viewportConfig = { once: true, margin: '-100px' };

const deliverables = [
  {
    id: "01",
    title: "AI DISCOVERABILITY",
    description: "How accessible and understandable your website is to AI and search crawlers."
  },
  {
    id: "02",
    title: "CONTENT & STRUCTURE",
    description: "Whether your content clearly answers important questions and communicates your expertise."
  },
  {
    id: "03",
    title: "STRUCTURED DATA",
    description: "Whether your pages provide useful machine-readable context about your business, services, and content."
  },
  {
    id: "04",
    title: "TRUST & FRESHNESS",
    description: "Whether important trust, authorship, contact, business, and freshness signals are clearly communicated."
  }
];

export function ReportDeliverables() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 dark-section bg-[#030303]">
      <Container className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-20 max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              <Sparkles className="h-5 w-5 text-white/80" />
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              What You&apos;ll Receive
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-neutral-400 font-light leading-relaxed pl-14"
          >
            A practical, no-nonsense view of the technical signals influencing how your business is understood and discovered across modern search engines and AI models.
          </motion.p>
        </div>

        <div className="flex flex-col relative before:absolute before:inset-y-0 before:left-[27px] md:before:left-[39px] before:w-px before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {deliverables.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col gap-6 py-10 pl-16 md:flex-row md:items-center md:gap-16 md:pl-24"
            >
              {/* Timeline dot */}
              <div className="absolute left-[20px] top-[46px] h-4 w-4 rounded-full border-2 border-[#030303] bg-white/20 transition-all duration-300 group-hover:scale-150 group-hover:bg-indigo-400 group-hover:shadow-[0_0_20px_rgba(129,140,248,0.5)] md:left-[32px] md:top-1/2 md:-translate-y-1/2" />
              
              <div className="flex shrink-0 items-center gap-6 md:w-72">
                <span className="text-5xl font-black text-white/5 transition-colors duration-500 group-hover:text-white/20 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                  {item.id}
                </span>
                <h3 className="text-xl font-bold tracking-wider text-white">
                  {item.title}
                </h3>
              </div>
              <div className="max-w-3xl flex-1">
                <p className="text-lg leading-relaxed text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
