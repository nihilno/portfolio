import { ChevronDown } from "lucide-react";
import Link from "next/link";

function ScrollArrow({ href }: { href: string }) {
  return (
    <div className="group absolute bottom-0 left-1/2 -translate-x-1/2">
      <Link
        href={href}
        className="text-muted-foreground group-hover:text-primary flex flex-col items-center gap-2 transition-colors"
      >
        <span className="text-xs tracking-wider uppercase">Scroll</span>
        <ChevronDown className="size-6 animate-bounce" />
      </Link>
    </div>
  );
}

export default ScrollArrow;
