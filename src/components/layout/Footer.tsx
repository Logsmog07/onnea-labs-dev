"use client";

import Link from 'next/link';
import Image from 'next/image';
import { assetPath } from '@/lib/asset-path';
import { Mail, Phone } from 'lucide-react';

const services = [
  { label: 'SEO / GEO', href: '/services/seo' },
  { label: 'Digital Design', href: '/services/design' },
  { label: 'Email Automation', href: '/services/email-marketing' },
  { label: 'Social Media', href: '/services/social-media' },
  { label: 'Analytics & Intelligence', href: '/services/analytics' },
  { label: 'Web Development', href: '/services/web-development' },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-footer pb-10 pt-16">
      <div className="pointer-events-none absolute top-0 left-1/2 h-24 w-2/3 -translate-x-1/2 bg-transparent blur-[50px]" />

      <div className="container mx-auto px-5 md:px-10 lg:px-12">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-5">
            <Link href="/" className="inline-flex items-center transition-opacity hover:opacity-80">
              <Image src={assetPath("/logo.png")} alt="Onnea Labs" width={573} height={175} className="h-9 w-auto" />
            </Link>
            <p className="max-w-sm text-sm leading-[1.65] text-muted">
              Premium digital systems for businesses that want sharper positioning, cleaner funnels, and measurable growth.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-card" />
              Available for new projects
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-semibold text-ink">Company</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li><Link href="/" className="transition-colors hover:text-accent">Home</Link></li>
              <li><Link href="/services" className="transition-colors hover:text-accent">Services</Link></li>
              <li><Link href="/#case-studies" className="transition-colors hover:text-accent">Results</Link></li>
              <li><Link href="/#why-choose-us" className="transition-colors hover:text-accent">Why Onnea Labs</Link></li>
              <li><Link href="/blog" className="transition-colors hover:text-accent">Blog</Link></li>
              <li><Link href="/contact#contact-form" className="transition-colors hover:text-accent">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-semibold text-ink">Services</h4>
            <ul className="space-y-3 text-sm text-muted">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="transition-colors hover:text-accent">{service.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-semibold text-ink">Contact Us</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a href="mailto:team@onnealabs.com" className="transition-colors hover:text-accent">team@onnealabs.com</a>
              </li>
            <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a href="mailto:admin@onnealabs.com" className="transition-colors hover:text-accent">admin@onnealabs.com</a>
              </li>

            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between border-t border-line pt-8 text-sm text-muted md:flex-row">
          <p>© 2025 Onnea Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// cache buster 1
