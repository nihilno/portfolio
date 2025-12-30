"use client";

import { useParticles } from "@/hooks/useParticles";
import { oswald } from "@/lib/fonts";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function NotFound() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const h2Ref = useRef<HTMLHeadingElement | null>(null);
  const h3Ref = useRef<HTMLHeadingElement | null>(null);
  const { dots } = useParticles();
  const { replace } = useRouter();

  useGSAP(() => {
    const tl = gsap.timeline();

    if (!sectionRef.current) return;
    tl.to(sectionRef.current, { autoAlpha: 1 });

    if (!(h2Ref.current || h3Ref.current)) return;
    tl.from(
      h2Ref.current,
      {
        xPercent: 100,
        ease: "power2.inOut",
      },
      0,
    )
      .to(h2Ref.current, { autoAlpha: 1 }, 0)
      .to(h2Ref.current, { autoAlpha: 0.25 }, 1.25)
      .from(h3Ref.current, { xPercent: -100, autoAlpha: 0 }, 0);

    if (!divRef.current) return;
    const items = Array.from(divRef.current.children);

    tl.from(
      items,
      {
        xPercent: (i) => (i === 0 ? -100 : 100),
        autoAlpha: 0,
        ease: "power2.in",
        stagger: 0.3,
      },
      1,
    );

    if (!buttonRef.current) return;
    tl.from(
      buttonRef.current,
      {
        xPercent: -100,
        autoAlpha: 0,
        ease: "power2.in",
      },
      1,
    );
  }, []);

  return (
    <section
      className="border-primary relative mt-32 h-full cursor-default overflow-y-hidden border-b border-dashed py-16 opacity-0 select-none"
      ref={sectionRef}
    >
      <div className="z-10 container mx-auto p-6">
        <h2
          ref={h2Ref}
          className="text-primary glow-text absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 text-[720px] font-bold opacity-0"
        >
          404
        </h2>
        <h3
          ref={h3Ref}
          className="text-primary glow-text mb-4 text-3xl font-light"
        >
          Page not found
        </h3>
        <div
          ref={divRef}
          className={cn(
            "flex flex-col",
            oswald.className,
            "text-[192px] leading-38 tracking-wider",
          )}
        >
          <h1 className="mr-auto">Something</h1>
          <h1 className="ml-auto italic">
            went wrong<span className="glow-text text-primary">.</span>
          </h1>
        </div>
        <div
          className="mx-auto mt-32 flex w-fit flex-col items-baseline gap-4"
          ref={buttonRef}
        >
          <p className="p-1.5 text-2xl">
            The page you are looking for does not exists or may have been moved.
          </p>
          <button
            onClick={() => replace("/")}
            className="hover:text-primary glass flex items-center gap-1 p-1.5 font-bold transition-all duration-300 ease-in-out hover:gap-6 hover:px-8"
          >
            <span>[</span>
            Back to homepage
            <span>]</span>
          </button>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
        {dots.map((dot, index) => (
          <div
            key={index}
            style={dot}
            className="bg-primary/20 animate-slow-drift absolute aspect-square size-1.5 rounded-full"
          />
        ))}
      </div>
    </section>
  );
}
