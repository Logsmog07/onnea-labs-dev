import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CaseStudies } from '@/components/sections/CaseStudies';

export const metadata = {
  title: 'Results | Onnea Labs',
  description: 'Work that moved the needle. Real outcomes for real businesses.',
};

export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      <Navbar />

      {/* Hero */}
      <section className="theme-hero relative flex flex-col items-center justify-center px-5 pb-16 pt-36 text-center md:pb-20 md:pt-44">
        {/* Subtle gradient blob */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 h-[40rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] bg-transparent" />
        </div>

        <div className="relative z-10 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Case Studies
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-ink md:text-6xl">
            Results
          </h1>
          <p className="text-lg text-muted md:text-xl">
            Work that moved the needle.
          </p>
        </div>
      </section>

      <CaseStudies />

      <Footer />
    </main>
  );
}
