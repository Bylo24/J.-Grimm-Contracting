import gallery01 from "@/assets/gallery-01.svg?url";
import gallery02 from "@/assets/gallery-02.svg?url";
import gallery03 from "@/assets/gallery-03.svg?url";
import gallery04 from "@/assets/gallery-04.svg?url";

const galleryImages = [
  {
    src: gallery01,
    alt: "Completed contracting work with structural elements and interior finishes",
  },
  {
    src: gallery02,
    alt: "Neutral construction site image showing building framework and staging",
  },
  {
    src: gallery03,
    alt: "Renovated interior space with a clean finished look",
  },
  {
    src: gallery04,
    alt: "Site progress image showing contracted work and layout planning",
  },
];

const Blog = () => {
  return (
    <section id="work" className="section-spacing bg-card">
      <div className="section-container">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 items-start">
          <div className="max-w-xl lg:pt-8 xl:pt-10">
            <span className="text-xs tracking-[0.25em] uppercase text-foreground mb-4 block font-sans font-normal">
              Our Work
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1] text-balance">
              Completed projects.
            </h2>
          </div>

          <div className="lg:justify-self-end w-full lg:max-w-[680px]">
            <div className="grid gap-4 sm:grid-cols-2">
              {galleryImages.map((image) => (
                <div key={image.alt} className="overflow-hidden rounded-sm bg-neutral-100 border border-border">
                  <img src={image.src} alt={image.alt} className="w-full h-56 object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
