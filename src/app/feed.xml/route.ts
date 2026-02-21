import { articles } from "@/lib/articles";

export async function GET() {
  const base = "https://www.thedataproject.ai";
  const sorted = [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const items = sorted
    .map(
      (a) => `    <item>
      <title><![CDATA[${a.title}]]></title>
      <link>${base}/articles/${a.slug}</link>
      <description><![CDATA[${a.description}]]></description>
      <pubDate>${new Date(a.date).toUTCString()}</pubDate>
      <guid>${base}/articles/${a.slug}</guid>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>TheDataProject.AI</title>
    <link>${base}</link>
    <description>Research, analysis, and insights across our 134 data platforms.</description>
    <language>en-us</language>
    <atom:link href="${base}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
