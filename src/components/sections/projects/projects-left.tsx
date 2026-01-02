"use client";

import { useTitleCenter } from "@/hooks/use-title-animation";
import { useRef } from "react";

function ProjectsLeft() {
  const articleRef = useRef<HTMLElement | null>(null);
  useTitleCenter(articleRef);

  return (
    <article className="mx-auto mb-16 max-w-3xl text-center" ref={articleRef}>
      <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
        Featured work
      </span>
      <h2 className="mx-auto mt-8 mb-6 max-w-[14ch] text-4xl leading-tight font-normal md:text-5xl">
        Things{" "}
        <span className="text-secondary-foreground glow-text font-bold">
          I&apos;ve{" "}
        </span>
        Built.
      </h2>
      <p className="text-muted-foreground mx-auto max-w-lg">
        A few projects that show how I think and build &mdash; from polished
        interfaces to full-stack applications.
      </p>
    </article>
  );
}

export default ProjectsLeft;
