"use client";

import { useEffect, useState } from "react";

export function useParticles() {
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

  return { dots };
}
