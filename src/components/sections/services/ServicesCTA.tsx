"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { BookCallButton } from '@/components/ui/BookCallButton';
import { Container } from '@/components/ui/Container';
import { viewportConfig } from '@/lib/animations';

export function ServicesCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden gradient-section">
      {/* Static glow blob — removed infinite scale/opacity animation;
          animating opacity triggers repaint every RAF tick, causing scroll jank */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="w-[700px] h-[700px] bg-gradient-to-tr from-indigo-500/15 via-purple-500/10 to-cyan-500/8 blur-[80px] rounded-full pointer-events-none opacity-30" />
      </div>

      <Container className="relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <h2 className="mb-6 text-3xl font-bold tracking-[-0.02em] text-white md:text-4xl lg:text-5xl">
            Not sure which service fits?{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Let&apos;s figure it out together.</span>
          </h2>

          <p className="mx-auto mb-10 max-w-xl text-lg leading-[1.7] text-gray-400">
            Share where your current setup is falling short and we will come back with a clear recommendation — no pitch, no pressure.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <BookCallButton size="lg" className="group w-full px-8 py-3.5 sm:w-auto" showArrow />
            <Link href="#services-grid" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full px-8 py-3.5 sm:w-auto">
                Browse Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
