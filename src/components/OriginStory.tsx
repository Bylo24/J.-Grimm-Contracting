import { Phone } from "lucide-react";

const bros = [
  {
    name: "James Nutbrown",
    role: "Director & Operations",
    phone: "027 586 1915",
    phoneHref: "tel:+64275861915",
    initials: "JN",
  },
  {
    name: "Brian Black",
    role: "Installer",
    phone: null,
    phoneHref: null,
    initials: "BB",
  },
];

const OriginStory = () => {
  return (
    <section id="bros" className="section-spacing">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 mb-16 md:mb-20">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-4 block font-sans">
              Our Story
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1] mb-6">
              Meet The Bros.
            </h2>
            <div className="gold-line" />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-5 text-muted-foreground leading-[1.8] text-base">
              <p>
                A family business created by exactly that — 2 brothers. After 20 years working in the
                industry on 40 to 70 hour weeks, we set out to build something of our own, founded on
                <span className="text-foreground font-medium"> precision flooring</span>, with carpet and
                vinyl as our specialty.
              </p>
              <p>
                Unbeatable communication. Unbeatable customer service. We spent 10 years building the best
                name in the business, and we treat every customer like family.
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-border">
              <blockquote className="font-display text-3xl md:text-4xl text-foreground leading-none">
                &ldquo;No sad stories.<br />
                <span className="text-accent">Just satisfied customers.&rdquo;</span>
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-px bg-accent" />
                <span className="text-sm text-muted-foreground font-sans">James Nutbrown, Director</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-border">
          {bros.map((bro) => (
            <div key={bro.name} className="bg-card p-8 md:p-10">
              <div className="flex items-center gap-5 mb-5">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center font-display text-2xl text-accent-foreground">
                  {bro.initials}
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground leading-none">
                    {bro.name}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2 font-sans font-semibold">
                    {bro.role}
                  </p>
                </div>
              </div>
              {bro.phone && (
                <a
                  href={bro.phoneHref!}
                  className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
                >
                  <Phone size={14} strokeWidth={2} />
                  {bro.phone}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OriginStory;
