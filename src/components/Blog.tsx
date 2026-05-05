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
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 mb-12 md:mb-14 items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-4 block font-sans">
              Our Work
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1] text-balance">
              See Our Work.
            </h2>
          </div>
          <div className="max-w-xl lg:justify-self-end">
            <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
              A live look at recent jobs, finishes, and behind-the-scenes updates from the brothers.
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:gap-12 items-start">
          <div className="lg:pt-8">
            <div className="max-w-xl">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-4 block font-sans">
                Instagram
              </span>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground leading-[0.95] text-balance">
                Follow the brothers for fresh installs and current projects.
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mt-5 max-w-lg">
                We keep the feed moving with tidy finishes, behind-the-scenes updates, and a look at the
                work as it happens.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                  Fresh installs
                </span>
                <span className="inline-flex items-center rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                  Tidy finishes
                </span>
                <span className="inline-flex items-center rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                  Current jobs
                </span>
              </div>
              <a
                href={instagramProfileUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-8 text-sm font-semibold uppercase tracking-wider text-foreground hover:text-accent transition-colors"
              >
                Open profile
              </a>
            </div>
          </div>

          <div className="lg:justify-self-end w-full lg:max-w-[560px] xl:max-w-[620px]">
            <div className="overflow-hidden rounded-sm bg-card border border-border shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
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
