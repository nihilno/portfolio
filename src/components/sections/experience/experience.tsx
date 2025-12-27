import BgAccent from "@/components/global/bg-accent";
import { sectionClasses } from "@/lib/constants";
import { cn } from "@/lib/utils";
import ExperienceTimeline from "./experience-timeline";

function Experience() {
  return (
    <section className="relative" id="experience">
      <BgAccent />

      <article className={cn(sectionClasses, "px-6")}>
        <div className="mb-16 max-w-3xl">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Career Journey
          </span>
          <h2 className="mt-4 mb-6 text-4xl md:text-5xl">
            Experience that{" "}
            <span className="text-secondary-foreground glow-text font-bold">
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
