import Button from "@/components/global/button";
import CvButton from "@/components/global/cv-button";
import { socials } from "@/lib/constants";
import { ChevronRight, Download } from "lucide-react";
import Link from "next/link";

function HeroArticle() {
  return (
    <div className="space-y-8">
      <div>
        <span className="glass text-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm">
          <span className="bg-primary size-2 animate-pulse rounded-full" />
          Software Engineer &bull; React Specialist
        </span>
      </div>
      <div className="space-y-4">
        <h1 className="text-5xl leading-tight font-bold md:text-6xl lg:text-7xl">
          Crafting digital
          <br />
          experiences
          <span className="text-primary glow-text">
            {" "}
            with <br />
            precision
          </span>
          .
        </h1>
        <p className="text-muted-foreground max-w-lg text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus,
          ullam vero. Rem unde voluptates laudantium molestias tenetur illum
          iusto deleniti reprehenderit quam dolore, magni libero.
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button size="lg" className="group">
          Contact Me
          <ChevronRight className="size-5 transition-all duration-200 ease-in-out group-hover:translate-x-2" />
        </Button>
        <CvButton>
          <Download className="size-5.5 transition-all duration-200 ease-in-out group-hover:translate-y-1" />
          <span>Download CV</span>
        </CvButton>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-muted-foreground text-sm">Follow Me: </span>
        {socials.map(({ icon, href, label }) => (
          <Link
            key={label}
            href={href}
            className="glass hover:bg-primary/10 group rounded-full p-2 transition-colors"
            aria-label={label}
          >
            {icon}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HeroArticle;
