import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { NAV, wa } from "../../data/content";
import { scrollToId } from "./smooth";

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const go = (id) => { setOpen(false); scrollToId(id); };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color] duration-500 border-b ${scrolled ? "bg-[#0a0a0b]/75 backdrop-blur-xl border-white/10" : "border-transparent"}`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 md:px-10">
        <button data-testid="nav-logo" onClick={() => go("top")} aria-label="Kembali ke atas"><Logo /></button>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <button key={n.id} data-testid={`nav-link-${n.id}`} onClick={() => go(n.id)} className="nav-link font-mono text-xs uppercase tracking-[0.2em] text-zinc-300 hover:text-white">
              {n.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <span className="hidden sm:block">
            <a data-testid="nav-whatsapp-cta" href={wa()} target="_blank" rel="noreferrer" className="btn-amber">
              <span className="rec-dot h-2 w-2 rounded-full bg-[var(--rec)]" /> Cek Tanggal <ArrowUpRight className="h-4 w-4" />
            </a>
          </span>
          <button data-testid="nav-menu-toggle" onClick={() => setOpen((v) => !v)} className="grid h-11 w-11 place-items-center rounded-full border border-white/15 md:hidden" aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div data-testid="mobile-menu" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="border-t border-white/10 bg-[#0a0a0b]/95 px-5 pb-8 pt-4 backdrop-blur-xl md:hidden">
            {NAV.map((n, i) => (
              <button key={n.id} data-testid={`mobile-nav-link-${n.id}`} onClick={() => go(n.id)} className="flex w-full items-baseline gap-4 border-b border-white/10 py-4 text-left">
                <span className="font-mono text-xs text-[var(--amber)]">0{i + 1}</span>
                <span className="font-display text-3xl font-bold">{n.label}</span>
              </button>
            ))}
            <a data-testid="mobile-whatsapp-cta" href={wa()} target="_blank" rel="noreferrer" className="btn-amber mt-6 w-full justify-center">Chat WhatsApp <ArrowUpRight className="h-4 w-4" /></a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
