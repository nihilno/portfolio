import ScrollArrow from "@/components/global/scroll-arrow";
import { sectionClasses } from "@/lib/constants";
import { cn } from "@/lib/utils";
import TechstackMarquee from "./techstack-marquee";
import TechstackTechnologies from "./techstack-technologies";

function Techstack() {
  return (
    <section className={cn(sectionClasses, "mb-32 px-6")} id="techstack">
      <TechstackMarquee />
      <TechstackTechnologies />
      <ScrollArrow href="#about" />
    </section>
  );
}

export default Techstack;
