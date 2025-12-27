import About from "@/components/sections/about/about";
import Contact from "@/components/sections/contact/contact";
import Experience from "@/components/sections/experience/experience";
import Hero from "@/components/sections/hero/hero";
import Projects from "@/components/sections/projects/projects";
import Techstack from "@/components/sections/techstack/techstack";
import WebsiteTechnologies from "@/components/sections/website-technologies/website-technologies";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Techstack />
      <About />
      <Projects />
      <Experience />
      <WebsiteTechnologies />
      <Contact />
    </div>
  );
}
