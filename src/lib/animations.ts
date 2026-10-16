import { Variants } from "framer-motion";

// Configure viewport margin so animations trigger slightly before entering the screen
// Note: once: true prevents re-animations on scroll (performance critical!)
export const viewportConfig = { once: true, margin: "0px", amount: 0.05 };

// For section headings that may be navigated to via anchor links
// Allows re-animation when user scrolls back to the section
export const viewportConfigRepeating = { margin: "0px", amount: 0.03 };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5, // Reduced from 0.55
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.5, // Reduced from 0.6
      ease: "easeOut" 
    }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Reduced from 0.1
      delayChildren: 0.02, // Reduced from 0.05
    }
  }
};

import { TargetAndTransition } from "framer-motion";

export const cardHover: TargetAndTransition = {
  y: -6,
  transition: { 
    duration: 0.3, 
    ease: "easeOut" 
  }
};
