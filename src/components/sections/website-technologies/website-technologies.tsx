import BgAccent from "@/components/global/bg-accent";
import WebsiteTechnologiesSlider from "./website-technologies-slider";

function WebsiteTechnologies() {
  return (
    <section className="glass relative z-10 my-32 p-6">
      <BgAccent />
      <div className="mx-auto mb-16 max-w-5xl">
        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
          section header
        </span>
        <h2 className="mt-4 mb-6 text-4xl md:text-5xl">
          Title{" "}
          <span className="text-secondary-foreground font-bold">Title</span>.
        </h2>
        <p className="text-muted-foreground">
          tutaj wyswietlimy technologie wykorzystane w tej wlasnie stronie.
        </p>
      </div>

      <WebsiteTechnologiesSlider />
    </section>
  );
}

export default WebsiteTechnologies;
