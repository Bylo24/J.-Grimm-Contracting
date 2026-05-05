import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="section-container py-14 md:py-20">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="2 Brothers Flooring Ltd" className="h-14 w-14 object-contain" />
              <div className="flex items-baseline gap-2">
                <span className="font-display text-2xl text-foreground leading-none">2 Brothers</span>
                <span className="font-display text-base text-muted-foreground leading-none">Flooring</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              A family run flooring company specialising in carpet, vinyl and wet floors across Whanganui
              and Manawatu. If it has a floor, we can lay it.
            </p>
            <p className="text-xs text-foreground mt-5 tracking-[0.2em] uppercase font-semibold">
              If it has a floor, we can lay it.
            </p>
          </div>
          <div className="md:col-span-3 md:col-start-7">
            <p className="text-xs font-semibold text-foreground mb-4 font-sans tracking-[0.2em] uppercase">Navigate</p>
            <div className="space-y-2.5">
              {[
                { label: "Meet The Bros", href: "#bros" },
                { label: "Our Work", href: "#work" },
                { label: "Get a Quote", href: "#quote" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="md:col-span-3 md:col-start-10">
            <p className="text-xs font-semibold text-foreground mb-4 font-sans tracking-[0.2em] uppercase">Contact</p>
            <div className="space-y-2.5 text-sm text-muted-foreground">
              <a href="tel:+64275861915" className="block hover:text-foreground transition-colors duration-200">
                027 586 1915
              </a>
              <p className="text-xs leading-relaxed pt-1">
                James Nutbrown<br />
                Director and Operations
              </p>
              <p className="text-xs leading-relaxed pt-2">
                Whanganui and Manawatu<br />New Zealand
              </p>
            </div>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-muted-foreground">
          <span>{new Date().getFullYear()} 2 Brothers Flooring Ltd. All rights reserved.</span>
          <span className="text-muted-foreground/70">
            Built by{" "}
            <a
              href="https://brightframe.media"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-foreground transition-colors duration-200"
            >
              Brightframe Media
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
