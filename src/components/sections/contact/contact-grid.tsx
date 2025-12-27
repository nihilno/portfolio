import ContactInfo from "./contact-info";
import ContactStatus from "./contact-status";

function ContactGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 md:gap-8 lg:grid-cols-2">
      <div className="glass group flex w-full flex-col items-center rounded-3xl p-6 text-center lg:col-span-2">
        <ContactStatus />
      </div>
      <div className="group w-full overflow-hidden rounded-2xl opacity-25">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/poster.jpg"
          preload="none"
          className="h-full w-full overflow-hidden object-cover transition-all duration-1000 ease-in-out group-hover:scale-200"
          aria-hidden="true"
        >
          <source src="/video.webm" type="video/webm" />
        </video>
      </div>

      <div className="glass w-full rounded-3xl p-6">
        <ContactInfo />
      </div>
    </div>
  );
}

export default ContactGrid;
