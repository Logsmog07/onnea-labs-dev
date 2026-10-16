"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

interface StickyCTAProps {
  title?: string;
  buttonText?: string;
  onClick?: () => void;
}

export function StickyCTA({ title = 'Ready to start your project?', buttonText = 'Start Project', onClick }: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledPastHero = window.scrollY > 600;
      const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 800;
      setIsVisible(scrolledPastHero && !nearBottom);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="fixed bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 z-50 w-[90%] sm:w-auto"
        >
          <div className="bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 p-2 pr-2 md:pr-4 rounded-full shadow-[0_0_40px_rgba(99,102,241,0.15)] flex items-center justify-between gap-4">
            <span className="text-gray-200 font-medium pl-4 hidden sm:block text-sm whitespace-nowrap">{title}</span>
            {onClick ? (
              <Button size="sm" className="w-full sm:w-auto rounded-full bg-white text-black hover:bg-gray-200 border-none group" onClick={onClick}>
                {buttonText}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            ) : (
              <Link href="/contact#contact-form">
                <Button size="sm" className="w-full sm:w-auto rounded-full bg-white text-black hover:bg-gray-200 border-none group">
                  {buttonText}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
