import {
  Briefcase,
  Code2,
  FolderOpen,
  Gauge,
  Gem,
  Github,
  Layers,
  Lightbulb,
  Mail,
  MapPin,
  Monitor,
  Phone,
  Rocket,
  Server,
  ShieldCheck,
  User,
} from "lucide-react";

export const sectionClasses =
  "relative z-10 container mx-auto overflow-hidden py-32 scroll-mt-12";

const navLinksClasses =
  "size-4 group-hover:text-primary/50 transition-colors duration-300";

export const navLinks = [
  {
    href: "#techstack",
    label: "tech stack",
    icon: <Layers className={navLinksClasses} />,
  },
  {
    href: "#about",
    label: "about",
    icon: <User className={navLinksClasses} />,
  },
  {
    href: "#projects",
    label: "projects",
    icon: <FolderOpen className={navLinksClasses} />,
  },
  {
    href: "#experience",
    label: "experience",
    icon: <Briefcase className={navLinksClasses} />,
  },
];

export const socials = [
  {
    icon: (
      <Github className="group-hover:text-primary size-5 cursor-pointer transition-colors" />
    ),
    href: "https://github.com/nihilno",
    label: "github",
  },
];

export const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "shadcn/ui",
  "GSAP",
  "Three.js",
  "React Query",
  "Zustand",
  "React Hook Form",
  "Zod",
  "Node.js",
  "Prisma",
  "PostgreSQL",
  "Supabase",
  "MongoDB",
  "Redis",
  "Clerk",
  "Supabase Auth",
  "NextAuth.js",
  "Stripe",
  "Vercel",
  "GitHub Actions",
  "Docker",
  "Inngest",
  "FFmpeg",
  "Web Vitals",
  "Lighthouse Optimization",
  "SEO",
  "Structured Data",
  "Media Optimization",
  "Edge Delivery",
];

const precisedSkillsClasses = "size-5 md:size-6";

export const proficientSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Prisma",
  "PostgreSQL",
  "shadcn/ui",
  "GSAP",
  "React Query",
  "Zustand",
  "React Hook Form",
  "Zod",
  "Supabase",
  "Supabase Auth",
  "Clerk",
  "Vercel",
  "GitHub Actions",
  "Docker",
  "Lighthouse Auditing",
  "SEO & Discoverability",
  "Caching",
  "Media & Asset Optimization",
];

export const precisedSkills = [
  {
    title: "Frontend",
    icon: <Monitor className={precisedSkillsClasses} />,
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "GSAP",
      "Three.js",
    ],
  },
  {
    title: "State & Forms",
    icon: <Layers className={precisedSkillsClasses} />,
    items: ["React Query", "Zustand", "React Hook Form", "Zod"],
  },
  {
    title: "Backend & Data",
    icon: <Server className={precisedSkillsClasses} />,
    items: ["Node.js", "Prisma", "PostgreSQL", "Supabase", "MongoDB", "Redis"],
  },
  {
    title: "Auth & Payments",
    icon: <ShieldCheck className={precisedSkillsClasses} />,
    items: ["Clerk", "Supabase Auth", "NextAuth.js", "Stripe"],
  },
  {
    title: "Deployment & Tooling",
    icon: <Rocket className={precisedSkillsClasses} />,
    items: ["Vercel", "GitHub Actions", "Docker", "Inngest"],
  },
  {
    title: "Performance",
    icon: <Gauge className={precisedSkillsClasses} />,
    items: [
      "Lighthouse Auditing",
      "SEO & Discoverability",
      "Caching",
      "Media & Asset Optimization",
      "Core Web Vitals",
      "Structured Data",
    ],
  },
];

const highlightIconStyle =
  "size-12 rounded-xl bg-primary/10 grid place-items-center mb-4 group-hover:bg-primary/20 transition-colors p-2.5 text-primary duration-300 lg:size-14 ";

export const highlights = [
  {
    icon: <Code2 className={highlightIconStyle} />,
    title: "Clean Code",
    description:
      "Readable, maintainable, and structured with intention — code that’s easy to build on.",
  },
  {
    icon: <Rocket className={highlightIconStyle} />,
    title: "Performance",
    description:
      "Fast and efficient, driven by smart caching, optimized assets, and strong architecture.",
  },
  {
    icon: <Gem className={highlightIconStyle} />,
    title: "Polished UI",
    description:
      "Cohesive interfaces with clear visuals, thoughtful motion, and refined details.",
  },
  {
    icon: <Lightbulb className={highlightIconStyle} />,
    title: "Curiosity",
    description:
      "Always exploring new tools, patterns, and approaches to solve problems better.",
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
  {
    title: "Test",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, modi.",
    image: "/projects/project4.png",
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
  {
    name: "Next.js 16",
    image: "/icons/nextjs.svg",
    role: "Main Framework",
    description:
      "Smart engine that makes the website load lightning-fast and perform well in search engines.",
  },
  {
    name: "React 19",
    image: "/icons/react.svg",
    role: "UI Library",
    description:
      "The building blocks I use to create all the interactive parts — buttons, menus, sliders, and everything that responds when you click or scroll.",
  },
  {
    name: "Tailwind CSS 4",
    image: "/icons/tailwind.svg",
    role: "Styling System",
    description:
      "Ensures clean, responsive design that looks great on phones, tablets, and desktops.",
  },
  {
    name: "TypeScript",
    image: "/icons/ts.svg",
    role: "Type Safety",
    description:
      "Catches any errors I could make early during development, helping keep the site stable and reliable.",
  },
  {
    name: "GSAP",
    image: "/icons/gsap.svg",
    role: "Animations",
    description:
      "Powers the smooth slides, fades, and movements that make the site feel dynamic and engaging.",
  },
  {
    name: "FFmpeg",
    image: "/icons/ffmpeg.svg",
    role: "Media Processing",
    description:
      "Handles video and audio processing so media loads quickly and plays smoothly across browsers.",
  },
];

const contactInfoIconStyle =
  "text-primary size-5 group-hover:size-7 transition-all duration-300 ease-in-out shrink-0 md:size-6 md:group-hover:size-8";

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
    href: "tel:+48724562555",
  },
  {
    label: "Location",
    icon: <MapPin className={contactInfoIconStyle} />,
    value: "Tarnowskie Góry, Poland",
    href: "#",
  },
];
