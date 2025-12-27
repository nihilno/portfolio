import BgAccent from "@/components/global/bg-accent";
import { sectionClasses } from "@/lib/constants";
import { cn } from "@/lib/utils";
import ContactGrid from "./contact-grid";

function Contact() {
  return (
    <section className="relative" id="contact">
      <BgAccent />
      <article className={cn(sectionClasses, "px-6")}>
        <div className="mb-16 max-w-3xl">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Get in Touch
          </span>
          <h2 className="mt-4 mb-6 text-4xl md:text-5xl">
            <span className="text-secondary-foreground glow-text font-bold">
              Let&apos;s build{" "}
            </span>
            something great.
          </h2>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error,
            laudantium atque magni blanditiis nesciunt.
          </p>
        </div>

        <ContactGrid />
      </article>
    </section>
  );
}

export default Contact;
