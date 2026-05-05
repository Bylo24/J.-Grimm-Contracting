import { Home, Building2, Droplets, Package, Wrench, Layers } from "lucide-react";

const services = [
  {
    num: "01",
    icon: Home,
    title: "Domestic Carpet",
    description: "Premium carpet supply and installation for homes of every size, with thousands of products to choose from.",
  },
  {
    num: "02",
    icon: Layers,
    title: "Vinyl and Vinyl Planks",
    description: "Sheet vinyl, glue down planks and herringbone styles. Durable, modern and built to last.",
  },
  {
    num: "03",
    icon: Droplets,
    title: "Wet Floors",
    description: "Slip resistant wet floor specialists. Safer showering for the elderly, wheelchair users and everyday families.",
  },
  {
    num: "04",
    icon: Building2,
    title: "Commercial Installations",
    description: "Cafes, gyms, offices, salons. Sharp, clean commercial finishes with minimal disruption.",
  },
  {
    num: "05",
    icon: Wrench,
    title: "Subfloors and Repairs",
    description: "Full floor prep, new subfloors and repairs. We strip it back and do it the right way the first time.",
  },
  {
    num: "06",
    icon: Package,
    title: "Full Supply",
    description: "Thousands of products available. Carpet, vinyl, cork, needle punch, tiger turf, all tried and tested by our team.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-spacing bg-card">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-8 mb-12 md:mb-16">
          <div className="lg:col-span-6">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-4 block font-sans">
              What We Do
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1]">
              Specialists in every floor.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-muted-foreground leading-relaxed text-base">
              Big job or small, domestic or commercial, every quote is free and under no obligation.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service) => (
            <div
              key={service.num}
              className="bg-card p-7 md:p-9 group transition-colors duration-300 hover:bg-background"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-xs text-muted-foreground font-sans tracking-wider font-semibold">{service.num}</span>
                <service.icon size={22} className="text-muted-foreground/40 group-hover:text-accent transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3 leading-none">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
