import { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ServicesHero } from '@/components/sections/services/ServicesHero';
import { ServicesGrid } from '@/components/sections/services/ServicesGrid';
import { ProblemsWeSolve } from '@/components/sections/services/ProblemsWeSolve';
import { ServiceCombos } from '@/components/sections/services/ServiceCombos';
import { ProcessExpanded } from '@/components/sections/services/ProcessExpanded';
import { ResultsHighlights } from '@/components/sections/services/ResultsHighlights';
import { ServicesFAQ } from '@/components/sections/services/ServicesFAQ';
import { ServicesCTA } from '@/components/sections/services/ServicesCTA';
import { buildMetadata, generateBreadcrumbSchema } from '@/lib/metadata-builder';
import styles from './services-theme.module.css';

export const metadata: Metadata = buildMetadata({
  title: 'Digital Services & Growth Strategies | Onnea Labs',
  description: 'Scalable digital services including SEO, Web Development, Design, and Automation designed to accelerate your online business growth.',
  keywords: 'digital services, SEO services, web development, design services, marketing automation, business growth',
  path: '/services',
});

export default function ServicesPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  return (
    <main className={`${styles.theme} min-h-screen bg-[#030508] selection:bg-indigo-500/30`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Navbar />
      
      <ServicesHero />
      <ServicesGrid />
      <ProblemsWeSolve />
      <ServiceCombos />
      <ProcessExpanded />
      <ResultsHighlights />
      <ServicesFAQ />
      <ServicesCTA />

      <Footer />
    </main>
  );
}
