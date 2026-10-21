"use client";

import { motion, useInView } from 'framer-motion';
import { memo, useRef } from 'react';
import { Card } from '@/components/ui/Card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';

const studies = [
  {
    client: 'B2B Professional Services',
    title: 'Repositioned, rebuilt, and made easier to buy from',
    description: 'A professional services firm with strong delivery but a site that failed to communicate it. We tightened positioning, rebuilt key service pages around buyer intent, and improved the enquiry path. The result: less confusion at the top of funnel, more relevant conversations reaching the sales team.',
    tags: ['Positioning', 'UX Redesign', 'Conversion'],
    gradient: 'from-alternate via-alternate to-alternate',
    href: '/blog/repositioned-rebuilt-easier-to-buy',
  },
  {
    client: 'Growth-Stage B2B Brand',
    title: 'Website, lifecycle, and analytics brought into alignment',
    description: 'A scaling business where the website, email flows, and analytics were each working in isolation. We connected the system — sharper landing pages, automated nurture sequences, and cleaner conversion tracking — so the team could see what was working and act on it.',
    tags: ['Automation', 'Analytics', 'Lifecycle'],
    gradient: 'from-alternate via-alternate to-alternate',
    href: '/blog/website-lifecycle-analytics-aligned',
  },
];

const CaseStudyCard = memo(({ study, idx }: { study: typeof studies[0]; idx: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{ willChange: 'transform' }}
    >
      <Link href={study.href} className="block h-full outline-none">
        <Card className="group flex h-full flex-col overflow-hidden">
          <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${study.gradient}`}>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(81,36,95,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(81,36,95,0.08)_1px,transparent_1px)] bg-[size:16px_16px]" />
            <motion.div className="h-full w-full" whileHover={{ scale: 1.02 }} transition={{ duration: 0.5 }} />
            <div className="absolute top-4 left-4 rounded-full border border-line px-3 py-1.5 text-[11px] font-medium text-muted backdrop-blur-sm bg-transparent">
              {study.client}
            </div>
          </div>

          <div className="flex flex-grow flex-col p-7">
            <h3 className="mb-3 text-xl font-semibold tracking-[-0.01em] text-ink transition-colors duration-300 group-hover:text-accent inline-flex items-start gap-2">
              <span>{study.title}</span>
              <ArrowRight className="h-5 w-5 mt-1 shrink-0 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-accent" />
            </h3>
            <p className="mb-6 flex-grow text-[15px] leading-[1.65] text-muted">{study.description}</p>

            <div className="flex flex-wrap gap-2 border-t border-line pt-5">
              {study.tags.map((tag, i) => (
                <span key={i} className="rounded-full border border-line bg-surface px-3 py-1 text-[12px] font-medium text-muted">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
});
CaseStudyCard.displayName = 'CaseStudyCard';

export function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-14 md:py-20 scroll-mt-20">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-canvas" />
      <div className="pointer-events-none absolute top-1/2 left-0 h-[400px] w-[400px] -translate-y-1/2 rounded-full blur-[50px] bg-transparent" />
      <div className="pointer-events-none absolute top-1/2 right-0 h-[400px] w-[400px] -translate-y-1/2 rounded-full blur-[50px] bg-transparent" />

      {/* Cache invalidator */}
      <Container className="relative z-10 w-full">
        {/* Static header - no animation */}
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end" style={{ visibility: 'visible' }}>
          <div style={{ visibility: 'visible' }}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
              Selected Work
            </div>
            <h2 className="mb-4 text-4xl font-bold tracking-[-0.02em] text-ink md:text-5xl opacity-100" style={{ color: 'var(--foreground)' }}>
              Recent Work
            </h2>
            <p className="max-w-xl text-lg leading-[1.7] text-muted">
              Positioning, conversion, and systems work across B2B service brands and growth-stage businesses.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {studies.map((study, idx) => (
            <CaseStudyCard key={idx} study={study} idx={idx} />
          ))}
        </div>
      </Container>
    </section>
  );
}
