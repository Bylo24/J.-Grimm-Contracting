import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Clock, ArrowRight } from "lucide-react";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  cover_image: string | null;
  category: string | null;
  tags: string[] | null;
  reading_time_minutes: number | null;
  featured: boolean | null;
  published_at: string | null;
  created_at: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await supabase
        .from("blog_posts")
        .select("id, title, slug, excerpt, cover_image, category, tags, reading_time_minutes, featured, published_at, created_at")
        .eq("published", true)
        .order("published_at", { ascending: false })
        .limit(6);
      setPosts(data || []);
      setLoaded(true);
    };
    fetchPosts();
  }, []);

  if (!loaded) return null;

  const featuredPost = posts.find(p => p.featured) || posts[0];
  const otherPosts = posts.filter(p => p.id !== featuredPost?.id).slice(0, 4);

  return (
    <section id="blog" className="section-spacing bg-card">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-8 mb-12 md:mb-14">
          <div className="lg:col-span-6">
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-accent mb-4 block font-sans">
              Insights
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.1]">
              From the blog
            </h2>
          </div>
        </div>

        {posts.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-muted-foreground text-lg font-display italic">Articles coming soon.</p>
            <p className="text-sm text-muted-foreground mt-2 font-sans">
              We are working on insights to help your business think differently about digital.
            </p>
          </div>
        ) : (
          <div className="space-y-10 md:space-y-12">
            {/* Featured post — large card */}
            {featuredPost && (
              <Link to={`/blog/${featuredPost.slug}`} className="group block">
                <div className="grid md:grid-cols-2 gap-5 md:gap-8 items-center">
                  {featuredPost.cover_image ? (
                    <div className="overflow-hidden rounded-sm aspect-[16/10]">
                      <img
                        src={featuredPost.cover_image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[16/10] rounded-sm bg-muted flex items-center justify-center">
                      <span className="text-muted-foreground/30 font-display text-4xl italic">FC</span>
                    </div>
                  )}
                  <div>
                    <div className="flex items-center gap-3 mb-4 text-xs text-muted-foreground font-sans flex-wrap">
                      {featuredPost.category && (
                        <span className="border border-border px-2 py-0.5 rounded-sm tracking-wide uppercase">
                          {featuredPost.category}
                        </span>
                      )}
                      <time>
                        {new Date(featuredPost.published_at || featuredPost.created_at).toLocaleDateString("en-US", {
                          year: "numeric", month: "short", day: "numeric"
                        })}
                      </time>
                      <span className="flex items-center gap-1">
                        <Clock size={11} />
                        {featuredPost.reading_time_minutes || 1} min
                      </span>
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl text-foreground leading-snug mb-3 group-hover:text-accent transition-colors duration-300">
                      {featuredPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-xs font-medium text-foreground font-sans group-hover:text-accent transition-colors duration-300">
                      Read article <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            )}

            {/* Other posts — grid */}
            {otherPosts.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 pt-6 border-t border-border">
                {otherPosts.map((post) => (
                  <Link to={`/blog/${post.slug}`} key={post.id} className="group block">
                    {post.cover_image ? (
                      <div className="overflow-hidden rounded-sm aspect-[4/3] mb-4">
                        <img
                          src={post.cover_image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="aspect-[4/3] rounded-sm bg-muted mb-4 flex items-center justify-center">
                        <span className="text-muted-foreground/20 font-display text-2xl italic">FC</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 mb-2 text-[10px] text-muted-foreground font-sans">
                      {post.category && (
                        <span className="tracking-wide uppercase">{post.category}</span>
                      )}
                      <span>,</span>
                      <span className="flex items-center gap-0.5">
                        <Clock size={9} /> {post.reading_time_minutes || 1} min
                      </span>
                    </div>
                    <h3 className="font-display text-base md:text-lg text-foreground leading-snug group-hover:text-accent transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="text-xs text-muted-foreground leading-relaxed mt-2 line-clamp-2">
                        {post.excerpt}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
