"use client";

import { motion } from 'framer-motion';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { ServiceApproach } from '@/data/services';
import { renderLucideIcon } from '@/lib/icons';

export function ApproachSection({ data }: { data?: ServiceApproach }) {
  if (!data) return null;

  return (
    <SectionContainer className="bg-canvas py-14 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-16 tracking-tight">{data.title}</h2>

          <div className="space-y-0 relative">
            <div className="absolute left-[27px] top-6 bottom-6 w-px bg-gradient-to-b from-mauve via-mauve to-transparent" />
            {data.points.map((point, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.2, duration: 0.6 }} className="relative pl-20 pb-16 last:pb-0 group">
                <div className="absolute left-0 top-0 w-14 h-14 rounded-full bg-canvas border border-line flex items-center justify-center font-mono text-lg font-bold text-muted group-hover:text-accent group-hover:border-line transition-colors z-10 shadow-card">
                  0{idx + 1}
                </div>
                <h3 className="text-2xl font-bold text-ink mb-4 pt-3 group-hover:text-accent transition-colors">{point.title}</h3>
                <p className="text-lg text-muted leading-relaxed font-light">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="relative w-full aspect-square md:aspect-[4/5] rounded-[2.5rem] bg-tile border border-line p-[1px] overflow-hidden">
          <div className="absolute inset-0 bg-surface rounded-[2.5rem] opacity-90" />
          <div className="absolute inset-8 rounded-3xl bg-surface border border-line backdrop-blur-md overflow-hidden flex flex-col shadow-card">
            <div className="h-10 border-b border-line flex items-center px-4 gap-2 bg-surface">
              <div className="w-3 h-3 rounded-full bg-tile" />
              <div className="w-3 h-3 rounded-full bg-tile" />
              <div className="w-3 h-3 rounded-full bg-tile" />
            </div>
            <div className="flex-1 p-8 flex items-center justify-center relative overflow-hidden">
              <div className="absolute w-full h-[150%] bg-canvas rotate-12" />
              <div className="absolute w-64 h-64 blur-[80px] rounded-full bg-transparent" />
              <div className="relative z-10 p-8 rounded-3xl bg-surface border border-line shadow-card flex items-center justify-center text-accent">
                {renderLucideIcon(data.icon, { className: 'w-16 h-16' })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
