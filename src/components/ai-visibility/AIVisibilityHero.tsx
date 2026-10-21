"use client";

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { AIVisibilityReportForm } from './AIVisibilityReportForm';
import { Sparkles } from 'lucide-react';

const viewportConfig = { once: true, margin: '-100px' };

export function AIVisibilityHero() {
  return (
    <section className="theme-hero relative overflow-hidden pt-32 pb-24 md:pt-48 md:pb-32 dark-section bg-canvas">
      {/* Premium Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        {/* Animated Mesh Gradient */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] right-[10%] h-[700px] w-[700px] rounded-full blur-[80px] bg-transparent"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[30%] -left-[10%] h-[600px] w-[600px] rounded-full blur-[100px] bg-transparent"
        />
        
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#51245f0a_1px,transparent_1px),linear-gradient(to_bottom,#51245f0a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_20%,#000_60%,transparent_100%)]" />
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
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 backdrop-blur-sm shadow-card w-fit bg-transparent"
            >
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                Free AI Visibility Report
              </span>
            </motion.div>
            
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-accent theme-heading bg-clip-text bg-gradient-to-br from-surface via-surface to-accent sm:text-6xl lg:text-7xl lg:leading-[1.1] pb-2">
              See How Your Business Appears to AI
            </h1>
            
            <div className="mb-10 space-y-6 max-w-2xl text-lg text-muted sm:text-xl font-light leading-relaxed">
              <p>
                AI search is fundamentally changing how customers discover services. Our comprehensive <span className="text-ink font-medium">AI Visibility Report</span> analyzes exactly how clearly your website is understood by modern search and AI models.
              </p>
              <p>
                We evaluate the technical, content, structure, and trust signals that dictate how machines interpret and recommend your business.
              </p>
            </div>

            <div className="flex items-center gap-4 text-sm font-medium text-muted">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className={`h-10 w-10 rounded-full border-2 border-canvas bg-surface flex items-center justify-center`}>
                    <div className="h-full w-full rounded-full bg-gradient-to-tr from-mauve to-mauve" />
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
            <div className="absolute -inset-1 rounded-3xl blur-xl opacity-50 pointer-events-none bg-transparent" />
            <AIVisibilityReportForm />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
