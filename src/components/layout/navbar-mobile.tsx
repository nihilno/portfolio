"use client";

import Button from "@/components/global/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/lib/constants";
import { Menu } from "lucide-react";
import Link from "next/link";

function NavbarMobile() {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <Menu className="hover:text-primary size-6.5 cursor-pointer transition-colors" />
      </SheetTrigger>
      <SheetContent className="glass-strong py-5" side="top">
        <SheetHeader>
          <SheetTitle>
            <ul className="flex flex-col items-center gap-4 p-6">
              {navLinks.map(({ href, label }) => (
                <Link
                  href={href}
                  key={href}
                  className="text-muted-foreground hover:text-foreground hover:bg-surface hpb rounded-full px-8 py-3 text-lg transition-colors"
                >
                  <li className="capitalize">{label}</li>
                </Link>
              ))}
            </ul>
          </SheetTitle>
          <SheetFooter className="-mt-4">
            <Button size="md">Contact Me</Button>
          </SheetFooter>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default NavbarMobile;
