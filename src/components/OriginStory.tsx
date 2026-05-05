const OriginStory = () => {
  return (
    <section id="story" className="section-spacing">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-4">
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-accent mb-4 block font-sans">
              Our Story
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.1] mb-6">
              From mining operations to digital clarity
            </h2>
            <div className="gold-line" />
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="space-y-5 text-muted-foreground leading-[1.8] text-base">
              <p>
                Andrew spent eight years managing operations in the high stakes mining sector, an industry where systemic inefficiency does not just slow things down, it bleeds capital. Every misaligned process, every redundant step, every overlooked bottleneck had a measurable cost.
              </p>
              <p>
                That experience forged a sharp operational lens: the ability to see where systems break, why teams struggle, and how complexity quietly compounds into chaos.
              </p>
              <p>
                <strong className="text-foreground font-medium">Functional Changes</strong> was born from bringing that same operational thinking to small business digital systems. We do not just build websites, we build clarity. We simplify what is tangled, streamline what is bloated, and create digital infrastructure that actually works for the people using it.
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-border">
              <blockquote className="font-display text-xl md:text-2xl text-foreground italic leading-snug">
                If a system is not making your life easier, it is making it harder.
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-px bg-accent" />
                <span className="text-sm text-muted-foreground font-sans">Andrew, Founder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OriginStory;
