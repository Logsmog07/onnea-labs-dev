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
    <SectionContainer className="theme-cta bg-canvas !py-12 lg:!py-16">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[3rem] border border-line bg-gradient-to-b from-line to-transparent p-[1px] shadow-card">
        <div className="absolute inset-0 bg-surface opacity-90" />
        <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full blur-[60px] mix-blend-screen bg-transparent" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full blur-[60px] mix-blend-screen bg-transparent" />

        <div className="theme-endpoint relative z-10 flex flex-col items-center justify-center rounded-[3rem] bg-surface px-8 py-20 text-center backdrop-blur-3xl md:py-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl"
          >
            <h2 className="mb-8 text-4xl font-bold leading-[1.1] tracking-tight text-surface md:text-5xl lg:text-7xl">{data.title}</h2>
            <p className="mb-12 text-xl font-light leading-relaxed text-light-muted md:text-2xl">{data.description}</p>
            <BookCallButton size="lg" className="group h-16 w-full rounded-full bg-accent px-12 text-lg font-bold text-surface hover:bg-hover sm:w-auto" showArrow serviceSlug={slug}>
              {data.primaryButton}
            </BookCallButton>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
}

