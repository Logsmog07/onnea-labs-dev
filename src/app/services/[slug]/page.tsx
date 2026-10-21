import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { serviceData } from '@/data/services';
import { HeroSection } from '@/components/services/HeroSection';
import { TrustStrip } from '@/components/services/TrustStrip';
import { ProblemSection } from '@/components/services/ProblemSection';
import { ApproachSection } from '@/components/services/ApproachSection';
import { ProcessTimeline } from '@/components/services/ProcessTimeline';
import { FeatureList } from '@/components/services/FeatureList';
import { IdealClients } from '@/components/services/IdealClients';
import { FAQSection } from '@/components/services/FAQSection';
import { ConversionCTA } from '@/components/services/ConversionCTA';
import { buildMetadata, generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/metadata-builder';
import { getServiceMetadata } from '@/config/metadata';
import { siteConfig } from '@/config/metadata';

export async function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({
    slug: slug,
  }));
}

export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const serviceMeta = getServiceMetadata(resolvedParams.slug);

  if (!serviceMeta) {
    return buildMetadata({
      title: 'Service Not Found | Onnea Labs',
      description: 'The service you are looking for does not exist.',
      path: '/services',
    });
  }

  return buildMetadata({
    title: serviceMeta.title,
    description: serviceMeta.description,
    keywords: serviceMeta.keywords,
    path: serviceMeta.path,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const content = serviceData[resolvedParams.slug];
  const serviceMeta = getServiceMetadata(resolvedParams.slug);

  if (!content) {
    notFound();
  }

  // Runtime Validation Layer
  if (!content.hero?.title) {
    console.warn(`[Validation Warning] Service "${resolvedParams.slug}" is missing a valid hero configuration payload.`);
  }
  if (!content.features?.items?.length) {
    console.warn(`[Validation Warning] Service "${resolvedParams.slug}" specifies features but returned an empty sequence stack.`);
  }

  // Generate structured data
  const serviceSchema = generateServiceSchema(
    serviceMeta?.title || content.hero.title,
    serviceMeta?.description || content.hero.description,
    `${siteConfig.domain}${serviceMeta?.path || `/services/${resolvedParams.slug}`}`
  );

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: content.hero.title, url: `/services/${resolvedParams.slug}` },
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  // Generate FAQ schema if FAQs exist
  let faqSchema = null;
  if (content.faq?.items?.length) {
    faqSchema = generateFAQSchema(content.faq.items);
  }

  return (
    <main className="min-h-screen bg-canvas selection:bg-tile overflow-x-hidden">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

      <Navbar />
      
      {content.hero && <HeroSection data={content.hero} />}
      <TrustStrip />
      {content.problem && <ProblemSection data={content.problem} />}
      {content.approach && <ApproachSection data={content.approach} />}
      {content.process && <ProcessTimeline data={content.process} />}
      {content.features && <FeatureList data={content.features} />}
      {content.idealClients && <IdealClients data={content.idealClients} />}
      {content.faq && <FAQSection data={content.faq} />}
      {content.cta && <ConversionCTA data={content.cta} />}

      <Footer />
    </main>
  );
}
