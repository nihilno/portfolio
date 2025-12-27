import { contactInfo } from "@/lib/constants";

function ContactInfo() {
  return (
    <>
      <h3 className="mb-6 text-2xl font-semibold">Contact Information</h3>
      <div className="space-y-4">
        {contactInfo.map(({ label, icon, value, href }) => (
          <a
            key={label}
            href={href}
            className="hover:bg-surface group group outline-primary/15 flex cursor-default items-center gap-4 rounded-xl p-4 transition-colors duration-300 hover:outline"
          >
            <div className="bg-primary/10 group-hover:bg-primary/20 flex size-14 items-center justify-center rounded-xl transition-colors">
              {icon}
            </div>
            <div>
              <div className="text-muted-foreground text-sm">{label}</div>
              <div className="font-medium">{value}</div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

export default ContactInfo;
