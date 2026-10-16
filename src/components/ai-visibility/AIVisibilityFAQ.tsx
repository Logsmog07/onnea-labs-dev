"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Plus, Minus } from 'lucide-react';

const viewportConfig = { once: true, margin: '-100px' };

const faqs = [
  {
    question: "Is this report actually free?",
    answer: "Yes. The AI Visibility Report is a free preliminary review designed to demonstrate our methodology and provide you with immediate, actionable insights on your technical foundation."
  },
  {
    question: "How long does the review take?",
    answer: "We typically complete and deliver the initial AI Visibility Report within 2-3 business days after receiving your request."
  },
  {
    question: "Will you need access to my website or analytics?",
    answer: "No. For this initial review, we only use external tools and public-facing data—the exact same way search engines and AI models evaluate your site."
  },
  {
    question: "What happens after I receive the report?",
    answer: "You can implement our recommendations with your internal team, or you can book an optional strategy call with us to discuss how Onnea Labs can help you optimize your digital presence."
  }
];

export function AIVisibilityFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden py-24 md:py-32 dark-section bg-[#030303]">
      <Container className="relative z-10 mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.5 }}
            className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${isOpen ? 'border-indigo-500/30 bg-white/[0.04]' : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.04]'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left md:px-8 md:py-8"
                >
                  <span className={`text-lg font-bold tracking-wide transition-colors duration-300 ${isOpen ? 'text-white' : 'text-neutral-200'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? 'border-indigo-500/50 bg-indigo-500/10 text-indigo-400 rotate-180' : 'border-white/10 bg-white/5 text-neutral-400'}`}>
                    {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 md:px-8 md:pb-8">
                        <p className="text-base leading-relaxed text-neutral-400 md:text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
