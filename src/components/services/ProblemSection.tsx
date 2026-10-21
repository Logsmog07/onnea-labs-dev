"use client";

import { motion } from 'framer-motion';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { ServiceProblem } from '@/data/services';
import { renderLucideIcon } from '@/lib/icons';

export function ProblemSection({ data }: { data?: ServiceProblem }) {
  if (!data) return null;

  return (
    <SectionContainer className="bg-surface py-14 md:py-20">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col"
        >
          <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">{data.heading}</h2>
          <p className="mb-8 text-xl font-light leading-relaxed text-muted">{data.intro}</p>
          <p className="text-lg font-medium text-accent">A strong website should function as a business asset, not just an online brochure.</p>
        </motion.div>

        <div className="flex flex-col">
          {data.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="group flex items-start gap-4 border-b border-line p-5 transition-colors last:border-none hover:bg-surface md:p-6"
            >
              <div className="mt-1 flex-shrink-0 text-accent transition-colors group-hover:text-accent">
                {renderLucideIcon(item.icon, { className: 'h-5 w-5' })}
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-ink transition-colors group-hover:text-accent">{item.title}</h3>
                <p className="font-light leading-relaxed text-muted">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
