import { useEffect, useRef } from "react";

type CalendlyWindow = Window & {
  Calendly?: {
    initInlineWidget: (options: {
      url: string;
      parentElement: HTMLElement | null;
    }) => void;
  };
};

const CALENDLY_SCRIPT_ID = "calendly-widget-script";
const CALENDLY_URL = "https://calendly.com/functionalchanges?hide_gdpr_banner=1";

const Booking = () => {
  const embedRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const calendlyWindow = window as CalendlyWindow;

    const initializeWidget = () => {
      calendlyWindow.Calendly?.initInlineWidget({
        url: CALENDLY_URL,
        parentElement: embedRef.current,
      });
    };

    const existingScript = document.getElementById(CALENDLY_SCRIPT_ID) as HTMLScriptElement | null;

    if (existingScript) {
      if (calendlyWindow.Calendly) {
        initializeWidget();
      } else {
        existingScript.addEventListener("load", initializeWidget, { once: true });
      }

      return () => {
        existingScript.removeEventListener("load", initializeWidget);
      };
    }

    const script = document.createElement("script");
    script.id = CALENDLY_SCRIPT_ID;
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = initializeWidget;
    document.body.appendChild(script);

    return () => {
      script.onload = null;
    };
  }, []);

  return (
    <section id="booking" className="section-spacing bg-card/35 scroll-mt-24">
      <div className="section-container">
        <div className="text-center mb-8 md:mb-10 max-w-2xl mx-auto">
          <span className="text-xs font-medium tracking-[0.15em] uppercase text-accent mb-4 block font-sans">
            Appointments
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.05] text-balance mb-4">
            Book a consultation
          </h2>
        </div>

        <div className="max-w-5xl mx-auto rounded-[1rem] border border-border/60 bg-background shadow-[0_20px_60px_-40px_rgba(0,0,0,0.35)] overflow-hidden">
          <div className="flex items-center justify-end gap-4 border-b border-border/60 px-4 py-3 sm:px-5">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex shrink-0 items-center rounded-sm border border-border px-3 py-2 text-[11px] font-medium font-sans uppercase tracking-wide text-foreground transition-colors duration-200 hover:bg-secondary"
            >
              Open in new tab
            </a>
          </div>

          <div
            ref={embedRef}
            className="calendly-inline-widget block w-full min-w-[320px] min-h-[640px] h-[min(780px,calc(100svh-6rem))] sm:h-[min(820px,calc(100vh-6rem))] lg:h-[760px] xl:h-[800px]"
            data-url={CALENDLY_URL}
          />
        </div>
      </div>
    </section>
  );
};

export default Booking;
