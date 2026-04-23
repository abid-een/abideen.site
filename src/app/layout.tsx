import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const geistSans = GeistSans;
const geistMono = GeistMono;

export const metadata: Metadata = {
  title: "Syed Zain Ul Abideen Bukhari — Software Engineer",
  description:
    "Portfolio of Syed Zain Ul Abideen Bukhari, a Software Engineer specializing in Fintech and Automated Compliance systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="shell-container">
        <SiteHeader />
        <main className="shell-inner">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
