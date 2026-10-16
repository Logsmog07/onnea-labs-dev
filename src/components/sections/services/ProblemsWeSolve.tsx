"use client";

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { staggerContainer, fadeUp, viewportConfig } from '@/lib/animations';
import { AlertTriangle, TrendingDown, Users, Puzzle, Activity, MonitorX } from 'lucide-react';

const problems = [
  {
    title: 'Low Website Traffic',
    description: 'Struggling to be found organically because of poor technical SEO or lack of authority.',
    icon: <Users className="w-6 h-6 text-red-400" />,
  },
  {
    title: 'Weak Digital Presence',
    description: 'Competitors are outranking and outshining you with superior, modern branding.',
    icon: <MonitorX className="w-6 h-6 text-orange-400" />,
  },
  {
    title: 'Poor Conversion Rates',
    description: 'Visitors land on your site but leave before taking any meaningful action or purchasing.',
    icon: <TrendingDown className="w-6 h-6 text-amber-400" />,
  },
  {
    title: 'Disconnected Marketing Tools',
    description: 'Using disjointed software that limits automation, tracking, and seamless lead flow.',
    icon: <Puzzle className="w-6 h-6 text-yellow-500" />,
  },
  {
    title: 'No Actionable Analytics',
    description: 'Operating blindly without dashboards or data to understand what&apos;s actually working.',
    icon: <Activity className="w-6 h-6 text-pink-500" />,
  },
  {
    title: 'Outdated Website Experiences',
    description: 'Slow, broken, or unresponsive sites that instantly repel potential premium clients.',
    icon: <AlertTriangle className="w-6 h-6 text-purple-400" />,
  },
];

export function ProblemsWeSolve() {
  return (
    <section className="py-16 md:py-24 light-section">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportConfig} className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              The Challenges Businesses Face Online
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-400 mb-8 leading-relaxed"
            >
              Most digital underperformance comes from a handful of recurring issues: weak positioning, unclear conversion paths, outdated experiences, disconnected systems, and data that does not support decisions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportConfig}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl glass border-l-4 border-indigo-500 bg-indigo-500/5"
            >
              <p className="text-white font-medium text-lg italic">
                &ldquo;Our entire methodology is built around identifying these weak points and turning them into scalable revenue channels.&rdquo;
              </p>
            </motion.div>
          </div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {problems.map((problem, idx) => (
              <motion.div key={idx} variants={fadeUp} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-black/50 rounded-lg">{problem.icon}</div>
                  <h3 className="font-bold text-white leading-tight">{problem.title}</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{problem.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
