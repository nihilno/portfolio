"use client";

import { useTitleAnimation } from "@/hooks/use-title-animation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function ProjectsLeft() {
  const articleRef = useRef<HTMLElement | null>(null);
  useTitleAnimation(articleRef);

  return (
    <article className="mx-auto mb-16 max-w-3xl text-center" ref={articleRef}>
      <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
        Featured work
      </span>
      <h2 className="mx-auto mt-8 mb-6 max-w-[14ch] text-4xl leading-tight font-normal md:text-5xl">
        Projects that{" "}
        <span className="text-secondary-foreground glow-text font-bold">
          I am most proud of
        </span>
        .
      </h2>
      <p className="text-muted-foreground mx-auto max-w-lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta optio,
        animi soluta reiciendis porro ratione.
      </p>
    </article>
  );
}

export default ProjectsLeft;
