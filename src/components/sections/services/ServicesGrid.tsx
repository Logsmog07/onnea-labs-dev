"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { SearchCode, Palette, Mail, Share2, BarChart3, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { staggerContainer, fadeUp, viewportConfig } from '@/lib/animations';

const services = [
  {
    icon: <SearchCode className="h-5 w-5 text-indigo-400 transition-transform group-hover:scale-110" />,
    title: 'SEO / GEO',
    description: 'Improve discoverability for high-intent searches and build stronger demand capture across search surfaces.',
    href: '/services/seo',
  },
  {
    icon: <Palette className="h-5 w-5 text-cyan-400 transition-transform group-hover:scale-110" />,
    title: 'Digital Design / UI UX',
    description: 'Create premium, conversion-aware interfaces that sharpen trust, clarity, and usability.',
    href: '/services/design',
  },
  {
    icon: <Mail className="h-5 w-5 text-purple-400 transition-transform group-hover:scale-110" />,
    title: 'Email Marketing Automation',
    description: 'Build smarter lifecycle systems that nurture leads, recover demand, and support retention.',
    href: '/services/email-marketing',
  },
  {
    icon: <Share2 className="h-5 w-5 text-pink-400 transition-transform group-hover:scale-110" />,
    title: 'Social Media Marketing',
    description: 'Develop a stronger brand signal with better content direction, channel consistency, and execution.',
    href: '/services/social-media',
  },
  {
    icon: <BarChart3 className="h-5 w-5 text-emerald-400 transition-transform group-hover:scale-110" />,
    title: 'Analytics & Full-Funnel Intelligence',
    description: 'Diagnose what is not working across leads, social, content, and tech — then act on what the data reveals.',
    href: '/services/analytics',
  },
  {
    icon: <Globe className="h-5 w-5 text-blue-400 transition-transform group-hover:scale-110" />,
    title: 'Web Development',
    description: 'Ship modern, credible websites and front-end experiences that balance speed, polish, and conversion.',
    href: '/services/web-development',
  },
];

export function ServicesGrid() {
  return (
    <section id="services-grid" className="py-16 md:py-24 dark-section">
      <Container>
        <div className="mb-14 text-center md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            className="mb-5 text-3xl font-bold text-white md:text-5xl"
          >
            Capabilities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ delay: 0.08 }}
            className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-400"
          >
            Specialist support across the core areas that shape discoverability, trust, conversion, and operational clarity.
          </motion.p>
        </div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div key={idx} variants={fadeUp} className="h-full">
              <Link href={service.href} className="block h-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <Card className="group flex h-full cursor-pointer flex-col p-6 md:p-7 hover:border-indigo-500/30">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#050505] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-white/5 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                    {service.icon}
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-white transition-colors group-hover:text-indigo-400">{service.title}</h3>
                  <p className="mb-6 flex-grow text-sm leading-relaxed text-gray-400 transition-colors group-hover:text-gray-300">{service.description}</p>
                  <div className="mt-auto flex translate-y-2 items-center text-xs font-semibold uppercase tracking-wider text-indigo-400 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
