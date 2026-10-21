import { notFound } from 'next/navigation';
import Image from 'next/image';
import { assetPath } from '@/lib/asset-path';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SmartSidebar } from '@/components/layout/SmartSidebar';
import { PageTransitionWrapper } from '@/components/layout/PageTransitionWrapper';
import { getPostBySlug, getAllSlugs, getAllPostsMeta } from '@/lib/blog';

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Onnea Labs`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();
  
  const allPosts = getAllPostsMeta();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-canvas text-ink selection:bg-tile">
      <Navbar />

      <PageTransitionWrapper>
        {/*
          MAIN LAYOUT CONTAINER
          Uses CSS Grid for a robust two-column structure.
          On desktop: Article is 70%, Sidebar is 30%.
          Added gap-16 for generous spacing between columns.
        */}
        <div className="mx-auto max-w-[1400px] px-5 pb-24 pt-32 md:px-10 lg:grid lg:grid-cols-[1fr_360px] lg:gap-16 lg:px-12 xl:grid-cols-[1fr_400px] xl:gap-24">
          
          {/* Article Column */}
          <article className="w-full lg:px-8 xl:px-12">
            <div className="mx-auto max-w-[820px]">
              <header className="mb-8">
                <div className="mb-4 flex items-center gap-3">
                  {post.tags?.map((tag) => (
                    <span 
                      key={tag} 
                      className="rounded-full border border-line bg-tile px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.date && (
                    <span className="text-[13px] font-medium uppercase tracking-wider text-muted">
                      {new Date(post.date).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </span>
                  )}
                </div>

                <h1 className="mb-6 text-4xl font-bold tracking-tight text-ink md:text-5xl lg:text-6xl">
                  {post.title}
                </h1>
                
                <p className="text-lg leading-relaxed text-muted md:text-xl">
                  {post.excerpt}
                </p>
              </header>

              {post.thumbnail && (
                <div className="relative mb-12 aspect-video w-full overflow-hidden rounded-2xl border border-line bg-alternate">
                  <Image
                    src={assetPath(post.thumbnail)}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 820px"
                  />
                </div>
              )}

              {/* MDX Content wrapper */}
              <div 
                className="prose-blog max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
                style={{
                  color: 'var(--foreground-muted)',
                  lineHeight: '1.75',
                  fontSize: '1rem',
                }}
              />
            </div>
          </article>

          {/* Sidebar */}
          <aside className="w-full h-full relative">
            <SmartSidebar className="flex flex-col gap-10" topMargin={128} bottomMargin={32}>
              
              {/* Related Articles */}
              {relatedPosts.length > 0 && (
                <div>
                  <h3 className="mb-6 border-b border-line pb-4 text-lg font-bold text-ink">
                    Related Articles
                  </h3>
                  <div className="flex flex-col gap-6">
                    {relatedPosts.map((relatedPost) => (
                      <Link href={`/blog/${relatedPost.slug}`} key={relatedPost.slug} className="group flex flex-col gap-3 outline-none">
                        <div>
                          <h4 className="mb-1.5 line-clamp-2 text-[15px] font-semibold leading-snug text-ink transition-colors group-hover:text-accent">
                            {relatedPost.title}
                          </h4>
                          {relatedPost.date && (
                            <p className="mb-2 text-[12px] font-medium uppercase tracking-wider text-muted">
                              {new Date(relatedPost.date).toLocaleDateString('en-GB', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                              })}
                            </p>
                          )}
                          {relatedPost.excerpt && (
                            <p className="line-clamp-2 text-[13px] leading-relaxed text-muted">
                              {relatedPost.excerpt}
                            </p>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Free AEO Audit CTA Card */}
              <div className="group relative overflow-hidden rounded-2xl border border-line bg-alternate p-8 shadow-card">
                <div className="absolute inset-0 bg-gradient-to-br from-mauve to-transparent opacity-50" />
                <div className="relative z-10">
                  <h3 className="mb-4 text-xl font-bold text-ink">
                    Get a Free AEO Audit
                  </h3>
                  <p className="mb-8 text-[15px] leading-relaxed text-muted">
                    Find out whether your business appears in AI-powered search results like ChatGPT, Perplexity, and Google AI Overviews.
                  </p>
                  <Link 
                    href="/contact?service=aeo-audit"
                    className="theme-primary inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3.5 text-[14px] font-semibold text-surface transition-all hover:bg-hover active:scale-[0.98]"
                  >
                    Book Free Audit
                  </Link>
                </div>
              </div>

            </SmartSidebar>
          </aside>

        </div>
      </PageTransitionWrapper>

      <Footer />
    </main>
  );
}
