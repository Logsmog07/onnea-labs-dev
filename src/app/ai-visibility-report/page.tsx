import { Metadata } from 'next';
import { AIVisibilityHero } from '@/components/ai-visibility/AIVisibilityHero';
import { ReportDeliverables } from '@/components/ai-visibility/ReportDeliverables';
import { VisibilityChecks } from '@/components/ai-visibility/VisibilityChecks';
import { ReviewProcess } from '@/components/ai-visibility/ReviewProcess';
import { AIVisibilityFAQ } from '@/components/ai-visibility/AIVisibilityFAQ';
import { AIVisibilityCTA } from '@/components/ai-visibility/AIVisibilityCTA';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'AI Visibility Report | Onnea Labs',
  description: 'Understand how your website can be discovered, interpreted, and surfaced across modern search and AI systems with an AI Visibility Report from Onnea Labs.',
  openGraph: {
    title: 'AI Visibility Report | Onnea Labs',
    description: 'Understand how your website can be discovered, interpreted, and surfaced across modern search and AI systems with an AI Visibility Report from Onnea Labs.',
    url: 'https://onnealabs.com/ai-visibility-report',
    siteName: 'Onnea Labs',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Onnea Labs AI Visibility Report',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function AIVisibilityReportPage() {
  return (
    <>
      <Navbar />
      <main id="top" className="flex min-h-screen flex-col bg-[#050505]">
        <AIVisibilityHero />
        <ReportDeliverables />
        <VisibilityChecks />
        <ReviewProcess />
        <AIVisibilityFAQ />
        <AIVisibilityCTA />
      </main>
      <Footer />
    </>
  );
}
