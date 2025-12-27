"use client";

import { technologies } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

function WebsiteTechnologiesSlider() {
  const [active, setActive] = useState(0);
  function handleChangeActive(step: number) {
    setActive(
      (prev) => (prev + step + technologies.length) % technologies.length,
    );
  }

  return (
    <div>
      <div className="flex flex-col items-center gap-6 text-center">
        <h3 className="text-foreground text-2xl font-semibold">
          {technologies[active].name}
        </h3>

        <div className="glow-border border-primary/15 group hover:border-primary/50 relative mx-auto aspect-square h-40 rounded-2xl border-4 transition-colors duration-300">
          <Image
            src={technologies[active].image}
            fill
            alt={technologies[active].name}
            className="overflow-hidden object-contain p-1.5 opacity-75 transition-all duration-600 ease-in-out group-hover:scale-110 group-hover:opacity-100"
          />
        </div>

        <p className="text-muted-foreground text-lg">
          {technologies[active].role}
        </p>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2">
        <button
          onClick={() => handleChangeActive(-1)}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") handleChangeActive(-1);
            if (e.key === "ArrowRight") handleChangeActive(1);
          }}
          className="glass hover:bg-primary/10 hover:text-primary relative z-10 grid cursor-pointer place-items-center rounded-full p-3 transition-colors duration-300"
        >
          <ChevronLeft className="size-6 cursor-pointer" />
        </button>

        <div className="flex min-w-36 shrink-0 items-center justify-center gap-2">
          {technologies.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={cn(
                "size-3 rounded-full transition-all duration-300 ease-in-out",
                index === active
                  ? "bg-primary w-12"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/70 transition-colors duration-200",
              )}
            />
          ))}
        </div>

        <button
          onClick={() => handleChangeActive(1)}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") handleChangeActive(-1);
            if (e.key === "ArrowRight") handleChangeActive(1);
          }}
          className="glass hover:bg-primary/10 hover:text-primary relative z-10 grid cursor-pointer place-items-center rounded-full p-3 transition-colors duration-300"
        >
          <ChevronRight className="size-6 cursor-pointer" />
        </button>
      </div>
    </div>
  );
}

export default WebsiteTechnologiesSlider;
