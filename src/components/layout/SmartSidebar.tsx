"use client";

import React, { useEffect, useRef } from 'react';

interface SmartSidebarProps {
  children: React.ReactNode;
  className?: string;
  topMargin?: number;
  bottomMargin?: number;
}

export function SmartSidebar({
  children,
  className = '',
  topMargin = 128,
  bottomMargin = 32,
}: SmartSidebarProps) {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (!sidebar) return;

    let lastScrollY = window.scrollY;
    let currentTop = topMargin;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollDelta = scrollY - lastScrollY;
      lastScrollY = scrollY;

      const viewportHeight = window.innerHeight;
      const sidebarHeight = sidebar.getBoundingClientRect().height;

      // If sidebar is shorter than the viewport minus margins, just stick it to the top.
      if (sidebarHeight + topMargin + bottomMargin <= viewportHeight) {
        sidebar.style.position = 'sticky';
        sidebar.style.top = `${topMargin}px`;
        return;
      }

      // Calculate the limits for the `top` value.
      const maxTop = topMargin;
      const minTop = viewportHeight - sidebarHeight - bottomMargin;

      // Update the current top by the inverse of the scroll delta
      currentTop -= scrollDelta;

      // Clamp the value
      if (currentTop > maxTop) currentTop = maxTop;
      if (currentTop < minTop) currentTop = minTop;

      // Apply
      sidebar.style.position = 'sticky';
      sidebar.style.top = `${currentTop}px`;
    };

    // Run once on mount to set initial position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [topMargin, bottomMargin]);

  return (
    <div ref={sidebarRef} className={className}>
      {children}
    </div>
  );
}
