"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { Button } from '@/components/ui/Button';
import { ServiceHero } from '@/data/services';
import * as Icons from 'lucide-react';
import { renderLucideIcon } from '@/lib/icons';
import Link from 'next/link';

export function HeroSection({ data }: { data: ServiceHero }) {
  return (
    <SectionContainer className="relative overflow-hidden pt-28 pb-16 lg:pt-[8.5rem] lg:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-[#030508]" />
      <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[70px] mix-blend-screen" />
      <div className="pointer-events-none absolute top-1/2 left-0 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[70px] mix-blend-screen" />
      {/* Subtle noise texture via inline SVG */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundSize: '256px 256px' }} />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="flex flex-col items-start lg:col-span-5">
          {data.eyebrow && (
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1.5 text-sm font-semibold uppercase tracking-wide text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
              {renderLucideIcon(data.icon, { className: 'h-4 w-4' })}
              {data.eyebrow}
            </div>
          )}

          <h1 className="mb-6 max-w-[15ch] text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">{data.title}</h1>
          <p className="mb-8 max-w-lg text-lg font-light leading-relaxed text-gray-400">{data.description}</p>

          <div className="mb-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Link href={data.primaryCta.href} className="w-full sm:w-auto">
              <Button size="lg" className="h-12 w-full border-none bg-indigo-600 px-8 text-base font-semibold text-white shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all hover:bg-indigo-700 hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] sm:w-auto">
                {data.primaryCta.label}
              </Button>
            </Link>
            {data.secondaryCta && (
              <Link href={data.secondaryCta.href} className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="h-12 w-full bg-white/5 px-8 text-base font-semibold text-white backdrop-blur sm:w-auto">
                  {data.secondaryCta.label}
                </Button>
              </Link>
            )}
          </div>

          {data.trustMetrics && (
            <div className="flex w-full max-w-lg flex-wrap items-center gap-4 border-y border-white/10 py-4">
              {data.trustMetrics.rating && (
                <div className="flex items-center gap-2">
                  <span className="text-sm tracking-widest text-yellow-500">★★★★★</span>
                  <span className="text-sm font-medium text-gray-300">{data.trustMetrics.rating.replace('★★★★★', '').trim()}</span>
                </div>
              )}
              {data.trustMetrics.metrics?.map((metric, i) => (
                <React.Fragment key={i}>
                  <div className="h-4 w-px bg-white/20" />
                  <span className="text-sm font-medium text-gray-300">{metric}</span>
                </React.Fragment>
              ))}
            </div>
          )}

          {data.trustStrip && (
            <div className="mt-6 flex items-center gap-4 opacity-70">
              <span className="text-xs font-medium uppercase tracking-wider text-gray-500">{data.trustStrip.text}</span>
              <div className="flex items-center gap-4">
                <div className="h-4 w-12 rounded-sm bg-white/20" />
                <div className="h-4 w-12 rounded-sm bg-white/20" />
                <div className="h-4 w-12 rounded-sm bg-white/20" />
              </div>
            </div>
          )}
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }} className="relative h-[350px] w-full lg:col-span-7 lg:h-[480px]">
          <div className="absolute inset-0 flex items-center justify-center">
            {(!data.visualVariant || data.visualVariant === 'website-mockup' || data.visualVariant === 'web-dev') && (
              <>
                <div className="relative z-10 flex h-[85%] w-[85%] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A]/80 shadow-2xl backdrop-blur-xl">
                  <div className="flex h-10 items-center gap-2 border-b border-white/10 bg-white/5 px-4">
                    <div className="h-3 w-3 rounded-full bg-red-400/50" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400/50" />
                    <div className="h-3 w-3 rounded-full bg-green-400/50" />
                    <div className="ml-4 h-4 w-1/3 rounded bg-white/5" />
                  </div>
                  <div className="relative flex flex-1 flex-col p-6">
                    <div className="absolute right-0 top-0 h-64 w-64 bg-indigo-500/20 blur-[80px]" />
                    <div className="relative z-10 w-2/3 space-y-4">
                      <div className="h-6 w-full rounded-md bg-white/10" />
                      <div className="h-3 w-5/6 rounded-md bg-white/5" />
                      <div className="h-3 w-4/6 rounded-md bg-white/5" />
                    </div>
                    <div className="relative z-10 mt-8 grid grid-cols-3 gap-4">
                      <div className="h-20 rounded-lg border border-indigo-500/20 bg-indigo-500/10" />
                      <div className="h-20 rounded-lg border border-purple-500/20 bg-purple-500/10" />
                      <div className="h-20 rounded-lg border border-cyan-500/20 bg-cyan-500/10" />
                    </div>
                  </div>
                </div>
                {/* Removed infinite float animation — use static position */}
                <div className="absolute top-10 -right-4 z-20 w-44 rounded-xl border border-white/10 bg-[#111] p-4 shadow-2xl backdrop-blur-md lg:top-14 lg:right-4">
                  <div className="mb-2 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20">
                      <Icons.TrendingUp className="h-4 w-4 text-green-400" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Conversion</span>
                  </div>
                  <div className="text-xl font-bold text-white">+142.5%</div>
                </div>
              </>
            )}

            {(data.visualVariant === 'seo' || data.visualVariant === 'analytics-dashboard' || data.visualVariant === 'email-flow') && (
              <div className="relative z-10 flex h-[85%] w-[85%] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A]/80 p-6 shadow-2xl backdrop-blur-xl">
                <div className="absolute right-0 bottom-0 h-64 w-64 bg-green-500/20 blur-[80px]" />
                <div className="relative z-10 mb-8 flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="space-y-2">
                    <div className="h-4 w-32 rounded-md bg-white/10" />
                    <div className="h-8 w-48 rounded-md bg-white/20" />
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-[4px] border-green-500">
                    <Icons.ArrowUpRight className="h-5 w-5 text-green-400" />
                  </div>
                </div>
                <div className="relative z-10 flex flex-1 items-end justify-between gap-2">
                  {[0.3, 0.4, 0.5, 0.7, 0.9, 1.0].map((height, i) => (
                    <div key={i} className="w-1/6 rounded-t-sm bg-gradient-to-t from-green-500/10 to-green-500/40" style={{ height: `${height * 100}%` }} />
                  ))}
                </div>
              </div>
            )}

            {(data.visualVariant === 'design' || data.visualVariant === 'design-system' || data.visualVariant === 'social-dashboard') && (
              <div className="relative z-10 flex h-[85%] w-[85%] gap-6 rounded-2xl border border-white/10 bg-[#0A0A0A]/80 p-6 shadow-2xl backdrop-blur-xl">
                <div className="absolute left-0 top-0 h-64 w-64 bg-pink-500/20 blur-[80px]" />
                <div className="flex h-full w-16 flex-col items-center space-y-4 rounded-xl border border-white/5 bg-white/5 py-4">
                  <div className="h-8 w-8 rounded-md bg-white/10" />
                  <div className="h-8 w-8 rounded-md bg-white/10" />
                  <div className="h-8 w-8 rounded-md border border-pink-500/50 bg-pink-500/40" />
                  <div className="h-8 w-8 rounded-md bg-white/10" />
                </div>
                <div className="flex-1 space-y-6">
                  <div className="h-32 w-full rounded-xl border border-dashed border-white/20 bg-white/5 p-4">
                    <div className="mb-4 h-12 w-12 rounded-full bg-pink-500/20" />
                    <div className="h-4 w-2/3 rounded-md bg-white/10" />
                  </div>
                  <div className="flex gap-4">
                    <div className="h-24 flex-1 rounded-xl border border-white/10 bg-white/5" />
                    <div className="h-24 flex-1 rounded-xl border border-white/10 bg-white/5" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
