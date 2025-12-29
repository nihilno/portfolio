"use client";

import { Badge } from "@/components/ui/badge";
import { precisedSkills, proficientSkills } from "@/lib/constants";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function TechstackTechnologies() {
  const proficientSet = new Set(proficientSkills.map((s) => s.toLowerCase()));

  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top 80%",
        end: "top center",
        scrub: true,
      },
    });

    if (!titleRef.current) return;

    tl.to(
      titleRef.current,
      {
        autoAlpha: 0.25,
        ease: "power1.inOut",
        fontSize: "156px",
      },
      0,
    );

    if (!gridRef.current) return;

    const cards = Array.from(gridRef.current.children);
    cards.forEach((card, index) => {
      const side = index % 3 === 0 ? -80 : index % 3 === 1 ? 0 : 80;

      tl.fromTo(
        card,
        { autoAlpha: 0, x: side, y: 24, scale: 0.9 },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          scale: 1,
          ease: "power2.out",
        },
        0,
      );
    });
  }, []);

  return (
    <div className="relative">
      <h1
        className="text-secondary-foreground glow-text absolute top-1/2 left-1/2 -z-10 mb-6 -translate-x-1/2 -translate-y-1/2 text-center text-[192px] leading-36 font-bold uppercase"
        ref={titleRef}
      >
        Technologies I work with
      </h1>
      <div
        className="relative z-10 mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        ref={gridRef}
      >
        {precisedSkills.map(({ title, icon, items }) => (
          <div
            key={title}
            className="glass group hover:border-primary flex flex-col rounded-2xl p-6 shadow-lg"
          >
            <div className="mb-8">
              <div className="border-muted-foreground/50 group-hover:border-muted-foreground/90 flex items-center justify-center gap-2 border-b border-dashed pb-6 text-center transition-colors duration-300">
                <span className="bg-primary/20 text-primary glow-border group-hover:bg-primary/30 mr-auto rounded-lg p-2 transition-colors duration-700">
                  {icon}
                </span>
                <h3 className="text-foreground/80 group-hover:text-primary/75 line-clamp-1 text-lg font-bold transition-colors duration-300 sm:text-xl">
                  {title}
                </h3>
              </div>
              <div className="relative mt-6 flex flex-wrap items-center gap-2">
                {items.map((item) => {
                  const isProficient = proficientSet.has(item.toLowerCase());

                  return (
                    <Badge
                      key={item}
                      variant={isProficient ? "default" : "secondary"}
                      className="text-[13px] md:text-sm"
                    >
                      {item}
                    </Badge>
                  );
                })}
              </div>
            </div>
            <div className="bg-foreground/15 group-hover:bg-muted-foreground/90 mx-auto mt-auto h-1 w-14 rounded-full transition-colors duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechstackTechnologies;
