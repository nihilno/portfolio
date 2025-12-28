"use client";

import BgAccent from "@/components/global/bg-accent";
import { useTitleCenter } from "@/hooks/use-title-animation";
import { useRef } from "react";
import WebsiteTechnologiesSlider from "./website-technologies-slider";

function WebsiteTechnologies() {
  const articleRef = useRef<HTMLElement | null>(null);
  useTitleCenter(articleRef);

  return (
    <section className="glass relative z-10 mx-auto w-full p-6 text-center">
      <BgAccent />
      <article className="mx-auto mb-16 max-w-5xl" ref={articleRef}>
        <h2 className="text-secondary-foreground glow-text mx-auto mt-8 mb-6 max-w-[14ch] text-4xl leading-tight font-bold md:text-5xl">
          Built with
        </h2>
        <p className="text-muted-foreground mx-auto max-w-lg">
          This portfolio is powered by Next.js 16 and React 19, styled with
          Tailwind CSS 4, typed with TypeScript, animated with GSAP, and
          enhanced with FFmpeg for media processing.
        </p>
      </article>

      <WebsiteTechnologiesSlider />
    </section>
  );
}

export default WebsiteTechnologies;
