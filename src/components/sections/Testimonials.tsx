"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { ArrowUpRight, SearchCode, Workflow } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { staggerContainer, fadeUp, viewportConfig } from '@/lib/animations';

const focusAreas = [
  {
    title: 'Sharpen the first impression',
    description: 'Improve positioning, page hierarchy, and UX so the brand feels clearer and more credible from the first visit.',
    icon: ArrowUpRight,
    color: 'indigo',
  },
  {
    title: 'Capture more of the right demand',
    description: 'Strengthen SEO, service-page clarity, and conversion paths so traffic has a better chance of becoming pipeline.',
    icon: SearchCode,
    color: 'purple',
  },
  {
    title: 'Build systems that are easier to scale',
    description: 'Connect the website, automation, and analytics layer so growth is less reactive and easier to improve over time.',
    icon: Workflow,
    color: 'cyan',
  }
];

const colorStyles = {
  indigo: { bg: 'from-indigo-500/15 to-purple-500/10', icon: 'text-indigo-400', border: 'group-hover:border-indigo-500/25' },
  purple: { bg: 'from-purple-500/15 to-pink-500/10', icon: 'text-purple-400', border: 'group-hover:border-purple-500/25' },
  cyan: { bg: 'from-cyan-500/15 to-indigo-500/10', icon: 'text-cyan-400', border: 'group-hover:border-cyan-500/25' },
};

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-14 md:py-20">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-full max-w-4xl bg-gradient-to-br from-purple-500/[0.03] via-indigo-500/[0.02] to-transparent blur-[50px]" style={{ willChange: 'transform' }} />

      <Container className="relative z-10">
        {/* Single animated parent for header — avoids 3 separate IntersectionObserver registrations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400">
            Focus Areas
          </div>
          <h2 className="mb-6 text-4xl font-bold tracking-[-0.02em] text-white md:text-5xl">
            Where we move the needle
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-[1.7] text-gray-400">
            Three areas with the highest leverage on digital performance, trust, and conversion — and where most B2B sites still leave value on the table.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {focusAreas.map((item, idx) => {
            const Icon = item.icon;
            const styles = colorStyles[item.color as keyof typeof colorStyles];
            return (
              <motion.div key={idx} variants={fadeUp}>
                <Card className={`h-full p-7 ${styles.border}`}>
                  <div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${styles.bg} border border-white/[0.06]`}>
                    <Icon className={`h-5 w-5 ${styles.icon}`} />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-[15px] leading-[1.65] text-gray-400">{item.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

