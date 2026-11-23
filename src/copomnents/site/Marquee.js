import { MARQUEE } from "../../data/content";

const Row = ({ hidden }) => (
  <div className="marquee-track flex shrink-0 items-center gap-10 pr-10" aria-hidden={hidden}>
    {MARQUEE.map((w, i) => (
      <span key={w} className="flex items-center gap-10">
        <span className={i % 2 ? "font-serif-it text-5xl text-[var(--amber)] md:text-7xl" : "font-display text-5xl font-extrabold md:text-7xl"}>{w}</span>
        <span className="h-3 w-3 rounded-full bg-[var(--rec)]" />
      </span>
    ))}
  </div>
);

export const Marquee = () => (
  <section data-testid="editorial-marquee" className="relative overflow-hidden border-y border-white/10 py-8 md:py-10">
    <div className="flex w-max">
      <Row /><Row hidden />
    </div>
  </section>
);
