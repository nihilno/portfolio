import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Lenis from "lenis";

let lenis: Lenis | null = null;

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  lenis = new Lenis({
    autoRaf: false,
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    touchMultiplier: 2,
    infinite: false,
    anchors: true,
    syncTouch: false,
  });
  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis!.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
}
export { gsap, lenis, ScrollTrigger };
