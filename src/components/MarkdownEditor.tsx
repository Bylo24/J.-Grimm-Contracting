import { useState, useRef, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import {
  Bold, Italic, Heading1, Heading2, Heading3, List, ListOrdered,
  Quote, Code, Link as LinkIcon, Image as ImageIcon, Minus, Eye, EyeOff,
  Upload
} from "lucide-react";

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const MarkdownEditor = ({ value, onChange }: MarkdownEditorProps) => {
  const { toast } = useToast();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [preview, setPreview] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const insertAtCursor = useCallback((before: string, after = "", placeholder = "") => {
    const ta = textareaRef.current;
    if (!ta) return;
    const start = ta.selectionStart;
    const end = ta.selectionEnd;
    const selected = value.substring(start, end) || placeholder;
    const newText = value.substring(0, start) + before + selected + after + value.substring(end);
    onChange(newText);
    setTimeout(() => {
      ta.focus();
      const cursorPos = start + before.length + selected.length;
      ta.setSelectionRange(cursorPos, cursorPos);
    }, 0);
  }, [value, onChange]);

  const handleImageUpload = async (file: File) => {
    if (!file.type.startsWith("image/")) {
      toast({ title: "Invalid file", description: "Please upload an image file.", variant: "destructive" });
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast({ title: "File too large", description: "Max 5MB per image.", variant: "destructive" });
      return;
    }

    setUploading(true);
    const ext = file.name.split(".").pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${ext}`;
    const path = `posts/${fileName}`;

    const { error } = await supabase.storage.from("blog-images").upload(path, file);
    if (error) {
      toast({ title: "Upload failed", description: error.message, variant: "destructive" });
      setUploading(false);
      return;
    }

    const { data: urlData } = supabase.storage.from("blog-images").getPublicUrl(path);
    const imageUrl = urlData.publicUrl;

    insertAtCursor(`\n![${file.name}|medium](${imageUrl})\n`);
    toast({ title: "Image uploaded", description: "Change size: edit |small, |medium, |large, or |full in the alt text" });
    setUploading(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleImageUpload(file);
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    const items = e.clipboardData.items;
    for (const item of items) {
      if (item.type.startsWith("image/")) {
        e.preventDefault();
        const file = item.getAsFile();
        if (file) handleImageUpload(file);
        return;
      }
    }
  };

  const tools = [
    { icon: Bold, action: () => insertAtCursor("**", "**", "bold"), title: "Bold" },
    { icon: Italic, action: () => insertAtCursor("*", "*", "italic"), title: "Italic" },
    { icon: Heading1, action: () => insertAtCursor("\n# ", "\n", "Heading"), title: "H1" },
    { icon: Heading2, action: () => insertAtCursor("\n## ", "\n", "Heading"), title: "H2" },
    { icon: Heading3, action: () => insertAtCursor("\n### ", "\n", "Heading"), title: "H3" },
    null,
    { icon: List, action: () => insertAtCursor("\n- ", "\n", "List item"), title: "Bullet list" },
    { icon: ListOrdered, action: () => insertAtCursor("\n1. ", "\n", "List item"), title: "Numbered list" },
    { icon: Quote, action: () => insertAtCursor("\n> ", "\n", "Quote"), title: "Blockquote" },
    { icon: Code, action: () => insertAtCursor("`", "`", "code"), title: "Inline code" },
    { icon: Minus, action: () => insertAtCursor("\n---\n"), title: "Divider" },
    null,
    { icon: LinkIcon, action: () => insertAtCursor("[", "](https://)", "link text"), title: "Link" },
    { icon: ImageIcon, action: () => fileInputRef.current?.click(), title: "Insert image" },
  ];

  return (
    <div className="border border-border rounded-sm overflow-hidden bg-background">
      {/* Toolbar */}
      <div className="flex items-center gap-0.5 px-3 py-2 border-b border-border bg-card flex-wrap">
        {tools.map((tool, i) =>
          tool === null ? (
            <div key={`sep-${i}`} className="w-px h-5 bg-border mx-1" />
          ) : (
            <button
              key={tool.title}
              type="button"
              onClick={tool.action}
              className="p-1.5 rounded-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-150"
              title={tool.title}
            >
              <tool.icon size={15} strokeWidth={1.5} />
            </button>
          )
        )}

        <div className="flex-1" />

        {uploading && (
          <span className="text-[10px] text-accent font-sans animate-pulse mr-2">Uploading...</span>
        )}

        <button
          type="button"
          onClick={() => setPreview(!preview)}
          className="flex items-center gap-1 px-2 py-1 rounded-sm text-xs text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-150 font-sans"
        >
          {preview ? <EyeOff size={13} /> : <Eye size={13} />}
          {preview ? "Edit" : "Preview"}
        </button>
      </div>

      {/* Editor / Preview */}
      {preview ? (
        <div className="min-h-[400px] max-h-[600px] overflow-y-auto p-6 prose prose-neutral prose-sm max-w-none">
          <MarkdownPreview content={value} />
        </div>
      ) : (
        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className="relative"
        >
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onPaste={handlePaste}
            rows={20}
            className="w-full px-6 py-4 text-sm text-foreground bg-background focus:outline-none resize-y font-mono leading-relaxed min-h-[400px]"
            placeholder="Write your post in Markdown...&#10;&#10;Drag & drop or paste images directly into the editor.&#10;&#10;Image sizes: change |medium to |small, |large, or |full in the alt text.&#10;e.g. ![photo|small](url)&#10;&#10;Supported: **bold**, *italic*, # headings, - lists, > quotes, [links](url)"
          />

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleImageUpload(file);
              e.target.value = "";
            }}
          />
        </div>
      )}

      {/* Status bar */}
      <div className="flex items-center justify-between px-4 py-2 border-t border-border bg-card text-[10px] text-muted-foreground font-sans">
        <span>{value.length} characters · ~{Math.max(1, Math.ceil(value.split(/\s+/).filter(Boolean).length / 200))} min read</span>
        <span className="flex items-center gap-1">
          <Upload size={10} />
          Drag, paste, or click <ImageIcon size={10} /> to add images
        </span>
      </div>
    </div>
  );
};

// Simple markdown preview using react-markdown
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const MarkdownPreview = ({ content }: { content: string }) => {
  // Fix broken markdown image links where a newline separates ] and (
  const fixedContent = content
    .replace(/!\[([^\]]*)\]\s*\n\s*\(/g, '![$1](')
    .replace(/\]\s*\n\s*\((https?:\/\/[^)]+)\)/g, ']($1)');

  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        img: ({ src, alt }) => {
          // Parse size from alt text: ![alt|size](url)
          const sizeMatch = alt?.match(/^(.*?)\|(\w+)$/);
          const cleanAlt = sizeMatch ? sizeMatch[1].trim() : (alt || "");
          const size = sizeMatch ? sizeMatch[2] : "full";
          const sizeClasses: Record<string, string> = {
            small: "max-w-[250px]",
            medium: "max-w-[500px]",
            large: "max-w-[750px]",
            full: "max-w-full",
          };
          return (
            <img
              src={src}
              alt={cleanAlt}
              className={`rounded-sm h-auto my-4 ${sizeClasses[size] || sizeClasses.medium}`}
              loading="lazy"
            />
          );
        },
        a: ({ href, children }) => (
          <a href={href} target="_blank" rel="noopener noreferrer" className="text-trust underline">
            {children}
          </a>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-2 border-accent pl-4 italic text-muted-foreground my-4">
            {children}
          </blockquote>
        ),
        h1: ({ children }) => <h1 className="font-display text-3xl mt-8 mb-4">{children}</h1>,
        h2: ({ children }) => <h2 className="font-display text-2xl mt-6 mb-3">{children}</h2>,
        h3: ({ children }) => <h3 className="font-display text-xl mt-5 mb-2">{children}</h3>,
        hr: () => <hr className="my-8 border-border" />,
        code: ({ children, className }) => {
          const isBlock = className?.includes("language-");
          if (isBlock) {
            return <pre className="bg-card border border-border rounded-sm p-4 overflow-x-auto text-xs my-4"><code>{children}</code></pre>;
          }
          return <code className="bg-card border border-border rounded-sm px-1.5 py-0.5 text-xs">{children}</code>;
        },
      }}
    >
      {fixedContent}
    </Markdown>
  );
};

export { MarkdownPreview };
export default MarkdownEditor;
