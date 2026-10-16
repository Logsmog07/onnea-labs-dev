"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { staggerContainer, fadeUp, viewportConfig } from '@/lib/animations';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: "Do I need to use all your services at once?",
    answer: "Not at all. Most clients start with a single focused area — a website rebuild, an SEO engagement, or a design audit — and expand from there as they see what moves the needle. We scope clearly before anything starts so you know exactly what you are getting."
  },
  {
    question: "How do you approach SEO strategy for a specific market?",
    answer: "We start with a technical audit and intent mapping to understand how your buyers actually search, what competitors rank for, and where the clearest gaps are. From there we build a prioritised plan that focuses on demand your site can realistically capture, not vanity traffic."
  },
  {
    question: "What do you build websites with, and why?",
    answer: "We build primarily with Next.js and Tailwind CSS. It gives us fast, maintainable sites with strong SEO fundamentals out of the box. For marketing sites and landing pages, it is a well-proven choice that does not require expensive infrastructure to host or maintain."
  },
  {
    question: "Can you make promises about rankings or ROI?",
    answer: "No — and anyone who does should be treated with caution. What we can commit to is a clear methodology, honest reporting, and a focus on the metrics that actually matter to your business. We will tell you what is working, what is not, and what we think is worth doing next."
  },
  {
    question: "How long does a typical website project take?",
    answer: "A focused website build — typically 5–10 pages — usually runs 6–8 weeks from kick-off to launch. Larger or more complex projects take longer. We scope everything upfront so you have a clear timeline before any work begins."
  }
];

export function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24 dark-section">
      <Container>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            className="mb-6 text-3xl font-bold tracking-[-0.02em] text-white md:text-5xl"
          >
            Common Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ delay: 0.1 }}
            className="text-lg leading-[1.7] text-gray-400"
          >
            Things we get asked most often before a project starts.
          </motion.p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-3xl mx-auto rounded-2xl overflow-hidden glass border border-white/5"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                key={index}
                variants={fadeUp}
                className={cn(
                  "border-b border-white/5 last:border-0",
                  isOpen ? "bg-white/5" : ""
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-inset"
                >
                  <span className={cn(
                    "text-lg font-medium transition-colors duration-300",
                    isOpen ? "text-indigo-400" : "text-white hover:text-gray-300"
                  )}>
                    {faq.question}
                  </span>
                  <div className={cn(
                    "ml-4 flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300",
                    isOpen ? "bg-indigo-500/20 border-indigo-500/50 text-indigo-400 rotate-180" : "text-gray-400"
                  )}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: "auto", 
                        opacity: 1,
                        transition: { height: { duration: 0.3 }, opacity: { duration: 0.3, delay: 0.1 } }
                      }}
                      exit={{ 
                        height: 0, 
                        opacity: 0,
                        transition: { height: { duration: 0.3 }, opacity: { duration: 0.2 } }
                      }}
                    >
                      <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
