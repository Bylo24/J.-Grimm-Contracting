import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Irene Reece",
    when: "a year ago",
    text: "James & Brian, I'm very happy I saw your van and took the details. You listened, turned up on time, and were professional and enthusiastic throughout. My reno has now been tied together with the flooring done. I love the end result and highly recommend them.",
  },
  {
    name: "Sue Hill",
    when: "11 months ago",
    text: "I needed my carpet tidied up after sliding doors were installed. I rang 2 Brothers, and within a week it was done and is FANTASTIC. JUST LOVE MY FLOORS NOW. Well done boys.",
  },
  {
    name: "Katie Brewer",
    when: "a year ago",
    text: "Had our carpet done at home and they did an amazing job. James was really good at communicating and answered any questions or concerns straight away. They were on schedule and we were really happy with their work.",
  },
  {
    name: "J",
    when: "10 months ago",
    text: "2 Brothers Flooring did an excellent job from initial contact to the finished job. Excellent communication, supply and installation of beautiful carpet, all at a sharp price. I couldn't fault them and definitely would use again.",
  },
];

const BookingPlaceholder = () => {
  return (
    <section id="reviews" className="section-spacing bg-foreground text-background scroll-mt-24">
      <div className="section-container">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-4 block font-sans">
            Reviews
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-background leading-[1] mb-4">
            See what our clients say.
          </h2>
          <p className="text-background/70 leading-relaxed">
            Hard work earns hard-won trust. Here is what people across Whanganui and Manawatu have said
            about working with the team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="border border-background/15 p-7 md:p-8 rounded-sm flex flex-col"
            >
              <Quote size={28} className="text-accent mb-5" strokeWidth={1.5} />
              <p className="text-background/85 leading-relaxed mb-6 text-base flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-baseline gap-3 pt-4 border-t border-background/15">
                <span className="font-display text-xl text-background leading-none">{t.name}</span>
                <span className="text-xs text-background/50 uppercase tracking-wider">{t.when}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingPlaceholder;
