"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { ServiceFeatures } from '@/data/services';
import { renderLucideIcon } from '@/lib/icons';
import { cn } from '@/lib/utils';

export function FeatureList({ data }: { data?: ServiceFeatures }) {
  if (!data || !data.items || data.items.length === 0) return null;

  const midIndex = Math.ceil(data.items.length / 2);
  const leftColumnItems = data.items.slice(0, midIndex);
  const rightColumnItems = data.items.slice(midIndex);

  return (
    <SectionContainer className="bg-surface py-14 md:py-20 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[60vw] h-[60vh] blur-[70px] rounded-full pointer-events-none bg-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(81,36,95,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(81,36,95,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-ink mb-6 tracking-tight leading-[1.1] relative inline-block"
        >
          What You Will Get
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-8 h-px bg-tile" />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted font-light leading-relaxed mt-10 max-w-2xl mx-auto"
        >
          Everything your business needs to build a high-performance, scalable digital presence.
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
        <div className="flex flex-col">
          {leftColumnItems.map((item, idx) => {
            const isHighlighted = item.highlight;

            return (
              <motion.div
                key={`left-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group flex items-start gap-5 py-8 border-b border-line last:border-b-0 relative transition-all duration-300 hover:bg-surface -mx-4 px-4 rounded-xl"
              >
                {isHighlighted && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-12 bg-tile rounded-r-md" />}

                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center">
                    {renderLucideIcon(item.icon, {
                      className: cn(
                        'w-5 h-5 stroke-[1.5] transition-all duration-300',
                        isHighlighted ? 'text-accent drop-shadow-[0_0_8px_rgba(231,220,231,0.5)]' : 'text-muted group-hover:text-accent'
                      ),
                    })}
                  </div>
                </div>

                <div className="flex flex-col flex-1 pl-1">
                  <h3
                    className={cn(
                      'font-semibold tracking-wide transition-colors duration-300 mb-2',
                      isHighlighted
                        ? 'text-xl text-ink group-hover:text-accent'
                        : 'text-lg text-ink group-hover:text-ink'
                    )}
                  >
                    {item.title}
                  </h3>
                  <p className="text-muted font-light leading-relaxed text-[15px]">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex flex-col">
          {rightColumnItems.map((item, idx) => {
            const isHighlighted = item.highlight;

            return (
              <motion.div
                key={`right-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (leftColumnItems.length + idx) * 0.1, duration: 0.5 }}
                className="group flex items-start gap-5 py-8 border-b border-line last:border-b-0 relative transition-all duration-300 hover:bg-surface -mx-4 px-4 rounded-xl"
              >
                {isHighlighted && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-12 bg-tile rounded-r-md" />}

                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center">
                    {renderLucideIcon(item.icon, {
                      className: cn(
                        'w-5 h-5 stroke-[1.5] transition-all duration-300',
                        isHighlighted ? 'text-accent drop-shadow-[0_0_8px_rgba(231,220,231,0.5)]' : 'text-muted group-hover:text-accent'
                      ),
                    })}
                  </div>
                </div>

                <div className="flex flex-col flex-1 pl-1">
                  <h3
                    className={cn(
                      'font-semibold tracking-wide transition-colors duration-300 mb-2',
                      isHighlighted
                        ? 'text-xl text-ink group-hover:text-accent'
                        : 'text-lg text-ink group-hover:text-ink'
                    )}
                  >
                    {item.title}
                  </h3>
                  <p className="text-muted font-light leading-relaxed text-[15px]">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}

