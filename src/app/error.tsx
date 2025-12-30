"use client";

import { useParticles } from "@/hooks/useParticles";
import { AlertCircleIcon, Home, RotateCw } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { dots } = useParticles();

  return (
    <section className="relative flex min-h-dvh cursor-default items-center justify-center py-16 select-none">
      <div className="flex flex-col items-center justify-center text-center">
        <AlertCircleIcon className="text-muted-foreground mb-4 size-12 animate-pulse lg:size-18" />
        <h2 className="glow-text mb-2 text-2xl font-semibold md:text-4xl lg:text-6xl">
          Something <br />
          <span className="italic">went wrong</span>.
        </h2>
        <p className="mt-4 max-w-md text-sm opacity-60 md:mt-8 md:text-base">
          Error message:{" "}
          <span>
            {error.message ||
              "An error occurred, but don't worry — we'll get you back."}
          </span>
        </p>
        <div className="mt-6 flex items-center gap-8 md:mt-12">
          <button
            onClick={reset}
            className="glass-strong glow-border flex items-center gap-2 rounded-md p-2 transition-all duration-300 ease-in-out hover:opacity-80"
          >
            <RotateCw /> <span>Reload</span>
          </button>
          <Link href="/">
            <button className="glass-strong glow-border flex items-center gap-2 rounded-md p-2 transition-all duration-300 ease-in-out hover:opacity-80">
              <Home /> <span>Go Home</span>
            </button>
          </Link>
        </div>
        <p className="mt-8 text-xs opacity-75 md:text-sm">
          Error ID: {error.digest || "Not known yet."}
        </p>
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
