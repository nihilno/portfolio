import { Badge } from "@/components/ui/badge";
import { precisedSkills, proficientSkills } from "@/lib/constants";

function TechstackTechnologies() {
  return (
    <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {precisedSkills.map(({ title, icon, items }) => (
        <div
          key={title}
          className="glass group hover:border-primary flex flex-col rounded-2xl p-6 shadow-lg transition-all duration-700 ease-in-out hover:-translate-y-1.5"
        >
          <div className="mb-8">
            <div className="border-muted-foreground/50 group-hover:border-muted-foreground/90 flex items-center justify-center gap-2 border-b border-dashed pb-6 text-center transition-colors duration-300">
              <span className="bg-primary/20 text-primary glow-border mr-auto rounded-lg p-2">
                {icon}
              </span>
              <h3 className="text-foreground/80 group-hover:text-primary/75 line-clamp-1 text-lg font-bold transition-colors duration-300 sm:text-xl">
                {title}
              </h3>
            </div>
            <div className="relative mt-6 flex flex-wrap items-center gap-2">
              {items.map((item) => {
                const proficient = new Set(
                  proficientSkills.map((s) => s.toLowerCase()),
                );
                const isProficient = proficient.has(item.toLowerCase());

                return (
                  <Badge
                    key={item}
                    variant={isProficient ? "default" : "secondary"}
                    className="text-[13px] md:text-sm"
                  >
                    {item}
                  </Badge>
                );
              })}
            </div>
          </div>
          <div className="bg-foreground/15 group-hover:bg-muted-foreground/90 mx-auto mt-auto h-1 w-14 rounded-full transition-colors duration-300" />
        </div>
      ))}
    </div>
  );
}

export default TechstackTechnologies;
