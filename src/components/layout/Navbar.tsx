"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { assetPath } from '@/lib/asset-path';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { BookCallButton } from '@/components/ui/BookCallButton';
import { cn } from '@/lib/utils';

const services = [
  { title: 'SEO / GEO', path: '/services/seo' },
  { title: 'Digital Design / UI UX', path: '/services/design' },
  { title: 'Email Marketing Automation', path: '/services/email-marketing' },
  { title: 'Social Media Marketing', path: '/services/social-media' },
  { title: 'Analytics & Intelligence', path: '/services/analytics' },
  { title: 'Web Development', path: '/services/web-development' },
];

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Why Us', href: '/#why-choose-us' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    // passive: true prevents scroll blocking — browser can scroll without waiting for JS
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  const isServicesRoute = pathname.startsWith('/services');

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-canvas py-3 backdrop-blur-xl border-b border-line shadow-card'
          : 'bg-canvas py-4 md:py-5 border-b border-transparent'
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-5 md:px-10 lg:px-12">
        <Link href="/" className="inline-flex items-center transition-opacity hover:opacity-80" onClick={closeMenus}>
          <Image src={assetPath("/logo.png")} alt="Onnea Labs" width={573} height={175} priority className="h-9 w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm font-medium text-ink transition-colors hover:text-accent">
            Home
          </Link>

          <div className="relative" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
            <Link
              href="/services"
              className={cn(
                'flex items-center gap-1 py-2 text-sm font-medium transition-colors',
                isServicesRoute ? 'text-accent' : 'text-ink hover:text-accent'
              )}
            >
              Services <ChevronDown className="h-3.5 w-3.5" />
            </Link>
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="glass absolute top-full left-1/2 z-50 mt-2 w-72 -translate-x-1/2 overflow-hidden rounded-xl p-1.5"
                >
                  <div className="mb-1.5 rounded-lg border border-line bg-tile p-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">Growth stack</p>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                      Pick the capability you need and jump straight into the detailed service page.
                    </p>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        href={service.path}
                        onClick={closeMenus}
                        className="rounded-lg px-3 py-2 text-sm text-ink transition-colors hover:bg-mauve hover:text-accent"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.slice(2).map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-ink transition-colors hover:text-accent">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button size="sm" onClick={() => { closeMenus(); router.push('/ai-visibility-report'); }}>Get AI Visibility Report</Button>
        </div>

        <button className="p-2 text-ink transition-colors hover:text-accent md:hidden" onClick={() => setIsMobileMenuOpen((open) => !open)} aria-label="Toggle navigation menu">
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="glass mt-2 border-t border-line md:hidden"
          >
            <div className="flex flex-col gap-1 p-5 sm:p-6">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={closeMenus} className="rounded-lg py-3 px-2 text-lg font-medium text-ink transition-colors hover:text-accent active:bg-mauve">
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 border-t border-line pt-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">Services</span>
                <div className="flex flex-col gap-0.5">
                  {services.map((service) => (
                    <Link key={service.path} href={service.path} onClick={closeMenus} className="rounded-lg py-2.5 px-2 text-ink transition-colors hover:text-accent active:bg-mauve">
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="mt-2" onClick={closeMenus}>
                <Button className="w-full" onClick={() => { closeMenus(); router.push('/ai-visibility-report'); }}>Get AI Visibility Report</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
