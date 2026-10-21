"use client";

import styles from '@/app/ai-visibility-report/ai-visibility-theme.module.css';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Network, Search, Database, ShieldCheck } from 'lucide-react';

const viewportConfig = { once: true, margin: '-100px' };

const checks = [
  {
    icon: <Network className="h-7 w-7 text-accent" />,
    title: "AI Crawler Access",
    description: "We check if your most important pages are accessible to modern search and AI crawlers, identifying firewall rules or technical restrictions blocking discovery.",
    glowColor: "transparent"
  },
  {
    icon: <Search className="h-7 w-7 text-accent" />,
    title: "Content Structure",
    description: "We review semantic HTML, heading structure, question-led content, topical clarity, and whether important information is structured for machine extraction.",
    glowColor: "transparent"
  },
  {
    icon: <Database className="h-7 w-7 text-accent" />,
    title: "Structured Data",
    description: "We validate relevant schema.org implementations and machine-readable data across pages to ensure AI models get direct, structured context about your services.",
    glowColor: "transparent"
  },
  {
    icon: <ShieldCheck className="h-7 w-7 text-accent" />,
    title: "Freshness & Trust",
    description: "We review fundamental trust signals such as dates, verifiable authorship, explicit business information, and contact details used as credibility markers.",
    glowColor: "transparent"
  }
];

export function VisibilityChecks() {
  return (
    <section className="relative overflow-hidden py-6 md:py-8 lg:py-10 dark-section bg-canvas">
      <Container className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-6 text-center md:mb-8 lg:mb-10 flex flex-col items-center">
          <div className="mb-6 inline-flex items-center justify-center gap-3 rounded-full border border-line bg-surface px-4 py-1.5 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-accent shadow-card animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-ink">
              What We Check
            </span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.5 }}
            className="mb-6 text-4xl font-extrabold tracking-tight text-ink md:text-5xl"
          >
            The Foundational Signals
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-2xl text-xl text-muted font-light"
          >
            We dissect the specific technical and structural data points that search engines and AI models use to interpret your business.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {checks.map((check, index) => (
            <motion.div
              key={check.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${styles.checkCard} group relative overflow-hidden rounded-[2rem] border border-line bg-surface p-8 md:p-12 transition-all duration-500 hover:border-line hover:bg-surface`}
            >
              {/* Dynamic Glow Background */}
              <div 
                className="absolute -right-20 -top-20 h-64 w-64 rounded-full blur-[80px] transition-all duration-500 group-hover:scale-150 bg-transparent"
                style={{ backgroundColor: check.glowColor }}
              />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className={`${styles.iconTile} mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-tile border border-line shadow-card backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110`}>
                  {check.icon}
                </div>
                
                <h3 className="mb-4 text-2xl font-bold text-ink tracking-wide">
                  {check.title}
                </h3>
                
                <p className="text-lg leading-relaxed text-muted">
                  {check.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
