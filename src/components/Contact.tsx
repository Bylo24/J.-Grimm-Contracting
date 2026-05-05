import { useState } from "react";
import { MapPin, Phone, Mail as MailIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/functionalchanges@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (response.ok) {
        toast({ title: "Message sent", description: "We will get back to you soon." });
        form.reset();
      } else {
        toast({ title: "Something went wrong", description: "Please try again or email us directly.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Something went wrong", description: "Please try again or email us directly.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-spacing">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-accent mb-4 block font-sans">
              Contact
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.1] mb-6">
              Lets talk about your systems
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Whether you have a specific project in mind or just want to explore what is possible, we would love to hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-accent mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-sm font-medium text-foreground font-sans tracking-wide uppercase">Functional Changes</p>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    PH5 327 Breezehill Avenue South<br />
                    Ottawa ON K1Y 1R6
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={18} className="text-accent shrink-0" strokeWidth={1.5} />
                <a href="tel:19803306760" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  1-980-330-6760
                </a>
              </div>
              <div className="flex items-center gap-4">
                <MailIcon size={18} className="text-accent shrink-0" strokeWidth={1.5} />
                <a href="mailto:functionalchanges@gmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  functionalchanges@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New inquiry from functionalchanges.com" />

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-foreground mb-2 font-sans tracking-wide uppercase">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-foreground mb-2 font-sans tracking-wide uppercase">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors duration-200"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-foreground mb-2 font-sans tracking-wide uppercase">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors duration-200"
                  placeholder="What is this about."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-foreground mb-2 font-sans tracking-wide uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors duration-200 resize-none"
                  placeholder="Tell us about your project."
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-3 text-sm font-medium font-sans rounded-sm transition-all duration-200 hover:opacity-90 disabled:opacity-50 mt-2"
              >
                {submitting ? "Sending." : "Send message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
