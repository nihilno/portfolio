import Image from "next/image";

function HeroImage() {
  return (
    <div className="relative">
      <div className="relative mx-auto max-w-md">
        <div className="from-primary/30 to-primary/10 absolute inset-0 animate-pulse rounded-3xl bg-linear-to-br via-transparent blur-2xl" />
        <div className="glass glow-border relative rounded-3xl p-2">
          <Image
            src={"/profile-photo.jpg"}
            alt="Maciej Polowy"
            width={512}
            height={640}
            className="aspect-4/5 w-full overflow-hidden rounded-2xl border object-cover"
          />

          <div className="glass absolute -right-4 -bottom-4 rounded-xl px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="size-3 animate-pulse rounded-full bg-green-700" />
              <span className="text-sm font-medium">Available for work</span>
            </div>
          </div>

          <div className="glass absolute -top-4 -left-4 rounded-xl px-4 py-3">
            <div className="text-primary text-2xl font-bold">5+</div>
            <div className="text-muted-foreground text-xs">Years Exp.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
