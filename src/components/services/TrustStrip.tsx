"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { Layers, Globe, Code2, Zap, BarChart3 } from 'lucide-react';

export function TrustStrip() {
  const capabilities = [
    { icon: <Globe className="w-8 h-8" />, name: 'SEO & Demand Capture' },
    { icon: <Layers className="w-8 h-8" />, name: 'Conversion-Focused Design' },
    { icon: <Code2 className="w-8 h-8" />, name: 'High-Performance Web Development' },
    { icon: <Zap className="w-8 h-8" />, name: 'Lifecycle Automation' },
    { icon: <BarChart3 className="w-8 h-8" />, name: 'Analytics & CRO' }
  ];

  return (
    <div className="border-y border-white/5 bg-white/[0.01]">
      <SectionContainer className="py-12 md:py-16">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
            Built around the capabilities that shape stronger digital performance
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 opacity-80 transition-all duration-700">
          {capabilities.map((brand, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 text-white/90 hover:text-white transition-colors"
            >
              {brand.icon}
              <span className="font-bold text-sm md:text-base tracking-tight">{brand.name}</span>
            </motion.div>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
