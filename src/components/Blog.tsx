import { useEffect } from "react";

const instagramProfileUrl = "https://www.instagram.com/2_brothers_flooring_ltd/";

const Blog = () => {
  useEffect(() => {
    const instagramWindow = window as Window & {
      instgrm?: {
        Embeds?: {
          process?: () => void;
        };
      };
    };

    const scriptId = "instagram-embed-script";
    const existingScript = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (existingScript) {
      instagramWindow.instgrm?.Embeds?.process?.();
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.async = true;
    script.defer = true;
    script.src = "https://www.instagram.com/embed.js";
    script.onload = () => {
      instagramWindow.instgrm?.Embeds?.process?.();
    };

    document.body.appendChild(script);
  }, []);

  return (
    <section id="work" className="section-spacing bg-card">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-8 mb-12 md:mb-14">
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-4 block font-sans">
              Our Work
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1] text-balance">
              See Our Work.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <p className="text-muted-foreground leading-relaxed text-base">
              A live look at recent jobs, finishes, and behind-the-scenes updates from the team.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <div className="rounded-sm border border-border bg-background/85 p-4 sm:p-5 md:p-6 shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                <div>
                  <span className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-3 block font-sans">
                    Instagram
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground leading-[1] text-balance">
                    @2_brothers_flooring_ltd
                  </h3>
                </div>
                <a
                  href={instagramProfileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold uppercase tracking-wider text-foreground hover:text-accent transition-colors"
                >
                  Open profile
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-sm bg-card border border-border shadow-[0_25px_80px_rgba(0,0,0,0.08)] lg:max-w-[680px] lg:ml-auto">
              <blockquote
                className="instagram-media w-full !max-w-none"
                data-instgrm-permalink={instagramProfileUrl}
                data-instgrm-version="14"
                style={{
                  width: "100%",
                  minWidth: "326px",
                  maxWidth: "100%",
                  margin: "0 auto",
                }}
              >
                <a href={instagramProfileUrl} target="_blank" rel="noreferrer">
                  View this profile on Instagram
                </a>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
