import { useRef, useState } from "react";
import { Instagram, Play, ArrowUpRight } from "lucide-react";
import { FILMS, IG_FILMS } from "../../data/content";
import { Reveal, SectionLabel } from "./Reveal";

const Player = ({ f }) => {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  const start = () => { setPlaying(true); ref.current?.play(); };
  return (
    <div data-testid={`film-${f.id}`} className="group">
      <div className={`relative overflow-hidden rounded-[6px] border border-white/10 bg-black ${f.wide ? "aspect-video" : "aspect-[9/16]"}`}>
        <video ref={ref} data-testid={`film-video-${f.id}`} src={f.src} poster={f.poster} preload="none" playsInline controls={playing} className="h-full w-full object-cover" />
        {!playing && (
          <button data-testid={`film-play-${f.id}`} onClick={start} aria-label={`Putar ${f.title}`} className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/80 via-black/10 to-black/30">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-[var(--amber)] text-black transition-transform duration-500 group-hover:scale-110 md:h-20 md:w-20"><Play className="ml-1 h-6 w-6 fill-current md:h-7 md:w-7" /></span>
            <span className="absolute left-4 top-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white"><span className="rec-dot h-2 w-2 rounded-full bg-[var(--rec)]" /> Play</span>
          </button>
        )}
      </div>
      <div className="mt-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--amber)]">{f.cat}</p>
        <h3 className={`mt-1 font-display font-bold tracking-tight ${f.wide ? "text-2xl md:text-4xl" : "text-base md:text-xl"}`}>{f.title}</h3>
        <p className="mt-1 font-mono text-xs text-zinc-400">{f.credit}</p>
      </div>
    </div>
  );
};

const IgCard = ({ f }) => (
  <a data-testid={`ig-film-${f.id}`} href={`https://www.instagram.com/p/${f.code}/`} target="_blank" rel="noreferrer" className="group flex items-center gap-4 border-b border-white/10 py-4">
    <span className="relative h-20 w-28 shrink-0 overflow-hidden rounded-[4px] bg-zinc-900">
      <img src={f.poster} alt={f.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <Play className="absolute inset-0 m-auto h-6 w-6 fill-white text-white" />
    </span>
    <span className="min-w-0 flex-1">
      <span className="block font-display text-base font-bold tracking-tight md:text-lg">{f.title}</span>
      <span className="mt-1 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-400"><Instagram className="h-3.5 w-3.5" /> {f.credit}</span>
    </span>
    <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--amber)]" />
  </a>
);

export const Showreel = () => (
  <section id="showreel" data-testid="showreel-section" className="relative overflow-hidden border-y border-white/10 py-24 md:py-36">
    <div className="hero-glow pointer-events-none absolute inset-0 opacity-70" />
    <div className="relative mx-auto grid max-w-[1400px] gap-14 px-5 md:px-10 lg:grid-cols-12">
      <Reveal className="lg:col-span-4 lg:pt-10">
        <SectionLabel n="03">Showreel</SectionLabel>
        <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1] tracking-tight md:text-6xl">Putar <span className="font-serif-it font-normal text-[var(--amber)]">ceritanya</span>.</h2>
        <p className="mt-6 text-base leading-relaxed text-zinc-300 md:text-lg">Film pendek dan recap asli hasil kerja tim kami. Tekan putar dan rasakan suasananya.</p>
        <p className="mt-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400"><Play className="h-4 w-4 text-[var(--amber)]" /> @studioholic_ × @aoe.fa</p>
      </Reveal>
      <Reveal delay={0.1} className="min-w-0 lg:col-span-8"><Player f={FILMS[0]} /></Reveal>
      <div className="grid grid-cols-2 gap-4 md:gap-6 lg:col-span-6">
        {FILMS.slice(1).map((f, i) => <Reveal key={f.id} delay={i * 0.1} className="min-w-0"><Player f={f} /></Reveal>)}
      </div>
      <Reveal delay={0.15} className="lg:col-span-6 lg:pl-6">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-300">Tonton juga di Instagram</p>
        <div className="mt-4 border-t border-white/10">
          {IG_FILMS.map((f) => <IgCard key={f.id} f={f} />)}
        </div>
      </Reveal>
    </div>
  </section>
);
