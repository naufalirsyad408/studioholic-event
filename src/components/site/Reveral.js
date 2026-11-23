import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export const Reveal = ({ children, delay = 0, y = 40, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.9, delay, ease: EASE }}
  >
    {children}
  </motion.div>
);

export const SectionLabel = ({ n, children }) => (
  <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-[var(--amber)]">
    <span>{n}</span>
    <span className="h-px w-10 bg-[#e0a041]/60" />
    <span className="text-zinc-300">{children}</span>
  </div>
);

export { EASE };
