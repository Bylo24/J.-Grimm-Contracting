import { Home, Building2, Package, Wrench, Layers, Building } from "lucide-react";

const services = [
  {
    num: "01",
    icon: Home,
    title: "Residential Renovations",
    description: "Complete home alterations and updating services for residential properties.",
  },
  {
    num: "02",
    icon: Building2,
    title: "Commercial Projects",
    description: "Structural and interior contracting work for businesses and commercial spaces.",
  },
  {
    num: "03",
    icon: Building,
    title: "New Construction",
    description: "Building services from the ground up tailored to specific project designs.",
  },
  {
    num: "04",
    icon: Package,
    title: "Project Management",
    description: "Efficient organization and execution of construction timelines and requirements.",
  },
  {
    num: "05",
    icon: Wrench,
    title: "Quality Workmanship",
    description: "Dependable building practices focused on delivering solid structures.",
  },
  {
    num: "06",
    icon: Layers,
    title: "General Contracting",
    description: "Comprehensive solutions for various repair and improvement needs.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-spacing bg-card">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-8 mb-12 md:mb-16">
          <div className="lg:col-span-6">
            <span className="text-xs tracking-[0.25em] uppercase text-foreground mb-4 block font-sans font-normal">
              What We Do
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1] text-balance">
              Contracting services in Edmonton.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-muted-foreground leading-relaxed text-base">
              We provide efficient solutions to meet the diverse needs of our clients.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service) => (
            <div
              key={service.num}
              className="bg-card p-6 sm:p-7 md:p-9 group transition-colors duration-300 hover:bg-background"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-xs text-muted-foreground font-sans tracking-wider font-normal group-hover:text-foreground">{service.num}</span>
                <service.icon size={22} className="text-muted-foreground/40 group-hover:text-foreground transition-colors duration-300" strokeWidth={1.5} />
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
