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
    <SectionContainer className="bg-canvas py-14 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6 tracking-tight">
          Example Engagements
        </h2>
        <p className="text-xl text-muted font-light">
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
            <Card className="group h-full flex flex-col p-0 overflow-hidden bg-surface border border-line hover:border-line transition-all duration-500 rounded-3xl">
              <div className="relative aspect-[4/3] bg-surface overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-mauve to-transparent mix-blend-overlay opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute inset-8 rounded-t-xl bg-canvas border-x border-t border-line flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ease-out shadow-card">
                  <Globe className="w-12 h-12 text-accent" />
                </div>
              </div>

              <div className="p-8 pb-10 flex flex-col flex-1 relative z-20 backdrop-blur-md bg-transparent">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-accent uppercase tracking-widest">{item.industry}</span>
                  <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-ink transition-colors opacity-0 group-hover:opacity-100 -translate-y-2 translate-x-2 group-hover:translate-y-0 group-hover:translate-x-0" />
                </div>

                <h3 className="text-2xl font-bold text-ink mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-muted font-light leading-relaxed mb-8 flex-1">{item.description}</p>

                {item.result && (
                  <div className="bg-surface border border-line rounded-xl p-5 mt-auto group-hover:bg-tile group-hover:border-line transition-colors">
                    <p className="text-xs uppercase tracking-widest text-muted font-semibold mb-1">Likely Outcome</p>
                    <p className="text-ink font-bold">{item.result}</p>
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
