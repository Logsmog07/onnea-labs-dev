"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { BookCallButton } from '@/components/ui/BookCallButton';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export function ServicesHero() {
  return (
    <section className="relative flex min-h-[68vh] items-center overflow-hidden pb-20 pt-32 gradient-section">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[70px] mix-blend-screen" />

      <Container className="relative z-10 flex flex-col items-center text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="max-w-4xl">
          <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-indigo-300">
            Service lines
          </div>

          <h1 className="mb-8 text-5xl font-bold leading-[1.06] tracking-tight text-white md:text-6xl lg:text-7xl">
            Services built to <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">sharpen growth systems</span>
          </h1>

          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
            From demand capture and UX to automation, analytics, and modern web delivery, our services are designed to make your digital presence clearer, stronger, and easier to scale.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <Link href="#services-grid">
              <Button size="lg" className="group w-full sm:w-auto">
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <BookCallButton size="lg" variant="outline" className="w-full sm:w-auto" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

