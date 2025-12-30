"use client";

import { useParticles } from "@/hooks/useParticles";
import Image from "next/image";

function HeroParticles() {
  const { dots } = useParticles();

  return (
    <>
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Hero Background"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>
      <div className="from-background/20 to-background via-background/80 absolute inset-0 bg-linear-to-b" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
        {dots.map((dot, index) => (
          <div
            key={index}
            style={dot}
            className="bg-primary/20 animate-slow-drift absolute aspect-square size-1.5 rounded-full"
          />
        ))}
      </div>
    </>
  );
}

export default HeroParticles;
