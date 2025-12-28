"use client";

import { experiences } from "@/lib/constants";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function ExperienceTimeline() {
  const divRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!divRef.current) return;
      const items = divRef.current.children;

      Array.from(items).forEach((item) =>
        gsap.fromTo(
          item,
          {
            autoAlpha: 0,
            scale: 0,
            yPercent: 24,
          },
          {
            autoAlpha: 1,
            scale: 1,
            yPercent: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              scrub: true,
              end: "top 35%",
            },
          },
        ),
      );
    },
    { scope: divRef },
  );

  return (
    <div className="relative">
      <div className="timeline-glow from-primary/70 via-primary/30 absolute top-0 bottom-0 left-0 w-0.5 bg-linear-to-b to-transparent shadow-[0_0_25px_rgba(32,178,166,0.8)] lg:left-1/2 lg:-translate-x-1/2" />

      <div className="space-y-12" ref={divRef}>
        {experiences.map(
          (
            { period, role, company, description, technologies, current },
            index,
          ) => (
            <div
              key={`${role}-${index}`}
              className="group relative grid grid-cols-1 gap-8 lg:grid-cols-2"
            >
              <div
                className={cn(
                  "bg-primary ring-background absolute top-0 left-0 z-10 size-3 -translate-x-1/2 rounded-full ring-4 lg:left-1/2",
                  current && "size-4",
                )}
              >
                {current && (
                  <span className="bg-primary absolute inset-0 animate-ping rounded-full opacity-75" />
                )}
              </div>

              <div
                className={cn(
                  "pl-4 sm:pl-8 lg:pl-0",
                  index % 2 === 0
                    ? "lg:pr-16 lg:text-right"
                    : "lg:col-start-2 lg:pl-16",
                )}
              >
                <div className="glass border-primary/15 hover:border-primary/60 cursor-default rounded-2xl border p-6 transition-all duration-400 ease-in-out hover:-translate-y-1 hover:scale-102">
                  <span className="text-primary text-sm font-medium">
                    {period}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold">{role}</h3>
                  <p className="text-muted-foreground">{company}</p>
                  <p className="text-muted-foreground group-hover:text-foreground/70 mt-4 text-sm transition-colors duration-300">
                    {description}
                  </p>
                  <div
                    className={cn(
                      "mt-4 flex flex-wrap gap-2",
                      index % 2 === 0 && "lg:justify-end",
                    )}
                  >
                    {technologies.map((technology, index) => (
                      <span
                        key={index}
                        className="bg-surface border-border text-muted-foreground group-hover:text-foreground rounded-full border px-3 py-1 text-xs transition-colors duration-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

export default ExperienceTimeline;
