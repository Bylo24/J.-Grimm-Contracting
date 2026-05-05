import heroImage from "@/assets/hero-flooring.jpg";

const Hero = () => {
  return (
    <section className="relative isolate min-h-[76svh] lg:min-h-[72svh] flex items-end pt-24 sm:pt-28 md:pt-32 lg:pt-28 pb-14 md:pb-16 overflow-hidden bg-neutral-950">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={heroImage}
          alt="Newly installed timber-look vinyl flooring in a modern New Zealand home"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/55 to-black/35" />
        <div className="absolute inset-0 bg-black/5" />
        <div className="absolute inset-0 bg-black/20 sm:hidden" />
      </div>

      <div className="section-container w-full relative z-10">
        <div className="max-w-4xl">
          <div className="reveal-up">
          </div>
          <h1 className="reveal-up delay-100 font-display text-4xl sm:text-5xl md:text-6xl lg:text-[5.75rem] leading-[0.92] text-background mb-5 text-balance max-w-3xl">
            A family business created by exactly that 2 Brothers.
          </h1>
          <p className="reveal-up delay-200 text-sm sm:text-base md:text-lg lg:text-xl text-background leading-relaxed max-w-2xl mb-6 sm:mb-8 font-light">
            After working in many industries for the last 20 years and doing 40/70 hour weeks, we wanted
            to create a company of our own and satisfy our career of running our own company, based on
            precision flooring, specialists in carpet and vinyl.
            <br />
            <span className="block mt-4">
              Unbeatable communication, unbeatable customer service! We spent 10 years building the best
              name in the business.
            </span>
          </p>
          <div className="reveal-up delay-300 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
            <a
              href="#quote"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-background text-foreground px-8 py-4 text-sm font-semibold tracking-wider uppercase rounded-sm transition-all duration-200 hover:opacity-90"
            >
              Request a Quote
            </a>
            <a
              href="#contact"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-3 border border-background text-background px-8 py-4 text-sm font-semibold tracking-wider uppercase rounded-sm transition-all duration-200 hover:bg-background/10"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="reveal-up delay-500 mt-10 sm:mt-12 md:mt-14 pt-5 border-t border-background/35 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-10 text-[10px] sm:text-xs text-background uppercase tracking-[0.2em]">
          <span>20 Years Experience</span>
          <span>Carpet, Vinyl, Wet Floors</span>
          <span>Whanganui and Manawatu</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
