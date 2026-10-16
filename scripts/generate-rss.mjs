import fs from 'fs';
import path from 'path';

const baseUrl = 'https://onnealabs.com';

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Onnea Labs - Digital Growth Resources</title>
    <link>${baseUrl}</link>
    <description>Digital strategy, web development, SEO, and growth resources from Onnea Labs</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <item>
      <title>Web Development Service</title>
      <link>${baseUrl}/services/web-development</link>
      <description>High-performance website design and development built to turn traffic into pipeline.</description>
      <pubDate>${new Date().toUTCString()}</pubDate>
    </item>
    <item>
      <title>SEO Optimization Service</title>
      <link>${baseUrl}/services/seo-optimization</link>
      <description>Strategic SEO optimization that drives qualified organic traffic and improves your online visibility.</description>
      <pubDate>${new Date().toUTCString()}</pubDate>
    </item>
    <item>
      <title>Analytics & Tracking Solutions</title>
      <link>${baseUrl}/services/analytics-tracking</link>
      <description>Comprehensive analytics setup to understand your customers and make informed business decisions.</description>
      <pubDate>${new Date().toUTCString()}</pubDate>
    </item>
  </channel>
</rss>`;

const publicDir = path.join(process.cwd(), 'public');
const rssPath = path.join(publicDir, 'feed.xml');

// Ensure public directory exists (it should, but just in case)
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(rssPath, rss, 'utf8');
console.log('✅ RSS Feed generated at public/feed.xml');
