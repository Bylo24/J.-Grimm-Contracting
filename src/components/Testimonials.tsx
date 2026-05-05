import { Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "Cheryl Hill",
    quote:
      "Clear communication from the first call through to installation, with a smooth, hassle-free process.",
  },
  {
    name: "Rebekah Johnson",
    quote:
      "Quick to respond, sorted the repair fast, and then delivered a beautiful carpet and vinyl install.",
  },
  {
    name: "Reana Tasker",
    quote:
      "Outstanding communication and genuine care, even for a small job. Felt like a priority from start to finish.",
  },
  {
    name: "Tie Scown",
    quote:
      "Fast quoting, quick turnaround, and quality craftsmanship with a result that matched the budget.",
  },
  {
    name: "Debz Tongotea",
    quote:
      "Organised, professional, and easy to have in the home. They kept to the plan and finished early.",
  },
  {
    name: "Peter Winter",
    quote:
      "Great service, fast follow-up, and a tough job completed properly when other companies did not show up.",
  },
];

const GoogleBadge = ({ featured = false }: { featured?: boolean }) => (
  <span className={`inline-flex items-center gap-2 ${featured ? "text-white/55" : "text-muted-foreground"}`}>
    <span
      className="relative inline-flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white"
      aria-hidden="true"
    >
      <span className="absolute inset-0 rounded-full bg-[conic-gradient(#4285F4_0_25%,#34A853_25%_50%,#FBBC05_50%_75%,#EA4335_75%_100%)]" />
      <span className="relative z-10 text-[11px] font-bold leading-none text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]">
        G
      </span>
    </span>
    <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">Google</span>
  </span>
);

const Testimonials = () => {
  return (
    <section id="reviews" className="section-spacing bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-8 mb-10 md:mb-14 items-end">
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-4 block font-sans">
              Reviews
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1] text-balance">
              See what our clients say.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Real feedback from customers who wanted clear communication, tidy work, and a result they
              could trust.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
          {reviews.map((review, index) => {
            const featured = index === 0;

            return (
              <article
                key={review.name}
                className={`relative overflow-hidden rounded-2xl border ${
                  featured
                    ? "border-white/10 bg-neutral-950 text-white shadow-[0_20px_60px_-30px_rgba(0,0,0,0.45)]"
                    : "border-border bg-card"
                } p-6 sm:p-7 transition-transform duration-300 hover:-translate-y-0.5`}
              >
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className={`flex items-center gap-1 ${featured ? "text-white" : "text-accent"}`}>
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} size={14} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <Quote size={22} className={featured ? "text-white/20 shrink-0" : "text-muted-foreground/20 shrink-0"} strokeWidth={1.5} />
                </div>

                <p className={`text-sm sm:text-base leading-relaxed ${featured ? "text-white/90" : "text-foreground/90"}`}>
                  {review.quote}
                </p>

                <div className={`mt-6 pt-5 border-t ${featured ? "border-white/10" : "border-border"}`}>
                  <p className={`text-xs font-semibold uppercase tracking-[0.2em] font-sans ${featured ? "text-white" : "text-muted-foreground"}`}>
                    {review.name}
                  </p>
                  <div className="mt-2">
                    <GoogleBadge featured={featured} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
