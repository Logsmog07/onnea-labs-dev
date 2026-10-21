"use client";

import styles from '@/app/ai-visibility-report/ai-visibility-theme.module.css';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { ArrowRight, MessageSquare, Zap } from 'lucide-react';
import Link from 'next/link';

const viewportConfig = { once: true, margin: '-100px' };

export function AIVisibilityCTA() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="theme-cta relative overflow-hidden py-24 md:py-32 dark-section bg-canvas">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 blur-[60px] bg-transparent" />
        <div className={`${styles.closingPattern} absolute inset-0 bg-[linear-gradient(to_right,#51245f0a_1px,transparent_1px),linear-gradient(to_bottom,#51245f0a_1px,transparent_1px)] bg-[size:24px_24px]`} />
      </div>

      <Container className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
          className={`${styles.closingPanel} theme-endpoint relative overflow-hidden rounded-[2.5rem] border border-line bg-surface p-10 backdrop-blur-2xl md:p-20 shadow-card`}
        >
          {/* Subtle top glow line */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-mauve to-transparent" />
          
          <div className="mb-8 inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-tile border border-line text-accent mb-8 shadow-card">
            <Zap className="h-8 w-8" />
          </div>

          <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-surface md:text-5xl lg:text-6xl pb-2 bg-clip-text text-surface bg-gradient-to-b from-transparent to-transparent">
            Ready to Understand Your AI Visibility?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl text-light-muted font-light leading-relaxed">
            Start with a clear, actionable view of the technical and structural signals shaping how your business is understood online.
          </p>

          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-6">
            <a
              href="#top"
              onClick={scrollToTop}
              className="theme-primary group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-accent px-8 py-4.5 font-bold text-surface transition-all hover:bg-hover sm:w-auto shadow-card hover:shadow-card"
            >
              <span className="relative z-10 tracking-wide">Request Your Report</span>
              <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            
            <Link
              href="/contact"
              className="group flex w-full items-center justify-center gap-3 rounded-2xl border border-surface bg-transparent px-8 py-4.5 font-bold text-surface transition-all hover:bg-surface/10 hover:border-surface sm:w-auto"
            >
              Talk to Onnea Labs
              <MessageSquare className="h-5 w-5 text-light-muted transition-colors group-hover:text-surface" />
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
