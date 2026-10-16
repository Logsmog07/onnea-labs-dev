"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { ServiceContent } from '@/data/services';

export function ProcessTimeline({ data }: { data?: ServiceContent['process'] }) {
  if (!data) return null;

  return (
    <SectionContainer className="bg-[#0A0A0A] py-14 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          How We Work
        </h2>
        <p className="text-xl text-gray-400 font-light">
          Our process ensures every project moves from strategy to launch with clarity and precision.
        </p>
      </motion.div>

      <div className="relative max-w-6xl mx-auto">
        <div className="hidden md:block absolute top-[30px] left-[60px] right-[60px] h-px bg-white/10" />
        <div className="md:hidden absolute left-[29px] top-10 bottom-10 w-px bg-white/10" />

        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-4 lg:gap-8">
          {data.steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="relative flex-1 flex md:block flex-col md:items-center items-start group"
            >
              <div className="flex items-center w-full mb-6 md:mb-8 md:justify-center">
                <div className="relative flex items-center justify-center w-16 h-16 shrink-0 rounded-full bg-[#0A0A0A] border border-white/20 text-gray-400 group-hover:text-indigo-300 group-hover:border-indigo-500/50 transition-all duration-300 z-10 -translate-y-0 group-hover:-translate-y-1 shadow-none group-hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] group-hover:bg-[#0c0d14]">
                  <span className="font-mono text-xl font-bold tracking-tight">{step.step}</span>
                </div>
              </div>

              <div className="text-left md:text-center pl-20 md:pl-0 pr-4 md:pr-0 -translate-y-0 group-hover:-translate-y-1 transition-transform duration-300 -mt-[4.5rem] md:mt-0">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-200 transition-colors">
                  {step.title}
                </h3>
                <p className="text-base text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors mx-auto max-w-[200px] md:max-w-none">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
