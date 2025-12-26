import HeroContent from "./hero-content";
import HeroParticles from "./hero-particles";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <HeroParticles />
      <HeroContent />
    </section>
  );
}

export default Hero;
