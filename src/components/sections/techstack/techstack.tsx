import BgAccent from "@/components/global/bg-accent";
import { sectionClasses } from "@/lib/constants";
import { cn } from "@/lib/utils";
import TechstackMarquee from "./techstack-marquee";
import TechstackTechnologies from "./techstack-technologies";

function Techstack() {
  return (
    <section className="relative" id="techstack">
      <BgAccent />
      <div className={cn(sectionClasses, "mb-32 px-6")}>
        <TechstackMarquee />
        <TechstackTechnologies />
        {/* <TechstackLegend /> */}
      </div>
    </section>
  );
}

export default Techstack;
