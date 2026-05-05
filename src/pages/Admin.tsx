import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Plus, Edit, Trash2, LogOut, Eye, EyeOff, Settings, Star, X, Image as ImageIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import MarkdownEditor from "@/components/MarkdownEditor";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  cover_image: string | null;
  category: string | null;
  tags: string[] | null;
  reading_time_minutes: number | null;
  featured: boolean | null;
  published: boolean;
  published_at: string | null;
  created_at: string;
}

const CATEGORIES = [
  "Strategy", "Operations", "Web Design", "Technology", "Business", "Case Study"
];

const Admin = () => {
  const { user, loading: authLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<BlogPost | null>(null);
  const [creating, setCreating] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [filter, setFilter] = useState<"all" | "published" | "draft">("all");

  // Post form state
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [category, setCategory] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [featured, setFeatured] = useState(false);
  const [published, setPublished] = useState(false);

  // Password change
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [changingPassword, setChangingPassword] = useState(false);

  // Cover image upload
  const [uploadingCover, setUploadingCover] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) navigate("/login");
  }, [user, authLoading, navigate]);

  useEffect(() => { if (user) fetchPosts(); }, [user]);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
    else setPosts(data || []);
    setLoading(false);
  };

  const generateSlug = (t: string) =>
    t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const calcReadingTime = (text: string) =>
    Math.max(1, Math.ceil(text.split(/\s+/).filter(Boolean).length / 200));

  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (creating) setSlug(generateSlug(val));
  };

  const addTag = () => {
    const t = tagInput.trim().toLowerCase();
    if (t && !tags.includes(t)) {
      setTags([...tags, t]);
    }
    setTagInput("");
  };

  const removeTag = (tag: string) => setTags(tags.filter(t => t !== tag));

  const handleCoverUpload = async (file: File) => {
    if (!file.type.startsWith("image/")) return;
    setUploadingCover(true);
    const ext = file.name.split(".").pop();
    const fileName = `covers/${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${ext}`;

    const { error } = await supabase.storage.from("blog-images").upload(fileName, file);
    if (error) {
      toast({ title: "Upload failed", description: error.message, variant: "destructive" });
    } else {
      const { data } = supabase.storage.from("blog-images").getPublicUrl(fileName);
      setCoverImage(data.publicUrl);
      toast({ title: "Cover image uploaded" });
    }
    setUploadingCover(false);
  };

  const resetForm = () => {
    setTitle(""); setSlug(""); setExcerpt(""); setContent(""); setCoverImage("");
    setCategory(""); setTags([]); setTagInput(""); setFeatured(false); setPublished(false);
    setEditing(null); setCreating(false);
  };

  const startEdit = (post: BlogPost) => {
    setEditing(post); setCreating(false);
    setTitle(post.title); setSlug(post.slug);
    setExcerpt(post.excerpt || ""); setContent(post.content);
    setCoverImage(post.cover_image || "");
    setCategory(post.category || ""); setTags(post.tags || []);
    setFeatured(post.featured || false); setPublished(post.published);
  };

  const handleSave = async () => {
    if (!title.trim() || !content.trim() || !slug.trim()) {
      toast({ title: "Missing fields", description: "Title, slug, and content are required.", variant: "destructive" });
      return;
    }

    const postData = {
      title: title.trim(),
      slug: slug.trim(),
      excerpt: excerpt.trim() || null,
      content: content.trim(),
      cover_image: coverImage || null,
      category: category || null,
      tags,
      reading_time_minutes: calcReadingTime(content),
      featured,
      published,
      published_at: published ? (editing?.published_at || new Date().toISOString()) : null,
      user_id: user!.id,
      updated_at: new Date().toISOString(),
    };

    if (editing) {
      const { error } = await supabase.from("blog_posts").update(postData).eq("id", editing.id);
      if (error) { toast({ title: "Error", description: error.message, variant: "destructive" }); return; }
      toast({ title: "Post updated" });
    } else {
      const { error } = await supabase.from("blog_posts").insert(postData);
      if (error) { toast({ title: "Error", description: error.message, variant: "destructive" }); return; }
      toast({ title: "Post created" });
    }
    resetForm(); fetchPosts();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this post?")) return;
    const { error } = await supabase.from("blog_posts").delete().eq("id", id);
    if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
    else { toast({ title: "Post deleted" }); fetchPosts(); }
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) { toast({ title: "Passwords don't match", variant: "destructive" }); return; }
    if (newPassword.length < 8) { toast({ title: "Min 8 characters", variant: "destructive" }); return; }
    setChangingPassword(true);
    try {
      const { error } = await supabase.auth.updateUser({ password: newPassword });
      if (error) throw error;
      toast({ title: "Password updated" });
      setNewPassword(""); setConfirmPassword(""); setShowSettings(false);
    } catch (err: unknown) {
      toast({ title: "Error", description: err instanceof Error ? err.message : "Failed", variant: "destructive" });
    } finally { setChangingPassword(false); }
  };

  const handleSignOut = async () => { await signOut(); navigate("/"); };

  if (authLoading || loading) {
    return <div className="min-h-screen flex items-center justify-center bg-background"><p className="text-muted-foreground text-sm">Loading...</p></div>;
  }

  const filteredPosts = posts.filter(p => {
    if (filter === "published") return p.published;
    if (filter === "draft") return !p.published;
    return true;
  });

  const showForm = creating || editing;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-10">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 flex items-center justify-between h-14">
          <a href="/" className="text-foreground font-sans text-xs tracking-[0.2em] uppercase font-semibold">
            Functional Changes
          </a>
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground hidden sm:block">{user?.email}</span>
            <button onClick={() => setShowSettings(!showSettings)} className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Settings">
              <Settings size={15} />
            </button>
            <button onClick={handleSignOut} className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
              <LogOut size={13} /> Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-5 sm:px-8 py-8">
        {showSettings && (
          <div className="mb-8 p-6 border border-border rounded-sm bg-card">
            <h2 className="font-display text-xl text-foreground mb-4">Change Password</h2>
            <form onSubmit={handlePasswordChange} className="space-y-4 max-w-sm">
              <input type="password" placeholder="New password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}
                className="w-full border-0 border-b border-border bg-transparent px-0 py-2.5 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors" />
              <input type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border-0 border-b border-border bg-transparent px-0 py-2.5 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors" />
              <button type="submit" disabled={changingPassword}
                className="bg-primary text-primary-foreground px-6 py-2 text-xs font-medium font-sans rounded-sm transition-all duration-200 hover:opacity-90 disabled:opacity-50">
                {changingPassword ? "Updating..." : "Update password"}
              </button>
            </form>
          </div>
        )}

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-display text-2xl md:text-3xl text-foreground">Blog Posts</h1>
            <p className="text-xs text-muted-foreground mt-1 font-sans">{posts.length} posts · {posts.filter(p => p.published).length} published</p>
          </div>
          <div className="flex items-center gap-3">
            {!showForm && (
              <>
                <div className="flex border border-border rounded-sm overflow-hidden text-xs font-sans">
                  {(["all", "published", "draft"] as const).map(f => (
                    <button key={f} onClick={() => setFilter(f)}
                      className={`px-3 py-1.5 capitalize transition-colors ${filter === f ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                      {f}
                    </button>
                  ))}
                </div>
                <button onClick={() => { resetForm(); setCreating(true); }}
                  className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 text-xs font-medium font-sans rounded-sm transition-all duration-200 hover:opacity-90">
                  <Plus size={14} /> New post
                </button>
              </>
            )}
          </div>
        </div>

        {showForm && (
          <div className="mb-8 space-y-6">
            {/* Cover image */}
            <div>
              {coverImage ? (
                <div className="relative rounded-sm overflow-hidden h-48 md:h-64 bg-card mb-4">
                  <img src={coverImage} alt="Cover" className="w-full h-full object-cover" />
                  <button onClick={() => setCoverImage("")}
                    className="absolute top-3 right-3 p-1.5 bg-foreground/80 text-background rounded-sm hover:bg-foreground transition-colors">
                    <X size={14} />
                  </button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center h-32 border border-dashed border-border rounded-sm cursor-pointer hover:border-muted-foreground/50 transition-colors mb-4">
                  <ImageIcon size={20} className="text-muted-foreground/40 mb-2" strokeWidth={1.5} />
                  <span className="text-xs text-muted-foreground font-sans">
                    {uploadingCover ? "Uploading..." : "Add cover image"}
                  </span>
                  <input type="file" accept="image/*" className="hidden"
                    onChange={(e) => { const f = e.target.files?.[0]; if (f) handleCoverUpload(f); e.target.value = ""; }} />
                </label>
              )}
            </div>

            {/* Title */}
            <input
              type="text" value={title} onChange={(e) => handleTitleChange(e.target.value)}
              className="w-full bg-transparent text-3xl md:text-4xl font-display text-foreground placeholder:text-muted-foreground/30 focus:outline-none border-0 px-0"
              placeholder="Post title..."
            />

            {/* Slug */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground font-sans">
              <span className="tracking-wide">URL:</span>
              <input type="text" value={slug} onChange={(e) => setSlug(e.target.value)}
                className="flex-1 bg-transparent text-foreground focus:outline-none border-0 px-0 font-mono"
                placeholder="post-url-slug" />
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-xs font-medium text-foreground mb-2 font-sans tracking-wide uppercase">Excerpt</label>
              <textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} rows={2}
                className="w-full border border-border rounded-sm bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-foreground/20 transition-colors resize-none"
                placeholder="A compelling summary that appears in blog listings..." />
            </div>

            {/* Category & Tags */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-foreground mb-2 font-sans tracking-wide uppercase">Category</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)}
                  className="w-full border border-border rounded-sm bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-foreground/20 transition-colors">
                  <option value="">Select category</option>
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-foreground mb-2 font-sans tracking-wide uppercase">Tags</label>
                <div className="flex gap-2">
                  <input type="text" value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addTag(); } }}
                    className="flex-1 border border-border rounded-sm bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-foreground/20 transition-colors"
                    placeholder="Add tag + Enter" />
                </div>
                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {tags.map(tag => (
                      <span key={tag} className="inline-flex items-center gap-1 px-2 py-0.5 bg-card border border-border rounded-sm text-xs text-muted-foreground font-sans">
                        {tag}
                        <button onClick={() => removeTag(tag)} className="hover:text-foreground"><X size={10} /></button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Content editor */}
            <div>
              <label className="block text-xs font-medium text-foreground mb-2 font-sans tracking-wide uppercase">Content</label>
              <MarkdownEditor value={content} onChange={setContent} />
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2 border-t border-border">
              <div className="flex items-center gap-3">
                <button type="button" onClick={() => setPublished(!published)}
                  className={`flex items-center gap-2 px-4 py-2 text-xs font-medium font-sans border rounded-sm transition-all duration-200 ${published ? "border-accent/40 bg-accent/10 text-accent-foreground" : "border-border text-muted-foreground"}`}>
                  {published ? <Eye size={13} /> : <EyeOff size={13} />}
                  {published ? "Published" : "Draft"}
                </button>
                <button type="button" onClick={() => setFeatured(!featured)}
                  className={`flex items-center gap-2 px-4 py-2 text-xs font-medium font-sans border rounded-sm transition-all duration-200 ${featured ? "border-accent/40 bg-accent/10 text-accent-foreground" : "border-border text-muted-foreground"}`}>
                  <Star size={13} />
                  {featured ? "Featured" : "Feature"}
                </button>
              </div>
              <div className="flex-1" />
              <div className="flex gap-3">
                <button onClick={resetForm}
                  className="border border-border text-foreground px-6 py-2.5 text-xs font-medium font-sans rounded-sm transition-all duration-200 hover:bg-card">
                  Cancel
                </button>
                <button onClick={handleSave}
                  className="bg-primary text-primary-foreground px-8 py-2.5 text-xs font-medium font-sans rounded-sm transition-all duration-200 hover:opacity-90">
                  {editing ? "Update post" : "Publish post"}
                </button>
              </div>
            </div>
          </div>
        )}

        {!showForm && (
          filteredPosts.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground"><p className="text-sm">No posts found.</p></div>
          ) : (
            <div className="divide-y divide-border">
              {filteredPosts.map((post) => (
                <div key={post.id} className="flex items-start gap-4 py-5 group">
                  {post.cover_image && (
                    <img src={post.cover_image} alt="" className="w-16 h-16 md:w-20 md:h-20 rounded-sm object-cover shrink-0 hidden sm:block" />
                  )}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="font-display text-lg text-foreground truncate">{post.title}</h3>
                      {post.featured && <Star size={12} className="text-accent shrink-0" fill="currentColor" />}
                      <span className={`text-[10px] px-2 py-0.5 rounded-sm font-sans font-medium tracking-wide uppercase shrink-0 ${post.published ? "bg-accent/15 text-accent-foreground" : "bg-muted text-muted-foreground"}`}>
                        {post.published ? "Live" : "Draft"}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground font-sans flex-wrap">
                      <span>/{post.slug}</span>
                      {post.category && <span className="border border-border px-1.5 py-0.5 rounded-sm">{post.category}</span>}
                      <span>{new Date(post.created_at).toLocaleDateString()}</span>
                      <span>~{post.reading_time_minutes || 1} min</span>
                    </div>
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        {post.tags.map(tag => (
                          <span key={tag} className="text-[10px] text-muted-foreground/70 font-sans">#{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0 pt-1">
                    <button onClick={() => startEdit(post)} className="p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Edit"><Edit size={15} /></button>
                    <button onClick={() => handleDelete(post.id)} className="p-2 text-muted-foreground hover:text-signal transition-colors" aria-label="Delete"><Trash2 size={15} /></button>
                  </div>
                </div>
              ))}
            </div>
          )
        )}
      </main>
    </div>
  );
};

export default Admin;
