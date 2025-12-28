"use client";

import BgAccent from "@/components/global/bg-accent";
import { sectionClasses } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import ContactGrid from "./contact-grid";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const divRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!divRef.current) return;
    const items = Array.from(divRef.current.children);

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
            start: "top 85%",
            end: "top 60%",
            scrub: true,
          },
        },
      );
    });
  }, []);

  return (
    <section className="relative" id="contact">
      <BgAccent />
      <article className={cn(sectionClasses, "px-6")}>
        <div className="mb-16 max-w-3xl" ref={divRef}>
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Get in Touch
          </span>
          <h2 className="mt-4 mb-6 text-4xl md:text-5xl">
            <span className="text-secondary-foreground glow-text font-bold">
              Let&apos;s build{" "}
            </span>
            something great.
          </h2>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error,
            laudantium atque magni blanditiis nesciunt.
          </p>
        </div>

        <ContactGrid />
      </article>
    </section>
  );
}

export default Contact;
