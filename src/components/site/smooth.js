import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

let lenis = null;

export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset: -70, duration: 1.6 });
  else el.scrollIntoView({ behavior: "smooth" });
};

export const lockScroll = (on) => { if (lenis) (on ? lenis.stop() : lenis.start()); document.documentElement.style.overflow = on ? "hidden" : ""; };

export const useLenis = () => {
  useEffect(() => {
    lenis = new Lenis({ lerp: 0.085, smoothWheel: true });
    let id;
    const raf = (t) => { lenis.raf(t); id = requestAnimationFrame(raf); };
    id = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(id); lenis.destroy(); lenis = null; };
  }, []);
};
