import heroImage from "@/assets/hero-flooring.jpg";
import fleetImage from "../../Heroimage.png";

const Hero = () => {
  return (
    <section className="relative isolate min-h-[90svh] flex items-center pt-32 md:pt-36 lg:pt-40 pb-16 md:pb-24 overflow-hidden bg-neutral-950">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={heroImage}
          alt="Newly installed timber-look vinyl flooring in a modern New Zealand home"
          className="w-full h-full object-cover object-center scale-[1.02]"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/96 via-neutral-950/78 to-neutral-950/38" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/88 via-transparent to-neutral-950/35" />
        <div className="absolute -top-24 right-[-8rem] h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 left-[-6rem] h-80 w-80 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="section-container w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="max-w-3xl rounded-[2rem] border border-white/10 bg-neutral-950/50 p-6 sm:p-8 md:p-10 shadow-[0_24px_90px_-40px_rgba(0,0,0,0.75)] backdrop-blur-md">
              <div className="reveal-up">
                <span className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase text-background/80 mb-6 font-sans">
                  <span className="h-px w-10 bg-background/40" />
                  Whanganui. Manawatu. Family Owned.
                </span>
              </div>
              <h1 className="reveal-up delay-100 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.92] text-background mb-6 max-w-2xl">
                Flooring done properly,<br />
                <span className="text-background/78 italic">from the first quote to the final fit.</span>
              </h1>
              <p className="reveal-up delay-200 text-base sm:text-lg md:text-xl text-background/84 leading-relaxed max-w-xl mb-8 font-light">
                A family business built on clean communication, careful prep, and a finish that feels as
                good as it looks. Carpet, vinyl, and wet floors across Whanganui and Manawatu.
              </p>
              <div className="reveal-up delay-300 flex flex-wrap gap-4">
                <a
                  href="#quote"
                  className="inline-flex items-center gap-3 bg-background text-foreground px-7 py-3.5 text-sm font-semibold tracking-wider uppercase rounded-sm transition-all duration-200 hover:opacity-90 shadow-lg shadow-black/20"
                >
                  Request a Quote
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 border border-background/35 bg-white/8 backdrop-blur-sm text-background px-7 py-3.5 text-sm font-semibold tracking-wider uppercase rounded-sm transition-all duration-200 hover:bg-white/14"
                >
                  Contact Us
                </a>
              </div>

              <div className="reveal-up delay-400 mt-8 flex flex-wrap gap-3">
                {["Free quotes", "Carpet, vinyl & wet floors", "Whanganui and Manawatu"].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-background/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-background/82 backdrop-blur-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pl-2">
            <div className="reveal-up delay-300 overflow-hidden rounded-[1.75rem] border border-white/12 bg-neutral-950/55 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)] backdrop-blur-md">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={fleetImage}
                  alt="2 Brothers Flooring vans parked outside"
                  className="h-full w-full object-cover scale-[1.01]"
                  loading="eager"
                />
              </div>
              <div className="space-y-5 p-6 md:p-7 text-background">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.24em] uppercase text-background/72 font-sans">
                      Local team
                    </p>
                    <h2 className="mt-2 font-display text-2xl md:text-3xl leading-none">Ready to measure up.</h2>
                  </div>
                  <div className="rounded-full border border-background/15 bg-background/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-background/82">
                    Free quotes
                  </div>
                </div>

                <p className="max-w-md text-sm md:text-base leading-relaxed text-background/84">
                  A dependable two-brother crew with the equipment, experience, and communication to keep
                  projects moving smoothly.
                </p>

                <div className="space-y-3 border-t border-background/12 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-background/68">
                    20+ years experience
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Carpet", "Vinyl", "Wet floors"].map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center rounded-full border border-background/12 bg-background/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-background/84"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
