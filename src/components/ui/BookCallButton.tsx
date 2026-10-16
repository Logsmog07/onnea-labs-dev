"use client";

import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

interface BookCallButtonProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
  showArrow?: boolean;
  children?: ReactNode;
  serviceSlug?: string;
}

export function BookCallButton({
  size = 'lg' as const,
  variant = 'primary',
  className = '',
  showArrow = false,
  children = 'Book an Intro Call',
  serviceSlug,
}: BookCallButtonProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname === '/contact' && !serviceSlug) {
      // Already on contact page — just scroll directly
      const el = document.getElementById('contact-form');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        const firstInput = el.querySelector('input') as HTMLInputElement;
        if (firstInput) firstInput.focus();
      }
    } else {
      // Navigate to contact page with hash and optional service param
      const targetUrl = serviceSlug 
        ? `/contact?service=${serviceSlug}#contact-form` 
        : '/contact#contact-form';
      router.push(targetUrl);
    }
  };

  return (
    <Button size={size} variant={variant} className={className} onClick={handleClick}>
      {children}
      {showArrow && <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />}
    </Button>
  );
}
