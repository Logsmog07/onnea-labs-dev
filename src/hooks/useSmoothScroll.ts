import { useEffect } from 'react';

/**
 * Hook to handle smooth scroll to anchor links
 * Usage: useSmoothScroll()
 * 
 * Works with:
 * - Hash anchors in URL (e.g., /#contact)
 * - Click handlers on links with href="#anchor"
 */
export function useSmoothScroll() {
  useEffect(() => {
    // Handle initial page load with hash
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash) {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          const element = document.getElementById(hash.slice(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }

      // Handle click on anchor links
      const handleAnchorClick = (e: MouseEvent) => {
        const target = (e.target as HTMLElement)?.closest('a');
        if (!target) return;

        const href = target.getAttribute('href');
        if (href?.startsWith('#')) {
          e.preventDefault();
          const element = document.getElementById(href.slice(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Update URL without triggering navigation
            window.history.pushState(null, '', href);
          }
        }
      };

      document.addEventListener('click', handleAnchorClick);
      return () => document.removeEventListener('click', handleAnchorClick);
    }
  }, []);
}
