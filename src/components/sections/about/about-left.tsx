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
              start: "top 100%",
              end: "top 60%",
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
          Building the future
          <span className="text-foreground font-normal">
            , one component at a time.
          </span>
        </h2>
      </div>

      <div className="text-muted-foreground space-y-5 opacity-0">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          accusantium porro hic quos voluptatem dolor explicabo aliquam, quis
          harum ea commodi fugiat placeat. Quae sit iusto alias, excepturi nisi
          iste natus iure recusandae blanditiis, rem dolore nam sunt possimus
          facere.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis,
          tempora! Accusantium placeat, incidunt at ea, tempore neque laudantium
          aperiam fuga dolorem quam perspiciatis cumque impedit dolorum velit
          repellat perferendis temporibus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
          necessitatibus. Exercitationem placeat nulla sed libero dolore sint
          laudantium. Provident, vitae.
        </p>
      </div>

      <div className="glass glow-border mt-12 rounded-2xl p-6 opacity-0">
        <p className="text-foreground text-lg font-light italic">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa dolor
          ea enim. Doloribus dolores fugiat et asperiores neque, voluptate enim
          dignissimos, nam adipisci eligendi, laboriosam repellendus eveniet
          unde quidem distinctio!
        </p>
      </div>
    </article>
  );
}

export default AboutLeft;
