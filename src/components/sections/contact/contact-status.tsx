function ContactStatus() {
  return (
    <>
      <div className="mb-4 flex items-center gap-3">
        <span className="h-3 w-3 animate-pulse rounded-full bg-green-700" />
        <span className="font-medium">Currently Available</span>
      </div>
      <p className="text-muted-foreground text-sm">
        I&apos;m currently open to new opportunities and exciting projects.
        Whether you need a full-time engineer or a freelance consultant,
        let&apos;s talk!
      </p>
    </>
  );
}

export default ContactStatus;
