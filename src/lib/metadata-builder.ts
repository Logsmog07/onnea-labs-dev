import type { Metadata } from 'next';
import { siteConfig } from '@/config/metadata';

interface MetadataInput {
  title: string;
  description: string;
  keywords?: string;
  path: string;
  ogImage?: string;
  canonical?: string;
}

export function buildMetadata(input: MetadataInput): Metadata {
  const {
    title,
    description,
    keywords,
    path,
    ogImage = siteConfig.ogImage,
    canonical = `${siteConfig.domain}${path}`,
  } = input;

  return {
    title,
    description,
    keywords: keywords || siteConfig.keywords.join(', '),
    metadataBase: new URL(siteConfig.domain),
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - ${title}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: siteConfig.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

/**
 * Generate JSON-LD structured data for the homepage
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.domain,
    description: siteConfig.description,
    logo: `${siteConfig.domain}/logo.png`,
    sameAs: [
      'https://twitter.com/onneallabs',
      'https://linkedin.com/company/onneallabs',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      url: `${siteConfig.domain}/contact`,
      email: 'hello@onnealabs.com',
    },
  };
}

/**
 * Generate JSON-LD structured data for a service page
 */
export function generateServiceSchema(
  title: string,
  description: string,
  serviceUrl: string,
  image?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    description: description,
    url: serviceUrl,
    image: image || siteConfig.ogImage,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.domain,
    },
    serviceArea: {
      '@type': 'Country',
      name: 'GB',
    },
  };
}

/**
 * Generate JSON-LD for a breadcrumb navigation
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.domain}${item.url}`,
    })),
  };
}

/**
 * Generate JSON-LD for FAQ schema
 */
export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
