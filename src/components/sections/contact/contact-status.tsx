function ContactStatus() {
  return (
    <>
      <div className="mb-2 flex items-center gap-3 md:mb-4">
        <span className="size-3 animate-pulse rounded-full bg-green-700 md:size-4" />
        <span className="font-medium md:text-xl">Currently Available</span>
      </div>
      <p className="text-muted-foreground max-w-xl text-sm md:text-base">
        I&apos;m currently open to new opportunities and exciting projects.
        Whether you need a full-time engineer or a freelance consultant,
        let&apos;s talk!
      </p>
    </>
  );
}

export default ContactStatus;
