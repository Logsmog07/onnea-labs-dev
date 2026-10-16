"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { ServiceContent } from '@/data/services';
import { Target } from 'lucide-react';

export function IdealClients({ data }: { data?: ServiceContent['idealClients'] }) {
  if (!data) return null;

  return (
    <SectionContainer className="bg-[#080808] py-14 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          {data.title}
        </h2>
        <p className="text-xl text-gray-400 font-light leading-relaxed">
          {data.description}
        </p>
      </motion.div>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 lg:gap-x-20 max-w-5xl">
        {data.clients.map((client, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="flex items-center gap-4 group"
          >
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-colors shrink-0">
               <Target className="w-5 h-5" />
            </div>
            <span className="text-xl text-gray-300 font-light group-hover:text-white transition-colors">
              {client}
            </span>
          </motion.li>
        ))}
      </ul>
    </SectionContainer>
  );
}
