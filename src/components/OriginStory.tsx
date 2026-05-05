import { Phone } from "lucide-react";
import theBros from "../../TeamPhoto.png";

const bros = [
  {
    name: "James Nutbrown",
    role: "Director and Operations",
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
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-16 md:mb-20 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-4 block font-sans">
              Our Story
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1] mb-6 text-balance">
              Meet The Bros.
            </h2>
            <div className="gold-line mb-8" />
            <div className="space-y-5 text-muted-foreground leading-[1.75] text-sm sm:text-base">
              <p>
                A family business created by exactly that, 2 brothers. After working in many industries
                for the last 20 years and doing 40 to 70 hour weeks, we wanted to create a company of our
                own and satisfy our career of running our own company, based on
                <span className="text-foreground font-medium"> precision flooring</span>, specialists in
                carpet and vinyl.
              </p>
              <p>
                Unbeatable communication, unbeatable customer service. We spent 10 years building the best
                name in the business, and we treat every customer like family.
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-border">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
                We bring the same attention to detail to every project, from first quote through to final
                install and clean-up.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-sm bg-neutral-950 aspect-[4/5] md:aspect-[5/6] shadow-[0_25px_60px_-30px_rgba(0,0,0,0.45)]">
              <img
                src={theBros}
                alt="James Nutbrown and Brian Black, the team behind 2 Brothers Flooring"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-border">
          {bros.map((bro) => (
            <div key={bro.name} className="bg-card p-6 sm:p-8 md:p-10 border border-border/70">
              <div className="flex items-center gap-4 sm:gap-5 mb-5">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-neutral-950 flex items-center justify-center font-display text-xl sm:text-2xl text-accent">
                  {bro.initials}
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-foreground leading-none">
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
                  className="inline-flex items-center gap-2 text-sm text-foreground hover:opacity-70 transition-opacity"
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
