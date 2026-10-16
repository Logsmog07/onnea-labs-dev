"use client";

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { AIVisibilityReportForm } from './AIVisibilityReportForm';
import { Sparkles } from 'lucide-react';

const viewportConfig = { once: true, margin: '-100px' };

export function AIVisibilityHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-48 md:pb-32 dark-section bg-[#030303]">
      {/* Premium Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        {/* Animated Mesh Gradient */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] right-[10%] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.25),_transparent_70%)] blur-[80px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[30%] -left-[10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.15),_transparent_60%)] blur-[100px]" 
        />
        
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_20%,#000_60%,transparent_100%)]" />
      </div>

      <Container className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center lg:col-span-6 xl:col-span-7"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 backdrop-blur-sm shadow-[0_0_20px_rgba(99,102,241,0.15)] w-fit"
            >
              <Sparkles className="h-4 w-4 text-indigo-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-indigo-300">
                Free AI Visibility Report
              </span>
            </motion.div>
            
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-neutral-500 sm:text-6xl lg:text-7xl lg:leading-[1.1] pb-2">
              See How Your Business Appears to AI
            </h1>
            
            <div className="mb-10 space-y-6 max-w-2xl text-lg text-neutral-400 sm:text-xl font-light leading-relaxed">
              <p>
                AI search is fundamentally changing how customers discover services. Our comprehensive <span className="text-white font-medium">AI Visibility Report</span> analyzes exactly how clearly your website is understood by modern search and AI models.
              </p>
              <p>
                We evaluate the technical, content, structure, and trust signals that dictate how machines interpret and recommend your business.
              </p>
            </div>

            <div className="flex items-center gap-4 text-sm font-medium text-neutral-500">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className={`h-10 w-10 rounded-full border-2 border-[#030303] bg-neutral-800 flex items-center justify-center`}>
                    <div className="h-full w-full rounded-full bg-gradient-to-tr from-indigo-500/20 to-purple-500/20" />
                  </div>
                ))}
              </div>
              <p>Join businesses optimizing for the next era of search.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-6 xl:col-span-5 relative"
          >
            {/* Form Glow Effect */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-indigo-500/20 to-purple-500/20 blur-xl opacity-50 pointer-events-none" />
            <AIVisibilityReportForm />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
