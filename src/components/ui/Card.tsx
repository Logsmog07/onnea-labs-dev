"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

import { cardHover } from '@/lib/animations';

export interface CardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  glass?: boolean;
  children?: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, glass = true, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={cardHover}
        className={cn(
          'relative overflow-hidden rounded-2xl border transition-all duration-500',
          glass
            ? 'glass group hover:border-focus hover:shadow-[0_8px_24px_rgba(55,30,62,0.12)] focus-within:border-focus'
            : 'border-line bg-surface',
          className
        )}
        {...props}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-[0.07]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="relative z-10 h-full">{children}</div>
      </motion.div>
    );
  }
);

Card.displayName = 'Card';
