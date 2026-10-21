"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { BookCallButton } from '@/components/ui/BookCallButton';
import { Container } from '@/components/ui/Container';
import { viewportConfig } from '@/lib/animations';

export function CTA() {
  return (
    <section className="theme-endpoint theme-cta relative overflow-hidden py-12 md:py-16">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0 bg-transparent" />
      {/* Static glow blob — removed infinite scale/opacity animation to prevent
          per-frame repaints that cause scroll jank */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px] opacity-30 bg-transparent" />
      </div>

      <Container className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <h2 className="mb-6 text-3xl font-bold tracking-[-0.02em] text-surface md:text-4xl lg:text-5xl">
            Ready to build a growth system{' '}
            <span className="bg-gradient-to-r from-transparent via-transparent to-transparent bg-clip-text text-surface">that performs</span>?
          </h2>

          <p className="mx-auto mb-10 max-w-xl text-lg leading-[1.7] text-light-muted">
            If your website, funnel, and marketing feel disconnected, we can align them into a sharper system — one that gives the right buyers every reason to choose you.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <BookCallButton size="lg" className="w-full px-8 py-3.5 sm:w-auto" />
            <Link href="/services" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full px-8 py-3.5 sm:w-auto">
                Explore Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
