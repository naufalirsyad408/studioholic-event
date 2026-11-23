import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES, wa } from "../../data/content";
import { Reveal, SectionLabel, EASE } from "./Reveal";

const Card = ({ s, i }) => (
  <motion.a
    data-testid={`service-card-${s.id}`}
    href={wa(`Halo Studio Holic, saya ingin tanya layanan ${s.title}.`)}
    target="_blank"
    rel="noreferrer"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.9, delay: i * 0.08, ease: EASE }}
    className={`service-card group relative flex min-h-[260px] flex-col justify-end overflow-hidden rounded-[6px] border border-white/10 bg-[var(--surface)] p-7 md:p-9 ${s.span}`}
  >
    {s.img && (
      <>
        <img src={s.img} alt={s.title} className="absolute inset-0 h-full w-full object-cover opacity-55 transition-[transform,opacity] duration-[1.2s] ease-out group-hover:scale-105 group-hover:opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/60 to-transparent" />
      </>
    )}
    <span className="absolute right-7 top-7 grid h-11 w-11 place-items-center rounded-full border border-white/20 transition-[transform,background-color] duration-500 group-hover:rotate-45 group-hover:bg-[var(--amber)] group-hover:text-black">
      <ArrowUpRight className="h-5 w-5" />
    </span>
    <div className="relative">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--amber)]">{s.tag}</p>
      <h3 className="mt-4 font-display text-2xl font-bold tracking-tight md:text-4xl">{s.title}</h3>
      <p className="mt-3 max-w-lg text-sm leading-relaxed text-zinc-300 md:text-base">{s.text}</p>
    </div>
  </motion.a>
);

export const Services = () => (
  <section id="layanan" data-testid="services-section" className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
    <div className="mb-14 grid gap-6 md:grid-cols-12 md:items-end">
      <Reveal className="md:col-span-7">
        <SectionLabel n="01">Layanan</SectionLabel>
        <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1] tracking-tight md:text-6xl">Satu tim, <span className="font-serif-it font-normal text-[var(--amber)]">semua</span> kebutuhan konten.</h2>
      </Reveal>
      <Reveal delay={0.15} className="md:col-span-5">
        <p className="text-base leading-relaxed text-zinc-300 md:text-lg">Foto, video, aftermovie dan reels dikerjakan oleh tim yang sama, jadi gaya visual acaramu tetap seragam dari awal sampai akhir.</p>
      </Reveal>
    </div>
    <div className="grid gap-4 lg:auto-rows-[300px] lg:grid-cols-12">
      {SERVICES.map((s, i) => <Card key={s.id} s={s} i={i} />)}
    </div>
  </section>
);
