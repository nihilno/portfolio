import { skills } from "@/lib/constants";

function TechstackMarquee() {
  return (
    <>
      <p className="text-secondary-foreground mb-6 text-center text-sm font-medium tracking-wider uppercase">
        Technologies I work with
      </p>

      <div className="relative overflow-hidden">
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-linear-to-r to-transparent" />
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-linear-to-l to-transparent" />

        <div className="animated-marquee flex">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={`${skill}-${index}`}
              className="shrink-0 px-4 py-4 sm:px-8"
            >
              <span className="text-muted-foreground/50 hover:text-muted-foreground cursor-default text-xl font-semibold transition-colors">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TechstackMarquee;
