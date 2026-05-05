import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MarkdownPreview } from "@/components/MarkdownEditor";
import { Clock, ArrowLeft, Tag } from "lucide-react";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  cover_image: string | null;
  category: string | null;
  tags: string[] | null;
  reading_time_minutes: number | null;
  published_at: string | null;
  created_at: string;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .maybeSingle();
      setPost(data);
      setLoading(false);
    };
    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center pt-32 pb-20">
          <p className="text-muted-foreground text-sm">Loading...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-3xl mx-auto px-5 sm:px-8 pt-32 pb-20 text-center">
          <h1 className="font-display text-3xl text-foreground mb-4">Post not found</h1>
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">← Back home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Cover image */}
      {post.cover_image && (
        <div className="w-full h-64 md:h-96 mt-16 md:mt-20 overflow-hidden">
          <img src={post.cover_image} alt={post.title} className="w-full h-full object-cover" />
        </div>
      )}

      <article className={`max-w-3xl mx-auto px-5 sm:px-8 pb-20 ${post.cover_image ? "pt-10" : "pt-32"}`}>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 mb-10 font-sans tracking-wide uppercase"
        >
          <ArrowLeft size={12} /> Back
        </Link>

        <header className="mb-10">
          {/* Category & meta */}
          <div className="flex items-center gap-4 mb-5 text-xs text-muted-foreground font-sans flex-wrap">
            {post.category && (
              <span className="border border-border px-2.5 py-1 rounded-sm tracking-wide uppercase">
                {post.category}
              </span>
            )}
            <time>
              {new Date(post.published_at || post.created_at).toLocaleDateString("en-US", {
                year: "numeric", month: "long", day: "numeric"
              })}
            </time>
            <span className="flex items-center gap-1">
              <Clock size={11} />
              {post.reading_time_minutes || 1} min read
            </span>
          </div>

          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.1] mb-6">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-display italic">
              {post.excerpt}
            </p>
          )}
        </header>

        <div className="gold-line mb-10" />

        {/* Rendered markdown content */}
        <div className="prose prose-neutral max-w-none">
          <MarkdownPreview content={post.content} />
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag size={13} className="text-muted-foreground" />
              {post.tags.map(tag => (
                <span key={tag} className="text-xs text-muted-foreground border border-border px-2.5 py-1 rounded-sm font-sans">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>
      <Footer />
    </div>
  );
};

export default BlogPost;
