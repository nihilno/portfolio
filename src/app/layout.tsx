import Providers from "@/components/global/providers";
import { inter } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Maciej Polowy",
    default: "Portfolio | Maciej Polowy",
  },
  description:
    "Full-Stack Developer Portfolio. Explore my projects built with Next.js, React, TypeScript, and modern web technologies. Passionate about creating performant and user-friendly applications.",
  openGraph: {
    title: "Portfolio | Maciej Polowy",
    description:
      "Full-Stack Developer Portfolio. Explore my projects built with Next.js, React, TypeScript, and modern web technologies. Passionate about creating performant and user-friendly applications.",
    url: "https://your-domain.com",
    siteName: "Maciej Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Maciej Polowy",
    description:
      "Full-Stack Developer Portfolio. Explore my projects built with Next.js, React, TypeScript, and modern web technologies. Passionate about creating performant and user-friendly applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "bg-background text-foreground flex min-h-dvh cursor-default flex-col antialiased",
        )}
      >
        <main className="flex-1">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
