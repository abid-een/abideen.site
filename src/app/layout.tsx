import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const geistSans = GeistSans;
const geistMono = GeistMono;

export const metadata: Metadata = {
  title: "abideen.site — Software Engineer Portfolio",
  description:
    "Recruiter-focused software engineering portfolio with project outcomes, capabilities, and contact details.",
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
