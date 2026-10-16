"use client";

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { staggerContainer, fadeUp, viewportConfig } from '@/lib/animations';

const metrics = [
  {
    value: '01',
    label: 'Clearer Positioning',
    description: 'Sharper messaging, page hierarchy, and offer clarity so the right visitors understand the value faster.'
  },
  {
    value: '02',
    label: 'Stronger Conversion Paths',
    description: 'More intentional journeys across websites, funnels, and lifecycle flows so momentum is easier to maintain.'
  },
  {
    value: '03',
    label: 'Better Decision-Making Data',
    description: 'Cleaner analytics and measurement so the team can see what deserves attention and what needs fixing next.'
  }
];

export function ResultsHighlights() {
  return (
    <section className="py-16 md:py-24 light-section">
      <Container>
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
          <div className="w-full md:w-1/3">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
            >
              Three things we push on
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-400"
            >
              Not decoration. Not tool stacking. Measurable improvement in how the business is perceived, how users move, and how clearly performance can be managed.
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="p-8 rounded-2xl glass border border-white/5 hover:border-indigo-500/30 transition-colors flex flex-col justify-center items-center text-center"
              >
                <div className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-cyan-400 mb-4">
                  {metric.value}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{metric.label}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{metric.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
