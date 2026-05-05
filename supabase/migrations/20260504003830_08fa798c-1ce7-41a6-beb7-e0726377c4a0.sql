CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT NOT NULL,
  cover_image TEXT,
  published BOOLEAN NOT NULL DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Anyone can read published posts
CREATE POLICY "Anyone can read published posts"
ON public.blog_posts
FOR SELECT
USING (published = true);

-- Authenticated users can manage their own posts
CREATE POLICY "Authors can insert their own posts"
ON public.blog_posts
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Authors can update their own posts"
ON public.blog_posts
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Authors can delete their own posts"
ON public.blog_posts
FOR DELETE
TO authenticated
USING (auth.uid() = user_id);

-- Authors can read their own drafts
CREATE POLICY "Authors can read their own drafts"
ON public.blog_posts
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);