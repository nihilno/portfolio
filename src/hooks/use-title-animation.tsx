"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export function useTitleAnimation(ref: React.RefObject<HTMLElement | null>) {
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
        stagger: 0.5,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          end: "top center",
          scrub: true,
        },
      },
    );
  }, [ref]);
}
