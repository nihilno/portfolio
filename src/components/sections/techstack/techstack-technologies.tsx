"use client";

import { Badge } from "@/components/ui/badge";
import { precisedSkills, proficientSkills } from "@/lib/constants";
import { oswald } from "@/lib/fonts";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { ChevronDown } from "lucide-react";
import { useMemo, useRef } from "react";
import { useMediaQuery } from "react-responsive";

function TechstackTechnologies() {
  const proficientSet = useMemo(
    () => new Set(proficientSkills.map((s) => s.toLowerCase())),
    [],
  );

  const divRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  const isMobile = useMediaQuery({ maxWidth: 639 });

  useGSAP(() => {
    if (isMobile) return;
    if (!divRef.current || !headingRef.current || !gridRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: divRef.current,
        start: "top top",
        end: "+=175%",
        scrub: 1,
        pin: true,
        pinType: "transform",
        anticipatePin: 1,
      },
    });

    tl.to(
      headingRef.current,
      {
        autoAlpha: 0.25,
        scale: 0.75,
        ease: "power2.inOut",
        duration: 1,
      },
      0,
    );

    tl.to(
      gridRef.current,
      {
        autoAlpha: 1,
        ease: "power2.out",
        duration: 0.8,
      },
      0.3,
    );

    const cards = gsap.utils.toArray(gridRef.current.children);

    tl.fromTo(
      cards,
      { autoAlpha: 0, y: 80 },
      {
        autoAlpha: 1,
        y: 0,
        ease: "power2.out",
        stagger: {
          amount: 0.5,
          from: "edges",
        },
        duration: 1,
      },
      0.5,
    );

    return () => tl.kill();
    if (headingRef.current) {
      gsap.set(headingRef.current, { clearProps: "all" });
    }
    if (gridRef.current) {
      gsap.set(gridRef.current, { clearProps: "all" });
      gsap.set(gridRef.current!.children, { clearProps: "all" });
    }
  }, [isMobile]);

  return (
    <div
      className="flex min-h-dvh flex-col items-center justify-center"
      ref={divRef}
    >
      <div ref={headingRef} className="my-16 sm:absolute">
        <h1
          className={cn(
            "text-secondary-foreground glow-text text-center text-5xl font-bold uppercase sm:text-8xl xl:text-[192px] xl:leading-42",
            oswald.className,
          )}
        >
          Technologies <br /> I work with
        </h1>

        <div className="text-foreground/75 hidden translate-y-32 flex-col items-center gap-2 sm:flex">
          <span className="text-xs tracking-wider uppercase">Scroll</span>
          <ChevronDown className="size-6 animate-bounce" />
        </div>
      </div>

      <div
        ref={gridRef}
        className={
          isMobile
            ? "absolute top-1/2 left-1/2 z-10 grid -translate-x-1/2 -translate-y-1/2 grid-cols-1"
            : "mt-16 grid w-full gap-6 sm:grid-cols-2 sm:opacity-0 lg:grid-cols-3"
        }
      >
        {precisedSkills.map(({ title, icon, items }) => (
          <div
            key={title}
            className="glass group flex flex-col rounded-2xl p-4 shadow-lg sm:p-6 sm:opacity-0"
          >
            <div className="mb-8">
              <div className="border-muted-foreground/50 group-hover:border-muted-foreground/90 flex items-center justify-center gap-2 border-b border-dashed pb-6 text-center transition-colors duration-300">
                <span className="bg-primary/20 text-primary glow-border group-hover:bg-primary/40 mr-auto rounded-lg p-2 transition-colors duration-700">
                  {icon}
                </span>
                <h3 className="text-foreground/80 group-hover:text-primary/75 line-clamp-1 text-lg font-bold transition-colors duration-300 sm:text-xl">
                  {title}
                </h3>
              </div>

              <div className="relative mt-4 flex flex-wrap items-center gap-2 sm:mt-6">
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

            <div className="bg-foreground/15 group-hover:bg-primary mx-auto mt-auto h-1 w-14 rounded-full transition-colors duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechstackTechnologies;
