import BgAccent from "@/components/global/bg-accent";
import ScrollArrow from "@/components/global/scroll-arrow";
import { sectionClasses } from "@/lib/constants";
import { cn } from "@/lib/utils";
import TechstackLegend from "./techstack-legend";
import TechstackMarquee from "./techstack-marquee";
import TechstackTechnologies from "./techstack-technologies";

function Techstack() {
  return (
    <section className="relative" id="techstack">
      <BgAccent />
      <div className={cn(sectionClasses, "mb-32 px-6")}>
        <TechstackMarquee />
        <TechstackTechnologies />
        <TechstackLegend />
        <ScrollArrow href="#about" />
      </div>
    </section>
  );
}

export default Techstack;
