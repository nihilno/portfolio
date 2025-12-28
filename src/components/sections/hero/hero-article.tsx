"use client";

import AccentButton from "@/components/global/accent-button";
import Button from "@/components/global/button";
import { socials } from "@/lib/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronRight, Download } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

function HeroArticle() {
  const articleRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    if (!articleRef.current) return;
    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
    });

    tl.fromTo(
      articleRef.current,
      { yPercent: 5, autoAlpha: 0 },
      { autoAlpha: 1, yPercent: 0 },
    );
    tl.from(
      articleRef.current.querySelectorAll("div"),
      {
        opacity: 0,
        y: 20,
        stagger: 0.25,
      },
      "-=0.2",
    );
  }, []);

  return (
    <article className="space-y-8 opacity-0" ref={articleRef}>
      <div className="text-center lg:text-left">
        <span className="glass text-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm">
          <span className="bg-primary size-2 animate-pulse rounded-full" />
          Software Engineer &bull; React Specialist
        </span>
      </div>
      <div className="flex flex-col items-center space-y-4 text-center lg:items-start lg:text-left">
        <h1 className="max-w-[14ch] text-4xl leading-tight font-bold md:text-5xl xl:text-6xl">
          Crafting digital experiences
          <span className="text-primary glow-text"> with precision</span>.
        </h1>
        <p className="text-muted-foreground max-w-lg md:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus,
          ullam vero. Rem unde voluptates laudantium molestias tenetur illum
          iusto deleniti reprehenderit quam dolore, magni libero.
        </p>
      </div>
      <div className="mx-auto mt-12 flex max-w-60 flex-wrap items-center justify-center gap-4 md:flex-nowrap lg:mx-0 lg:justify-start">
        <Link href={"#contact"} className="w-full shrink-0">
          <Button size="md" className="group lg:px-8 lg:py-4 lg:text-lg">
            Contact Me
            <ChevronRight className="size-5 transition-all duration-200 ease-in-out group-hover:translate-x-2" />
          </Button>
        </Link>

        <AccentButton>
          <Download className="size-5 transition-all duration-200 ease-in-out group-hover:translate-y-1" />{" "}
          <span>Download CV</span>
        </AccentButton>
      </div>
      <div className="flex items-center justify-center gap-4 lg:justify-start">
        <span className="text-muted-foreground text-sm">Follow Me: </span>
        {socials.map(({ icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="glass hover:bg-primary/10 group rounded-full p-2 transition-colors"
            aria-label={label}
          >
            {icon}
          </a>
        ))}
      </div>
    </article>
  );
}

export default HeroArticle;
