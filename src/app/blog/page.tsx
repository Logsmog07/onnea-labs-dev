import Link from 'next/link';
import Image from 'next/image';
import { assetPath } from '@/lib/asset-path';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { getAllPostsMeta } from '@/lib/blog';

import { PageTransitionWrapper } from '@/components/layout/PageTransitionWrapper';

export const metadata = {
  title: 'Blog | Onnea Labs',
  description: 'Practical Insights on SEO, Websites, Analytics & Digital Growth',
};

const gradients = [
  'from-indigo-500/15 via-cyan-500/10 to-transparent',
  'from-purple-500/15 via-indigo-500/10 to-transparent',
  'from-cyan-500/15 via-teal-500/10 to-transparent',
];

export default function BlogPage() {
  const posts = getAllPostsMeta();
  const featuredPost = posts.length > 0 ? posts[0] : null;
  const remainingPosts = posts.length > 0 ? posts.slice(1) : [];

  return (
    <main className="min-h-screen bg-[#030508] text-white selection:bg-indigo-500/30">
      <Navbar />

      <PageTransitionWrapper>
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center px-5 pb-8 pt-36 text-center md:pb-12 md:pt-44">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/2 top-[30%] h-[30rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/5 blur-[120px]" />
          </div>
          <div className="relative mx-auto flex max-w-4xl flex-col items-center z-10">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-indigo-400">
              Onnea Labs Insights
            </p>
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Practical Insights on SEO, Websites, Analytics & Digital Growth
            </h1>
            <p className="max-w-2xl text-balance leading-relaxed text-base text-gray-400 md:text-lg">
              Actionable articles, strategies, and perspectives covering modern SEO, AEO, web development, analytics, automation, and digital growth.
            </p>
          </div>
        </section>

        {/* Featured Insight */}
        <section className="relative pt-0 pb-10 md:pb-14">
          <div className="container relative z-10 mx-auto max-w-6xl px-5 md:px-10 lg:px-12">
            {featuredPost && (
              <div className="mb-0">
                <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04]">
                  <Link href={`/blog/${featuredPost.slug}`} className="absolute inset-0 z-10 outline-none" aria-label={`Read ${featuredPost.title}`} />
                  
                  {/* Top Section */}
                  <div className="flex flex-col md:flex-row">
                    {/* Image Side */}
                    <div className="relative w-full aspect-video md:w-1/2 shrink-0 overflow-hidden bg-[#080c14] border-b md:border-b-0 md:border-r border-white/[0.06]">
                      {featuredPost.thumbnail ? (
                        <Image
                          src={assetPath(featuredPost.thumbnail)}
                          alt={featuredPost.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-500/10 to-purple-500/5">
                          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
                        </div>
                      )}
                    </div>

                    {/* Content Side */}
                    <div className="flex w-full flex-col justify-center p-8 md:w-1/2 md:p-12">
                      <div className="mb-4 flex items-center gap-3">
                        <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-indigo-300">
                          Featured Insight
                        </span>
                        {featuredPost.tags.length > 0 && (
                          <span className="text-[12px] font-medium text-gray-400">
                            {featuredPost.tags[0]}
                          </span>
                        )}
                      </div>

                      <h2 className="mb-4 text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-indigo-300 md:text-3xl">
                        {featuredPost.title}
                      </h2>

                      <p className="line-clamp-3 text-base leading-relaxed text-gray-400 md:line-clamp-4">
                        {featuredPost.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Section (Full Width Footer) */}
                  <div className="relative z-20 flex flex-wrap items-center gap-y-4 border-t border-white/[0.06] bg-white/[0.01] px-6 py-5 md:gap-x-8 md:px-8">
                    {featuredPost.date && (
                      <p className="w-full text-[13px] font-medium uppercase tracking-wider text-gray-500 md:w-auto">
                        {new Date(featuredPost.date).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </p>
                    )}
                    
                    <Link 
                      href="/contact?service=aeo-audit"
                      className="group/cta inline-flex items-center text-[13px] font-medium text-purple-400 transition-colors hover:text-purple-300"
                    >
                      Get Free AEO Audit <span className="ml-1.5 transform transition-transform group-hover/cta:translate-x-1">→</span>
                    </Link>
                    
                    <Link 
                      href={`/blog/${featuredPost.slug}`}
                      className="ml-auto flex items-center gap-1.5 text-[13px] font-medium text-white transition-colors hover:text-indigo-400 group-hover:text-indigo-400"
                    >
                      Read Article <span className="transform transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </article>
              </div>
            )}
          </div>
        </section>

        {/* Latest Insights */}
        <section className="relative pt-0 pb-16 md:pb-24">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#030508] via-[#080c14] to-[#030508]" />
          <div className="container relative z-10 mx-auto max-w-7xl px-5 md:px-10 lg:px-12">

            <div className="mb-10 flex items-center justify-between">
              <h3 className="text-2xl font-bold tracking-tight text-white">Latest Insights</h3>
            </div>

            {remainingPosts.length === 0 ? (
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-8 py-16 text-center">
                <p className="mb-2 text-lg font-medium text-white">More posts coming soon.</p>
                <p className="text-sm text-gray-500">We're working on new content. Check back shortly.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {remainingPosts.map((post, idx) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group block h-full outline-none">
                    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04]">
                      {/* Gradient header area */}
                      <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${gradients[idx % gradients.length]}`}>
                        {post.thumbnail ? (
                          <Image
                            src={assetPath(post.thumbnail)}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            loading="lazy"
                            quality={80}
                          />
                        ) : (
                          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px]" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex flex-grow flex-col p-6 md:p-8">
                        <h2 className="mb-3 text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-indigo-300">
                          {post.title}
                        </h2>
                        <p className="mb-6 line-clamp-3 flex-grow text-[15px] leading-relaxed text-gray-400">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between border-t border-white/[0.06] pt-5">
                          <p className="text-[13px] font-medium text-gray-500">
                            {post.tags.length > 0 ? `${post.tags[0]} • ` : ''}
                            {post.date ? new Date(post.date).toLocaleDateString('en-US', {
                              month: 'long',
                              year: 'numeric',
                            }) : ''}
                          </p>
                          <span className="flex items-center gap-1.5 whitespace-nowrap text-[13px] font-medium text-white transition-colors group-hover:text-indigo-400">
                            Read <span className="hidden sm:inline">Article</span> <span className="transform transition-transform group-hover:translate-x-1">→</span>
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Consultation CTA */}
        <section className="relative border-t border-white/[0.04] py-12 md:py-16">
          <div className="container relative z-10 mx-auto max-w-2xl px-5 text-center">
            <h2 className="mb-4 text-balance text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Let's Find What's Holding Growth Back.
            </h2>
            <p className="mx-auto mb-6 max-w-xl text-balance text-[15px] leading-relaxed text-gray-400">
              Whether it's SEO, your website, analytics, or conversion bottlenecks, we'll identify the highest-impact opportunities and next steps for your business.
            </p>
            <Link
              href="/contact#contact-form"
              className="group inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-[14px] font-medium text-black transition-all hover:bg-gray-100 active:scale-[0.98]"
            >
              Get a Free Growth Review <span className="ml-1.5 transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </div>
        </section>
      </PageTransitionWrapper>

      <Footer />
    </main>
  );
}
