import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { IMG, wa } from "../../data/content";
import { scrollToId } from "./smooth";
import { EASE } from "./Reveal";

const LINES = [
  <>Setiap momen</>,
  <>layak jadi</>,
  <span className="font-serif-it font-normal text-[var(--amber)]">sebuah film.</span>,
];

const Line = ({ children, i }) => (
  <span className="block overflow-hidden pb-[0.08em]">
    <motion.span className="block" initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 1.2, delay: 0.25 + i * 0.14, ease: EASE }}>
      {children}
    </motion.span>
  </span>
);

const Timecode = () => {
  const [f, setF] = useState(0);
  useEffect(() => { const t = setInterval(() => setF((v) => v + 1), 1000 / 24); return () => clearInterval(t); }, []);
  const p = (n) => String(n).padStart(2, "0");
  const s = Math.floor(f / 24);
  return <span data-testid="hero-timecode">{p(Math.floor(s / 3600))}:{p(Math.floor(s / 60) % 60)}:{p(s % 60)}:{p(f % 24)}</span>;
};

const Frame = () => {
  const mx = useMotionValue(0), my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [9, -9]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 120, damping: 18 });
  const move = (e) => { const r = e.currentTarget.getBoundingClientRect(); mx.set((e.clientX - r.left) / r.width - 0.5); my.set((e.clientY - r.top) / r.height - 0.5); };
  const leave = () => { mx.set(0); my.set(0); };
  return (
    <div className="[perspective:1200px]" onMouseMove={move} onMouseLeave={leave}>
      <motion.div
        data-testid="hero-frame"
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        initial={{ clipPath: "inset(50% 50% 50% 50%)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{ duration: 1.4, delay: 0.6, ease: EASE }}
        className="relative aspect-[4/5] w-full overflow-hidden rounded-[6px] bg-zinc-900"
      >
        <motion.img src={IMG.hero} alt="Penari kethoprak dengan lentera, karya Studio Holic" className="h-full w-full scale-110 object-cover" initial={{ scale: 1.35 }} animate={{ scale: 1.1 }} transition={{ duration: 2.4, delay: 0.6, ease: EASE }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        <div className="vf-corners absolute inset-4" style={{ transform: "translateZ(40px)" }} />
        <div className="absolute left-6 top-6 flex items-center gap-2 font-mono text-xs tracking-widest text-white" style={{ transform: "translateZ(60px)" }}>
          <span className="rec-dot h-2.5 w-2.5 rounded-full bg-[var(--rec)]" /> REC
        </div>
        <div className="absolute right-6 top-6 font-mono text-xs tracking-widest text-white/90" style={{ transform: "translateZ(60px)" }}><Timecode /></div>
        <div className="absolute inset-x-6 bottom-6 flex justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-white/85" style={{ transform: "translateZ(50px)" }}>
          <span>ISO 800</span><span>24 FPS</span><span>f/1.8</span><span>4K</span>
        </div>
      </motion.div>
    </div>
  );
};

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const yTxt = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section id="top" ref={ref} data-testid="hero-section" className="relative min-h-[100svh] overflow-hidden pt-28 md:pt-32">
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-[1400px] gap-12 px-5 md:px-10 lg:grid-cols-12 lg:gap-10">
        <motion.div style={{ y: yTxt }} className="lg:col-span-7 lg:pt-10">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 1 }} className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-zinc-300">
            <span className="text-[var(--amber)]">●</span> Jasa Foto & Video Event<span className="hidden sm:inline"> — @studioholic_</span>
          </motion.p>
          <h1 data-testid="hero-headline" className="font-display text-[2.55rem] font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl lg:text-[5.6rem] xl:text-[6.6rem]">
            {LINES.map((l, i) => <Line key={i} i={i}>{l}</Line>)}
          </h1>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 1, ease: EASE }} className="mt-10 max-w-xl">
            <p className="text-base leading-relaxed text-zinc-300 md:text-lg">
              Membantu segala kebutuhan kontenmu. Dari kethoprak, kirab budaya, takbiran sampai acara kantor — kami rekam ceritanya, kamu tinggal menikmati acaranya.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a data-testid="hero-whatsapp-cta" href={wa()} target="_blank" rel="noreferrer" className="btn-amber btn-lg">Booking via WhatsApp <ArrowUpRight className="h-5 w-5" /></a>
              <button data-testid="hero-portfolio-btn" onClick={() => scrollToId("karya")} className="btn-ghost btn-lg">Lihat Karya <ArrowDown className="h-4 w-4" /></button>
            </div>
          </motion.div>
        </motion.div>
        <motion.div style={{ y: yImg }} className="relative lg:col-span-5">
          <Frame />
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.5, duration: 1, ease: EASE }} className="spin-badge absolute -left-6 -bottom-8 hidden h-28 w-28 sm:block lg:-left-14">
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <defs><path id="c" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" /></defs>
              <circle cx="50" cy="50" r="49" fill="#e0a041" />
              <text className="font-mono" fontSize="9.5" letterSpacing="2.6" fill="#0a0a0b"><textPath href="#c">FOTO • VIDEO • EVENT • KONTEN •</textPath></text>
              <circle cx="50" cy="50" r="7" fill="#f34e3a" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
      <div className="relative mx-auto mt-16 flex max-w-[1400px] items-center justify-between px-5 pb-10 font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-400 md:px-10">
        <span>Scroll</span><span className="hidden sm:inline">Foto · Video · Aftermovie · Reels</span><span>© {new Date().getFullYear()}</span>
      </div>
    </section>
  );
};
