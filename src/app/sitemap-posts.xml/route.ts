import { getAllPosts } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";

export const revalidate = 3600;

export async function GET() {
  const posts = await getAllPosts();

  const urls = posts
    .map(
      (post) => `  <url>
    <loc>${SITE_URL}/blog/${post.slug}</loc>
    <lastmod>${new Date(post.date).toISOString()}</lastmod>
  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
