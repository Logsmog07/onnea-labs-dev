"use client";

import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="relative inline-block"
      >
        <button
          ref={ref}
          className={cn(
            'relative inline-flex items-center justify-center rounded-full font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030508] disabled:pointer-events-none disabled:opacity-50',
            {
              'bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 bg-[length:200%_100%] text-white shadow-[0_0_24px_rgba(99,102,241,0.25),0_4px_12px_rgba(0,0,0,0.2)] hover:shadow-[0_0_32px_rgba(99,102,241,0.35),0_8px_20px_rgba(0,0,0,0.25)] hover:bg-[position:100%_0] active:shadow-[0_0_16px_rgba(99,102,241,0.2),0_2px_8px_rgba(0,0,0,0.15)]': variant === 'primary',
              'bg-white/95 text-gray-900 shadow-[0_2px_8px_rgba(0,0,0,0.15)] hover:bg-white hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)] active:bg-gray-50': variant === 'secondary',
              'glass border border-white/10 text-white/90 hover:border-indigo-500/30 hover:text-white hover:bg-white/[0.06]': variant === 'outline',
              'text-gray-400 hover:bg-white/5 hover:text-white': variant === 'ghost',
              'h-9 px-5 text-sm': size === 'sm',
              'h-11 px-6 text-[15px]': size === 'md',
              'h-14 px-8 text-base': size === 'lg',
            },
            className
          )}
          {...props}
        >
          {children}
        </button>
      </motion.div>
    );
  }
);

Button.displayName = 'Button';
