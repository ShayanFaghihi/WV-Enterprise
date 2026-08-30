import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import ReadingProgress from "@/components/blog/reading-progress";
import BlogPostCard from "@/components/blog/post-card";
import markdownComponents from "@/components/blog/markdown-link";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  const title = post.seoTitle || post.title;

  return {
    title,
    description: post.metaDescription,
    openGraph: {
      title,
      description: post.metaDescription,
      type: "article",
      images: post.thumbnail ? [post.thumbnail] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [post, allPosts] = await Promise.all([
    getPostBySlug(slug),
    getAllPosts(),
  ]);

  if (!post) notFound();

  const morePosts = allPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="min-h-screen">
      <ReadingProgress />
      <Header />
      <article className="pt-40 pb-24 animate-in fade-in duration-700">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>

          <div className="mb-4 flex flex-wrap items-center text-sm font-medium text-muted-foreground">
            <span className="inline-flex items-center">
              <Calendar className="mr-1.5 h-4 w-4 shrink-0" />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="mx-2.5 text-muted-foreground/40">&bull;</span>
            <span className="inline-flex items-center">
              <Clock className="mr-1.5 h-4 w-4 shrink-0" />
              {post.readingTime} min read
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl font-bold mb-8 leading-tight">
            {post.title}
          </h1>

          {post.thumbnail && (
            <img
              src={post.thumbnail}
              alt={post.title}
              className="mb-10 aspect-[16/9] w-full rounded-2xl object-cover shadow-lg"
            />
          )}

          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-primary prose-a:font-semibold prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl prose-img:shadow-lg">
            <TinaMarkdown content={post.body} components={markdownComponents} />
          </div>
        </div>
      </article>

      {morePosts.length > 0 && (
        <section className="border-t bg-secondary/30 py-24">
          <div className="container mx-auto px-6">
            <div className="mb-10 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
                Keep Reading
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                More From The Blog
              </h2>
              <div className="mx-auto mt-4 h-1 w-16 bg-primary" />
            </div>
            <div className="flex flex-wrap justify-center gap-8 max-w-3xl mx-auto">
              {morePosts.map((p, index) => (
                <BlogPostCard
                  key={p.slug}
                  post={p}
                  index={index}
                  className="grow-0 shrink-0 basis-full sm:basis-[calc(50%-1rem)]"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
