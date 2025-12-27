import {
  Code2,
  Gem,
  Github,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  Rocket,
} from "lucide-react";

export const sectionClasses =
  "relative z-10 container mx-auto overflow-hidden py-32";

export const navLinks = [
  { href: "#about", label: "about" },
  { href: "#projects", label: "projects" },
  { href: "#experience", label: "experience" },
];

export const socials = [
  {
    icon: (
      <Github className="group-hover:text-primary size-5 cursor-pointer transition-colors" />
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

export const experiences = [
  {
    period: "2020 — 2022",
    role: "Developer",
    company: "Turbo",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima quis accusantium velit impedit quo esse!",
    technologies: ["x", "y", "z"],
    current: true,
  },
  {
    period: "2020 — 2022",
    role: "Developer",
    company: "Turbo",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima quis accusantium velit impedit quo esse!",
    technologies: ["x", "y", "z"],
    current: false,
  },
  {
    period: "2020 — 2022",
    role: "Developer",
    company: "Turbo",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima quis accusantium velit impedit quo esse!",
    technologies: ["x", "y", "z"],
    current: false,
  },
  {
    period: "2020 — 2022",
    role: "Developer",
    company: "Turbo",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima quis accusantium velit impedit quo esse!",
    technologies: ["x", "y", "z"],
    current: false,
  },
];

export const technologies = [
  { name: "Next.js 16", image: "/icons/nextjs.svg", role: "Main Framework" },
  { name: "React 19", image: "/icons/react.svg", role: "UI Library" },
  {
    name: "Tailwind CSS 4",
    image: "/icons/tailwind.svg",
    role: "Styling System",
  },
  { name: "TypeScript", image: "/icons/ts.svg", role: "Type Safety" },
  { name: "GSAP", image: "/icons/gsap.svg", role: "Animations" },
  { name: "FFmpeg", image: "/icons/ffmpeg.svg", role: "Media Processing" },
];

const contactInfoIconStyle =
  "text-primary size-6 group-hover:size-8 transition-all duration-200 ease-in-out";

export const contactInfo = [
  {
    label: "Email",
    icon: <Mail className={contactInfoIconStyle} />,
    value: "maciej.polowy1@gmail.com",
    href: "mailto:maciej.polowy1@gmail.com",
  },
  {
    label: "Phone",
    icon: <Phone className={contactInfoIconStyle} />,
    value: "+48 724 562 555",
    href: "tel: +48724562555",
  },
  {
    label: "Location",
    icon: <MapPin className={contactInfoIconStyle} />,
    value: "Tarnowskie Góry, Poland",
    href: "#",
  },
];
