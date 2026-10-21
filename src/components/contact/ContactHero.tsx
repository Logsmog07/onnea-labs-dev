"use client";

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';

export function ContactHero() {
  return (
    <section className="theme-hero relative overflow-hidden pb-6 pt-32 md:pb-8 md:pt-36 dark-section">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-20%] right-[-10%] h-[800px] w-[800px] blur-[60px] bg-transparent" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[600px] w-[600px] blur-[60px] bg-transparent" />
      </div>

      <Container className="relative z-10 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-line bg-surface px-3 py-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">Contact</span>
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-ink md:text-6xl lg:text-7xl">
              Let&apos;s build a <br />
              <span className="bg-gradient-to-r from-accent to-accent theme-heading bg-clip-text text-accent">clearer growth system.</span>
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted">
              Tell us where your website, funnel, or marketing system feels stuck. We&apos;ll review the context and come back with practical next steps.
            </p>

            <div className="flex items-center gap-3 text-sm font-medium tracking-wide text-muted">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-card" />
              No spam. No hard sell. Just useful commercial insight.
            </div>
          </motion.div>

          {/* Decorative orb — removed infinite y/scale/rotate animations to prevent
              continuous RAF load. Static fade-in only. */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden h-[360px] items-center justify-center pointer-events-none lg:flex"
          >
            <div className="absolute h-[300px] w-[300px] rounded-full blur-3xl bg-transparent" />
            <div
              className="relative flex aspect-square w-full max-w-[280px] items-center justify-center overflow-hidden rounded-full border border-line bg-tile shadow-card backdrop-blur-3xl"
            >
              <div className="absolute inset-0 bg-transparent" />
              <div className="absolute left-1/3 h-full w-[1px] bg-gradient-to-b from-transparent via-accent/40 to-transparent" />
              <div className="absolute right-1/3 h-full w-[1px] bg-gradient-to-b from-transparent via-accent/40 to-transparent" />
              <div className="absolute top-1/3 h-[1px] w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
              <div className="absolute bottom-1/3 h-[1px] w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

              <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full border border-line bg-tile">
                <div className="h-2 w-2 rounded-full bg-accent shadow-card" />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
