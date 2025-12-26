import { sectionClasses } from "@/lib/constants";
import AboutLeft from "./about/about-left";
import AboutRight from "./about/about-right";

function About() {
  return (
    <section id="about" className={sectionClasses}>
      <div className="grid grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        <AboutLeft />
        <AboutRight />
      </div>
    </section>
  );
}

export default About;
