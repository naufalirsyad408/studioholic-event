import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { FAQS } from "../../data/content";
import { Reveal, SectionLabel } from "./Reveal";

export const Faq = () => (
  <section id="faq" data-testid="faq-section" className="mx-auto grid max-w-[1400px] gap-12 px-5 py-24 md:px-10 md:py-36 lg:grid-cols-12">
    <Reveal className="lg:col-span-5">
      <SectionLabel n="06">FAQ</SectionLabel>
      <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1] tracking-tight md:text-6xl">Sering <span className="font-serif-it font-normal text-[var(--amber)]">ditanyakan</span>.</h2>
    </Reveal>
    <Reveal delay={0.1} className="lg:col-span-7">
      <Accordion type="single" collapsible className="border-t border-white/10">
        {FAQS.map((f, i) => (
          <AccordionItem key={f.q} value={`f${i}`} className="border-white/10">
            <AccordionTrigger data-testid={`faq-trigger-${i}`} className="py-7 text-left font-display text-lg font-bold tracking-tight hover:no-underline md:text-2xl">
              {f.q}
            </AccordionTrigger>
            <AccordionContent data-testid={`faq-content-${i}`} className="pb-7 text-base leading-relaxed text-zinc-300">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Reveal>
  </section>
);
