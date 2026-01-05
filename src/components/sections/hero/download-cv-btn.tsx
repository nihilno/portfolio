"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Download } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

function DownloadBtnCv() {
  const [open, setOpen] = useState(false);

  function downloadFile(lang: "english" | "polish") {
    const el = document.createElement("a");

    const file = lang === "english" ? "cv/english.pdf" : "cv/polish.pdf";
    const label =
      lang === "english"
        ? "English CV - Maciej Polowy.pdf"
        : "Polskie CV - Maciej Polowy.pdf";

    el.href = file;
    el.download = label;

    document.body.appendChild(el);
    el.click();
    el.remove();
    setTimeout(() => setOpen(false), 250);
    toast.success("CV Downloaded", {
      description: "Thanks for checking my CV out.",
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="cursor-pointer">
        <button
          type="button"
          aria-label="Download CV"
          className="border-border text-foreground hover:border-primary/50 focus-visible:ring-primary group animated-border bg-surface/50 relative w-full shrink-0 overflow-visible rounded-full border px-6 py-3 text-base font-medium transition-all duration-1000 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 lg:px-8 lg:py-4 lg:text-lg"
        >
          <svg
            className="download-cv-border pointer-events-none absolute top-0 left-0 h-full w-full"
            viewBox="0 0 200 60"
            preserveAspectRatio="none"
            style={{ overflow: "visible" }}
          >
            <path
              d="M 30,1 A 29,29 0 0 0 1,30 L 1,30 A 29,29 0 0 0 30,59 L 170,59 A 29,29 0 0 0 199,30 L 199,30 A 29,29 0 0 0 170,1 Z"
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth="2"
              strokeDasharray="400 550"
              strokeDashoffset="400"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animated-border-path"
            />
          </svg>
          <div className="relative z-10 flex items-center justify-center gap-2">
            <Download className="size-5" />
            <span>Download CV</span>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="border-primary/25 bg-background/90 flex flex-col items-center border p-8 text-center backdrop-blur-md">
        <DialogHeader className="flex flex-col items-center text-center">
          <DialogTitle className="text-center text-2xl">
            Select Your <br /> Preferred Language
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => downloadFile("english")}
            className="group space-y-1 text-center transition-all duration-300 ease-in-out hover:scale-110"
          >
            <Image
              src={"/cv/english.png"}
              alt="English"
              width={110}
              height={110}
              className="group-hover:bg-primary/20 cursor-pointer rounded-full p-2 transition-all duration-300 ease-in-out"
            />
            <span className="text-foreground/75 group-hover:text-foreground text-sm transition-colors">
              English
            </span>
          </button>

          <button
            type="button"
            onClick={() => downloadFile("polish")}
            className="group space-y-1 text-center transition-all duration-300 ease-in-out hover:scale-110"
          >
            <Image
              src={"/cv/polish.png"}
              alt="Polish"
              width={110}
              height={110}
              className="group-hover:bg-primary/20 cursor-pointer rounded-full p-2 transition-all duration-300 ease-in-out"
            />
            <span className="text-foreground/75 group-hover:text-foreground text-sm transition-colors">
              Polish
            </span>
          </button>
        </div>
        <div className="mt-6">
          <p className="text-foreground/75 max-w-[40ch] text-center text-xs">
            I hereby give consent for my personal data to be processed for the
            purpose of conducting recruitment.
          </p>
        </div>
        <DialogFooter className="mt-4">
          <DialogClose asChild>
            <Button type="button">Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DownloadBtnCv;
