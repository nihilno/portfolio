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
  "GitHub Copilot",
  "CodeRabbit",
];

const precisedSkillsClasses = "size-5 md:size-6";

export const proficientSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "GSAP",
  "shadcn/ui",
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
  "Docker",
  "Lighthouse Auditing",
  "SEO & Discoverability",
  "Caching",
  "Media & Asset Optimization",
  "GitHub Copilot",
  "CodeRabbit",
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
    items: [
      "Vercel",
      "GitHub Actions",
      "Docker",
      "GitHub Copilot",
      "CodeRabbit",
      "Inngest",
    ],
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
    title: "Next Ecommerce Platform",
    description:
      "Full‑stack ecommerce platform with a custom design system, robust authentication, and strong SEO foundations (metadata, sitemaps, structured data).",
    image: "/projects/ecommerce.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "AuthJS",
      "React Hook Form + Zod",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "Docker",
      "SEO",
    ],
    link: "https://mp-next-ecommerce.vercel.app/",
    github: "https://github.com/nihilno/mp-next-ecommerce",
  },
  {
    title: "Nexletter AI Newsletter System",
    description:
      "AI‑powered newsletter system that fetches curated news, summarizes it with a lightweight model, and delivers personalized updates on an automated schedule.",
    image: "/projects/nexletter.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "React Hook Form + Zod",
      "Supabase",
      "Supabase Auth",
      "Inngest",
      "EmailJS",
    ],
    link: "https://nexletter.vercel.app/",
    github: "https://github.com/nihilno/nexletter",
  },
  {
    title: "Cat-alog Price Tracker",
    description:
      "A playful price‑tracking app with secure scraping, scheduled price checks, email alerts, and a polished, animated interface.",
    image: "/projects/catalog.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase",
      "Supabase Auth",
      "Firecrawl",
      "Resend",
      "CRON Jobs",
      "GSAP",
      "Recharts",
    ],
    link: "https://mp-cat-alog.vercel.app/",
    github: "https://github.com/nihilno/cat-alog",
  },
  {
    title: "Audiophile Storefront",
    description:
      "Front‑end ecommerce challenge featuring responsive layouts, multi‑page flows, and a lightweight cart powered by Local Storage.",
    image: "/projects/audiophile.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "React Hook Form + Zod",
      "Context API",
      "Local Storage",
    ],
    link: "https://mp-audiophile.vercel.app/",
    github: "https://github.com/nihilno/audiophile",
  },
  {
    title: "MacBook Pro Product Page",
    description:
      "Build exploring high‑fidelity product animations, combining GSAP timelines with interactive 3D elements.",
    image: "/projects/apple.png",
    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "GSAP",
      "Three.js",
      "Drei",
      "Lenis",
      "Zustand",
    ],
    link: "https://3js-gsap-apple.vercel.app/",
    github: "https://github.com/nihilno/3js-gsap-apple-techpage",
  },
  {
    title: "Space Tourism Experience",
    description:
      "A space‑themed SPA with immersive UI, smooth transitions, and ambient audio that enhances the overall atmosphere.",
    image: "/projects/space.png",
    tags: ["React", "Vite", "CSS Modules", "React Router"],
    link: "https://mp-space-tourism.vercel.app/",
    github: "https://github.com/nihilno/mp-space-tourism",
  },
];

export const experiences = [
  {
    period: "2022 — 2025",
    role: "Web Developer & IT Support",
    company: "BBB Industries",
    description:
      "Built and maintained company websites, implementing updates, content changes, and technical enhancements to ensure reliability and modern functionality.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "Node.js",
      "React Query",
    ],
    current: false,
  },
  {
    period: "2021 — 2022",
    role: "Web Developer",
    company: "Rzemyk Travel",
    description:
      "Managed the full website lifecycle, including regular updates, performance monitoring, and troubleshooting to maintain security, speed, and uptime.",
    technologies: [
      "React",
      "React Router",
      "React Query",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    current: false,
  },
  {
    period: "2019",
    role: "Frontend Developer Intern",
    company: "Inforsound",
    description:
      "Contributed to UI updates using HTML, CSS, and JavaScript, building hands-on experience with modern frontend practices.",
    technologies: ["HTML", "CSS", "JavaScript", "GitHub Actions"],
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
    name: "GSAP + Lenis",
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
  },
  {
    label: "Phone",
    icon: <Phone className={contactInfoIconStyle} />,
    value: "+48 724 562 555",
  },
  {
    label: "Location",
    icon: <MapPin className={contactInfoIconStyle} />,
    value: "Tarnowskie Góry, Poland",
  },
];
