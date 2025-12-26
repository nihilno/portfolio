import { Code2, Gem, Github, Lightbulb, Rocket } from "lucide-react";

export const sectionClasses =
  "relative z-10 container mx-auto overflow-hidden py-32";

export const navLinks = [
  { href: "#about", label: "about" },
  { href: "#projects", label: "projects" },
  { href: "#experience", label: "experience" },
  { href: "#testimonials", label: "testimonials" },
];

export const socials = [
  {
    icon: (
      <Github className="group-hover:text-primary size-5 transition-colors" />
    ),
    href: "#",
    label: "github",
  },
];

export const skills = [
  "React",
  "NextJS",
  "Typescript",
  "Node.js",
  "Docker",
  "Vercel",
  "TailwindCSS",
  "Shadcn",
  "GitHub Actions",
  "Prisma",
  "PostgreSQL",
  "GSAP",
  "React Query",
  "Supabase",
  "Clerk",
  "FFMPEG",
  "Stripe",
  "Zustand",
  "React Hook Form",
  "ZOD",
  "APIs",
  "Auth",
];

const highlightIconStyle =
  "size-12 rounded-xl bg-primary/10 grid place-items-center mb-4 group-hover:bg-primary/20 transition-colors p-2.5 text-primary duration-400 lg:size-16";

export const highlights = [
  {
    icon: <Code2 className={highlightIconStyle} />,
    title: "Clean Code",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, modi.",
  },
  {
    icon: <Rocket className={highlightIconStyle} />,
    title: "Performance",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, modi.",
  },
  {
    icon: <Gem className={highlightIconStyle} />,
    title: "Premium look",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, modi.",
  },
  {
    icon: <Lightbulb className={highlightIconStyle} />,
    title: "Innovation",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, modi.",
  },
];

export const projects = [
  {
    title: "Test",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, modi.",
    image: "/projects/project1.png",
    tags: ["x", "Y", "z", "c"],
    link: "#",
    github: "#",
  },
  {
    title: "Test",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, modi.",
    image: "/projects/project2.png",
    tags: ["x", "Y", "z", "c"],
    link: "#",
    github: "#",
  },
  {
    title: "Test",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, modi.",
    image: "/projects/project3.png",
    tags: ["x", "Y", "z", "c"],
    link: "#",
    github: "#",
  },
  {
    title: "Test",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, modi.",
    image: "/projects/project4.png",
    tags: ["x", "Y", "z", "c"],
    link: "#",
    github: "#",
  },
];
