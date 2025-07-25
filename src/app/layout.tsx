import type { Metadata } from "next";
import "./globals.css";
import { geistSans } from "@/app/ui/font";
import { LenisProvider } from "@/components/LenisProvider";
import "@/lib/fontawesome";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "A Byte For All",
  description:
    "Youth-led 501(c)(3) non-profit organization | Training the next generation of developers for real-world projects and impact.",
  icons: {
    icon: "./logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <LenisProvider>
        <body className={`${geistSans.className}`}>{children}</body>
      </LenisProvider>
    </html>
  );
}
