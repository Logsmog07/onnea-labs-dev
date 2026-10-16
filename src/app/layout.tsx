import { assetPath } from "@/lib/asset-path";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import CookieBanner from "@/components/layout/CookieBanner";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import { buildMetadata, generateOrganizationSchema } from "@/lib/metadata-builder";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = buildMetadata({
  title: "Onnea Labs | Digital Systems for Measurable Growth",
  description: "Premium digital strategy, websites, SEO, analytics, and lifecycle systems for businesses that want a sharper online presence and cleaner growth.",
  keywords: "digital agency, web development, SEO, business growth, digital strategy, growth marketing",
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Charset and Viewport */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#030508" />
        
        {/* Robots */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Additional SEO */}
        <meta name="author" content="Onnea Labs" />
        <link rel="icon" href={assetPath("/favicon.ico")} />
        <link rel="apple-touch-icon" href={assetPath("/apple-touch-icon.png")} />
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css" />
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WWGLGLR4');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} antialiased selection:bg-indigo-500/30`}>
      <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WWGLGLR4" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <CookieBanner />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
