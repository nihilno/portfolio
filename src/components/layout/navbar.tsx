import Button from "@/components/global/button";
import Logo from "@/components/global/logo";
import { navLinks } from "@/lib/constants";
import { Menu } from "lucide-react";
import Link from "next/link";

function Navbar() {
  return (
    <header className="sticky top-0 left-0 z-50 w-full bg-transparent py-5">
      <nav className="container mx-auto flex items-center justify-between px-6">
        <Logo />

        <ul className="glass hidden translate-x-9 items-center gap-1 rounded-full px-2 py-1 md:flex">
          {navLinks.map(({ href, label }) => (
            <li
              className="text-muted-foreground hover:bg-surface rounded-full px-4 py-2 text-sm transition-colors hover:text-white"
              key={href}
            >
              <Link href={href} className="py-2 capitalize">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href={"#contact"} className="hidden md:block">
          <Button>Contact Me</Button>
        </Link>

        <div className="flex md:hidden"></div>
        <Menu className="hover:text-primary hover:glow-text block size-6 cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-0.5 md:hidden" />
        {/* <NavbarMobile /> */}
      </nav>
    </header>
  );
}

export default Navbar;
