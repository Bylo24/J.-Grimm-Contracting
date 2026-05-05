import { useState } from "react";
import { MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const formData = Object.fromEntries(new FormData(form));

    try {
      // Form submission destination not configured yet.
      // Log the data so it can be wired up later.
      console.log("Form submission:", formData);
      await new Promise((r) => setTimeout(r, 400));

      toast({
        title: "Quote request received",
        description: "Thanks, please call 027 586 1915 for an immediate response.",
      });
      form.reset();
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please call us directly on 027 586 1915.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="quote" className="section-spacing bg-card scroll-mt-24">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-foreground mb-4 block font-sans">
              Get a Quote
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1] mb-6 text-balance">
              Get a Quote
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-sm sm:text-base">
              We are a reputable registered company at 2 Brothers Flooring Ltd and we turn dreams into
              a reality. All our quotes are
              <span className="text-foreground font-medium"> free</span> and we offer full supply with the
              most competitive prices in the industry.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10 text-sm sm:text-base">
              We love our work with pride and focus on quality results for every space.
            </p>

            <div className="space-y-7">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-foreground mt-1 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-xs font-semibold text-foreground font-sans tracking-[0.2em] uppercase">
                    2 Brothers Flooring Ltd
                  </p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    Whanganui and Manawatu<br />
                    New Zealand
                  </p>
                </div>
              </div>

              <div className="pt-5 border-t border-border">
                <p className="text-xs font-semibold text-foreground font-sans tracking-[0.2em] uppercase mb-4">
                  James Nutbrown
                </p>
                <p className="text-xs text-muted-foreground tracking-wide uppercase mb-3">
                  Director and Operations
                </p>
                <a href="tel:+64275861915" className="flex items-center gap-3 group">
                  <Phone size={16} className="text-foreground shrink-0" strokeWidth={1.5} />
                  <span className="text-foreground group-hover:text-foreground transition-colors">
                    027 586 1915
                  </span>
                </a>
              </div>

              <div className="pt-5 border-t border-border">
                <p className="text-xs font-semibold text-foreground font-sans tracking-[0.2em] uppercase mb-4">
                  Brian Black
                </p>
                <p className="text-xs text-muted-foreground tracking-wide uppercase">Installer</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 bg-neutral-950 text-white p-6 sm:p-8 md:p-10 rounded-sm border border-neutral-800 shadow-[0_25px_80px_-50px_rgba(0,0,0,0.7)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label
                    htmlFor="q-name"
                    className="block text-xs font-semibold text-white mb-2 font-sans tracking-[0.15em] uppercase"
                  >
                    Your Name
                  </label>
                  <input
                    id="q-name"
                    name="name"
                    type="text"
                    required
                    className="w-full border-0 border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-accent transition-colors duration-200"
                  />
                </div>
                <div>
                  <label
                    htmlFor="q-email"
                    className="block text-xs font-semibold text-white mb-2 font-sans tracking-[0.15em] uppercase"
                  >
                    Email
                  </label>
                  <input
                    id="q-email"
                    name="email"
                    type="email"
                    required
                    className="w-full border-0 border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-accent transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label
                    htmlFor="q-phone"
                    className="block text-xs font-semibold text-white mb-2 font-sans tracking-[0.15em] uppercase"
                  >
                    Phone
                  </label>
                  <input
                    id="q-phone"
                    name="phone"
                    type="tel"
                    className="w-full border-0 border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white focus:outline-none focus:border-accent transition-colors duration-200"
                  />
                </div>
                <div>
                  <label
                    htmlFor="q-mobile"
                    className="block text-xs font-semibold text-white mb-2 font-sans tracking-[0.15em] uppercase"
                  >
                    Mobile
                  </label>
                  <input
                    id="q-mobile"
                    name="mobile"
                    type="tel"
                    className="w-full border-0 border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white focus:outline-none focus:border-accent transition-colors duration-200"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="q-subject"
                  className="block text-xs font-semibold text-white mb-2 font-sans tracking-[0.15em] uppercase"
                >
                  Subject
                </label>
                <input
                  id="q-subject"
                  name="subject"
                  type="text"
                  required
                  className="w-full border-0 border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-accent transition-colors duration-200"
                  placeholder="Carpet, vinyl, wet floor."
                />
              </div>

              <div>
                <label
                  htmlFor="q-message"
                  className="block text-xs font-semibold text-white mb-2 font-sans tracking-[0.15em] uppercase"
                >
                  Your Message <span className="text-white/55 normal-case font-normal tracking-normal">optional</span>
                </label>
                <textarea
                  id="q-message"
                  name="message"
                  rows={4}
                  className="w-full border-0 border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
                  placeholder="Tell us about the space, room sizes, or anything else."
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center w-full sm:w-auto gap-3 bg-accent text-accent-foreground px-10 py-4 text-sm font-semibold font-sans tracking-[0.15em] uppercase rounded-sm transition-all duration-200 hover:opacity-90 disabled:opacity-50 mt-2 shadow-[0_12px_30px_-18px_rgba(0,0,0,0.85)]"
              >
                {submitting ? "Sending." : "Request a Quote"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
