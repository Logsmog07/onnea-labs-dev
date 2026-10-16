"use client";

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { staggerContainer, fadeUp, viewportConfig } from '@/lib/animations';
import { Layers, Zap, Code2 } from 'lucide-react';

const combos = [
  {
    icon: <Layers className="w-10 h-10 text-indigo-400 mb-6" />,
    title: "Strategy & Growth",
    subtitle: "SEO + Analytics",
    description: "We don't just drive traffic; we analyze behavior. By combining technical SEO with Deep-dive Analytics, we attract high-intent visitors and map out exactly how they convert.",
    features: ["Keyword Dominance", "Conversion Rate Optimization", "Data Visualizations"]
  },
  {
    icon: <Zap className="w-10 h-10 text-cyan-400 mb-6" />,
    title: "Experience & Design",
    subtitle: "Digital Design + UI UX",
    description: "First impressions are revenue. We fuse brand aesthetic with frictionless user experiences to build digital environments that users implicitly trust and enjoy navigating.",
    features: ["Wireframing & Prototyping", "Design Systems", "Interactive Prototypes"]
  },
  {
    icon: <Code2 className="w-10 h-10 text-purple-400 mb-6" />,
    title: "Technology & Automation",
    subtitle: "Web Development + Email Automation",
    description: "A fast website captures the lead; automated systems close them. We build high-performance platforms wired directly into customized drip campaigns to scale your sales hands-free.",
    features: ["Next.js/React Ecosystems", "Lifecycle Email Journeys", "API Integrations"]
  }
];

export function ServiceCombos() {
  return (
    <section className="py-16 md:py-24 dark-section">
      <Container>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            How Our Services Work Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            True scale happens when disciplines overlap. Here is how we combine our expertise to deliver exponential results.
          </motion.p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {combos.map((combo, idx) => (
            <motion.div key={idx} variants={fadeUp} className="h-full">
              <Card className="h-full p-8 flex flex-col group hover:border-indigo-500/30">
                {combo.icon}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{combo.title}</h3>
                  <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium">
                    {combo.subtitle}
                  </div>
                </div>
                
                <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                  {combo.description}
                </p>
                
                <ul className="space-y-3 mt-auto pt-6 border-t border-white/10">
                  {combo.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
