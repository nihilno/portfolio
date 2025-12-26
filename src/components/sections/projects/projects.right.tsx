import AccentButton from "@/components/global/accent-button";
import { projects } from "@/lib/constants";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function ProjectsRight() {
  return (
    <div className="grid h-full grid-cols-1 gap-8 lg:grid-cols-2">
      {projects.map(({ title, image, description, tags, link, github }) => (
        <div key={image} className="group glass overflow-hidden rounded-2xl">
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            />
            <div className="from-card via-card/50 absolute inset-0 bg-linear-to-t to-transparent opacity-60" />

            <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Link
                href={link}
                className="glass hover:bg-primary hover:text-primary-foreground rounded-full p-3 transition-colors duration-300"
              >
                <ArrowUpRight className="size-8" />
              </Link>
              <Link
                href={github}
                className="glass hover:bg-primary hover:text-primary-foreground rounded-full p-3 transition-colors duration-300"
              >
                <Github className="size-8" />
              </Link>
            </div>
          </div>

          <div className="relative z-10 space-y-4 p-6">
            <div className="flex items-start justify-between">
              <h3 className="group-hover:text-primary text-xl font-semibold transition-colors">
                {title}
              </h3>
              <Link href={link}>
                <ArrowUpRight className="text-muted-foreground group-hover:text-primary size-6 transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
            <p className="text-muted-foreground text-sm">{description}</p>
            <div className="flex flex-wrap items-center gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-surface border-border text-foreground/70 hover:border-primary hover:text-primary cursor-default rounded-full border px-4 py-1.5 text-xs font-medium opacity-75 transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}

      <Link href={"#"} className="mt-12 place-self-center lg:col-span-2">
        <AccentButton>
          <span>View All My Projects</span>
          <ArrowUpRight className="size-5.5" />
        </AccentButton>
      </Link>
    </div>
  );
}

export default ProjectsRight;
