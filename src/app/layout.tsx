import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Varahi Automations | Industrial Automation & Instrumentation Solutions",
  description:
    "Varahi Automations provides trusted industrial automation sales and services with 15+ years of expertise in instrumentation, automation, and customer-focused support.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}