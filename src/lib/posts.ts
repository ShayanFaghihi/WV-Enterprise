import type { TinaMarkdownContent } from "tinacms/dist/rich-text";
import { client } from "../../tina/__generated__/client";

export type PostMeta = {
  slug: string;
  title: string;
  seoTitle?: string;
  metaDescription: string;
  date: string;
  thumbnail?: string;
  readingTime: number;
};

export type Post = PostMeta & {
  body: TinaMarkdownContent;
};

type PostNode = {
  slug: string;
  title: string;
  seoTitle?: string | null;
  metaDescription?: string | null;
  date: string;
  thumbnail?: string | null;
  body: unknown;
};

function extractText(node: unknown): string {
  if (!node || typeof node !== "object") return "";
  const record = node as { text?: unknown; children?: unknown };
  if (typeof record.text === "string") return record.text;
  if (Array.isArray(record.children)) {
    return record.children.map(extractText).join(" ");
  }
  return "";
}

function excerptFrom(body: unknown, length = 160) {
  const plain = extractText(body).replace(/\s+/g, " ").trim();
  return plain.length > length ? `${plain.slice(0, length).trim()}…` : plain;
}

function readingTimeFrom(body: unknown) {
  const words = extractText(body)
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function toMeta(node: PostNode): PostMeta {
  return {
    slug: node.slug,
    title: node.title,
    seoTitle: node.seoTitle || undefined,
    metaDescription: node.metaDescription || excerptFrom(node.body),
    date: node.date,
    thumbnail: node.thumbnail || undefined,
    readingTime: readingTimeFrom(node.body),
  };
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const { data } = await client.queries.postConnection({ first: 500 });
  return (data.postConnection.edges ?? [])
    .map((edge) => edge?.node)
    .filter((node): node is NonNullable<typeof node> => Boolean(node))
    .map(toMeta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const { data } = await client.queries.post({
      relativePath: `${slug}.md`,
    });
    return {
      ...toMeta(data.post),
      body: data.post.body,
    };
  } catch {
    return null;
  }
}
