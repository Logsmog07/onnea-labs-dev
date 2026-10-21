"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { ServiceContent } from '@/data/services';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FAQSection({ data }: { data?: ServiceContent['faq'] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!data || data.items.length === 0) return null;

  return (
    <SectionContainer className="bg-canvas py-14 md:py-20 relative overflow-hidden bg-canvas">
      {/* Soft ambient background presence exclusively isolating depth scale */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[70px] rounded-full pointer-events-none bg-transparent" />

      <div className="max-w-3xl mx-auto relative z-10 w-full px-4 sm:px-6">
        
        {/* Core Linear Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4 tracking-tight inline-block relative">
            Frequently Asked Questions
            {/* Extremely minimal underline stroke avoiding massive UI blobs */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-mauve to-transparent" />
          </h2>
        </motion.div>

        {/* FAQ Accordion Stack (Raw rows replacing containers) */}
        <div className="flex flex-col border-t border-line">
          {data.items.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className={cn(
                  "group py-5 border-b border-line transition-colors duration-300",
                  isOpen ? "bg-mauve" : "hover:bg-surface"
                )}
              >
                {/* Accordion Node Native Interactive Target */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 text-left focus:outline-none"
                >
                  <span className={cn(
                    "font-semibold text-base md:text-lg tracking-wide transition-colors duration-300 pr-8",
                    isOpen ? "text-accent" : "text-ink group-hover:text-ink"
                  )}>
                    {item.question}
                  </span>
                  {/* Subtle Interactive Nodes avoiding standard circled template pads */}
                  <div className="flex-shrink-0 relative w-5 h-5 flex items-center justify-center">
                    <Plus className={cn(
                      "absolute w-4 h-4 transition-all duration-300 text-muted group-hover:text-accent drop-shadow-[0_0_8px_rgba(231,220,231,0.2)]",
                      isOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
                    )} />
                    <Minus className={cn(
                      "absolute w-4 h-4 transition-all duration-300 text-accent drop-shadow-[0_0_8px_rgba(231,220,231,0.5)]",
                      isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
                    )} />
                  </div>
                </button>
                
                {/* Dynamically expanding height constraints executing native motion limits softly */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-sm md:text-base text-muted font-light leading-relaxed pr-10">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Compact Center CTA Row Mapping */}

        
      </div>
    </SectionContainer>
  );
}

