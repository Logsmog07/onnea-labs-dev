// SEO & OG Metadata Configuration for Onnea Labs

export const siteConfig = {
  name: 'Onnea Labs',
  domain: 'https://onnealabs.com',
  description: 'Premium digital strategy, websites, SEO, analytics, and lifecycle systems for businesses that want a sharper online presence and cleaner growth.',
  keywords: [
    'digital strategy',
    'web development',
    'SEO services',
    'business analytics',
    'growth marketing',
    'website design',
    'digital transformation',
    'conversion optimization',
  ],
  author: 'Onnea Labs',
  ogImage: 'https://onnealabs.com/og-image.png',
  twitterHandle: '@onneallabs',
};

export const pageMetadata = {
  home: {
    title: 'Onnea Labs | Digital Systems for Measurable Growth',
    description: 'Premium digital strategy, websites, SEO, analytics, and lifecycle systems for businesses that want a sharper online presence and cleaner growth.',
    keywords: 'digital agency, web development, SEO, business growth, digital strategy',
    path: '/',
  },
  services: {
    title: 'Digital Services & Growth Strategies | Onnea Labs',
    description: 'Scalable digital services including SEO, Web Development, Design, and Automation designed to accelerate your online business growth.',
    keywords: 'digital services, SEO services, web development, design services, marketing automation',
    path: '/services',
  },
  contact: {
    title: 'Contact Onnea Labs | Let\'s Build Your Growth Engine',
    description: 'Tell us about your business, your goals, and where you are stuck. Let us build your growth engine together.',
    keywords: 'contact us, digital consultation, growth strategy consultation',
    path: '/contact',
  },
  services_detail: {
    'web-development': {
      title: 'Web Development Services | Fast, Modern, High-Converting Sites',
      description: 'High-performance website design and development built to turn traffic into pipeline. Fast load times, mobile optimization, and conversion-focused.',
      keywords: 'web development, website design, responsive websites, conversion optimization, web performance',
      path: '/services/web-development',
    },
    'seo': {
      title: 'SEO & GEO Services | Search Visibility That Drives Growth',
      description: 'Strategic SEO and Generative Engine Optimisation that drives qualified organic traffic and keeps you visible across both traditional and AI-powered search.',
      keywords: 'SEO services, GEO, generative engine optimisation, organic traffic, search visibility, technical SEO',
      path: '/services/seo',
    },
    'design': {
      title: 'UI/UX Design Services | Sharper Interfaces, Stronger Impressions',
      description: 'Digital design that creates clearer hierarchy, stronger first impressions, and more intuitive experiences across your key pages.',
      keywords: 'UI UX design, digital design, interface design, brand identity, web design',
      path: '/services/design',
    },
    'email-marketing': {
      title: 'Email Marketing & Automation | Lifecycle Flows That Convert',
      description: 'Build email sequences that nurture leads, recover intent, and drive repeat revenue — with content written to earn attention at every stage.',
      keywords: 'email marketing, marketing automation, lifecycle flows, email sequences, lead nurture',
      path: '/services/email-marketing',
    },
    'social-media': {
      title: 'Social Media Marketing | Consistent Presence, Real Pipeline',
      description: 'A repeatable social content system that strengthens your brand positioning and reaches the right audience with consistency.',
      keywords: 'social media marketing, LinkedIn marketing, content strategy, social media management, B2B social',
      path: '/services/social-media',
    },
    'analytics': {
      title: 'Analytics & Intelligence | See What\'s Actually Working',
      description: 'Full-funnel analytics and intelligence that diagnoses what is not working across your leads, content, and tech — then tells you what to fix.',
      keywords: 'analytics, marketing analytics, conversion tracking, data analysis, full funnel intelligence',
      path: '/services/analytics',
    },
  },
};

export function getMetadata(page: keyof typeof pageMetadata) {
  const meta = pageMetadata[page as keyof typeof pageMetadata];
  if (!meta || typeof meta === 'object' && 'title' in meta) {
    return meta as any;
  }
  return null;
}

export function getServiceMetadata(slug: string) {
  const servicesMeta = pageMetadata.services_detail as Record<string, any>;
  return servicesMeta[slug] || null;
}
