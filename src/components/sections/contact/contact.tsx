import { sectionClasses } from "@/lib/constants";
import { cn } from "@/lib/utils";

function Contact() {
  return (
    <section className="relative" id="contact">
      <article className={cn(sectionClasses, "px-6")}>
        <div className="mb-16 max-w-3xl">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            section header
          </span>
          <h2 className="mt-4 mb-6 text-4xl md:text-5xl">
            Title{" "}
            <span className="text-secondary-foreground font-bold">Title</span>.
          </h2>
          <p className="text-muted-foreground">contact</p>
        </div>
      </article>
    </section>
  );
}

export default Contact;
