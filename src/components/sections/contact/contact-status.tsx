function ContactStatus() {
  return (
    <>
      <div className="mb-2 flex items-center gap-3 md:mb-4">
        <span className="size-3 animate-pulse rounded-full bg-green-700 md:size-4" />
        <span className="font-medium md:text-xl">Currently Available</span>
      </div>
      <p className="text-muted-foreground max-w-xl text-sm md:text-base">
        I&apos;m open to new opportunities in 2026 — full-time roles, freelance
        projects, or just a conversation about ideas. Feel free to get in touch.
      </p>
    </>
  );
}

export default ContactStatus;
