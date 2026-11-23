import { useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { lockScroll } from "./smooth";

export const Lightbox = ({ items, index, setIndex }) => {
  const open = index !== null;
  const n = items.length;
  const go = useCallback((d) => setIndex((i) => (i + d + n) % n), [n, setIndex]);
  const close = useCallback(() => setIndex(null), [setIndex]);

  useEffect(() => {
    if (!open) return undefined;
    lockScroll(true);
    const key = (e) => { if (e.key === "Escape") close(); if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); };
    window.addEventListener("keydown", key);
    return () => { window.removeEventListener("keydown", key); lockScroll(false); };
  }, [open, go, close]);

  const w = open ? items[index] : null;
  return (
    <AnimatePresence>
      {open && (
        <motion.div data-testid="lightbox" data-lenis-prevent initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[70] flex flex-col bg-[#0a0a0b]/95 backdrop-blur-xl" onClick={close}>
          <div className="flex items-center justify-between px-5 py-4 md:px-10" onClick={(e) => e.stopPropagation()}>
            <p data-testid="lightbox-counter" className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-300">
              <span className="text-[var(--amber)]">{String(index + 1).padStart(2, "0")}</span> / {String(n).padStart(2, "0")}
            </p>
            <button data-testid="lightbox-close" onClick={close} aria-label="Tutup" className="grid h-11 w-11 place-items-center rounded-full border border-white/20 hover:border-[var(--amber)] hover:text-[var(--amber)]"><X className="h-5 w-5" /></button>
          </div>
          <div className="relative flex flex-1 items-center justify-center overflow-hidden px-4 md:px-24">
            <AnimatePresence initial={false}>
              <motion.img
                key={w.id}
                data-testid="lightbox-image"
                src={w.img}
                alt={w.title}
                onClick={(e) => e.stopPropagation()}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragEnd={(_, info) => { if (info.offset.x < -60) go(1); else if (info.offset.x > 60) go(-1); }}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.03 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute max-h-[72vh] max-w-[calc(100%-2rem)] cursor-grab rounded-[4px] object-contain active:cursor-grabbing md:max-w-[calc(100%-12rem)]"
              />
            </AnimatePresence>
            <button data-testid="lightbox-prev" onClick={(e) => { e.stopPropagation(); go(-1); }} aria-label="Sebelumnya" className="lb-nav left-3 md:left-8"><ChevronLeft className="h-6 w-6" /></button>
            <button data-testid="lightbox-next" onClick={(e) => { e.stopPropagation(); go(1); }} aria-label="Berikutnya" className="lb-nav right-3 md:right-8"><ChevronRight className="h-6 w-6" /></button>
          </div>
          <div className="px-5 py-6 text-center md:px-10" onClick={(e) => e.stopPropagation()}>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--amber)]">{w.cat}</p>
            <h3 data-testid="lightbox-title" className="mt-2 font-display text-xl font-bold md:text-3xl">{w.title}</h3>
            {w.credit && <p className="mt-1 font-mono text-xs text-zinc-300">Foto: {w.credit}</p>}
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400">Geser atau pakai tombol panah</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
