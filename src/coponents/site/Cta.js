import { motion } from "framer-motion";
import { ArrowUpRight, Instagram, MessageCircle } from "lucide-react";
import { IMG, IG_URL, WA_DISPLAY, wa, NAV } from "../../data/content";
import { Logo } from "./Logo";
import { scrollToId } from "./smooth";
import { EASE } from "./Reveal";

export const Cta = () => (
  <section data-testid="final-cta-section" className="relative overflow-hidden">
    <img src={IMG.lens} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b] via-[#0a0a0b]/70 to-[#0a0a0b]" />
    <div className="relative mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-44">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--amber)]">● Tanggal cepat penuh</p>
      <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="mt-8 font-display text-[2.6rem] font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-7xl lg:text-[8rem]">
        {["Acara kamu,", "kami yang rekam."].map((l, i) => (
          <span key={l} className="block overflow-hidden pb-[0.08em]">
            <motion.span className={`block ${i ? "font-serif-it font-normal text-[var(--amber)]" : ""}`} variants={{ hidden: { y: "105%" }, show: { y: "0%" } }} transition={{ duration: 1.1, delay: i * 0.12, ease: EASE }}>
              {l}
            </motion.span>
          </span>
        ))}
      </motion.h2>
      <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
        <a data-testid="final-whatsapp-cta" href={wa()} target="_blank" rel="noreferrer" className="btn-amber btn-xl">
          <MessageCircle className="h-5 w-5" /> Chat {WA_DISPLAY} <ArrowUpRight className="h-5 w-5" />
        </a>
        <a data-testid="final-instagram-link" href={IG_URL} target="_blank" rel="noreferrer" className="btn-ghost btn-lg"><Instagram className="h-4 w-4" /> @studioholic_</a>
      </div>
    </div>
  </section>
);

export const Footer = () => (
  <footer data-testid="footer" className="border-t border-white/10">
    <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-10">
      <div className="flex items-center gap-4">
        <Logo testId="footer-logo" className="h-16" />
        <p className="text-sm text-zinc-400">Membantu segala kebutuhan kontenmu.</p>
      </div>
      <nav className="flex flex-wrap gap-x-6 gap-y-3">
        {NAV.map((n) => (
          <button key={n.id} data-testid={`footer-link-${n.id}`} onClick={() => scrollToId(n.id)} className="nav-link font-mono text-xs uppercase tracking-[0.2em] text-zinc-300">{n.label}</button>
        ))}
      </nav>
      <p className="font-mono text-xs text-zinc-400">© {new Date().getFullYear()} Studio Holic</p>
    </div>
  </footer>
);

export const FloatingWa = () => (
  <motion.a
    data-testid="floating-whatsapp-cta"
    href={wa()}
    target="_blank"
    rel="noreferrer"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 2, type: "spring", stiffness: 200, damping: 15 }}
    whileHover={{ scale: 1.08 }}
    className="wa-float fixed bottom-5 right-5 z-50 flex h-14 items-center gap-2 rounded-full bg-[#25D366] px-5 font-semibold text-[#0a0a0b] shadow-[0_10px_40px_rgba(37,211,102,0.35)]"
    aria-label="Chat WhatsApp"
  >
    <MessageCircle className="h-5 w-5" /><span className="hidden sm:inline">Tanya Tanggal & Harga</span>
  </motion.a>
);
