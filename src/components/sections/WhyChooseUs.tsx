"use client";

import { motion } from 'framer-motion';
import { LineChart, Smartphone, Target, Layers, ArrowUpRight, Workflow, MessageSquare } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { viewportConfig } from '@/lib/animations';

const reasons = [
  {
    title: 'Commercially grounded decisions',
    description: 'We focus on what improves clarity, trust, and commercial performance — not surface-level activity.',
    icon: LineChart,
    color: 'indigo',
  },
  {
    title: 'Built to perform beyond launch',
    description: 'The technology choices are made for performance, maintainability, and long-term value — not to follow trends or justify unnecessary complexity.',
    icon: Smartphone,
    color: 'cyan',
  },
  {
    title: 'Conversion-minded execution',
    description: 'Pages, funnels, and systems are shaped to reduce friction and support better decisions from buyers.',
    icon: Target,
    color: 'purple',
  },
  {
    title: 'End-to-end, without the silos',
    description: 'Strategy, design, development, automation, and analytics are treated as one connected system — not isolated deliverables handed between different people.',
    icon: Layers,
    color: 'pink',
  },
];

const colorStyles = {
  indigo: 'text-indigo-400',
  cyan: 'text-cyan-400',
  purple: 'text-purple-400',
  pink: 'text-pink-400',
};

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative overflow-hidden py-14 md:py-20 scroll-mt-20">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#030508] via-[#080c14] to-[#030508]" />
      <div className="pointer-events-none absolute top-1/3 right-0 h-[500px] w-[500px] rounded-full bg-indigo-500/[0.04] blur-[70px]" />
      
      <Container className="relative z-10 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="flex flex-col">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-1.5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-300/90">Why Onnea Labs?</span>
            </div>

            <h2 className="mb-6 text-3xl font-bold leading-tight tracking-[-0.02em] text-white md:text-4xl">
              Strategy, execution, and systems{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">— without the handoff problems.</span>
            </h2>

            <p className="mb-10 text-lg leading-[1.7] text-gray-400">
              We do not just ship pages or campaigns. We help shape a more coherent growth system across positioning, UX, delivery, automation, and measurement.
            </p>

            {/* Stagger container — 1 IntersectionObserver instead of 4 individual ones */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
              className="flex flex-col divide-y divide-white/[0.05]"
            >
              {reasons.map((reason, idx) => {
                const Icon = reason.icon;
                const iconColor = colorStyles[reason.color as keyof typeof colorStyles];
                return (
                  <motion.div
                    key={idx}
                    variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                    className="group relative flex items-start gap-4 py-4"
                  >
                    <div className="absolute -left-4 top-0 h-full w-[2px] bg-gradient-to-b from-indigo-500/0 via-purple-500 to-indigo-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] transition-all duration-300 group-hover:border-indigo-500/20 group-hover:bg-indigo-500/10">
                      <Icon className={`h-5 w-5 ${iconColor}`} />
                    </div>
                    <div>
                      <h3 className="mb-1 text-[15px] font-semibold text-white">{reason.title}</h3>
                      <p className="text-sm leading-[1.6] text-gray-500 transition-colors duration-200 group-hover:text-gray-400">
                        {reason.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Decorative UI mockup — float animations removed to eliminate 4 concurrent
              infinite RAF loops that caused scroll jank. Fade-in only on mount. */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportConfig}
            transition={{ duration: 0.8 }}
            className="relative hidden items-center justify-center pointer-events-none lg:flex lg:h-[560px]"
          >
            <div className="absolute top-1/2 left-1/2 z-0 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-40 blur-[60px]" />

            {/* Main card — static, no infinite animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportConfig}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute z-20 w-[280px] overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] shadow-[0_24px_48px_rgba(0,0,0,0.25)] backdrop-blur-xl"
            >
              <div className="flex h-10 items-center gap-2 border-b border-white/[0.05] bg-white/[0.01] px-4">
                <div className="h-2 w-2 rounded-full bg-white/20" />
                <div className="h-2 w-2 rounded-full bg-white/15" />
                <div className="h-2 w-2 rounded-full bg-white/10" />
              </div>
              <div className="flex flex-col gap-3 p-5">
                <div className="h-3.5 w-3/4 rounded bg-white/10" />
                <div className="h-2 w-full rounded bg-white/5" />
                <div className="h-2 w-5/6 rounded bg-white/5" />
                <div className="mt-3 h-20 w-full rounded-lg border border-white/[0.05] bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent" />
              </div>
            </motion.div>

            {/* Stats card — static */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute left-[5%] top-[10%] z-30 w-[180px] rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 shadow-[0_16px_32px_rgba(0,0,0,0.3)] backdrop-blur-xl"
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/20">
                  <LineChart className="h-4 w-4 text-indigo-400" />
                </div>
                <div className="flex items-center gap-1 rounded-full bg-emerald-400/10 px-2 py-1 text-[11px] font-medium text-emerald-400">
                  <ArrowUpRight className="h-3 w-3" />
                  <span>24%</span>
                </div>
              </div>
              <div className="mb-1 text-xs font-medium text-gray-500">Conversion Rate</div>
              <div className="mb-2 text-xl font-bold text-white">4.2%</div>
              <div className="flex h-6 items-end gap-0.5 opacity-70">
                {[4, 6, 5, 8, 7, 10, 9, 12].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-sm bg-indigo-400/60" style={{ height: `${(h / 12) * 100}%` }} />
                ))}
              </div>
            </motion.div>

            {/* Workflow card — static */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute bottom-[12%] right-[0%] z-10 w-[200px] rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 shadow-[0_16px_32px_rgba(0,0,0,0.3)] backdrop-blur-xl"
            >
              <div className="mb-3 flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-500/20">
                  <Workflow className="h-3.5 w-3.5 text-purple-400" />
                </div>
                <div className="text-sm font-medium text-white">Automated Flow</div>
              </div>
              <div className="relative flex flex-col gap-2">
                <div className="absolute left-3 top-3 bottom-3 w-[1px] bg-white/[0.08]" />
                {[
                  { active: false },
                  { active: true },
                  { active: false },
                ].map((item, i) => (
                  <div key={i} className="relative z-10 flex items-center gap-2.5">
                    <div className={`flex h-6 w-6 items-center justify-center rounded-full border ${item.active ? 'border-indigo-500/30 bg-indigo-500/20' : 'border-white/10 bg-white/5'}`}>
                      <div className={`h-1.5 w-1.5 rounded-full ${item.active ? 'bg-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.6)]' : 'bg-white/40'}`} />
                    </div>
                    <div className="h-1.5 flex-1 rounded bg-white/10" />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Message card — static */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute bottom-[25%] left-[2%] z-30 max-w-[140px] rounded-xl border border-white/[0.08] bg-white/[0.03] p-3 shadow-[0_12px_24px_rgba(0,0,0,0.25)] backdrop-blur-xl"
            >
              <div className="flex items-start gap-2">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/20">
                  <MessageSquare className="h-2.5 w-2.5 text-cyan-400" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="h-1.5 w-14 rounded bg-white/15" />
                  <div className="h-1.5 w-20 rounded bg-white/[0.08]" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
