"use client";

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
    <section className="relative overflow-hidden py-24 md:py-32 dark-section bg-[#030303]">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.15),_transparent_70%)] blur-[60px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <Container className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-neutral-900/60 p-10 backdrop-blur-2xl md:p-20 shadow-2xl"
        >
          {/* Subtle top glow line */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
          
          <div className="mb-8 inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 mb-8 shadow-[0_0_30px_rgba(99,102,241,0.2)]">
            <Zap className="h-8 w-8" />
          </div>

          <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl pb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
            Ready to Understand Your AI Visibility?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl text-neutral-400 font-light leading-relaxed">
            Start with a clear, actionable view of the technical and structural signals shaping how your business is understood online.
          </p>

          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-6">
            <a
              href="#top"
              onClick={scrollToTop}
              className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-white px-8 py-4.5 font-bold text-neutral-950 transition-all hover:bg-neutral-200 sm:w-auto shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]"
            >
              <span className="relative z-10 tracking-wide">Request Your Report</span>
              <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            
            <Link
              href="/contact"
              className="group flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4.5 font-bold text-white transition-all hover:bg-white/10 hover:border-white/20 sm:w-auto"
            >
              Talk to Onnea Labs
              <MessageSquare className="h-5 w-5 text-neutral-400 transition-colors group-hover:text-white" />
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
