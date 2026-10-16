"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { ServiceContent } from '@/data/services';
import { ArrowUpRight, Globe } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export function PortfolioGrid({ data }: { data?: ServiceContent['portfolio'] }) {
  if (!data) return null;

  return (
    <SectionContainer className="bg-[#050505] py-14 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Example Engagements
        </h2>
        <p className="text-xl text-gray-400 font-light">
          Illustrative examples of the kinds of commercial and experience improvements this work is built to create.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.items.slice(0, 3).map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
            className="h-full"
          >
            <Link href={item.link || '#'} className="block h-full outline-none">
            <Card className="group h-full flex flex-col p-0 overflow-hidden bg-white/[0.02] border border-white/10 hover:border-indigo-500/30 transition-all duration-500 rounded-3xl">
              <div className="relative aspect-[4/3] bg-[#0A0A0A] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent mix-blend-overlay opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute inset-8 rounded-t-xl bg-[#050505] border-x border-t border-white/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ease-out shadow-2xl">
                  <Globe className="w-12 h-12 text-indigo-500/20" />
                </div>
              </div>

              <div className="p-8 pb-10 flex flex-col flex-1 relative z-20 bg-gradient-to-t from-[#111] to-[#111]/80 backdrop-blur-md">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">{item.industry}</span>
                  <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 -translate-y-2 translate-x-2 group-hover:translate-y-0 group-hover:translate-x-0" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">{item.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed mb-8 flex-1">{item.description}</p>

                {item.result && (
                  <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5 mt-auto group-hover:bg-indigo-500/[0.02] group-hover:border-indigo-500/20 transition-colors">
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1">Likely Outcome</p>
                    <p className="text-white font-bold">{item.result}</p>
                  </div>
                )}
              </div>
            </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}
