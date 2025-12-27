"use client";

function Logo() {
  return (
    <button
      aria-label="Back to Top"
      onClick={() => {
        window.scrollTo({
          top: 0,
        });
      }}
      className="hover:text-primary text-xl font-bold tracking-tight transition-all duration-300 ease-in-out hover:-translate-y-0.5"
    >
      MP<span className="text-primary hover:glow-text">.</span>
    </button>
  );
}

export default Logo;
