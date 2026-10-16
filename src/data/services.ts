export type ServiceHero = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  trustMetrics?: { rating?: string; metrics?: string[] };
  trustStrip?: { text?: string; logos?: string[] };
  visualVariant?: string;
  icon?: string;
};

export type ServiceProblem = {
  heading: string;
  intro: string;
  items: { title: string; description: string; icon?: string }[];
};

export type ServiceApproach = {
  title: string;
  points: { title: string; description: string }[];
  icon?: string;
};

export type ServiceProcess = {
  steps: { step: string; title: string; description: string }[];
};

export type ServiceFeatures = {
  items: { title: string; description: string; icon?: string; highlight?: boolean }[];
};

export type ServicePortfolio = {
  items: {
    title: string;
    industry: string;
    description: string;
    result?: string;
    image?: string;
    link?: string;
  }[];
};

export type ServiceIdealClients = {
  title: string;
  description: string;
  clients: string[];
};

export type ServiceFaq = {
  items: { question: string; answer: string }[];
};

export type ServiceCta = {
  title: string;
  description: string;
  primaryButton: string;
};

export type ServiceContent = {
  slug: string;
  hero: ServiceHero;
  problem?: ServiceProblem;
  approach?: ServiceApproach;
  process?: ServiceProcess;
  features?: ServiceFeatures;
  portfolio?: ServicePortfolio;
  idealClients?: ServiceIdealClients;
  faq?: ServiceFaq;
  cta?: ServiceCta;
};

export const serviceData: Record<string, ServiceContent> = {
  'web-development': {
    slug: 'web-development',
    hero: {
      eyebrow: 'Web Development Service',
      title: 'High-Performance Websites Built to Turn Traffic into Pipeline',
      description:
        'We design and develop fast, modern websites that help ambitious businesses look credible, load quickly, and convert more of the right visitors into enquiries.',
      primaryCta: { label: 'Plan Your Website Build', href: '/contact?service=web-development#contact-form' },
      secondaryCta: { label: 'View Our Work', href: '/#case-studies' },
      trustStrip: {
        text: 'Built for brands that need performance, clarity, and easier growth.'
      },
      icon: 'Code2',
      visualVariant: 'website-mockup'
    },
    problem: {
      heading: 'Why Many Business Websites Underperform',
      intro:
        'A website can look polished and still quietly lose trust, leads, and momentum. Most underperform because the build was never aligned to speed, usability, or conversion from the start.',
      items: [
        {
          title: 'Slow Load Times',
          description: 'Heavy, bloated pages create friction fast and push qualified visitors away before they even engage.',
          icon: 'Gauge'
        },
        {
          title: 'Poor Mobile Experience',
          description: 'If navigation, layout, or forms break down on mobile, conversions drop long before the sales conversation starts.',
          icon: 'Smartphone'
        },
        {
          title: 'Weak Conversion Structure',
          description: 'Many sites explain what a business does, but fail to guide users clearly toward booking, enquiring, or buying.',
          icon: 'TrendingUp'
        },
        {
          title: 'Hard-to-Manage Setups',
          description: 'Outdated stacks and messy backends make updates slow, risky, and expensive for internal teams.',
          icon: 'RefreshCw'
        }
      ]
    },
    approach: {
      title: 'Our Approach',
      points: [
        {
          title: 'Architecture Around Business Goals',
          description: 'We begin with the user journey, offer structure, and page priorities so the build supports lead generation instead of just looking modern.'
        },
        {
          title: 'Performance First Development',
          description: 'From component choices to page structure, we build for speed, responsiveness, and a cleaner user experience across devices.'
        },
        {
          title: 'Launch-Ready Technical Foundations',
          description: 'We ship with scalable structure, strong technical SEO fundamentals, and a setup your team can maintain with confidence.'
        }
      ],
      icon: 'Layers'
    },
    process: {
      steps: [
        { step: '01', title: 'Discovery', description: 'We map your goals, audience, offer, and current website bottlenecks.' },
        { step: '02', title: 'Structure', description: 'We define the sitemap, page hierarchy, and conversion path before design and build begin.' },
        { step: '03', title: 'Design System', description: 'We create a clean visual and component direction that keeps the experience consistent and scalable.' },
        { step: '04', title: 'Development', description: 'We build the site with performance, responsive behaviour, and maintainability as core priorities.' },
        { step: '05', title: 'QA & Launch', description: 'We test thoroughly, refine edge cases, and launch with a stronger technical foundation.' }
      ]
    },
    features: {
      items: [
        { title: 'Custom Front-End Build', description: 'A tailored site experience aligned to your positioning, content flow, and conversion goals.', icon: 'Palette', highlight: true },
        { title: 'Responsive Implementation', description: 'Layouts, navigation, and interactions designed to work cleanly across mobile, tablet, and desktop.', icon: 'MonitorSmartphone' },
        { title: 'Performance Optimization', description: 'Lean page structure and front-end optimisation to improve load times and reduce drop-off.', icon: 'Zap' },
        { title: 'Technical SEO Foundations', description: 'Search-friendly structure, semantic markup, and scalable page architecture from day one.', icon: 'Globe' },
        { title: 'Content Editing Workflow', description: 'A setup that makes future updates more manageable for your internal team.', icon: 'RefreshCw' },
        { title: 'Launch Support', description: 'QA, deployment readiness, and post-launch refinement so the site goes live with fewer surprises.', icon: 'BarChart3' }
      ]
    },
    portfolio: {
      items: [
        {
          title: 'B2B SaaS Marketing Site Refresh',
          industry: 'B2B Software',
          description: 'Restructured messaging and rebuilt the marketing site to create a clearer product narrative and stronger demo path.',
          result: 'Sharper positioning and a cleaner conversion journey'
        },
        {
          title: 'Professional Services Lead-Gen Site',
          industry: 'Professional Services',
          description: 'Redesigned and rebuilt a service-led website around trust, clarity, and simpler enquiry flows.',
          result: 'Improved first impression and easier enquiry capture'
        },
        {
          title: 'Growth-Focused Brand Website Build',
          industry: 'Consumer Brand',
          description: 'Developed a faster, more scalable front-end experience with clearer mobile journeys and stronger CTA placement.',
          result: 'Better usability across key acquisition pages'
        }
      ]
    },
    idealClients: {
      title: 'Ideal Clients',
      description: 'Best suited to businesses that need a website to do more than exist on a brochure level.',
      clients: [
        'Service businesses that rely on qualified enquiries',
        'Startups that need a sharper marketing site',
        'Brands migrating from outdated or limiting platforms',
        'Teams that care about speed, UX, and long-term maintainability'
      ]
    },
    faq: {
      items: [
        {
          question: 'Do you rebuild websites from scratch or improve existing ones?',
          answer: 'Both. If the current setup is salvageable, we can improve structure and performance. If it is holding the business back, a rebuild is often the cleaner route.'
        },
        {
          question: 'Can our team update content after launch?',
          answer: 'Yes. We aim for setups that are maintainable internally, so your team is not blocked every time content needs to change.'
        },
        {
          question: 'Do you optimise for mobile performance?',
          answer: 'Absolutely. Mobile experience is part of the build strategy, not an afterthought added at the end.'
        },
        {
          question: 'Do you support launch and post-launch fixes?',
          answer: 'Yes. We handle QA, launch readiness, and follow-up refinement so the transition into a live site is smoother.'
        }
      ]
    },
    cta: {
      title: 'Need a Site That Looks Sharp and Converts Properly?',
      description: "Let's map the build around your offer, audience, and growth goals before another generic website slows you down.",
      primaryButton: 'Plan Your Website Build'
    }
  },
  development: {
    slug: 'development',
    hero: {
      eyebrow: 'Web Development Service',
      title: 'High-Performance Websites Built to Turn Traffic into Pipeline',
      description:
        'We design and develop fast, modern websites that help ambitious businesses look credible, load quickly, and convert more of the right visitors into enquiries.',
      primaryCta: { label: 'Plan Your Website Build', href: '/contact?service=development#contact-form' },
      secondaryCta: { label: 'View Our Work', href: '/#case-studies' },
      trustStrip: {
        text: 'Built for brands that need performance, clarity, and easier growth.'
      },
      icon: 'Code2',
      visualVariant: 'website-mockup'
    },
    problem: {
      heading: 'Why Many Business Websites Underperform',
      intro:
        'A website can look polished and still quietly lose trust, leads, and momentum. Most underperform because the build was never aligned to speed, usability, or conversion from the start.',
      items: [
        {
          title: 'Slow Load Times',
          description: 'Heavy, bloated pages create friction fast and push qualified visitors away before they even engage.',
          icon: 'Gauge'
        },
        {
          title: 'Poor Mobile Experience',
          description: 'If navigation, layout, or forms break down on mobile, conversions drop long before the sales conversation starts.',
          icon: 'Smartphone'
        },
        {
          title: 'Weak Conversion Structure',
          description: 'Many sites explain what a business does, but fail to guide users clearly toward booking, enquiring, or buying.',
          icon: 'TrendingUp'
        },
        {
          title: 'Hard-to-Manage Setups',
          description: 'Outdated stacks and messy backends make updates slow, risky, and expensive for internal teams.',
          icon: 'RefreshCw'
        }
      ]
    },
    approach: {
      title: 'Our Approach',
      points: [
        {
          title: 'Architecture Around Business Goals',
          description: 'We begin with the user journey, offer structure, and page priorities so the build supports lead generation instead of just looking modern.'
        },
        {
          title: 'Performance First Development',
          description: 'From component choices to page structure, we build for speed, responsiveness, and a cleaner user experience across devices.'
        },
        {
          title: 'Launch-Ready Technical Foundations',
          description: 'We ship with scalable structure, strong technical SEO fundamentals, and a setup your team can maintain with confidence.'
        }
      ],
      icon: 'Layers'
    },
    process: {
      steps: [
        { step: '01', title: 'Discovery', description: 'We map your goals, audience, offer, and current website bottlenecks.' },
        { step: '02', title: 'Structure', description: 'We define the sitemap, page hierarchy, and conversion path before design and build begin.' },
        { step: '03', title: 'Design System', description: 'We create a clean visual and component direction that keeps the experience consistent and scalable.' },
        { step: '04', title: 'Development', description: 'We build the site with performance, responsive behaviour, and maintainability as core priorities.' },
        { step: '05', title: 'QA & Launch', description: 'We test thoroughly, refine edge cases, and launch with a stronger technical foundation.' }
      ]
    },
    features: {
      items: [
        { title: 'Custom Front-End Build', description: 'A tailored site experience aligned to your positioning, content flow, and conversion goals.', icon: 'Palette', highlight: true },
        { title: 'Responsive Implementation', description: 'Layouts, navigation, and interactions designed to work cleanly across mobile, tablet, and desktop.', icon: 'MonitorSmartphone' },
        { title: 'Performance Optimization', description: 'Lean page structure and front-end optimisation to improve load times and reduce drop-off.', icon: 'Zap' },
        { title: 'Technical SEO Foundations', description: 'Search-friendly structure, semantic markup, and scalable page architecture from day one.', icon: 'Globe' },
        { title: 'Content Editing Workflow', description: 'A setup that makes future updates more manageable for your internal team.', icon: 'RefreshCw' },
        { title: 'Launch Support', description: 'QA, deployment readiness, and post-launch refinement so the site goes live with fewer surprises.', icon: 'BarChart3' }
      ]
    },
    portfolio: {
      items: [
        {
          title: 'B2B SaaS Marketing Site Refresh',
          industry: 'B2B Software',
          description: 'Restructured messaging and rebuilt the marketing site to create a clearer product narrative and stronger demo path.',
          result: 'Sharper positioning and a cleaner conversion journey'
        },
        {
          title: 'Professional Services Lead-Gen Site',
          industry: 'Professional Services',
          description: 'Redesigned and rebuilt a service-led website around trust, clarity, and simpler enquiry flows.',
          result: 'Improved first impression and easier enquiry capture'
        },
        {
          title: 'Growth-Focused Brand Website Build',
          industry: 'Consumer Brand',
          description: 'Developed a faster, more scalable front-end experience with clearer mobile journeys and stronger CTA placement.',
          result: 'Better usability across key acquisition pages'
        }
      ]
    },
    idealClients: {
      title: 'Ideal Clients',
      description: 'Best suited to businesses that need a website to do more than exist on a brochure level.',
      clients: [
        'Service businesses that rely on qualified enquiries',
        'Startups that need a sharper marketing site',
        'Brands migrating from outdated or limiting platforms',
        'Teams that care about speed, UX, and long-term maintainability'
      ]
    },
    faq: {
      items: [
        {
          question: 'Do you rebuild websites from scratch or improve existing ones?',
          answer: 'Both. If the current setup is salvageable, we can improve structure and performance. If it is holding the business back, a rebuild is often the cleaner route.'
        },
        {
          question: 'Can our team update content after launch?',
          answer: 'Yes. We aim for setups that are maintainable internally, so your team is not blocked every time content needs to change.'
        },
        {
          question: 'Do you optimise for mobile performance?',
          answer: 'Absolutely. Mobile experience is part of the build strategy, not an afterthought added at the end.'
        },
        {
          question: 'Do you support launch and post-launch fixes?',
          answer: 'Yes. We handle QA, launch readiness, and follow-up refinement so the transition into a live site is smoother.'
        }
      ]
    },
    cta: {
      title: 'Need a Site That Looks Sharp and Converts Properly?',
      description: "Let's map the build around your offer, audience, and growth goals before another generic website slows you down.",
      primaryButton: 'Plan Your Website Build'
    }
  },
  seo: {
    slug: 'seo',
    hero: {
      eyebrow: 'SEO, Content & GEO',
      title: 'Search Visibility Built for How People Actually Find You Now',
      description:
        'We help businesses capture demand across traditional search and AI-powered engines — combining technical SEO, strategic content creation, and Generative Engine Optimisation so you show up wherever buyers are looking.',
      primaryCta: { label: 'Request an SEO Audit', href: '/contact?service=seo#contact-form' },
      secondaryCta: { label: 'Explore Process', href: '/#process' },
      trustStrip: {
        text: 'Designed for businesses that want compounding visibility across search and AI-powered discovery.'
      },
      icon: 'SearchCode',
      visualVariant: 'analytics-dashboard'
    },
    problem: {
      heading: 'Why SEO Often Fails to Produce Meaningful Growth',
      intro:
        'A lot of SEO work creates activity without momentum. Rankings become the goal, while intent, technical blockers, content quality, and AI search visibility are left under-optimised.',
      items: [
        {
          title: 'Low Visibility for Buyer-Intent Searches',
          description: 'You may have a site online for months or years without showing up where high-intent prospects are actually looking.',
          icon: 'Search'
        },
        {
          title: 'Technical Issues Holding Pages Back',
          description: 'Poor crawlability, weak page structure, and slow performance quietly limit what search engines can properly reward.',
          icon: 'Gauge'
        },
        {
          title: 'Content Misaligned to Search Intent',
          description: 'Publishing more content rarely helps if pages are not mapped to the actual questions and decision stages your audience uses.',
          icon: 'FileSearch'
        },
        {
          title: 'Invisible in AI-Powered Search',
          description: 'As ChatGPT, Perplexity, and Google AI Overviews reshape how people find answers, businesses without a GEO strategy are losing visibility where buyers increasingly start.',
          icon: 'Bot'
        },
        {
          title: 'Traffic That Does Not Convert',
          description: 'SEO becomes expensive when traffic quality improves on paper but the website still fails to turn visits into leads.',
          icon: 'TrendingUp'
        }
      ]
    },
    approach: {
      title: 'Our Approach',
      points: [
        {
          title: 'Audit Before Action',
          description: 'We start by identifying technical blockers, page gaps, and structural weaknesses before recommending work that burns time without leverage.'
        },
        {
          title: 'Intent Mapping and Content Creation',
          description: 'We align content opportunities to real search intent and create the pages, articles, and assets that strengthen topical authority and support enquiries.'
        },
        {
          title: 'Generative Engine Optimisation',
          description: 'We structure content and brand signals so your business gets cited and surfaced in AI-generated answers — not just traditional search results.'
        },
        {
          title: 'Measurement That Ties Back to Growth',
          description: 'We track SEO through the lens of qualified traffic, landing page quality, and conversion contribution instead of vanity numbers alone.'
        }
      ],
      icon: 'Layers'
    },
    process: {
      steps: [
        { step: '01', title: 'SEO Audit', description: 'We assess technical health, indexation, content structure, and current search visibility.' },
        { step: '02', title: 'Intent Mapping', description: 'We identify the terms, themes, and page opportunities that matter most to your audience.' },
        { step: '03', title: 'Technical Fixes', description: 'We prioritise structural improvements that remove friction for both users and search engines.' },
        { step: '04', title: 'Content Creation & On-Page', description: 'We write and optimise content mapped to search intent, buying stages, and topical authority.' },
        { step: '05', title: 'GEO & AI Visibility', description: 'We apply Generative Engine Optimisation techniques so your brand surfaces in AI-powered answer engines.' },
        { step: '06', title: 'Reporting & Iteration', description: 'We monitor movement, interpret what matters, and keep improving based on evidence.' }
      ]
    },
    features: {
      items: [
        { title: 'Technical SEO Audit', description: 'A focused review of structural issues affecting crawlability, page quality, and search performance.', icon: 'SearchCode', highlight: true },
        { title: 'Keyword & Intent Mapping', description: 'Priority topics and search themes organised around buyer intent rather than raw volume alone.', icon: 'Globe' },
        { title: 'Content Creation', description: 'Strategically written content mapped to search intent — from service pages and landing pages to long-form articles that build topical authority.', icon: 'FileText' },
        { title: 'Generative Engine Optimisation (GEO)', description: 'Positioning your brand to appear in AI-generated answers across ChatGPT, Perplexity, Google AI Overviews, and similar platforms.', icon: 'Bot' },
        { title: 'On-Page Optimization', description: 'Sharper page titles, headings, content structure, and internal alignment across key landing pages.', icon: 'Palette' },
        { title: 'Internal Linking Improvements', description: 'A clearer page relationship structure that helps search engines and users navigate more effectively.', icon: 'RefreshCw' },
        { title: 'Content Gap Roadmap', description: 'Strategic recommendations for what to create, improve, merge, or remove to strengthen topical coverage.', icon: 'MonitorSmartphone' },
        { title: 'Performance Reporting', description: 'Ongoing visibility into what is improving, where opportunities remain, and how SEO supports growth.', icon: 'BarChart3' }
      ]
    },
    portfolio: {
      items: [
        {
          title: 'Search Visibility Recovery for a Service Brand',
          industry: 'Professional Services',
          description: 'Diagnosed weak page targeting and technical friction, then rebuilt the page structure around clearer demand capture.',
          result: 'Stronger search alignment across key service pages'
        },
        {
          title: 'Intent-Led SEO and Content Programme',
          industry: 'B2B SaaS',
          description: 'Mapped product and comparison queries to better-fit pages and created long-form content to build topical depth across key themes.',
          result: 'Cleaner content-to-conversion journey with stronger topical authority'
        },
        {
          title: 'GEO and Content Opportunity Audit',
          industry: 'Growth-Stage Brand',
          description: 'Reviewed content gaps, AI search visibility, and technical weak points to create a more focused SEO and GEO roadmap.',
          result: 'Higher confidence in where to invest next, including AI-powered channels'
        }
      ]
    },
    idealClients: {
      title: 'Ideal Clients',
      description: 'SEO works best for businesses that want a durable demand-capture channel — across traditional search and AI-powered discovery.',
      clients: [
        'B2B service companies with strong commercial intent terms',
        'Local or regional businesses trying to improve qualified visibility',
        'Content-led brands that need sharper strategy and better execution',
        'Companies that want visibility in AI-generated answers, not just Google rankings'
      ]
    },
    faq: {
      items: [
        {
          question: 'How long does SEO usually take to show results?',
          answer: 'SEO is cumulative. Early improvements can appear within weeks, but meaningful compounding usually comes from consistent work over a longer horizon.'
        },
        {
          question: 'Do you create the content or just advise on it?',
          answer: 'Both. We can define the content strategy and roadmap, or create the actual pages, articles, and assets your SEO programme needs — whichever level of support fits best.'
        },
        {
          question: 'What is Generative Engine Optimisation (GEO)?',
          answer: 'GEO is the practice of optimising your content so it surfaces in AI-generated answers — from ChatGPT and Perplexity to Google AI Overviews. It builds on traditional SEO but focuses on being cited, quoted, and recommended by AI models when people ask relevant questions.'
        },
        {
          question: 'Can you optimise an existing website?',
          answer: 'Absolutely. In many cases, improving existing structure and content is the fastest path to better performance.'
        },
        {
          question: 'How do you report progress?',
          answer: 'We focus on movement that matters: visibility shifts, page performance, intent coverage, AI search presence, and how traffic quality supports enquiries.'
        }
      ]
    },
    cta: {
      title: 'Want Search Visibility That Works Across Google and AI Engines?',
      description: "Let's identify what is blocking growth, where intent is being missed, and how to build visibility that compounds.",
      primaryButton: 'Request an SEO Audit'
    }
  },
  design: {
    slug: 'design',
    hero: {
      eyebrow: 'Digital Design & UI/UX',
      title: 'Design That Makes Your Brand Easier to Trust and Easier to Choose',
      description:
        'We create high-conviction interfaces and page experiences that improve clarity, strengthen first impressions, and guide users toward action without friction.',
      primaryCta: { label: 'Review Your UX', href: '/contact?service=design#contact-form' },
      secondaryCta: { label: 'View Our Work', href: '/#case-studies' },
      trustStrip: {
        text: 'Best for brands that need stronger UX, sharper messaging flow, and a more credible digital presence.'
      },
      icon: 'Palette',
      visualVariant: 'design-system'
    },
    problem: {
      heading: 'Why Good-Looking Design Still Fails to Convert',
      intro:
        'A polished interface is not enough on its own. Design underperforms when the user journey is unclear, trust signals are weak, and visual choices are disconnected from what people need to do next.',
      items: [
        {
          title: 'Confusing User Journeys',
          description: 'Users lose momentum when pages look attractive but do not clearly guide them through the decision path.',
          icon: 'Compass'
        },
        {
          title: 'Weak Trust Signals',
          description: 'If layout, hierarchy, and content framing do not feel credible, hesitation grows even when the offer is strong.',
          icon: 'ShieldCheck'
        },
        {
          title: 'Poor Visual Hierarchy',
          description: 'When everything competes for attention, the most important message and actions become harder to notice.',
          icon: 'Layers'
        },
        {
          title: 'Inconsistent Mobile UX',
          description: 'A design system that breaks down across screens quickly damages usability and conversion confidence.',
          icon: 'Smartphone'
        }
      ]
    },
    approach: {
      title: 'Our Approach',
      points: [
        {
          title: 'UX Before Decoration',
          description: 'We start with user flow, page logic, and messaging clarity so the final design supports action instead of distracting from it.'
        },
        {
          title: 'Conversion-Aware Design Decisions',
          description: 'Hierarchy, spacing, CTA placement, and visual emphasis are all shaped around how users process information and choose.'
        },
        {
          title: 'Systems That Stay Consistent',
          description: 'We design with reusable patterns and scalable components so the experience feels sharp, cohesive, and easier to extend.'
        }
      ],
      icon: 'Layers'
    },
    process: {
      steps: [
        { step: '01', title: 'UX Audit', description: 'We assess the current interface, user friction points, and gaps in clarity or trust.' },
        { step: '02', title: 'Wireframes', description: 'We map structure and flow before visual polish so key pages work logically first.' },
        { step: '03', title: 'Visual Direction', description: 'We define the creative language, layout style, and visual cues that fit your positioning.' },
        { step: '04', title: 'UI System', description: 'We build high-fidelity components and page designs that stay consistent across the experience.' },
        { step: '05', title: 'Responsive Refinement', description: 'We adapt and tighten the experience across devices so the design holds up where users actually browse.' }
      ]
    },
    features: {
      items: [
        { title: 'UX Review', description: 'A practical assessment of flow, clarity, hierarchy, and friction across key pages.', icon: 'BarChart3', highlight: true },
        { title: 'Wireframing', description: 'Low-friction page planning that improves logic before time is spent polishing the wrong direction.', icon: 'RefreshCw' },
        { title: 'High-Fidelity UI', description: 'A sharper, more credible interface tailored to your brand and conversion context.', icon: 'Palette' },
        { title: 'Design System Thinking', description: 'Reusable visual patterns that help the experience stay consistent and scalable.', icon: 'Layers' },
        { title: 'Responsive Page Design', description: 'Layouts and interactions designed to stay clear and usable across breakpoints.', icon: 'MonitorSmartphone' },
        { title: 'Conversion-Focused Landing Pages', description: 'Page experiences shaped around messaging sequence, trust, and action.', icon: 'Zap' }
      ]
    },
    portfolio: {
      items: [
        {
          title: 'Premium Brand Repositioning Interface',
          industry: 'Professional Services',
          description: 'Redesigned a dated site experience to feel more credible, modern, and aligned with a higher-value offer.',
          result: 'Stronger first impression and clearer page hierarchy'
        },
        {
          title: 'SaaS Website UX Refresh',
          industry: 'B2B Software',
          description: 'Improved page structure and visual flow so visitors could understand the product story faster.',
          result: 'Cleaner journey from message to CTA'
        },
        {
          title: 'Landing Page System Upgrade',
          industry: 'Growth Marketing',
          description: 'Built a more consistent design language for campaign pages to reduce friction and improve readability.',
          result: 'Better consistency across conversion pages'
        }
      ]
    },
    idealClients: {
      title: 'Ideal Clients',
      description: 'Best for teams that know their digital presence needs to feel more trustworthy, usable, and commercially sharp.',
      clients: [
        'Brands repositioning toward a more premium market',
        'Businesses with confusing or underperforming UX',
        'Teams launching new landing pages or offers',
        'Companies that want design tied to outcomes, not just aesthetics'
      ]
    },
    faq: {
      items: [
        {
          question: 'Do you handle both UX and UI design?',
          answer: 'Yes. We focus on both the structure of the experience and the visual layer that makes it feel credible and coherent.'
        },
        {
          question: 'Can you redesign only key pages instead of the whole site?',
          answer: 'Absolutely. In many cases, improving the highest-leverage pages is the smartest first move.'
        },
        {
          question: 'Can you work with an existing brand identity?',
          answer: 'Yes. We can refine and extend what already exists rather than forcing a full rebrand where it is not needed.'
        },
        {
          question: 'Do you hand designs off for development?',
          answer: 'Yes. We can prepare designs in a way that supports a cleaner development process and a more consistent final build.'
        }
      ]
    },
    cta: {
      title: 'Want a Website That Feels More Credible the Moment It Opens?',
      description: "Let's improve the user journey, sharpen the hierarchy, and create a design system that supports conversion.",
      primaryButton: 'Review Your UX'
    }
  },
  'email-marketing': {
    slug: 'email-marketing',
    hero: {
      eyebrow: 'Lifecycle Marketing & Content',
      title: 'Email Systems That Nurture Leads, Drive Revenue, and Actually Get Read',
      description:
        'We build smarter lifecycle email systems — and write the content inside them. From welcome sequences to newsletters, we combine automation logic with content that earns attention and drives action.',
      primaryCta: { label: 'Plan Your Lifecycle Flows', href: '/contact?service=email-marketing#contact-form' },
      secondaryCta: { label: 'View Our Work', href: '/#case-studies' },
      trustStrip: {
        text: 'For businesses that want email to behave like a system — with content worth reading at every stage.'
      },
      icon: 'Mail',
      visualVariant: 'email-flow'
    },
    problem: {
      heading: 'Why Email Often Underperforms Despite a Good List',
      intro:
        'Most businesses have more opportunity inside email than they realise. The problem is usually not list size alone, but weak lifecycle logic, forgettable content, and automation gaps.',
      items: [
        {
          title: 'No Lifecycle Automation',
          description: 'Leads and customers often receive the same treatment regardless of where they are in the journey.',
          icon: 'Workflow'
        },
        {
          title: 'Leads Go Cold Too Quickly',
          description: 'Without structured nurture and content that keeps delivering value, interest fades before people are ready to take action.',
          icon: 'TimerReset'
        },
        {
          title: 'Low Repeat Purchase or Retention',
          description: 'Many brands focus heavily on acquisition while underusing email to drive re-engagement and customer value.',
          icon: 'TrendingUp'
        },
        {
          title: 'Batch-and-Blast with Weak Content',
          description: 'Generic campaigns with forgettable copy sent to everyone reduce relevance, engagement, and long-term list health.',
          icon: 'Send'
        }
      ]
    },
    approach: {
      title: 'Our Approach',
      points: [
        {
          title: 'Lifecycle Mapping First',
          description: 'We identify the key stages where leads and customers need different messages, not just more emails.'
        },
        {
          title: 'Content That Earns the Open',
          description: 'We write email content — sequences, newsletters, and campaigns — that is relevant, useful, and actually worth reading at each stage of the journey.'
        },
        {
          title: 'Automation With Intent',
          description: 'We design flows around timing, behaviour, and next-best action so email supports the wider funnel more effectively.'
        },
        {
          title: 'Segmentation and Iteration',
          description: 'We use audience logic and campaign feedback to improve relevance instead of repeating generic sends.'
        }
      ],
      icon: 'Layers'
    },
    process: {
      steps: [
        { step: '01', title: 'Lifecycle Audit', description: 'We review your current list, flows, content quality, and key drop-off points.' },
        { step: '02', title: 'Flow Planning', description: 'We map where welcome, nurture, recovery, and re-engagement sequences should sit.' },
        { step: '03', title: 'Content Creation', description: 'We write the email copy — sequences, newsletters, campaign messages — matched to each stage and audience.' },
        { step: '04', title: 'Automation Build', description: 'We configure the logic, triggers, and timing so the right message reaches the right person.' },
        { step: '05', title: 'Segmentation', description: 'We separate audiences more intelligently so campaigns feel more relevant.' },
        { step: '06', title: 'Optimization', description: 'We review engagement patterns and improve the system over time.' }
      ]
    },
    features: {
      items: [
        { title: 'Email Content Creation', description: 'We write the sequences, newsletters, and campaign messages your lifecycle needs — clear, useful copy that earns clicks without feeling like noise.', icon: 'FileText', highlight: true },
        { title: 'Welcome Flows', description: 'A stronger first-touch sequence for new subscribers, leads, or customers.', icon: 'Mail' },
        { title: 'Lead Nurture Automation', description: 'Email journeys that educate and warm up users before they are ready to buy.', icon: 'RefreshCw' },
        { title: 'Recovery Sequences', description: 'Cart, enquiry, or abandonment flows that recover intent before it disappears.', icon: 'Zap' },
        { title: 'Re-Engagement Campaigns', description: 'Messaging designed to bring quieter contacts back into motion.', icon: 'TrendingUp' },
        { title: 'Segmentation Logic', description: 'Audience rules that make campaigns more relevant and less noisy.', icon: 'Globe' },
        { title: 'Performance Review', description: 'A clearer view of what is being opened, clicked, ignored, and improved.', icon: 'BarChart3' }
      ]
    },
    portfolio: {
      items: [
        {
          title: 'Lead Nurture Flow Overhaul',
          industry: 'Professional Services',
          description: 'Reworked email sequencing and rewrote the content so enquiries received more relevant follow-up and clearer value framing.',
          result: 'A smoother path from initial interest to sales conversation'
        },
        {
          title: 'Retention-Oriented Email Refresh',
          industry: 'E-Commerce',
          description: 'Introduced lifecycle structure and content across welcome, post-purchase, and re-engagement messaging.',
          result: 'Stronger system for repeat customer communication'
        },
        {
          title: 'Automation Cleanup for a Growth Brand',
          industry: 'Consumer Brand',
          description: 'Simplified a cluttered email setup into a more focused automation framework, with fresh content for each key flow.',
          result: 'Better visibility into what each flow was meant to do — and content worth sending'
        }
      ]
    },
    idealClients: {
      title: 'Ideal Clients',
      description: 'Email marketing works best when there is a meaningful customer journey to support — and content worth reading at every step.',
      clients: [
        'E-commerce brands with retention and repeat purchase goals',
        'Service businesses with slow or considered buying cycles',
        'Companies with an existing list but weak automation or forgettable content',
        'Teams that want lifecycle logic and email content built together'
      ]
    },
    faq: {
      items: [
        {
          question: 'Do you write the email content or just set up the automation?',
          answer: 'Both. We handle the content creation — sequences, newsletters, campaign messages — as well as the automation logic. Getting both right is usually what separates email that performs from email that gets ignored.'
        },
        {
          question: 'Do you focus on automations or campaign sends?',
          answer: 'Both can matter, but we usually prioritise automation first because it builds a stronger system over time.'
        },
        {
          question: 'Can you work with our existing platform?',
          answer: 'Yes. In most cases we can improve the strategy, content, and structure without forcing a tooling reset.'
        },
        {
          question: 'How do you decide what flows to build first?',
          answer: 'We look at the highest-leverage gaps in the lifecycle and prioritise the flows most likely to improve movement and revenue.'
        }
      ]
    },
    cta: {
      title: 'Want Email to Work More Like an Engine?',
      description: "Let's identify the lifecycle gaps, automation opportunities, and content your email programme needs to actually perform.",
      primaryButton: 'Plan Your Lifecycle Flows'
    }
  },
  'social-media': {
    slug: 'social-media',
    hero: {
      eyebrow: 'Social Media Strategy',
      title: 'Social Strategy That Builds Positioning, Attention, and Consistency',
      description:
        'We help brands create sharper social systems with stronger content direction, clearer messaging, and more useful performance feedback.',
      primaryCta: { label: 'Build Your Content System', href: '/contact?service=social-media#contact-form' },
      secondaryCta: { label: 'View Our Work', href: '/#case-studies' },
      trustStrip: {
        text: 'Ideal for brands that want social to support positioning, not just stay busy.'
      },
      icon: 'Share2',
      visualVariant: 'social-dashboard'
    },
    problem: {
      heading: 'Why Social Activity Often Fails to Create Real Momentum',
      intro:
        'Posting more does not automatically create traction. Social usually underperforms when content lacks a clear point of view, consistency, and connection to the wider business.',
      items: [
        {
          title: 'Inconsistent Positioning',
          description: 'Brands struggle when every post feels disconnected from the message they actually want to own in the market.',
          icon: 'Compass'
        },
        {
          title: 'Weak Content Systems',
          description: 'Without repeatable content pillars and production logic, output becomes reactive and hard to sustain.',
          icon: 'Layers'
        },
        {
          title: 'Low-Quality Engagement',
          description: 'Surface-level interaction means little if the right audience is not gaining trust or moving closer to action.',
          icon: 'MessageSquare'
        },
        {
          title: 'No Link to Pipeline or Brand Growth',
          description: 'Social feels noisy when there is no clear connection between content effort and business outcomes.',
          icon: 'TrendingUp'
        }
      ]
    },
    approach: {
      title: 'Our Approach',
      points: [
        {
          title: 'Content Pillars With a Point of View',
          description: 'We define the themes, angles, and repeated ideas that make the brand easier to recognise and remember.'
        },
        {
          title: 'Creative Consistency Over Random Output',
          description: 'We build a workable social rhythm so quality and message coherence do not collapse under execution pressure.'
        },
        {
          title: 'Performance Read Through Context',
          description: 'We interpret social activity based on audience quality, message resonance, and commercial relevance, not vanity metrics alone.'
        }
      ],
      icon: 'Layers'
    },
    process: {
      steps: [
        { step: '01', title: 'Channel Review', description: 'We assess what you are posting, where the message is drifting, and what is being missed.' },
        { step: '02', title: 'Content Strategy', description: 'We define themes, post categories, and messaging angles that support your brand position.' },
        { step: '03', title: 'Creative Direction', description: 'We shape how content should feel visually and editorially to improve consistency.' },
        { step: '04', title: 'Execution System', description: 'We create a more repeatable structure for publishing, campaigns, and content planning.' },
        { step: '05', title: 'Review & Refine', description: 'We study what resonates and evolve the system based on better signal, not guesswork.' }
      ]
    },
    features: {
      items: [
        { title: 'Content Strategy', description: 'A clearer plan for what to say, why it matters, and how it supports brand growth.', icon: 'Share2', highlight: true },
        { title: 'Channel Planning', description: 'Recommendations shaped around where the audience actually pays attention.', icon: 'Globe' },
        { title: 'Creative Direction', description: 'Guidance on tone, format, and visual consistency so the brand feels more recognisable.', icon: 'Palette' },
        { title: 'Content Pillar System', description: 'Repeatable themes that make social output easier to sustain without losing focus.', icon: 'Layers' },
        { title: 'Campaign Support', description: 'Structured social messaging around launches, offers, or growth pushes.', icon: 'Zap' },
        { title: 'Performance Feedback', description: 'Useful interpretation of what is working, what is weak, and what to improve next.', icon: 'BarChart3' }
      ]
    },
    portfolio: {
      items: [
        {
          title: 'Brand Messaging Cleanup Across Social',
          industry: 'Service Brand',
          description: 'Refined the content direction so posts reinforced a clearer market position instead of scattering attention.',
          result: 'A more coherent presence across the content mix'
        },
        {
          title: 'Content System for a Growing Team',
          industry: 'Startup',
          description: 'Created repeatable post categories and content direction to make social execution less reactive.',
          result: 'More consistent publishing with less strategic drift'
        },
        {
          title: 'Campaign-Led Social Framework',
          industry: 'Consumer Brand',
          description: 'Organised social output around launches and message themes instead of isolated one-off posts.',
          result: 'Stronger alignment between content and commercial moments'
        }
      ]
    },
    idealClients: {
      title: 'Ideal Clients',
      description: 'Social strategy is most useful when the goal is sharper positioning and stronger consistency, not just posting for the sake of it.',
      clients: [
        'Brands that need clearer positioning on social channels',
        'Teams struggling to create content consistently',
        'Businesses launching offers that need stronger social support',
        'Companies that want social connected to brand and growth strategy'
      ]
    },
    faq: {
      items: [
        {
          question: 'Do you focus on organic, paid, or both?',
          answer: 'The strategy can support both, but we begin by fixing message clarity and content direction so activity has a stronger foundation.'
        },
        {
          question: 'Can you help us find the right content pillars?',
          answer: 'Yes. That is one of the highest-value parts of the work because it makes execution more focused and sustainable.'
        },
        {
          question: 'Do you create the content itself?',
          answer: 'That depends on scope, but we can absolutely define the strategic and creative system the content should follow.'
        },
        {
          question: 'How do you measure success on social?',
          answer: 'We look at whether the right audience is responding, whether message consistency is improving, and whether social supports wider brand and funnel goals.'
        }
      ]
    },
    cta: {
      title: 'Need Social That Feels More Intentional and Effective?',
      description: "Let's tighten the content system, clarify the message, and make social support your wider growth strategy.",
      primaryButton: 'Build Your Content System'
    }
  },
  analytics: {
    slug: 'analytics',
    hero: {
      eyebrow: 'Analytics Across the Full Funnel',
      title: 'Find What Is Not Working. Then Fix It.',
      description:
        "We analyse leads, social, content, SEO, and your web tracking together — not in isolation. The goal is not a report. It is a clear diagnosis of what is holding growth back and what to do about it.",
      primaryCta: { label: 'Get a Diagnostic', href: '/contact?service=analytics#contact-form' },
      secondaryCta: { label: 'Explore Process', href: '/#process' },
      trustStrip: {
        text: 'For teams that want answers, not more dashboards.'
      },
      icon: 'BarChart3',
      visualVariant: 'analytics-dashboard'
    },
    problem: {
      heading: 'Why Data Rarely Leads to Better Decisions',
      intro:
        'Most businesses have data. Few have a clear picture of what it means across the funnel. The problems tend to cluster in the same places.',
      items: [
        {
          title: 'Lead Quality Is a Black Box',
          description: "You know how many leads came in. You do not know which sources produce leads that actually close, where quality drops off, or why conversion rates vary.",
          icon: 'Gauge'
        },
        {
          title: 'Social Metrics Look Busy but Mean Little',
          description: 'Impressions, likes, and follower counts fill the reports. Channel ROI, content performance by type, and audience engagement trends are harder to pin down.',
          icon: 'Users'
        },
        {
          title: 'SEO and Content Work Gets Measured Incorrectly',
          description: 'Rankings and traffic are tracked. Whether content is actually driving pipeline, which pages deserve more investment, and how GEO signals affect visibility — less so.',
          icon: 'Globe'
        },
        {
          title: 'Web Tracking Is Broken or Misleading',
          description: 'Events fire inconsistently, attribution is patchy, and the funnel has gaps. Decisions get made on data that does not reflect what users are actually doing.',
          icon: 'TrendingUp'
        },
        {
          title: 'Insight Stops at the Report',
          description: 'Data gets collected and summarised. What to do with it — which problems to fix, in what order — is rarely part of the output.',
          icon: 'BarChart3'
        }
      ]
    },
    approach: {
      title: 'Our Approach',
      points: [
        {
          title: 'Audit Across All Four Pillars',
          description: 'We look at leads, social, content and SEO, and tech and web analytics together. Problems in one area often explain performance in another.'
        },
        {
          title: 'Identify What the Data Actually Reveals',
          description: 'We go beyond surface metrics. The aim is to find the specific friction points, gaps, and missed opportunities that are costing you traction.'
        },
        {
          title: 'Deliver Solutions, Not Just Reports',
          description: 'Every engagement ends with clear recommendations — and where needed, hands-on support to act on them. Data without direction is not useful.'
        }
      ],
      icon: 'Layers'
    },
    process: {
      steps: [
        { step: '01', title: 'Full-Funnel Audit', description: 'We review your current data across leads, social, content and SEO, and web tracking — identifying gaps, inconsistencies, and blind spots.' },
        { step: '02', title: 'Pillar-by-Pillar Analysis', description: 'Each area gets examined in depth: lead quality and sources, social channel performance, organic visibility and content effectiveness, site behaviour and tracking health.' },
        { step: '03', title: 'Insight Synthesis', description: 'We connect the findings across pillars to build a coherent picture of where growth is being held back and why.' },
        { step: '04', title: 'Solution Recommendations', description: 'We translate the diagnosis into specific, prioritised actions — fixes, tests, and strategic shifts you can actually implement.' },
        { step: '05', title: 'Implementation Support', description: 'Where needed, we help execute the fixes: tracking corrections, content adjustments, campaign restructuring, or funnel instrumentation.' },
        { step: '06', title: 'Ongoing Reporting', description: 'We set up reporting that tracks progress against the right metrics — not just activity, but movement toward outcomes.' }
      ]
    },
    features: {
      items: [
        { title: 'Lead Analytics', description: 'Track lead quality, source performance, funnel drop-off, and conversion rates. Understand which channels produce leads that close — and which do not.', icon: 'Gauge', highlight: true },
        { title: 'Social Media Analytics', description: 'Measure content performance by type and format, audience engagement trends, and channel ROI across your social presence.', icon: 'Users' },
        { title: 'Content and SEO Analytics', description: 'Assess organic visibility, content effectiveness, keyword performance, and GEO signals. Find out which pages earn traffic and which earn pipeline.', icon: 'Globe' },
        { title: 'Tech and Web Analytics', description: 'Audit site behaviour, user journeys, tracking health, and funnel instrumentation. Fix what is broken and instrument what is missing.', icon: 'RefreshCw' },
        { title: 'Cross-Pillar Insight Synthesis', description: 'Connect findings across all four areas to identify the root causes of underperformance — not just the symptoms.', icon: 'Layers' },
        { title: 'Prioritised Solution Recommendations', description: 'Ranked, actionable fixes based on impact and effort. No vague suggestions — specific changes with a clear rationale.', icon: 'TrendingUp' },
        { title: 'Tracking and Attribution Cleanup', description: 'Fix event logic, close attribution gaps, and build a measurement foundation the team can trust.', icon: 'Zap' },
        { title: 'Decision-Focused Reporting', description: 'Dashboards and reports built around what matters for decisions — not around what is easy to collect.', icon: 'BarChart3' }
      ]
    },
    portfolio: {
      items: [
        {
          title: 'Lead and Funnel Diagnostic',
          industry: 'B2B Professional Services',
          description: "Audited lead source quality alongside web tracking and landing page behaviour. Identified that a high-volume channel was producing leads that consistently failed to convert — a pattern invisible in the existing reports.",
          result: 'Budget reallocated toward sources with better close rates; funnel instrumentation added to track drop-off by channel'
        },
        {
          title: 'Social and Content Performance Review',
          industry: 'B2B SaaS',
          description: 'Analysed content performance across social channels alongside SEO and organic content. Found that short-form posts were driving engagement but no pipeline, while long-form content was underperforming in reach despite strong conversion intent.',
          result: 'Content mix adjusted and distribution strategy updated based on actual performance data'
        },
        {
          title: 'Full-Funnel Tracking Rebuild',
          industry: 'E-commerce',
          description: 'Web tracking was fragmented across multiple tags with gaps in the checkout funnel. Rebuilt event architecture, fixed attribution, and connected it to lead and acquisition data to give the team a single coherent picture.',
          result: 'Reliable funnel data for the first time; identified a checkout step causing 30% of abandonment'
        }
      ]
    },
    idealClients: {
      title: 'Ideal Clients',
      description: 'Analytics work is most valuable when you suspect the data is telling you something — but you cannot quite see what.',
      clients: [
        'B2B teams with lead volume but unclear conversion quality by source',
        'Businesses running social and content without a clear read on what is working',
        'Founders and growth teams making decisions from incomplete or unreliable tracking',
        'Companies that have data but lack the capacity to diagnose what it means',
        'Brands ready to move from activity metrics to performance insight'
      ]
    },
    faq: {
      items: [
        {
          question: 'What pillars do you cover?',
          answer: 'Four: lead analytics, social media analytics, content and SEO analytics, and tech and web analytics. We look at all of them — separately and together. Problems in one area often explain what you are seeing in another.'
        },
        {
          question: 'Do you just report, or do you also fix things?',
          answer: 'We fix things. The report is not the end product — the diagnosis and the solution are. We deliver specific recommendations and, where needed, help implement them.'
        },
        {
          question: 'Our tracking is a mess. Can you still help?',
          answer: 'Yes — that is a common starting point. We audit what exists, identify what is broken or missing, and rebuild the measurement foundation before drawing conclusions from it.'
        },
        {
          question: 'We already have a reporting tool. Do you replace it?',
          answer: "Not necessarily. The tool is rarely the problem. We work with what you have, improve the underlying data quality, and restructure reporting around decisions rather than activity."
        },
        {
          question: 'How is this different from a standard analytics audit?',
          answer: 'Most audits stop at the data. We go further: connecting findings across pillars, identifying the commercial impact of what we find, and delivering recommendations the team can act on straight away.'
        }
      ]
    },
    cta: {
      title: 'Not Sure What Your Data Is Actually Telling You?',
      description: "Let's audit across all four pillars, find where growth is being held back, and give you a clear plan to fix it.",
      primaryButton: 'Get a Diagnostic'
    }
  }
};