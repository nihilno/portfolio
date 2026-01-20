export default function Head() {
  return (
    <>
      <link rel="preload" href="/icons/ffmpeg.svg" as="image" />
      <link rel="preload" href="/icons/gsap.svg" as="image" />
      <link rel="preload" href="/icons/nextjs.svg" as="image" />
      <link rel="preload" href="/icons/react.svg" as="image" />
      <link rel="preload" href="/icons/tailwind.svg" as="image" />
      <link rel="preload" href="/icons/ts.svg" as="image" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Maciej Polowy",
            url: "https://maciejpolowy.space",
            jobTitle: "Full-Stack Developer",
            sameAs: ["https://github.com/nihilno"],
          }),
        }}
      />
    </>
  );
}
