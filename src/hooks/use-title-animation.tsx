"use client";

import { gsap } from "@/lib/lenis";
import { useGSAP } from "@gsap/react";

export function useTitleCenter(ref: React.RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
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
            end: "top 20%",
            scrub: true,
          },
        },
      );
    },
    { scope: ref },
  );
}
