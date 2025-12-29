function TechstackLegend() {
  return (
    <div className="mt-8 flex flex-col">
      <h3 className="text-foreground/50 text-sm font-semibold">Legend</h3>
      <div className="mt-2 flex items-center gap-2">
        <div className="bg-primary/75 size-3 animate-pulse rounded-full" />
        <span className="text-muted-foreground text-xs">
          Proficient &mdash; I use this technology frequently and know it
          deeply.
        </span>
      </div>

      <div className="mt-2 flex items-center gap-2">
        <div className="bg-secondary size-3 animate-pulse rounded-full" />
        <span className="text-muted-foreground text-xs">
          Familiar &mdash; I&apos;ve used this technology before and understand
          its fundamentals.
        </span>
      </div>
    </div>
  );
}

export default TechstackLegend;
