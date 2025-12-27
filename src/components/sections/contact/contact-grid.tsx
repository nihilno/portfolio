import ContactInfo from "./contact-info";
import ContactStatus from "./contact-status";

function ContactGrid() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <div className="glass w-full rounded-2xl p-8 lg:col-span-2">
        <ContactStatus />
      </div>
      <div className="w-full overflow-hidden rounded-2xl opacity-25">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/poster.jpg"
          preload="none"
          className="h-full w-full object-cover"
        >
          <source src="/video.webm" type="video/webm" />
        </video>
      </div>
      <div className="glass w-full rounded-2xl p-8">
        <ContactInfo />
      </div>
    </div>
  );
}

export default ContactGrid;
