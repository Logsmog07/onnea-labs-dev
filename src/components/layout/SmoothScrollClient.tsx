'use client';

import { useSmoothScroll } from '@/hooks/useSmoothScroll';

/**
 * Client component that enables smooth scrolling to anchors
 * Place this in your root layout or key pages
 */
export default function SmoothScrollClient() {
  useSmoothScroll();
  return null;
}
