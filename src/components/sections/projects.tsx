import { sectionClasses } from "@/lib/constants";
import { cn } from "@/lib/utils";
import ProjectsLeft from "./projects/projects-left";
import ProjectsRight from "./projects/projects.right";

function Projects() {
  return (
    <section className="relative" id="projects">
      <div className="bg-primary/10 absolute top-1/4 right-0 h-96 w-96 rounded-full blur-3xl" />
      <div className="bg-highlight/8 absolute bottom-1/4 left-0 h-64 w-64 rounded-full blur-3xl" />

      <div className={cn(sectionClasses, "px-6")}>
        <ProjectsLeft />
        <ProjectsRight />
      </div>
    </section>
  );
}

export default Projects;
