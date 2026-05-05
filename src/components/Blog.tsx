import workCarpet from "@/assets/work-carpet.jpg";
import workWetfloor from "@/assets/work-wetfloor.jpg";
import workVinyl from "@/assets/work-vinyl.jpg";
import workCommercial from "@/assets/work-commercial.jpg";
import workStairs from "@/assets/work-stairs.jpg";
import workGarage from "@/assets/work-garage.jpg";

const projects = [
  {
    image: workVinyl,
    category: "Vinyl Planks",
    title: "Herringbone Kitchen Install",
    description: "Premium vinyl planks in a herringbone style, full supply and installation with a flawless modern finish.",
    featured: true,
  },
  {
    image: workCarpet,
    category: "Carpet",
    title: "Belgotex 55oz Nylon Lounge",
    description: "High quality Belgotex 55oz nylon carpet with sleepyhead underlay, supplied and installed for a family home.",
  },
  {
    image: workWetfloor,
    category: "Wet Floors",
    title: "Slip Resistant Bathroom",
    description: "Full bathroom wet floor with a slip resistant wear layer, safer for everyday use.",
  },
  {
    image: workCommercial,
    category: "Commercial",
    title: "Cafe Vinyl Fit Out",
    description: "Sharp commercial vinyl across customer facing cafe spaces.",
  },
  {
    image: workStairs,
    category: "Stairs and Hallways",
    title: "Westminster Stair Runner",
    description: "Poetry in motion, a staircase and hallway finished with premium carpet.",
  },
  {
    image: workGarage,
    category: "Garage",
    title: "Needle Punch Garage Carpet",
    description: "Hard wearing needle punch carpet, perfect for the man or woman cave.",
  },
];

const Blog = () => {
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section id="work" className="section-spacing bg-card">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-8 mb-12 md:mb-14">
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-4 block font-sans">
              Our Work
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1]">
              The proof is on the floor.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <p className="text-muted-foreground leading-relaxed text-base">
              Over the years we have successfully completed a wide range of flooring projects across
              Whanganui and Manawatu. Check out some of the examples in the gallery.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          <div className="group block">
            <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
              <div className="overflow-hidden rounded-sm aspect-[16/10]">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                  width={1024}
                  height={640}
                />
              </div>
              <div>
                <span className="inline-block border border-border px-3 py-1 text-[10px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-5">
                  {featured.category}
                </span>
                <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1] mb-4">
                  {featured.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  {featured.description}
                </p>
                <a
                  href="#quote"
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground border-b border-accent pb-1 hover:text-accent transition-colors"
                >
                  Request a Quote
                </a>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 pt-6 border-t border-border">
            {rest.map((project) => (
              <div key={project.title} className="group block">
                <div className="overflow-hidden rounded-sm aspect-[4/3] mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                </div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-semibold">
                  {project.category}
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-foreground leading-none mt-2 mb-2 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
