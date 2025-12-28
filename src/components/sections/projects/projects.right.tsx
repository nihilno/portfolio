"use client";

import AccentButton from "@/components/global/accent-button";
import { projects } from "@/lib/constants";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

function ProjectsRight() {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!gridRef.current) return;
      const cards = gridRef.current.querySelectorAll(":scope > div:not(a)");

      gsap.fromTo(
        cards,
        {
          autoAlpha: 0,
          xPercent: (index) => {
            return index % 2 === 0 ? -16 : 16;
          },
          scale: 0.9,
        },
        {
          autoAlpha: 1,
          xPercent: 0,
          scale: 1,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            end: "bottom 25%",
            scrub: true,
          },
        },
      );
    },
    { scope: gridRef },
  );

  return (
    <div className="grid h-full grid-cols-1 gap-8 lg:grid-cols-2" ref={gridRef}>
      {projects.map(
        ({ title, image, description, tags, link, github }, index) => (
          <div
            key={`${image}-${index}`}
            className="group glass overflow-hidden rounded-2xl opacity-0"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              <div className="from-card via-card/50 absolute inset-0 bg-linear-to-t to-transparent opacity-60" />

              <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass hover:bg-primary hover:text-primary-foreground rounded-full p-3 transition-colors duration-300"
                >
                  <ArrowUpRight className="size-8 cursor-pointer" />
                </a>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass hover:bg-primary hover:text-primary-foreground rounded-full p-3 transition-colors duration-300"
                >
                  <Github className="size-8 cursor-pointer" />
                </a>
              </div>
            </div>

            <div className="relative z-10 space-y-4 p-6">
              <div className="flex items-start justify-between">
                <h3 className="group-hover:text-primary text-xl font-semibold transition-colors">
                  {title}
                </h3>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <ArrowUpRight className="text-muted-foreground group-hover:text-primary size-6 cursor-pointer transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
              <p className="text-muted-foreground text-sm">{description}</p>
              <div className="flex flex-wrap items-center gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-surface border-border text-foreground/70 hover:border-primary hover:text-primary group-hover:text-foreground cursor-default rounded-full border px-4 py-1.5 text-xs font-medium opacity-75 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ),
      )}

      <a
        href={"https://github.com/nihilno?tab=repositories"}
        className="mt-12 place-self-center lg:col-span-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AccentButton>
          <span>View All My Projects</span>
          <ArrowUpRight className="size-5.5" />
        </AccentButton>
      </a>
    </div>
  );
}

export default ProjectsRight;
