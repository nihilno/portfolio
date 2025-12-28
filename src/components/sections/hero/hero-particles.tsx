"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function HeroParticles() {
  const [dots, setDots] = useState<ParticlesState[]>([]);

  useEffect(() => {
    const newDots = Array.from({ length: 30 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
      animationDelay: `${Math.random() * 5}s`,
    }));
    //eslint-disable-next-line
    setDots(newDots);
  }, []);

  return (
    <>
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Hero"
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
