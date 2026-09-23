import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, MOBILE_NAV_LINKS, SITE } from "../data/site";
import { cn } from "../utils/cn";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Pages that don't start with a dark, full-bleed hero should use a solid
  // header from the start so text never disappears on light backgrounds.
  const solidFromStart = location.pathname !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isSolid = scrolled || solidFromStart;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          isSolid
            ? "bg-ivory/95 shadow-[0_2px_24px_rgba(0,0,0,0.08)] backdrop-blur-md"
            : "bg-gradient-to-b from-black/55 via-black/10 to-transparent"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-4 sm:px-8 lg:px-10">
          <Link to="/" className="flex shrink-0 items-center gap-3" aria-label="Sai Kirpa & Garden — Home">
            <img
              src={SITE.logo}
              alt="Sai Kirpa & Garden logo"
              className="h-11 w-11 object-contain shadow-sm"
            />
            <span className={cn(
              "font-display text-lg tracking-wide",
              isSolid ? "text-charcoal" : "text-ivory"
            )}>
              Sai Kirpa & Garden
            </span>
          </Link>

          <nav className="hidden flex-1 items-center justify-center lg:flex">
            <div className="flex items-center gap-3 xl:gap-5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.12em] transition-colors hover:text-rose-dark xl:text-[12px]",
                    isSolid ? "text-charcoal" : "text-ivory/95"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <a
              href={SITE.phoneHref}
              className={cn(
                "min-w-[122px] whitespace-nowrap text-right text-[12px] font-medium tracking-wide transition-colors hover:text-rose-dark",
                isSolid ? "text-charcoal" : "text-ivory"
              )}
            >
              <span className="text-[11px] leading-tight">{SITE.phone}</span>
            </a>
            <Link
              to="/contact"
              className="rounded-full bg-burgundy px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-ivory transition-colors hover:bg-rose-dark"
            >
              Plan Your Event
            </Link>
          </div>

          <button
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className={cn(
              "flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border lg:hidden",
              isSolid ? "border-charcoal/30" : "border-ivory/60"
            )}
          >
            <span className={cn("h-px w-5", isSolid ? "bg-charcoal" : "bg-ivory")} />
            <span className={cn("h-px w-5", isSolid ? "bg-charcoal" : "bg-ivory")} />
            <span className={cn("h-px w-3.5 self-center", isSolid ? "bg-charcoal" : "bg-ivory")} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col bg-burgundy-deep"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-display text-xl italic text-ivory">Sai Kirpa & Garden</span>
              <button
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/30 text-ivory"
              >
                <span className="relative block h-4 w-4">
                  <span className="absolute inset-0 top-1/2 h-px w-full -translate-y-1/2 rotate-45 bg-ivory" />
                  <span className="absolute inset-0 top-1/2 h-px w-full -translate-y-1/2 -rotate-45 bg-ivory" />
                </span>
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-1 overflow-y-auto px-8 pb-10">
              {MOBILE_NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <Link
                    to={link.href}
                    className="block border-b border-ivory/10 py-3.5 font-display text-3xl italic text-ivory/95 transition-colors hover:text-champagne"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="grid grid-cols-3 gap-3 border-t border-ivory/10 px-6 py-6">
              <Link
                to="/contact"
                className="rounded-full bg-rose-dark py-3 text-center text-[11px] font-semibold uppercase tracking-wider text-ivory"
              >
                Plan Event
              </Link>
              <a
                href={SITE.phoneHref}
                className="rounded-full border border-ivory/40 py-3 text-center text-[11px] font-semibold uppercase tracking-wider text-ivory"
              >
                Call Us
              </a>
              <a
                href={SITE.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-ivory/40 py-3 text-center text-[11px] font-semibold uppercase tracking-wider text-ivory"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
