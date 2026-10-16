"use client";

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      // lerp controls the interpolation speed (0-1). Higher = snappier/less smooth.
      // 0.12 gives a light, responsive feel without the heavy inertia that causes jank.
      lerp: 0.12,
      // duration is only used when easing is set; with lerp it's ignored — removing to avoid conflict
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      // wheelMultiplier: slightly higher than 0.8 so single-tick scrolls feel responsive
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
      // Prevent Lenis from interfering with anchor hash scrolling
      syncTouch: false,
    });

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
