"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { staggerContainer, fadeUp, viewportConfig } from '@/lib/animations';

const faqs = [
  {
    question: "How long does a typical engagement take?",
    answer: "It depends on scope and starting point. A focused website build or redesign usually runs 6–10 weeks. SEO and demand capture work tends to show meaningful signal within 60–90 days. We scope each project clearly before any work starts so there are no surprises."
  },
  {
    question: "Do you work on a project or retainer basis?",
    answer: "Both. Some clients come to us for a defined deliverable — a new site, an audit, a campaign build. Others stay on a monthly basis to run SEO, content, automation, or ongoing CRO. We can structure either to suit your situation."
  },
  {
    question: "Can you improve an existing site rather than build from scratch?",
    answer: "Yes, and often that is the right call. A full rebuild is not always necessary. We frequently improve positioning, conversion hierarchy, page structure, and technical performance on existing sites — which can move the needle faster and with less disruption."
  },
  {
    question: "What kinds of businesses do you work best with?",
    answer: "We work best with B2B and professional services businesses that have something genuinely good to sell, but where the digital presence does not yet reflect that quality. Typically these are companies with 5–100 people who are growing and want a cleaner, more effective online footprint."
  },
  {
    question: "What does the first conversation look like?",
    answer: "We keep it short and practical. You share context about your business, your goals, and where the current setup feels stuck. We ask a few questions, and come back with a clear read on the situation and a suggested direction — not a generic pitch deck."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-14 md:py-20 bg-canvas">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-canvas" />

      <Container className="relative z-10 max-w-3xl">
        {/* Single animated parent for header — avoids 3 separate IntersectionObserver registrations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
            FAQ
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-[-0.02em] text-ink md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted">
            Common questions about how we work, what to expect, and whether we might be a good fit.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="space-y-3"
        >
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              data-expanded={openIndex === idx}
              variants={fadeUp}
              className="home-faq-item overflow-hidden rounded-xl border border-line bg-surface"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-surface focus:outline-none"
              >
                <span className="text-[15px] font-medium text-ink">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="faq-toggle flex h-6 w-6 items-center justify-center rounded-full bg-surface"
                >
                  <ChevronDown className="faq-chevron h-4 w-4 text-accent" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-5 pb-5 text-[15px] leading-[1.65] text-muted">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
