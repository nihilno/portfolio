"use client";

import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function AboutLeft() {
  const articleRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (!articleRef.current) return;
      const items = articleRef.current.querySelectorAll("div");

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
    { scope: articleRef },
  );

  return (
    <article className="space-y-8" ref={articleRef}>
      <div className="opacity-0">
        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
          About Me
        </span>
        <h2 className="text-secondary-foreground glow-text mt-8 text-4xl leading-tight font-bold md:text-5xl">
          <span className="text-foreground font-normal">From first</span>
          <span> lines of code</span>
          <span className="text-foreground font-normal"> to now.</span>
        </h2>
      </div>

      <div className="text-muted-foreground space-y-5 opacity-0">
        <p>
          My journey into web development began in technical college with HTML,
          CSS, and JavaScript. Something clicked right away — I loved shaping
          interfaces from scratch and watching them come alive. That spark
          turned into a habit: since 2018, I&apos;ve been self-teaching,
          building side projects, and progressing from static sites to Vite,
          React, and eventually Next.js, all while studying IT at university and
          working in a completely different field.
        </p>
        <p>
          In 2021 I took on my first freelance project for a travel agency. I
          wasn&apos;t fully confident yet, but I pushed through, delivered the
          site, and the client loved it. That experience gave me momentum. In
          late 2022 I shifted to full-time web work as a Web Developer for a
          turbocharger company, handling upgrades, maintenance, and monitoring.
          After graduating and realizing I wanted to grow beyond that role, I
          left in mid&ndash;2025 to freelance and deepen my Next.js skills. Now,
          after half a year of independent work, I&apos;m ready to join a team
          in 2026 and build products alongside people who care about quality as
          much as I do.
        </p>
      </div>

      <div className="glass glow-border mt-12 rounded-2xl p-6 opacity-0">
        <p className="text-foreground text-lg font-light italic">
          Every project teaches me something new — that&apos;s why I keep
          building.
        </p>
      </div>
    </article>
  );
}

export default AboutLeft;
