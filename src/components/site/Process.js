import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { STEPS } from "../../data/content";
import { Reveal, SectionLabel } from "./Reveal";

export const Process = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="alur" ref={ref} data-testid="process-section" className="relative overflow-hidden border-y border-white/10 bg-[var(--surface)] py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal className="mb-16 max-w-3xl">
          <SectionLabel n="05">Alur Kerja</SectionLabel>
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1] tracking-tight md:text-6xl">Empat langkah, <span className="font-serif-it font-normal text-[var(--amber)]">tanpa ribet</span>.</h2>
        </Reveal>
        <div className="relative mb-10 hidden h-px bg-white/10 lg:block">
          <motion.div style={{ scaleX }} className="absolute inset-0 origin-left bg-[var(--amber)]" />
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div data-testid={`process-step-${s.n}`} className="border-l border-white/15 pl-6 lg:border-l-0 lg:pl-0">
                <span className="font-serif-it text-6xl text-[var(--amber)] md:text-7xl">{s.n}</span>
                <h3 className="mt-4 font-display text-2xl font-bold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300 md:text-base">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
