import { sectionClasses } from "@/lib/constants";
import { cn } from "@/lib/utils";
import ExperienceTimeline from "./experience/experience-timeline";

function Experience() {
  return (
    <section className="relative" id="projects">
      <div className="bg-primary/10 absolute top-1/4 right-0 h-96 w-96 rounded-full blur-3xl" />
      <div className="bg-highlight/8 absolute bottom-1/4 left-0 h-64 w-64 rounded-full blur-3xl" />
      <article className={cn(sectionClasses, "px-6")}>
        <div className="mb-16 max-w-3xl">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Career Journey
          </span>
          <h2 className="mt-4 mb-6 text-4xl md:text-5xl">
            Experience that{" "}
            <span className="text-secondary-foreground font-bold">
              speaks volumes
            </span>
            .
          </h2>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            doloribus explicabo quis commodi? Iste omnis iusto molestias?
            Aliquid, odio consectetur.
          </p>
        </div>

        <ExperienceTimeline />
      </article>
    </section>
  );
}

export default Experience;
