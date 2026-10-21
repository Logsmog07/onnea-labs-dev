"use client";

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { staggerContainer, fadeUp, viewportConfig } from '@/lib/animations';

const tools = [
  "Next.js", "React", "Tailwind CSS", "Framer Motion",
  "Vercel", "Figma", "Google Analytics 4",
  "Ahrefs", "Semrush", "HubSpot", "Klaviyo",
  "Webflow", "Zapier", "n8n"
];

export function ToolsTech() {
  return (
    <section className="py-12 md:py-16">
      <Container className="text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          className="mb-10 text-xs font-semibold tracking-[0.2em] text-muted uppercase"
        >
          Tools we work with
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-wrap justify-center items-center gap-3"
        >
          {tools.map((tool, idx) => (
            // Removed whileHover from motion.div — use CSS transition instead (no JS hover listeners)
            <motion.div
              key={idx}
              variants={fadeUp}
              className="rounded-full border border-line bg-transparent px-4 py-2 text-sm font-medium text-muted transition-all duration-300 hover:border-line hover:text-ink hover:-translate-y-0.5"
            >
              {tool}
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
