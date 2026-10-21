"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { memo, useMemo } from 'react';
import { Button } from '@/components/ui/Button';
import { BookCallButton } from '@/components/ui/BookCallButton';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';

const BackgroundBlobs = memo(() => (
  <>
    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(81,36,95,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(81,36,95,0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_40%,transparent_100%)]" />
    <div className="pointer-events-none absolute top-0 left-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full blur-[60px] bg-transparent" />
    <div className="pointer-events-none absolute top-1/3 right-0 h-[500px] w-[500px] rounded-full blur-[50px] bg-transparent" />
    <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full blur-[40px] bg-transparent" />
  </>
));
BackgroundBlobs.displayName = 'BackgroundBlobs';

const FloatingCard = memo(() => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
    className="absolute top-1/2 left-1/2 z-20 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2"
    style={{ willChange: 'transform, opacity' }}
  >
    <div className="pointer-events-none absolute inset-0 rounded-3xl blur-xl bg-transparent" />
    <div className="hero-illustration-main glass h-full w-full rounded-3xl border border-line bg-gradient-to-br from-transparent to-transparent shadow-card">
      <div className="flex h-12 items-center gap-2 border-b border-mauve/30 px-5">
        <div className="h-2.5 w-2.5 rounded-full bg-tile" />
        <div className="h-2.5 w-2.5 rounded-full bg-tile" />
        <div className="h-2.5 w-2.5 rounded-full bg-tile" />
      </div>
      <div className="flex flex-col gap-4 p-6">
        <div className="h-3 w-3/4 rounded bg-surface" />
        <div className="h-2 w-full rounded bg-mauve" />
        <div className="h-2 w-5/6 rounded bg-mauve" />
        <div className="mt-4 h-32 w-full rounded-xl bg-gradient-to-br from-mauve via-mauve to-mauve border border-mauve/30" />
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-tile" />
          <div className="flex-1">
            <div className="h-2 w-1/2 rounded bg-tile" />
            <div className="mt-2 h-1.5 w-2/3 rounded bg-surface" />
          </div>
        </div>
      </div>
    </div>
  </motion.div>
));
FloatingCard.displayName = 'FloatingCard';

const FloatingElements = memo(() => (
  <>
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="absolute top-16 right-8 z-30"
    >
      <div className="rounded-2xl border border-line bg-surface p-4 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-tile shadow-card" />
          <div className="h-6 w-16 rounded bg-accent/30" />
        </div>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="absolute bottom-20 left-4 z-10"
    >
      <div className="rounded-2xl border border-line bg-surface p-4 backdrop-blur-md">
        <div className="h-3 w-20 rounded bg-accent/40" />
        <div className="mt-2 h-2 w-14 rounded bg-accent/25" />
      </div>
    </motion.div>
  </>
));
FloatingElements.displayName = 'FloatingElements';

export function Hero() {
  return (
    <section className="theme-hero relative flex flex-col justify-center overflow-hidden pb-12 pt-28 md:pb-16 md:pt-36">
      <BackgroundBlobs />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-12">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 24 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-card" />
                Web Dev · UX · AI · Social · Analytics
              </div>
              <h1 className="mb-6 max-w-[90%] text-4xl font-bold leading-[1.05] tracking-[-0.02em] text-ink md:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
                We grow businesses through{' '}
                <span className="bg-gradient-to-r from-accent via-accent to-accent theme-heading bg-clip-text text-accent">
                  marketing and technology.
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 max-w-xl text-lg leading-[1.6] text-muted md:text-xl"
              style={{ willChange: 'transform, opacity' }}
            >
              Strategy, execution, and the tools to back it up.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-4 sm:flex-row sm:items-center"
              style={{ willChange: 'transform, opacity' }}
            >
              <Link href="/ai-visibility-report" className="w-full sm:w-auto">
                <Button size="lg" className="group w-full">
                  Free AI Visibility Report
                  <ArrowRight className="ml-2 inline-block h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Explore Services
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="relative hidden h-[520px] lg:block">
            <FloatingCard />
            <FloatingElements />
          </div>
        </div>
      </Container>
      
      {/* Visual transition gradient linking into next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-canvas" />
    </section>
  );
}
