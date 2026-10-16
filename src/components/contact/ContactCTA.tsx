"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';

const vp = { once: true, margin: '-100px' };

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden pt-0 pb-16 md:pb-20 dark-section">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.12),_transparent_60%)] blur-[60px]" />
      </div>

      <Container className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 shadow-2xl backdrop-blur-2xl md:p-14 lg:p-18"
        >
          <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-xl">
            <Calendar className="h-10 w-10 text-indigo-400" />
          </div>

          <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Prefer to talk first?{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">We&apos;re easy to reach.</span>
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-neutral-400 md:text-xl">
            If you&apos;d rather have a short conversation before committing to anything, just use the form above. We respond within 24 hours with something useful — not a pitch.
          </p>

          <Link href="/contact#contact-form" className="flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-4 text-lg font-semibold text-white shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all duration-300 hover:scale-105 active:scale-95">
            Get in Touch
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}

