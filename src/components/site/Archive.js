import { useState } from "react";
import { ARCHIVE } from "../../data/content";
import { Reveal, SectionLabel } from "./Reveal";
import { Lightbox } from "./Lightbox";

const half = Math.ceil(ARCHIVE.length / 2);
const ROWS = [ARCHIVE.slice(0, half), ARCHIVE.slice(half)];

const Strip = ({ items, offset, reverse, onOpen }) => (
  <div className="archive-row flex w-max">
    {[0, 1].map((copy) => (
      <div key={copy} className={`archive-track flex shrink-0 gap-3 pr-3 ${reverse ? "archive-rev" : ""}`} aria-hidden={copy === 1}>
        {items.map((p, i) => (
          <button
            key={`${p.id}-${copy}`}
            type="button"
            tabIndex={copy ? -1 : 0}
            data-testid={copy ? undefined : `archive-photo-${p.id}`}
            onClick={() => onOpen(offset + i)}
            className="group relative h-44 w-36 shrink-0 cursor-zoom-in overflow-hidden rounded-[4px] bg-zinc-900 md:h-64 md:w-52"
          >
            <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover grayscale-[40%] transition-[transform,filter] duration-700 group-hover:scale-110 group-hover:grayscale-0" />
          </button>
        ))}
      </div>
    ))}
  </div>
);

export const Archive = () => {
  const [index, setIndex] = useState(null);
  return (
    <section data-testid="archive-section" className="py-20 md:py-28">
      <Reveal className="mx-auto mb-10 flex max-w-[1400px] flex-col justify-between gap-4 px-5 md:flex-row md:items-end md:px-10">
        <div>
          <SectionLabel n="—">Arsip Footage</SectionLabel>
          <h3 className="mt-5 font-display text-3xl font-extrabold tracking-tight md:text-5xl">{ARCHIVE.length} frame, <span className="font-serif-it font-normal text-[var(--amber)]">satu rasa</span>.</h3>
        </div>
        <p className="max-w-sm text-sm text-zinc-300 md:text-base">Semua footage dari @studioholic_ dan @aoe.fa. Klik foto mana saja untuk melihat versi besar.</p>
      </Reveal>
      <div className="space-y-3 overflow-hidden">
        <Strip items={ROWS[0]} offset={0} onOpen={setIndex} />
        <Strip items={ROWS[1]} offset={half} reverse onOpen={setIndex} />
      </div>
      <Lightbox items={ARCHIVE} index={index} setIndex={setIndex} />
    </section>
  );
};
