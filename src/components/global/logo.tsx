"use client";

import Image from "next/image";

function Logo() {
  return (
    <button
      aria-label="Back to Top"
      type="button"
      onClick={() => {
        window.scrollTo({
          top: 0,
        });
      }}
      className="hover:text-primary bg-foreground hover:bg-primary glow-border rounded-full transition-all duration-300 ease-in-out hover:-translate-y-0.5"
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
  );
}

export default Logo;
