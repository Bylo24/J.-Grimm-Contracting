const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="section-container py-12 md:py-16">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4">
            <span className="text-foreground font-sans text-sm tracking-[0.15em] uppercase font-semibold">
              Functional Changes
            </span>
            <p className="text-xs text-muted-foreground mt-3 leading-relaxed max-w-xs">
              Simplified web design and tech consulting for businesses in Ottawa and beyond.
            </p>
            <p className="text-[10px] text-muted-foreground/60 mt-2 tracking-wide">
              An entity of Counter Junction
            </p>
          </div>
          <div className="md:col-span-3 md:col-start-6">
            <p className="text-xs font-medium text-foreground mb-3 font-sans tracking-wide uppercase">Navigate</p>
            <div className="space-y-2">
              {["Services", "Story", "Blog", "Contact"].map((label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div className="md:col-span-3 md:col-start-10">
            <p className="text-xs font-medium text-foreground mb-3 font-sans tracking-wide uppercase">Connect</p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="tel:19803306760" className="block hover:text-foreground transition-colors duration-200">
                1-980-330-6760
              </a>
              <a href="mailto:functionalchanges@gmail.com" className="block hover:text-foreground transition-colors duration-200">
                functionalchanges@gmail.com
              </a>
              <p className="text-xs leading-relaxed pt-1">
                PH5 327 Breezehill Ave S<br />Ottawa ON K1Y 1R6
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border text-xs text-muted-foreground">
          © {new Date().getFullYear()} Functional Changes. All rights reserved.
        </div>
        <div className="mt-3 text-[10px] text-muted-foreground/70">
          Built by{" "}
          <a
            href="https://brightframe.media"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 hover:text-foreground transition-colors duration-200"
          >
            Brightframe Media
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
