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
          data-variant={variant}
          className={cn(
            'onnea-button relative inline-flex items-center justify-center rounded-full font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:pointer-events-none disabled:opacity-50',
            {
              'bg-gradient-to-r from-accent via-accent to-accent bg-[length:200%_100%] text-surface shadow-card hover:shadow-card hover:bg-[position:100%_0] active:shadow-card': variant === 'primary',
              'bg-surface text-accent shadow-card hover:bg-mauve hover:shadow-card active:bg-surface': variant === 'secondary',
              'glass border border-line text-accent hover:border-accent hover:text-accent hover:bg-mauve': variant === 'outline',
              'text-muted hover:bg-surface hover:text-ink': variant === 'ghost',
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
