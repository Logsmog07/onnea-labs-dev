"use client";

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { fadeUp, viewportConfig } from '@/lib/animations';

const pillars = [
  'SEO & Demand Capture',
  'Conversion-Focused Design',
  'Web Development',
  'Lifecycle Automation',
  'Analytics & CRO'
];

export function SocialProof() {
  return (
    <section className="relative z-20 pt-4 pb-12 md:pt-8 md:pb-16 -mt-8 md:-mt-12">
      <Container className="text-center">
        <p className="mb-4 text-sm font-medium tracking-wide text-muted">
          One connected system across
        </p>

        {/* Single parent animation instead of 5 individual whileInView observers */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.05 } } }}
          className="mx-auto flex flex-wrap justify-center items-center gap-3"
        >
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-muted transition-all duration-300 hover:border-line hover:text-ink"
            >
              {pillar}
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
