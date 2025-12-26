import ScrollArrow from "@/components/global/scroll-arrow";
import HeroArticle from "./hero-article";
import HeroImage from "./hero-image";
import HeroSkills from "./hero-skills";

function HeroContent() {
  return (
    <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <HeroArticle />
        <HeroImage />
        <div className="lg:col-span-2">
          <HeroSkills />
        </div>
        <ScrollArrow href="#about" />
      </div>
    </div>
  );
}

export default HeroContent;
