"use client";

import { lenis } from "@/lib/lenis";
import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href={"/"}>
      <button
        aria-label="Back to Top"
        type="button"
        onClick={() => {
          lenis?.scrollTo("top");
        }}
        className="hover:text-primary bg-foreground/70 hover:bg-primary glow-border rounded-full transition-all duration-300 ease-in-out hover:-translate-y-0.5"
      >
        {/* MP<span className="text-primary glow-text">.</span> */}
        <Image
          src={"/logo.png"}
          alt="Logo - MP"
          height={32}
          width={32}
          className="cursor-pointer rounded-2xl p-0.5"
          priority
        />
      </button>
    </Link>
  );
}

export default Logo;
