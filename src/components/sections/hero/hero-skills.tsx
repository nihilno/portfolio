import { skills } from "@/lib/constants";

function HeroSkills() {
  return (
    <div className="mt-20">
      <p className="text-muted-foreground mb-6 text-center text-sm">
        Technologies I work with
      </p>
      <div className="overflow-hidden">
        <div className="animated-marquee flex">
          {[...skills, ...skills].map((skill, index) => (
            <div key={`${skill}-${index}`} className="shrink-0 px-8 py-4">
              <span className="text-muted-foreground/50 hover:text-muted-foreground cursor-default text-xl font-semibold transition-colors">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSkills;
