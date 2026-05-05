import { Globe, Settings, Search, Calendar, Mail, FileText } from "lucide-react";

const services = [
  {
    num: "01",
    icon: Globe,
    title: "Web Design",
    description: "Clean, conversion-focused websites that communicate clearly and perform reliably.",
  },
  {
    num: "02",
    icon: Settings,
    title: "Tech Consulting",
    description: "Strategic guidance on tools, platforms, and workflows that serve your business.",
  },
  {
    num: "03",
    icon: Search,
    title: "Digital Operations Review",
    description: "A structured audit to identify bottlenecks, redundancies, and quick wins.",
  },
  {
    num: "04",
    icon: Calendar,
    title: "Booking Systems",
    description: "Integrated online scheduling that reduces friction and lets clients book freely.",
  },
  {
    num: "05",
    icon: Mail,
    title: "Contact Forms",
    description: "Purpose-built forms that route inquiries and capture the information that matters.",
  },
  {
    num: "06",
    icon: FileText,
    title: "Blog Setup",
    description: "Structured blog systems that support your content strategy and improve visibility.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-spacing bg-card">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-8 mb-12 md:mb-16">
          <div className="lg:col-span-5">
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-accent mb-4 block font-sans">
              Services
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.1]">
              Built around simplicity
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-muted-foreground leading-relaxed">
              Every service we offer is designed to reduce complexity and create digital systems that work as hard as you do.
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
                <span className="text-xs text-muted-foreground font-sans tracking-wider">{service.num}</span>
                <service.icon size={20} className="text-muted-foreground/40 group-hover:text-accent transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl md:text-2xl text-foreground mb-2.5">
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
