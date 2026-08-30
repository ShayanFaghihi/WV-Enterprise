import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { PostMeta } from "@/lib/posts";

type BlogPostCardProps = {
  post: PostMeta;
  index?: number;
  animate?: boolean;
  className?: string;
};

export default function BlogPostCard({
  post,
  index = 0,
  animate = true,
  className = "",
}: BlogPostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group flex h-full flex-col overflow-hidden rounded-sm border-2 bg-card text-card-foreground shadow transition-all duration-300 hover:border-primary hover:shadow-xl hover:-translate-y-1 ${
        animate ? "animate-in fade-in slide-in-from-bottom-4 fill-mode-both" : ""
      } ${className}`}
      style={
        animate
          ? { animationDelay: `${index * 100}ms`, animationDuration: "700ms" }
          : undefined
      }
    >
      <div className="w-full overflow-hidden bg-muted" style={{ height: 224 }}>
        {post.thumbnail ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.thumbnail}
            alt={post.title}
            style={{ height: 224, width: "100%" }}
            className="block object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="w-full bg-gradient-to-br from-primary/20 to-secondary"
            style={{ height: 224 }}
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap items-center text-xs font-medium text-muted-foreground">
          <span className="inline-flex items-center">
            <Calendar className="mr-1.5 h-3.5 w-3.5 shrink-0" />
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span className="mx-2 text-muted-foreground/40">&bull;</span>
          <span className="inline-flex items-center">
            <Clock className="mr-1.5 h-3.5 w-3.5 shrink-0" />
            {post.readingTime} min read
          </span>
        </div>
        <h3 className="mb-2 text-xl font-bold leading-tight transition-colors group-hover:text-primary md:text-2xl">
          {post.title}
        </h3>
        <div className="mb-4 h-1 w-12 bg-primary transition-all duration-300 group-hover:w-20" />
        <p className="flex-1 text-base leading-relaxed text-muted-foreground">
          {post.metaDescription}
        </p>
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          Read article
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
