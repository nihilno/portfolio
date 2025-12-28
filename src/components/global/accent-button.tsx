function AccentButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="border-border text-foreground hover:border-primary/50 focus-visible:ring-primary group animated-border bg-surface/50 relative w-full shrink-0 overflow-visible rounded-full border px-6 py-3 text-base font-medium transition-all duration-1000 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 lg:px-8 lg:py-4 lg:text-lg"
    >
      <svg
        className="download-cv-border pointer-events-none absolute top-0 left-0 h-full w-full"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
      >
        <path
          d="M 30,1 A 29,29 0 0 0 1,30 L 1,30 A 29,29 0 0 0 30,59 L 170,59 A 29,29 0 0 0 199,30 L 199,30 A 29,29 0 0 0 170,1 Z"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeDasharray="400 550"
          strokeDashoffset="400"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animated-border-path"
        />
      </svg>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
}

export default AccentButton;
