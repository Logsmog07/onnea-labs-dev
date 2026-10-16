import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { SocialProof } from '@/components/sections/SocialProof';
import { Services } from '@/components/sections/Services';
import { GrowthEngine } from '@/components/sections/GrowthEngine';
import { Process } from '@/components/sections/Process';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { ToolsTech } from '@/components/sections/ToolsTech';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/layout/Footer';
import { buildMetadata, generateBreadcrumbSchema } from '@/lib/metadata-builder';
import SmoothScrollClient from '@/components/layout/SmoothScrollClient';

export const metadata: Metadata = buildMetadata({
  title: 'Onnea Labs | Digital Systems for Measurable Growth',
  description: 'Premium digital strategy, websites, SEO, analytics, and lifecycle systems for businesses that want a sharper online presence and cleaner growth.',
  keywords: 'digital agency, web development, SEO, business growth, digital strategy, growth marketing, conversion optimization',
  path: '/',
});

export default function Home() {
  const breadcrumbs = [{ name: 'Home', url: '/' }];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  return (
    <>
      <SmoothScrollClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Navbar />
      <main className="flex min-h-screen flex-col bg-[#030508] selection:bg-indigo-500/30">
        <Hero />
        <SocialProof />
        <Services />
        <GrowthEngine />
        <Process />
        <CaseStudies />
        <WhyChooseUs />
        <Testimonials />
        <ToolsTech />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
