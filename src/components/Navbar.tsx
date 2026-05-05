import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Meet The Bros", href: "#bros" },
  { label: "Our Work", href: "#work" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/40">
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        <a href="/" className="flex items-baseline gap-2">
          <span className="font-display text-2xl md:text-3xl text-foreground leading-none">2 Brothers</span>
          <span className="font-display text-base md:text-lg text-accent leading-none">Flooring</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground link-underline transition-colors duration-200 hover:text-foreground tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#quote"
            className="text-sm font-semibold text-accent-foreground bg-accent px-5 py-2.5 rounded-sm transition-all duration-200 hover:opacity-90 tracking-wide uppercase"
          >
            Get a Quote
          </a>
        </div>

        <button
          className="md:hidden text-foreground p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border px-5 pb-6 pt-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#quote"
            onClick={() => setOpen(false)}
            className="mt-4 block text-center text-sm font-semibold text-accent-foreground bg-accent px-5 py-3 rounded-sm uppercase tracking-wide"
          >
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
