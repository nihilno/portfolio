import Button from "@/components/global/button";
import { navLinks } from "@/lib/constants";
import Link from "next/link";
import NavbarMobile from "./navbar-mobile";

function Navbar() {
  return (
    <header className="sticky top-0 left-0 z-50 w-full bg-transparent py-5">
      <nav className="container mx-auto flex items-center justify-between px-6">
        <Link
          href={"#"}
          className="hover:text-primary text-xl font-bold tracking-tight transition-colors"
        >
          MP<span className="text-primary">.</span>
        </Link>

        <ul className="glass hidden items-center gap-1 rounded-full px-2 py-1 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              href={href}
              key={href}
              className="text-muted-foreground hover:bg-surface rounded-full px-4 py-2 text-sm transition-colors hover:text-white"
            >
              <li className="capitalize">{label}</li>
            </Link>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button>Contact Me</Button>
        </div>

        <div className="flex md:hidden"></div>
        <NavbarMobile />
      </nav>
    </header>
  );
}

export default Navbar;
