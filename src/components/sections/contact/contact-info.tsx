import { contactInfo } from "@/lib/constants";

function ContactInfo() {
  return (
    <>
      <h3 className="glow-text mb-6 text-2xl font-semibold md:text-3xl">
        Contact Information
      </h3>
      <div className="space-y-4">
        {contactInfo.map(({ label, icon, value }) => (
          <div
            key={label}
            className="hover:bg-surface group group outline-primary/15 border-primary/15 flex items-center gap-4 rounded-xl border border-dashed px-2 py-3 transition-colors duration-300 hover:outline sm:p-4"
          >
            <div className="bg-primary/10 group-hover:bg-primary/20 flex size-10 shrink-0 items-center justify-center rounded-xl transition-colors md:size-14">
              {icon}
            </div>
            <div className="line-clamp-2">
              <div className="text-muted-foreground text-sm">{label}</div>
              <div className="text-sm font-medium sm:text-base">{value}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ContactInfo;
