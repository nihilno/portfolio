"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export function useTitleAnimation(ref: any) {
  useGSAP(() => {
    if (!ref.current) return;

    const items = Array.from(ref.current.children);

    gsap.fromTo(
      items,
      {
        autoAlpha: 0,
        y: 48,
      },
      {
        autoAlpha: 1,
        y: 0,
        ease: "power2.out",
        duration: 1,
        stagger: {
          amount: 0.6,
          from: "start",
        },
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1.2,
        },
      },
    );
  }, [ref]);
}
