"use client";

import Link from 'next/link';
import { BookCallButton } from '@/components/ui/BookCallButton';
import { motion } from 'framer-motion';
import { memo, useMemo } from 'react';
import {
  Globe,
  MousePointerClick,
  LayoutTemplate,
  Unplug,
  BarChart3,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { viewportConfig, fadeUp } from '@/lib/animations';

const problems = [
  {
    title: 'Weak demand capture',
    description: 'Search visibility is patchy, messaging is vague, and good-fit prospects do not find a clear reason to enquire.',
    icon: Globe,
  },
  {
    title: 'Low conversion clarity',
    description: 'Traffic reaches the site, but unclear hierarchy, weak offers, and friction-heavy journeys reduce conversion.',
    icon: MousePointerClick,
  },
  {
    title: 'Outdated web experience',
    description: 'Slow, dated, or generic pages erode trust before sales conversations have a chance to start.',
    icon: LayoutTemplate,
  },
  {
    title: 'Disconnected systems',
    description: 'Website, lifecycle, analytics, and follow-up workflows are often fragmented, which makes growth harder to sustain.',
    icon: Unplug,
  },
  {
    title: 'Limited decision signal',
    description: 'Tracking is incomplete or noisy, so teams cannot see what is working, leaking, or worth scaling.',
    icon: BarChart3,
  },
];

const solutions = [
  'Sharper positioning and messaging',
  'Conversion-focused UX, pages, and offers',
  'Cleaner systems for SEO, automation, and analytics',
];

const ProblemCard = memo(({ problem, idx }: { problem: typeof problems[0]; idx: number }) => {
  const Icon = problem.icon;
  return (
    <motion.div 
      variants={fadeUp}
      className="group flex items-start gap-4 rounded-xl p-3 transition-all duration-300 hover:bg-white/[0.02]"
      style={{ willChange: 'transform' }}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-gray-500 transition-all duration-300 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10 group-hover:text-indigo-400">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="mb-1 text-[15px] font-semibold text-white">{problem.title}</h3>
        <p className="text-sm leading-[1.6] text-gray-500">{problem.description}</p>
      </div>
    </motion.div>
  );
});
ProblemCard.displayName = 'ProblemCard';

const SolutionCard = memo(() => (
  <motion.div variants={fadeUp} className="relative" style={{ willChange: 'transform' }}>
    <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-cyan-500/5 blur-2xl" />

    <div className="relative rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-8 shadow-[0_24px_48px_rgba(0,0,0,0.2)] backdrop-blur-sm md:p-10">
      <h3 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-white">One system. Every layer aligned.</h3>

      <p className="mb-8 leading-[1.7] text-gray-400">
        We connect strategy, design, development, SEO, automation, and analytics into a single commercially aligned system. The result: a site that performs harder, decisions that are easier to make, and a growth engine you can actually manage.
      </p>

      <ul className="mb-10 space-y-3">
        {solutions.map((solution, idx) => (
          <li key={idx} className="flex items-center gap-3">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500/20">
              <CheckCircle2 className="h-3 w-3 text-indigo-400" />
            </div>
            <span className="text-[15px] font-medium text-white/90">{solution}</span>
          </li>
        ))}
      </ul>

      <BookCallButton size="lg" className="group w-full sm:w-auto" showArrow>
        Book an Intro Call
      </BookCallButton>
    </div>
  </motion.div>
));
SolutionCard.displayName = 'SolutionCard';

export function GrowthEngine() {
  return (
    <section className="relative overflow-hidden py-14 md:py-20">
      {/* Background depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.015] to-transparent" />
      <div className="pointer-events-none absolute top-0 left-1/3 h-[400px] w-[400px] rounded-full bg-purple-500/[0.03] blur-[50px]" />
      
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8"
        >
          <div className="order-1 mt-4 lg:col-span-5 lg:mt-0">
            <motion.div variants={fadeUp} className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400" style={{ willChange: 'transform' }}>
              The Challenge
            </motion.div>
            <motion.h2 variants={fadeUp} className="mb-8 text-3xl font-bold tracking-[-0.02em] text-white md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]" style={{ willChange: 'transform' }}>
              Why good businesses still{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">underperform online</span>
            </motion.h2>

            <div className="space-y-4">
              {problems.map((problem, idx) => (
                <ProblemCard key={idx} problem={problem} idx={idx} />
              ))}
            </div>
          </div>

          <div className="order-2 hidden lg:col-span-2 lg:block lg:h-full lg:min-h-[400px] relative">
            <svg className="absolute inset-0 h-full w-full opacity-50" preserveAspectRatio="none" viewBox="0 0 100 400">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.6" />
                </linearGradient>
              </defs>
              <path d="M 0,40 C 50,40 50,200 100,200" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
              <path d="M 0,120 C 50,120 50,200 100,200" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
              <path d="M 0,200 C 50,200 50,200 100,200" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
              <path d="M 0,280 C 50,280 50,200 100,200" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
              <path d="M 0,360 C 50,360 50,200 100,200" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
            </svg>
          </div>

          <div className="order-3 lg:col-span-5">
            <SolutionCard />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
