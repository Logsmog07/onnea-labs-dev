"use client";

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';

export function ContactHero() {
  return (
    <section className="relative overflow-hidden pb-6 pt-32 md:pb-8 md:pt-36 dark-section">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-20%] right-[-10%] h-[800px] w-[800px] bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.15),_transparent_60%)] blur-[60px]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[600px] w-[600px] bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.15),_transparent_60%)] blur-[60px]" />
      </div>

      <Container className="relative z-10 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-300">Contact</span>
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
              Let&apos;s build a <br />
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">clearer growth system.</span>
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-400">
              Tell us where your website, funnel, or marketing system feels stuck. We&apos;ll review the context and come back with practical next steps.
            </p>

            <div className="flex items-center gap-3 text-sm font-medium tracking-wide text-neutral-400">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
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
            <div className="absolute h-[300px] w-[300px] rounded-full bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-3xl" />
            <div
              className="relative flex aspect-square w-full max-w-[280px] items-center justify-center overflow-hidden rounded-full border border-white/5 bg-white/[0.01] shadow-2xl backdrop-blur-3xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.05),_transparent_50%)]" />
              <div className="absolute left-1/3 h-full w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
              <div className="absolute right-1/3 h-full w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
              <div className="absolute top-1/3 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="absolute bottom-1/3 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full border border-indigo-500/20 bg-indigo-500/10">
                <div className="h-2 w-2 rounded-full bg-indigo-400 shadow-[0_0_12px_rgba(99,102,241,0.8)]" />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
