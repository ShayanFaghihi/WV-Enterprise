import { SITE_URL } from "@/lib/site";

const PAGES = [
  { path: "/", priority: "1.0" },
  { path: "/blog", priority: "0.8" },
];

export const revalidate = 3600;

export function GET() {
  const urls = PAGES.map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <priority>${page.priority}</priority>
  </url>`
  ).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
