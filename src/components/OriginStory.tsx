import teamSite from "@/assets/team-site.svg?url";

const features = [
  {
    title: "Service Area",
    detail: "Edmonton and surrounding communities.",
  },
  {
    title: "Project Types",
    detail: "Renovations and new construction.",
  },
];

const OriginStory = () => {
  return (
    <section id="about" className="section-spacing">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-16 md:mb-20 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <span className="text-xs tracking-[0.25em] uppercase text-foreground mb-4 block font-sans font-normal">
              About Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1] mb-6 text-balance">
              JRM Contracting Services LTD.
            </h2>
            <div className="gold-line mb-8" />
            <div className="space-y-5 text-muted-foreground leading-[1.75] text-sm sm:text-base">
              <p>
                The company is a reputable contracting business based in Edmonton, AB. The team offers professional construction solutions for both residential and commercial clients.
              </p>
              <p>
                With a focus on quality workmanship and customer satisfaction, the business delivers reliable services. Every project is tailored to meet the specific requirements and timelines of the client.
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-border">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
                Each service is handled with careful planning and a focus on stable delivery.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-sm bg-neutral-950 aspect-[4/5] md:aspect-[5/6] shadow-[0_25px_60px_-30px_rgba(0,0,0,0.45)]">
              <img
                src={teamSite}
                alt="Contractor team and active site work in progress"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-border">
          {features.map((feature) => (
            <div key={feature.title} className="bg-card p-6 sm:p-8 md:p-10 border border-border/70">
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-foreground leading-none mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OriginStory;
