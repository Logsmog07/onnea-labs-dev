"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Search, Palette, Mail, Share2, BarChart3, Globe, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { staggerContainer, fadeUp, viewportConfig } from '@/lib/animations';

const services = [
  {
    title: 'SEO, Content & GEO',
    description: 'Build search visibility across Google and AI-powered engines — with technical SEO, strategic content creation, and Generative Engine Optimisation.',
    icon: Search,
    color: 'indigo',
    href: '/services/seo',
  },
  {
    title: 'UI/UX Design',
    description: 'Create sharper interfaces, clearer hierarchy, and stronger first impressions across key pages.',
    icon: Palette,
    color: 'cyan',
    href: '/services/design',
  },
  {
    title: 'Email Marketing & Content',
    description: 'Build lifecycle flows that nurture leads and recover intent — with email content written to earn attention at every stage.',
    icon: Mail,
    color: 'purple',
    href: '/services/email-marketing',
  },
  {
    title: 'Social Media Marketing',
    description: 'Build a repeatable content system that strengthens brand positioning and reaches the right audience with consistency.',
    icon: Share2,
    color: 'pink',
    href: '/services/social-media',
  },
  {
    title: 'Analytics & Full-Funnel Intelligence',
    description: 'Diagnose what is not working across leads, social, content, and tech — then act on what the data reveals.',
    icon: BarChart3,
    color: 'emerald',
    href: '/services/analytics',
  },
  {
    title: 'Web Development',
    description: 'Build faster, more credible websites that support conversion, usability, and long-term growth.',
    icon: Globe,
    color: 'blue',
    href: '/services/web-development',
  },
];

const colorStyles = {
  indigo: { icon: 'text-accent', bg: 'group-hover:bg-tile', border: 'group-hover:border-line' },
  cyan: { icon: 'text-accent', bg: 'group-hover:bg-tile', border: 'group-hover:border-line' },
  purple: { icon: 'text-accent', bg: 'group-hover:bg-tile', border: 'group-hover:border-line' },
  pink: { icon: 'text-accent', bg: 'group-hover:bg-tile', border: 'group-hover:border-line' },
  emerald: { icon: 'text-accent', bg: 'group-hover:bg-mauve', border: 'group-hover:border-line' },
  blue: { icon: 'text-accent', bg: 'group-hover:bg-tile', border: 'group-hover:border-line' },
};

export function Services() {
  return (
    <section className="relative overflow-hidden py-14 md:py-20">
      {/* Subtle background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-transparent" />
      <div className="pointer-events-none absolute top-1/4 right-0 h-[500px] w-[500px] rounded-full blur-[70px] bg-transparent" style={{ willChange: 'transform' }} />
      <div className="pointer-events-none absolute bottom-1/4 left-0 h-[500px] w-[500px] rounded-full blur-[70px] bg-transparent" style={{ willChange: 'transform' }} />

      <Container className="relative z-10">
        {/* Single animated parent for header — avoids 3 separate IntersectionObserver registrations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent shadow-card backdrop-blur-md transition-colors hover:bg-tile">
            Capabilities
          </div>
          <h2 className="mb-7 text-4xl font-bold tracking-tight text-ink md:text-6xl lg:text-[4rem] leading-[1.1]">
            Everything you need.<br />
            <span className="text-accent theme-heading bg-clip-text bg-gradient-to-r from-accent to-accent">
              Nothing you don't.
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg md:text-xl font-light leading-[1.8] text-muted">
            Six interconnected capabilities — each targeting a specific lever in how your business performs online, from first impression to repeat revenue.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            const styles = colorStyles[service.color as keyof typeof colorStyles];
            return (
              <motion.div key={idx} variants={fadeUp} className="h-full">
                <Link href={service.href} className="block h-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-focus focus:ring-offset-2 focus:ring-offset-surface">
                  <Card className="group flex h-full flex-col items-start gap-5 p-6 md:p-7">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-tile transition-all duration-300 ${styles.bg} ${styles.border}`}>
                      <Icon className={`h-5 w-5 ${styles.icon} transition-transform duration-300 group-hover:scale-110`} />
                    </div>
                    <h3 className="text-lg font-semibold tracking-[-0.01em] text-ink">{service.title}</h3>
                    <p className="flex-grow text-[15px] leading-[1.65] text-muted transition-colors duration-300 group-hover:text-ink">{service.description}</p>
                    <div className="mt-auto flex items-center gap-1.5 text-sm font-medium text-accent opacity-0 translate-y-2 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      Explore Service <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
