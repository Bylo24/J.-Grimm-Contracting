import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Meet The Bros", href: "#bros" },
  { label: "Our Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/40">
      <div className="section-container flex items-center justify-between h-14 sm:h-16 md:h-20">
        <a href="/" className="flex items-center gap-3">
          <img src={logo} alt="2 Brothers Flooring Ltd" className="h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain" />
          <span className="hidden sm:flex items-baseline gap-2">
            <span className="font-display text-xl md:text-2xl text-foreground leading-none">2 Brothers</span>
            <span className="font-display text-sm md:text-base text-muted-foreground leading-none">Flooring</span>
          </span>
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
            className="text-sm font-semibold text-primary-foreground bg-primary px-5 py-2.5 rounded-sm transition-all duration-200 hover:opacity-90 tracking-wide uppercase"
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
              className="block py-3.5 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#quote"
            onClick={() => setOpen(false)}
            className="mt-4 block text-center text-sm font-semibold text-primary-foreground bg-primary px-5 py-3.5 rounded-sm uppercase tracking-wide"
          >
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
