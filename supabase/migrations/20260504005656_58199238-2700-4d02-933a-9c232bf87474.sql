-- Add richer fields to blog_posts
ALTER TABLE public.blog_posts
ADD COLUMN IF NOT EXISTS category TEXT,
ADD COLUMN IF NOT EXISTS tags TEXT[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS reading_time_minutes INTEGER DEFAULT 1,
ADD COLUMN IF NOT EXISTS featured BOOLEAN DEFAULT false;

-- Create storage bucket for blog images
INSERT INTO storage.buckets (id, name, public)
VALUES ('blog-images', 'blog-images', true)
ON CONFLICT (id) DO NOTHING;

-- Public read access for blog images
CREATE POLICY "Anyone can view blog images"
ON storage.objects
FOR SELECT
USING (bucket_id = 'blog-images');

-- Authenticated users can upload blog images
CREATE POLICY "Authenticated users can upload blog images"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'blog-images');

-- Users can update their own uploads
CREATE POLICY "Users can update their own blog images"
ON storage.objects
FOR UPDATE
TO authenticated
USING (bucket_id = 'blog-images');

-- Users can delete their own uploads
CREATE POLICY "Users can delete their own blog images"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'blog-images');