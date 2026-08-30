import type { Metadata } from "next";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import BlogPostCard from "@/components/blog/post-card";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog | WV Development",
  description:
    "News, insights, and updates on infrastructure development and community revitalization from WV Development.",
};

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen">
      <Header />
      <section className="pt-40 pb-24 bg-secondary/30 min-h-screen">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-l md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              News and insights from WV Development
            </p>
          </div>

          {posts.length === 0 ? (
            <p className="text-center text-muted-foreground">
              No posts yet — check back soon.
            </p>
          ) : (
            <div className="flex flex-wrap gap-8">
              {posts.map((post, index) => (
                <BlogPostCard
                  key={post.slug}
                  post={post}
                  index={index}
                  className="grow-0 shrink-0 basis-full sm:basis-[calc(50%-1rem)] lg:basis-[calc(33.333%-1.334rem)]"
                />
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
