"use client";

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';

const viewportConfig = { once: true, margin: '-100px' };

const steps = [
  {
    step: "01",
    title: "Request Report",
    description: "Submit your website and contact details through the secure form."
  },
  {
    step: "02",
    title: "Analysis",
    description: "We manually review the technical and structural signals of your site."
  },
  {
    step: "03",
    title: "Report Delivery",
    description: "Receive a clear, actionable summary of how your site appears to AI."
  },
  {
    step: "04",
    title: "Next Steps",
    description: "Book an optional strategy call to discuss the findings and solutions."
  }
];

export function ReviewProcess() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 dark-section bg-[#030303]">
      <Container className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.5 }}
            className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl"
          >
            The Process
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-2xl text-xl text-neutral-400 font-light"
          >
            A straightforward flow from request to actionable insights.
          </motion.p>
        </div>

        <div className="relative">
          {/* Animated horizontal connecting line */}
          <div className="absolute top-[48px] left-[48px] right-0 hidden h-[2px] w-full bg-white/5 md:block">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={viewportConfig}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              className="h-full w-[calc(100%-96px)] origin-left bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-transparent" 
            />
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex flex-col group"
              >
                {/* Node */}
                <div className="mb-8 flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:border-indigo-500/50 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] z-10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="text-2xl font-black text-white relative z-10">{step.step}</span>
                </div>
                
                {/* Vertical connecting line for mobile */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-[47px] top-[96px] h-[calc(100%-32px)] w-[2px] bg-gradient-to-b from-indigo-500/20 to-transparent md:hidden" />
                )}

                <h3 className="mb-3 text-xl font-bold tracking-wide text-white group-hover:text-indigo-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed text-neutral-400">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
