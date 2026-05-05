const Hero = () => {
  return (
    <section className="min-h-[84vh] md:min-h-[90vh] flex items-end pb-12 md:pb-20 pt-24 md:pt-20">
      <div className="section-container w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="reveal-up">
              <div className="gold-line mb-8" />
            </div>
            <h1 className="reveal-up delay-100 font-display text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-[-0.02em] text-foreground">
              Simplified web design{" "}
              <em className="text-muted-foreground">and tech consulting</em>{" "}
              for businesses ready to work differently<span className="text-signal">.</span>
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pb-2">
            <p className="reveal-up delay-300 text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              We help small businesses spot digital bottlenecks, simplify operations, and build smarter web systems.
            </p>
            <a
              href="#contact"
              className="reveal-up delay-400 inline-flex items-center gap-3 text-sm font-medium text-foreground link-underline pb-0.5 group"
            >
              Start a conversation
            </a>
          </div>
        </div>

        <div className="reveal-up delay-500 mt-12 md:mt-20 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 text-xs text-muted-foreground tracking-wide uppercase">
          <span>Ottawa, Canada</span>
          <span>Web Design, Consulting</span>
          <span>Clarity after complexity</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
