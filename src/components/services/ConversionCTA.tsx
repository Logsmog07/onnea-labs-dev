"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { ServiceContent } from '@/data/services';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { BookCallButton } from '@/components/ui/BookCallButton';

export function ConversionCTA({ data, slug }: { data?: ServiceContent['cta'], slug?: string }) {
  if (!data) return null;

  return (
    <SectionContainer className="bg-[#050505] !py-12 lg:!py-16">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-[1px] shadow-[0_0_80px_rgba(99,102,241,0.07)]">
        <div className="absolute inset-0 bg-[#0A0A0A] opacity-90" />
        <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-indigo-500/20 blur-[60px] mix-blend-screen" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-indigo-700/20 blur-[60px] mix-blend-screen" />

        <div className="relative z-10 flex flex-col items-center justify-center rounded-[3rem] bg-white/[0.01] px-8 py-20 text-center backdrop-blur-3xl md:py-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl"
          >
            <h2 className="mb-8 text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-7xl">{data.title}</h2>
            <p className="mb-12 text-xl font-light leading-relaxed text-gray-300 md:text-2xl">{data.description}</p>
            <BookCallButton size="lg" className="group h-16 w-full rounded-full bg-white px-12 text-lg font-bold text-black hover:bg-gray-200 sm:w-auto" showArrow serviceSlug={slug}>
              {data.primaryButton}
            </BookCallButton>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
}

