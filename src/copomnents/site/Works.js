import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Maximize2 } from "lucide-react";
import { WORKS, IG_URL } from "../../data/content";
import { Reveal, SectionLabel, EASE } from "./Reveal";
import { Lightbox } from "./Lightbox";

const inner = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)" },
  show: { clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 1.2, ease: EASE } },
};

const toItems = (w) => w.photos.map((img, i) => ({ id: `${w.id}-${i}`, img, title: w.title, cat: w.cat, credit: w.credit }));

const Work = ({ w, i, onOpen }) => (
  <motion.button
    type="button"
    data-testid={`work-item-${w.id}`}
    onClick={() => onOpen(w)}
    aria-label={`Buka foto ${w.title}`}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.1 }}
    transition={{ delayChildren: (i % 2) * 0.1 }}
    className={`group relative block w-full cursor-zoom-in text-left aspect-[4/3] lg:aspect-auto ${w.span}`}
  >
    <motion.div variants={inner} className="relative h-full w-full overflow-hidden rounded-[6px] bg-zinc-900">
      <img src={w.img} alt={w.title} loading="lazy" className="h-full w-full object-cover grayscale-[35%] transition-[transform,filter] duration-[1.2s] ease-out group-hover:scale-[1.06] group-hover:grayscale-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
      <div className="spot absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 md:inset-x-7 md:bottom-7">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--amber)]">{String(i + 1).padStart(2, "0")} — {w.cat} · {w.photos.length} foto</p>
          <h3 className="mt-2 font-display text-xl font-bold tracking-tight md:text-3xl">{w.title}</h3>
          <p className="mt-1 font-mono text-[11px] text-zinc-300">{w.credit}</p>
        </div>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/25 bg-black/30 backdrop-blur transition-[transform,background-color,color] duration-500 group-hover:scale-110 group-hover:bg-[var(--amber)] group-hover:text-black"><Maximize2 className="h-4 w-4" /></span>
      </div>
    </motion.div>
  </motion.button>
);

export const Works = () => {
  const [index, setIndex] = useState(null);
  const [items, setItems] = useState([]);
  const open = (w) => { setItems(toItems(w)); setIndex(0); };
  return (
  <section id="karya" data-testid="works-section" className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
    <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
      <Reveal>
        <SectionLabel n="02">Karya Terbaru</SectionLabel>
        <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1] tracking-tight md:text-6xl">Dari panggung <br className="hidden md:block" />ke <span className="font-serif-it font-normal text-[var(--amber)]">layar</span>.</h2>
      </Reveal>
      <Reveal delay={0.15}>
        <a data-testid="works-instagram-link" href={IG_URL} target="_blank" rel="noreferrer" className="btn-ghost"><Instagram className="h-4 w-4" /> Selengkapnya di @studioholic_</a>
      </Reveal>
    </div>
    <div className="grid gap-4 lg:auto-rows-[280px] lg:grid-cols-12">
      {WORKS.map((w, i) => <Work key={w.id} w={w} i={i} onOpen={open} />)}
    </div>
    <Lightbox items={items} index={index} setIndex={setIndex} />
  </section>
  );
};
