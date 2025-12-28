import { precisedSkills } from "@/lib/constants";
import { cn } from "@/lib/utils";

function TechstackTechnologies() {
  return (
    <div className="glass mt-16 rounded-2xl p-6">
      <h2 className="text-2xl font-bold">Lorem ipsum dolor sit amet.</h2>
      {precisedSkills.map(({ title, items }) => (
        <div key={title} className="mb-12 last:mb-0">
          <h3 className="text-primary mb-4 text-lg font-semibold">{title}</h3>
          <div className="flex flex-wrap gap-3">
            {items.map((skill) => {
              const isPrime = [
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "shadcn/ui",
                "GSAP",
                "React Query",
                "Zustand",
                "React Hook Form",
                "Zod",
                "Node.js",
                "Prisma",
                "PostgreSQL",
                "Supabase",
                "Clerk",
                "Supabase Auth",
                "Vercel",
                "GitHub Actions",
              ].includes(skill);

              return (
                <span
                  key={skill}
                  className={cn(
                    "glass rounded-lg px-5 py-3 font-medium transition-all duration-200",
                    isPrime
                      ? "bg-primary/15 text-primary border-primary/40 shadow-primary/20 border shadow-md"
                      : "bg-muted/50 text-muted-foreground border border-transparent",
                  )}
                >
                  {skill}
                </span>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TechstackTechnologies;
