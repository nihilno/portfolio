"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Lenis from "lenis";

let lenis: Lenis | null = null;

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  lenis = new Lenis({ smoothWheel: true, anchors: true });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis!.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
}
export { gsap, lenis, ScrollTrigger };
