import Link from "next/link";

function Logo() {
  return (
    <Link
      href={"#"}
      className="hover:text-primary text-xl font-bold tracking-tight transition-all duration-300 ease-in-out hover:-translate-y-0.5"
    >
      MP<span className="text-primary hover:glow-text">.</span>
    </Link>
  );
}

export default Logo;
