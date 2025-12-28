"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import ContactInfo from "./contact-info";
import ContactStatus from "./contact-status";

gsap.registerPlugin(ScrollTrigger);

function ContactGrid() {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!gridRef.current) return;
    const items = gridRef.current.children;
    if (items.length < 3) return;

    gsap.fromTo(
      items[0],
      { autoAlpha: 0, y: 48 },
      {
        autoAlpha: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: items[0],
          start: "top 90%",
          end: "top 60%",
          scrub: true,
        },
      },
    );

    gsap.fromTo(
      items[1],
      { autoAlpha: 0, x: -48 },
      {
        autoAlpha: 0.25,
        x: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: items[1],
          start: "top 90%",
          end: "top 60%",
          scrub: true,
        },
      },
    );

    gsap.fromTo(
      items[2],
      { autoAlpha: 0, x: 48 },
      {
        autoAlpha: 1,
        x: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: items[2],
          start: "top 100%",
          end: "top 60%",
          scrub: true,
        },
      },
    );
  }, []);

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-1 gap-4 md:gap-8 lg:grid-cols-2"
    >
      <div className="glass group flex w-full flex-col items-center rounded-3xl p-6 text-center lg:col-span-2">
        <ContactStatus />
      </div>

      <div className="group w-full overflow-hidden rounded-2xl">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/poster.jpg"
          preload="none"
          className="h-full w-full overflow-hidden object-cover transition-all duration-1000 ease-in-out group-hover:scale-200"
          aria-hidden="true"
        >
          <source src="/video.webm" type="video/webm" />
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="glass w-full rounded-3xl p-6">
        <ContactInfo />
      </div>
    </div>
  );
}

export default ContactGrid;
