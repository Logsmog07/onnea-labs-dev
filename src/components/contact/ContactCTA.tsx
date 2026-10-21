"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';

const vp = { once: true, margin: '-100px' };

export function ContactCTA() {
  return (
    <section className="theme-cta relative overflow-hidden pt-0 pb-16 md:pb-20 dark-section">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 blur-[60px] bg-transparent" />
      </div>

      <Container className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6 }}
          className="theme-endpoint flex flex-col items-center rounded-3xl border border-line bg-surface p-8 shadow-card backdrop-blur-2xl md:p-14 lg:p-18"
        >
          <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-line bg-surface shadow-card">
            <Calendar className="h-10 w-10 text-accent" />
          </div>

          <h2 className="mb-6 text-4xl font-bold tracking-tight text-surface md:text-5xl lg:text-6xl">
            Prefer to talk first?{' '}
            <span className="bg-gradient-to-r from-transparent to-transparent bg-clip-text text-surface">We&apos;re easy to reach.</span>
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-light-muted md:text-xl">
            If you&apos;d rather have a short conversation before committing to anything, just use the form above. We respond within 24 hours with something useful — not a pitch.
          </p>

          <Link href="/contact#contact-form" className="theme-primary flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-accent to-accent px-8 py-4 text-lg font-semibold text-surface shadow-card transition-all duration-300 hover:scale-105 active:scale-95">
            Get in Touch
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}

