# Onnea Labs — Progress Log

Last updated: 2026-03-28

## Session: 2026-03-28

### Hero (src/components/sections/Hero.tsx)
- Badge updated: `Web Dev · UX · AI · Social · Analytics`
- Headline: `"We grow businesses through marketing and technology."` (gradient on "marketing and technology.")
- Subheadline: `"Strategy, execution, and the tools to back it up."`
- Two-column layout preserved (floating card + elements intact)
- Original badge, two CTAs (Book a call + Explore Services) kept

### Results Page
- `/results` — dedicated page with Navbar, hero ("Results" / "Work that moved the needle."), CaseStudies section, Footer
- Navbar `Results` link changed from `/#case-studies` → `/results`

### Blog System (Markdown-powered)
- `gray-matter`, `remark`, `remark-html` installed
- `src/lib/blog.ts` — utility: `getAllPostsMeta()`, `getPostBySlug()`, `getAllSlugs()`
- `src/app/blog/page.tsx` — listing page
- `src/app/blog/[slug]/page.tsx` — post page with `generateStaticParams`
- Navbar: `Blog` link added before Contact

**Blog posts in `content/blog/`:**
- `why-seo-is-dead.md`
- `social-media-for-b2b.md`
- `web-dev-performance.md`
- `repositioned-rebuilt-easier-to-buy.md` ← case study stub (edit to fill)
- `website-lifecycle-analytics-aligned.md` ← case study stub (edit to fill)

### Case Studies (src/components/sections/CaseStudies.tsx)
- Placeholder cards kept, each linked to their own dedicated blog slug:
  - Card 1 → `/blog/repositioned-rebuilt-easier-to-buy`
  - Card 2 → `/blog/website-lifecycle-analytics-aligned`

### Service Pages — Example Engagements Removed
- `PortfolioGrid` component removed from all service detail pages (`src/app/services/[slug]/page.tsx`)

### Metadata Fix (src/config/metadata.ts)
- All 6 service slugs corrected to match actual `services.ts` keys:
  - `seo` (was `seo-optimization`)
  - `design` (was `design-systems`)
  - `email-marketing` (new)
  - `social-media` (new)
  - `analytics` (was `analytics-tracking`)
  - `web-development` (unchanged)

## To Do / Next Steps
- Fill in case study blog stubs with real content
- Add real client work to `studies` array in `CaseStudies.tsx` when ready
- Run `npm run build` to verify no TypeScript errors
- Deploy when ready
