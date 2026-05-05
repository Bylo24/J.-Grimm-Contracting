import { useState } from "react";
import { MapPin, Phone, Mail as MailIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Variant = "quote" | "contact";

interface Props {
  variant?: Variant;
}

const Contact = ({ variant = "contact" }: Props) => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const isQuote = variant === "quote";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/functionalghost2026@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (response.ok) {
        toast({
          title: isQuote ? "Quote request sent" : "Message sent",
          description: "The team will be in touch soon.",
        });
        form.reset();
      } else {
        toast({ title: "Something went wrong", description: "Please try again or call us directly.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Something went wrong", description: "Please try again or call us directly.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  if (isQuote) {
    return (
      <section id="quote" className="section-spacing bg-card scroll-mt-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-4 block font-sans">
                Get a Quote
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1] mb-6">
                Turn dreams into reality.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                We are a reputable registered company at 2 Brothers Flooring Ltd. All our quotes are
                <span className="text-foreground font-medium"> free</span> and we offer full supply with the
                most competitive prices in the industry.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-10 text-base">
                If it has a floor, we can lay it. We love our work with pride — and you will too.
              </p>

              <div className="space-y-5 pt-6 border-t border-border">
                <a href="tel:+64275861915" className="flex items-center gap-4 group">
                  <Phone size={18} className="text-accent shrink-0" strokeWidth={1.5} />
                  <span className="text-foreground group-hover:text-accent transition-colors">
                    027 586 1915
                  </span>
                </a>
                <a href="mailto:functionalghost2026@gmail.com" className="flex items-center gap-4 group">
                  <MailIcon size={18} className="text-accent shrink-0" strokeWidth={1.5} />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors break-all">
                    functionalghost2026@gmail.com
                  </span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7 bg-background p-8 md:p-10 rounded-sm border border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New quote request — 2 Brothers Flooring" />

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="q-name" className="block text-xs font-semibold text-foreground mb-2 font-sans tracking-[0.15em] uppercase">
                      Your Name
                    </label>
                    <input
                      id="q-name"
                      name="name"
                      type="text"
                      required
                      className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="q-email" className="block text-xs font-semibold text-foreground mb-2 font-sans tracking-[0.15em] uppercase">
                      Email
                    </label>
                    <input
                      id="q-email"
                      name="email"
                      type="email"
                      required
                      className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="q-phone" className="block text-xs font-semibold text-foreground mb-2 font-sans tracking-[0.15em] uppercase">
                      Phone
                    </label>
                    <input
                      id="q-phone"
                      name="phone"
                      type="tel"
                      className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="q-mobile" className="block text-xs font-semibold text-foreground mb-2 font-sans tracking-[0.15em] uppercase">
                      Mobile
                    </label>
                    <input
                      id="q-mobile"
                      name="mobile"
                      type="tel"
                      className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="q-subject" className="block text-xs font-semibold text-foreground mb-2 font-sans tracking-[0.15em] uppercase">
                    Subject
                  </label>
                  <input
                    id="q-subject"
                    name="subject"
                    type="text"
                    required
                    className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent transition-colors duration-200"
                    placeholder="Carpet, vinyl, wet floor…"
                  />
                </div>

                <div>
                  <label htmlFor="q-message" className="block text-xs font-semibold text-foreground mb-2 font-sans tracking-[0.15em] uppercase">
                    Your Message <span className="text-muted-foreground/60 normal-case font-normal tracking-normal">(optional)</span>
                  </label>
                  <textarea
                    id="q-message"
                    name="message"
                    rows={4}
                    className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
                    placeholder="Tell us about the space, room sizes, or anything else."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center w-full sm:w-auto gap-3 bg-accent text-accent-foreground px-10 py-4 text-sm font-semibold font-sans tracking-[0.15em] uppercase rounded-sm transition-all duration-200 hover:opacity-90 disabled:opacity-50 mt-2"
                >
                  {submitting ? "Sending…" : "Request a Quote"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-spacing">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-4 block font-sans">
              Contact
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1] mb-6">
              Get in touch.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12 text-base">
              Don&apos;t delay — call today. The team is ready to chat about your project, big or small.
            </p>

            <div className="space-y-7">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-accent mt-1 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-xs font-semibold text-foreground font-sans tracking-[0.2em] uppercase">2 Brothers Flooring Ltd</p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    Whanganui &amp; Manawatu<br />
                    New Zealand
                  </p>
                </div>
              </div>

              <div className="pt-5 border-t border-border">
                <p className="text-xs font-semibold text-foreground font-sans tracking-[0.2em] uppercase mb-4">James Nutbrown</p>
                <p className="text-xs text-muted-foreground tracking-wide uppercase mb-3">Director / Operations</p>
                <a href="tel:+64275861915" className="flex items-center gap-3 group">
                  <Phone size={16} className="text-accent shrink-0" strokeWidth={1.5} />
                  <span className="text-foreground group-hover:text-accent transition-colors">027 586 1915</span>
                </a>
              </div>

              <div className="pt-5 border-t border-border">
                <p className="text-xs font-semibold text-foreground font-sans tracking-[0.2em] uppercase mb-4">Brian Black</p>
                <p className="text-xs text-muted-foreground tracking-wide uppercase">Installer</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New inquiry from 2 Brothers Flooring website" />

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="c-name" className="block text-xs font-semibold text-foreground mb-2 font-sans tracking-[0.15em] uppercase">
                    Name
                  </label>
                  <input
                    id="c-name"
                    name="name"
                    type="text"
                    required
                    className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent transition-colors duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="c-email" className="block text-xs font-semibold text-foreground mb-2 font-sans tracking-[0.15em] uppercase">
                    Email
                  </label>
                  <input
                    id="c-email"
                    name="email"
                    type="email"
                    required
                    className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent transition-colors duration-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="c-subject" className="block text-xs font-semibold text-foreground mb-2 font-sans tracking-[0.15em] uppercase">
                  Subject
                </label>
                <input
                  id="c-subject"
                  name="subject"
                  type="text"
                  required
                  className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="c-message" className="block text-xs font-semibold text-foreground mb-2 font-sans tracking-[0.15em] uppercase">
                  Message
                </label>
                <textarea
                  id="c-message"
                  name="message"
                  rows={5}
                  required
                  className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-3.5 text-sm font-semibold font-sans tracking-[0.15em] uppercase rounded-sm transition-all duration-200 hover:opacity-90 disabled:opacity-50 mt-2"
              >
                {submitting ? "Sending…" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
