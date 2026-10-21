"use client";

import { motion } from 'framer-motion';
import { memo } from 'react';
import { SearchCode, Compass, Rocket, BarChart2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { staggerContainer, fadeUp, viewportConfig, viewportConfigRepeating } from '@/lib/animations';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We review your goals, audience, funnel gaps, and the commercial context behind the project.',
    icon: SearchCode,
  },
  {
    number: '02',
    title: 'Strategy & Positioning',
    description: 'We define priorities, shape the offer, and map a clearer path for demand capture and conversion.',
    icon: Compass,
  },
  {
    number: '03',
    title: 'Execution',
    description: 'We build the pages, systems, and assets needed to move from plan to working growth infrastructure.',
    icon: Rocket,
  },
  {
    number: '04',
    title: 'Optimisation',
    description: 'We refine with real behaviour, cleaner data, and practical iteration rather than guesswork.',
    icon: BarChart2,
  },
];

const ProcessStep = memo(({ step, i }: { step: typeof steps[0]; i: number }) => {
  const Icon = step.icon;
  return (
    <motion.div
      variants={fadeUp}
      className="group relative flex flex-col rounded-2xl border border-line bg-surface p-7 transition-all duration-300 hover:border-focus hover:bg-surface"
      style={{ willChange: 'transform' }}
    >
      {/* Step number + icon row */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-tile transition-all duration-300 group-hover:bg-tile group-hover:border-line">
          <Icon className="h-5 w-5 text-accent" />
        </div>
        <span className="font-mono text-3xl font-bold tracking-tight text-accent transition-colors duration-300 group-hover:text-accent select-none">
          {step.number}
        </span>
      </div>

      <h3 className="mb-2.5 text-lg font-semibold text-ink">{step.title}</h3>
      <p className="text-sm leading-[1.7] text-muted">{step.description}</p>
    </motion.div>
  );
});
ProcessStep.displayName = 'ProcessStep';

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden py-14 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-alternate" />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px] bg-transparent"
        style={{ willChange: 'transform' }}
      />

      <Container className="relative z-10">
        <div className="mb-16 text-center md:mb-20 scroll-mt-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
            Process
          </div>
          <h2 className="mb-6 text-4xl font-bold tracking-[-0.02em] text-ink md:text-5xl">
            From Brief to Results in Four Stages
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-[1.7] text-muted">
            A clear process designed to reduce wasted effort, build from evidence, and deliver work that improves measurable performance.
          </p>
        </div>

        <motion.div
          className="mx-auto max-w-5xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <ProcessStep key={i} step={step} i={i} />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
