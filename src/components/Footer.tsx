const Footer = () => {
  return (
    <footer className="border-t border-border bg-neutral-950 text-white">
      <div className="section-container py-14 md:py-20">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <p className="text-sm text-white leading-none">JRM Contracting Services LTD</p>
          </div>
          <div className="md:col-span-3 md:col-start-7">
            <p className="text-xs uppercase tracking-[0.2em] text-white mb-4 font-sans font-normal">Navigation</p>
            <div className="space-y-2.5">
              {[
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Reviews", href: "#reviews" },
                { label: "Contact", href: "#quote" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/70 hover:text-white transition-colors duration-200 font-normal"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="md:col-span-3 md:col-start-10">
            <p className="text-xs uppercase tracking-[0.2em] text-white mb-4 font-sans font-normal">Legal</p>
            <div className="space-y-2.5 text-sm text-white/70">
              <a href="#privacy-policy" className="block hover:text-white transition-colors duration-200 font-normal">
                Privacy Policy
              </a>
              <a href="#terms-of-service" className="block hover:text-white transition-colors duration-200 font-normal">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-white/10 text-xs text-white/55">
          <span>Copyright two thousand twenty six JRM Contracting Services LTD. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
