import BgAccent from "@/components/global/bg-accent";
import { sectionClasses } from "@/lib/constants";
import { cn } from "@/lib/utils";
import ProjectsLeft from "./projects-left";
import ProjectsRight from "./projects.right";

function Projects() {
  return (
    <section className="relative" id="projects">
      <BgAccent />

      <div className={cn(sectionClasses, "px-6")}>
        <ProjectsLeft />
        <ProjectsRight />
      </div>
    </section>
  );
}

export default Projects;
