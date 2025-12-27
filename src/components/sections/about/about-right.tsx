import { highlights } from "@/lib/constants";

function AboutRight() {
  return (
    <div className="grid h-full gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
      {highlights.map(({ icon, title, description }) => (
        <div
          key={title}
          className="glass group cursor-default rounded-2xl p-6 transition-all duration-700 ease-in-out select-none hover:-translate-y-1.5 hover:shadow-md lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-2 lg:text-center lg:hover:-translate-y-2"
        >
          <div className="transtion-all duration-300 ease-in-out group-hover:scale-102">
            {icon}
          </div>
          <h3 className="mb-2 text-lg font-semibold lg:text-2xl">{title}</h3>
          <p className="text-muted-foreground text-sm lg:text-base">
            {description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default AboutRight;
