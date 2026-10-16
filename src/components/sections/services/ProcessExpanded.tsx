"use client";

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { staggerContainer, fadeUp, viewportConfig } from '@/lib/animations';

const steps = [
  {
    number: "01",
    title: "Discovery & Auditing",
    description: "We dive deep into your business model, current digital assets, and competitive landscape. We perform technical SEO audits, review UX flows, and identify immediate growth opportunities.",
    icon: "🔍"
  },
  {
    number: "02",
    title: "Strategic Blueprinting",
    description: "Based on data, we architect a tailored plan. This includes wireframes, keyword mapping, automation logic mapping, and selecting the optimal technology stack for your exact goals.",
    icon: "🗺️"
  },
  {
    number: "03",
    title: "Execution & Build",
    description: "Our specialists get to work. Designers craft pixel-perfect interfaces, developers build lightning-fast codebases, and marketers construct high-converting campaigns and email sequences.",
    icon: "⚡"
  },
  {
    number: "04",
    title: "Launch & Iterate",
    description: "We launch, test, and measure. Using advanced analytics, we monitor user behavior and continuously optimize the strategy to maximize your return on investment month over month.",
    icon: "📈"
  }
];

export function ProcessExpanded() {
  return (
    <section id="process" className="py-16 md:py-32 gradient-section relative overflow-hidden">
      {/* Background glow for the section */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[70px] mix-blend-screen pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Our Implementation Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            A structured approach built to reduce guesswork, focus effort where it matters, and keep execution commercially useful.
          </motion.p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="relative"
        >
          {/* Connecting line for desktop timeline */}
          <div className="hidden lg:block absolute top-[15%] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, idx) => (
              <motion.div key={idx} variants={fadeUp} className="relative group">
                <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-4xl">{step.icon}</span>
                    <span className="text-5xl font-black text-white/5 group-hover:text-indigo-500/10 transition-colors">
                      {step.number}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

