import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ContactHero } from '@/components/contact/ContactHero';
import { ContactFormSection } from '@/components/contact/ContactFormSection';
import { ContactCTA } from '@/components/contact/ContactCTA';
import { buildMetadata, generateBreadcrumbSchema } from '@/lib/metadata-builder';
import SmoothScrollClient from '@/components/layout/SmoothScrollClient';

export const metadata: Metadata = buildMetadata({
  title: 'Contact Onnea Labs | Let\'s Build Your Growth Engine',
  description: 'Tell us about your business, your goals, and where you are stuck. Let us build your growth engine together.',
  keywords: 'contact us, digital consultation, growth strategy consultation, web development consultation',
  path: '/contact',
});

export default function ContactPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ];
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
        <ContactHero />
        <ContactFormSection />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
