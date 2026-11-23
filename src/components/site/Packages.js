import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { PACKAGES, wa } from "../../data/content";
import { Reveal, SectionLabel, EASE } from "./Reveal";

const Pkg = ({ p, i }) => (
  <motion.div
    data-testid={`package-card-${p.id}`}
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.9, delay: i * 0.12, ease: EASE }}
    whileHover={{ y: -8 }}
    className={`relative flex min-w-0 flex-col rounded-[6px] border p-7 md:p-10 ${p.featured ? "border-[var(--amber)] bg-[var(--amber)] text-[#0a0a0b]" : "border-white/10 bg-[var(--surface)]"}`}
  >
    <div className="flex flex-wrap items-center justify-between gap-3">
      <h3 className="font-display text-3xl font-extrabold tracking-tight">{p.name}</h3>
      <span className={`rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.15em] ${p.featured ? "bg-[#0a0a0b] text-[var(--amber)]" : "border border-white/15 text-zinc-300"}`}>{p.sub}</span>
    </div>
    <p className={`mt-10 font-mono text-xs uppercase tracking-[0.2em] ${p.featured ? "text-black/70" : "text-zinc-400"}`}>Mulai dari</p>
    <p data-testid={`package-price-${p.id}`} className="mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-4xl xl:text-5xl">
      <span className="mr-1 align-top text-lg">Rp</span>{p.price}
    </p>
    <ul className={`mt-8 flex-1 space-y-3 border-t pt-8 text-sm md:text-base ${p.featured ? "border-black/20" : "border-white/10 text-zinc-300"}`}>
      {p.features.map((f) => (
        <li key={f} className="flex gap-3"><Check className={`mt-0.5 h-4 w-4 shrink-0 ${p.featured ? "" : "text-[var(--amber)]"}`} />{f}</li>
      ))}
    </ul>
    <a
      data-testid={`package-whatsapp-${p.id}`}
      href={wa(`Halo Studio Holic, saya tertarik dengan paket ${p.name} (Rp ${p.price}). Boleh cek tanggal?`)}
      target="_blank"
      rel="noreferrer"
      className={`mt-10 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full font-semibold transition-[transform,background-color,color] duration-300 hover:scale-[1.02] ${p.featured ? "bg-[#0a0a0b] text-[var(--ink)]" : "bg-white/5 hover:bg-[var(--amber)] hover:text-black border border-white/15"}`}
    >
      Pilih Paket {p.name} <ArrowUpRight className="h-4 w-4" />
    </a>
  </motion.div>
);

export const Packages = () => (
  <section id="paket" data-testid="packages-section" className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
    <Reveal className="mb-14 max-w-3xl">
      <SectionLabel n="04">Paket & Harga</SectionLabel>
      <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1] tracking-tight md:text-6xl">Pilih <span className="font-serif-it font-normal text-[var(--amber)]">durasi</span> ceritamu.</h2>
      <p className="mt-6 text-base text-zinc-300 md:text-lg">Harga dapat menyesuaikan durasi, lokasi dan kebutuhan acara. Chat kami untuk penawaran yang pas.</p>
    </Reveal>
    <div className="grid gap-4 lg:grid-cols-3">
      {PACKAGES.map((p, i) => <Pkg key={p.id} p={p} i={i} />)}
    </div>
  </section>
);
