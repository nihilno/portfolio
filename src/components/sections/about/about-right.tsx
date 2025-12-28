"use client";

import { highlights } from "@/lib/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

function AboutRight() {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!gridRef.current) return;
    const items = gridRef.current.querySelectorAll("div");

    items.forEach((item) =>
      gsap.fromTo(
        item,
        { autoAlpha: 0, xPercent: 48, scale: 0.9 },
        {
          autoAlpha: 1,
          xPercent: 0,
          scale: 1,
          ease: "power2.out",

          scrollTrigger: {
            trigger: item,
            start: "top 100%",
            end: "top 60%",
            scrub: true,
          },
        },
      ),
    );
  }, []);

  return (
    <div
      className="grid h-full gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
      ref={gridRef}
    >
      {highlights.map(({ icon, title, description }) => (
        <div
          key={title}
          className="glass group cursor-default rounded-2xl p-6 opacity-0 select-none hover:shadow-md lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-2 lg:text-center"
        >
          <span className="transtion-all duration-300 ease-in-out group-hover:scale-102">
            {icon}
          </span>
          <h3 className="mb-2 text-lg font-semibold lg:text-2xl">{title}</h3>
          <p className="text-muted-foreground text-sm lg:text-base">
            {description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default AboutRight;
