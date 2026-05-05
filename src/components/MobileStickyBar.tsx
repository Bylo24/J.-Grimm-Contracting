import { Phone } from "lucide-react";

const MobileStickyBar = () => {
  return (
    <div className="sm:hidden fixed inset-x-0 bottom-0 z-50 px-4 pb-[calc(env(safe-area-inset-bottom)+12px)]">
      <div className="grid grid-cols-2 gap-3 rounded-2xl border border-border bg-background/95 backdrop-blur-md p-2 shadow-[0_-10px_30px_rgba(0,0,0,0.08)]">
        <a
          href="#quote"
          className="inline-flex h-12 items-center justify-center rounded-xl bg-foreground px-4 text-sm font-semibold uppercase tracking-[0.12em] text-background transition-opacity hover:opacity-90"
        >
          Get a Quote
        </a>
        <a
          href="tel:+64275861915"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 text-sm font-semibold uppercase tracking-[0.12em] text-foreground transition-colors hover:bg-muted"
        >
          <Phone size={16} strokeWidth={2} />
          Call
        </a>
      </div>
    </div>
  );
};

export default MobileStickyBar;
