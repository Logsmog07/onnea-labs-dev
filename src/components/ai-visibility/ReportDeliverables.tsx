"use client";

import styles from '@/app/ai-visibility-report/ai-visibility-theme.module.css';

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
    <section className={`${styles.deliverables} relative overflow-hidden pt-6 pb-0 md:pt-8 md:pb-2 lg:pt-10 lg:pb-4 dark-section bg-canvas`}>
      <Container className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-0 max-w-3xl md:mb-2 lg:mb-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface border border-line shadow-card">
              <Sparkles className="h-5 w-5 text-ink" />
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
              What You&apos;ll Receive
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted font-light leading-relaxed pl-14"
          >
            A practical, no-nonsense view of the technical signals influencing how your business is understood and discovered across modern search engines and AI models.
          </motion.p>
        </div>

        <div className="flex flex-col relative before:absolute before:inset-y-0 before:left-[27px] md:before:left-[39px] before:w-px before:bg-gradient-to-b before:from-transparent before:via-line before:to-transparent">
          {deliverables.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col gap-6 py-6 pl-16 md:flex-row md:items-center md:gap-16 md:pl-24"
            >
              {/* Timeline dot */}
              <div className={`${styles.timelineDot} absolute left-[20px] top-[30px] h-4 w-4 rounded-full border-2 border-canvas bg-tile transition-all duration-300 group-hover:scale-150 group-hover:bg-accent group-hover:shadow-card md:left-[32px] md:top-1/2 md:-translate-y-1/2`} />
              
              <div className="flex shrink-0 items-center gap-6 md:w-72">
                <span className="text-5xl font-black text-accent transition-colors duration-500 group-hover:text-accent group-hover:drop-shadow-[0_0_10px_rgba(231,220,231,0.2)]">
                  {item.id}
                </span>
                <h3 className="text-xl font-bold tracking-wider text-ink">
                  {item.title}
                </h3>
              </div>
              <div className="max-w-3xl flex-1">
                <p className="text-lg leading-relaxed text-muted group-hover:text-ink transition-colors duration-300">
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
