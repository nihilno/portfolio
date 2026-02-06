"use client";

import Button from "@/components/global/button";
import Logo from "@/components/global/logo";
import { navLinks } from "@/lib/constants";
import { gsap } from "@/lib/lenis";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import NavbarMobile from "./navbar-mobile";

function Navbar() {
  useGSAP(() => {
    gsap.to("#navbar", {
      background: "#0f1418",
      backdropFilter: "blur(12px)",
      paddingTop: "30px",
      paddingBottom: "30px",
      borderColor: "#ffffff30",
      scrollTrigger: {
        trigger: "#navbar",
        start: "top top",
        end: "top+=1000px top",
        scrub: true,
      },
    });
  }, []);

  return (
    <header
      className="border-muted-foreground/15 sticky top-0 left-0 z-50 w-full border-b border-dashed py-5"
      id="navbar"
    >
      <nav className="container mx-auto flex items-center justify-between px-6">
        <Logo />

        <ul className="glass hidden translate-x-9 items-center gap-1 rounded-full px-2 py-1 md:flex">
          {navLinks.map(({ href, label }) => (
            <li
              className="text-muted-foreground hover:bg-surface hover:text-foreground rounded-full px-4 py-2 text-sm transition-colors"
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

        <div className="flex md:hidden">
          <NavbarMobile />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
