import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

export function useTitleLeft(ref: React.RefObject<HTMLDivElement | null>) {
  useGSAP(
    () => {
      if (!ref.current) return;
      const items = Array.from(ref.current.children);

      items.forEach((item) => {
        gsap.fromTo(
          item,
          { autoAlpha: 0, xPercent: -8, scale: 0.95 },
          {
            autoAlpha: 1,
            xPercent: 0,
            scale: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "top center",
              scrub: true,
            },
          },
        );
      });
    },
    { scope: ref },
  );
}
