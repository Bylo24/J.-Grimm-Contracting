import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#quote" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/40 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
      <div className="section-container flex items-center justify-between h-16 sm:h-16 md:h-20">
        <a href="/" className="text-sm md:text-base text-foreground font-normal">
          JRM Contracting Services LTD
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground tracking-wide font-normal"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#quote"
            className="text-sm font-normal text-accent-foreground bg-accent px-5 py-2.5 rounded-sm transition-all duration-200 hover:opacity-90 tracking-wide uppercase shadow-[0_10px_30px_-16px_rgba(0,0,0,0.6)]"
          >
            Get a Quote
          </a>
        </div>

        <button
          className="md:hidden text-foreground p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-5 pt-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3.5 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground font-normal"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#quote"
            onClick={() => setOpen(false)}
            className="mt-4 block text-center text-sm font-normal text-accent-foreground bg-accent px-5 py-3.5 rounded-sm uppercase tracking-wide"
          >
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
