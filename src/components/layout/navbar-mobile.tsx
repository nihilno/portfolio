"use client";

import Button from "@/components/global/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/lib/constants";
import { Menu, XIcon } from "lucide-react";
import Link from "next/link";

function NavbarMobile() {
  const currentYear = new Date().getFullYear();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          className="block"
          aria-label="Open navigation menu"
        >
          <Menu className="hover:text-primary size-6 cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-0.5 md:hidden" />
        </button>
      </SheetTrigger>
      <SheetContent
        className="glass border-muted-foreground/15 border-b border-dashed px-0 py-5"
        side="top"
      >
        <div className="relative z-10 container mx-auto">
          <div className="bg-highlight/8 absolute bottom-1/4 left-0 h-64 w-64 rounded-full blur-3xl" />
          <SheetClose asChild className="absolute top-0 right-6">
            <XIcon className="hover:text-primary block size-7 cursor-pointer transition-colors duration-300" />
          </SheetClose>
          <SheetHeader className="mt-10 h-50 w-full px-6">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <ul className="mx-auto flex w-full max-w-50 flex-col items-center gap-4">
              {navLinks.map(({ href, label, icon }) => (
                <li
                  className="text-foreground/60 glass hover:text-foreground hover:border-primary/15 group flex w-full cursor-pointer items-center justify-center rounded-full px-4 text-sm transition-all duration-300 ease-in-out hover:border hover:shadow-[0_0_4px_rgba(32,178,166,0.8)]"
                  key={href}
                >
                  <SheetClose asChild>
                    <Link
                      href={href}
                      className="flex items-center justify-center gap-2 py-2 tracking-wider capitalize"
                    >
                      {icon}
                      {label}
                    </Link>
                  </SheetClose>
                </li>
              ))}
              <SheetClose asChild>
                <Link
                  href="#contact"
                  className="border-muted-foreground/50 w-full border-t border-dashed py-4"
                >
                  <Button className="h-9.5">Contact Me</Button>
                </Link>
              </SheetClose>
            </ul>
          </SheetHeader>
          <SheetFooter className="mt-24 text-center">
            <p className="text-muted-foreground text-xs">
              © {currentYear} Maciej Polowy. All rights reserved.
            </p>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default NavbarMobile;
