import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Story", href: "#story" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        <a href="/" className="text-foreground font-sans text-sm tracking-[0.2em] uppercase font-semibold">
          Functional Changes
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground link-underline transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            className="text-sm font-medium text-primary-foreground bg-primary px-5 py-2 rounded-sm transition-all duration-200 hover:opacity-90"
          >
            Book a call
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
            href="#booking"
            onClick={() => setOpen(false)}
            className="mt-4 block text-center text-sm font-medium text-primary-foreground bg-primary px-5 py-2.5 rounded-sm"
          >
            Book a call
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
