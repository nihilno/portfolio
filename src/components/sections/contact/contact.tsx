"use client";

import BgAccent from "@/components/global/bg-accent";
import { useTitleLeft } from "@/hooks/use-title-left";
import { sectionClasses } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import ContactGrid from "./contact-grid";

function Contact() {
  const divRef = useRef<HTMLDivElement | null>(null);
  useTitleLeft(divRef);

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
            I’m open to full-time positions or freelance work starting in 2026.
            If you have an interesting project or team that values clean code,
            performance, and thoughtful details, I’d love to hear from you.
          </p>
        </div>

        <ContactGrid />
      </article>
    </section>
  );
}

export default Contact;
