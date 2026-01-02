import BgAccent from "@/components/global/bg-accent";
import { sectionClasses } from "@/lib/constants";
import { cn } from "@/lib/utils";
import TechstackLegend from "./techstack-legend";
import TechstackMarquee from "./techstack-marquee";
import TechstackTechnologies from "./techstack-technologies";

function Techstack() {
  return (
    <section className="relative" id="techstack">
      <BgAccent />
      <div className={cn(sectionClasses, "px-6")}>
        <TechstackMarquee />
        <TechstackTechnologies />
      </div>
      <div className="relative z-10 container mx-auto -mt-[25vw] mb-48 px-6 sm:-mt-[8vw] xl:-mt-[12vw]">
        <TechstackLegend />
      </div>
    </section>
  );
}

export default Techstack;
