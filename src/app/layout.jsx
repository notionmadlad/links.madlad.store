import { Poppins } from "next/font/google";
import Script from "next/script";

import "@/styles/globals.css";
import "@/styles/theme.css";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { Analytics } from "@vercel/analytics/react";
import { SparklesCore } from "@/components/ui/sparkles";
import { BackgroundBeams } from "@/components/ui/background-beams";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600"],
});

/** @type {import('next').Metadata} */
export const metadata = {
  title: "The Madlad Links",
  description:
    "I build minimalistic and simple Notion templates and websites to improve your life.",
  keywords: ["notion", "websites", "templates", "codingmadlad", "madlad.store"],
  authors: {
    name: "Coding Madlad",
    url: "https://links.madlad.store",
  },
  robots: {
    follow: true,
    index: true,
  },
  openGraph: {
    type: "website",
    title: "The Madlad Links",
    description:
      "Discover the best Notion Templates to help you stay organized and productive.",
    url: "https://links.madlad.store",
    images: "/images/madlad-logo.png",
    locale: "en-US",
  },
  twitter: {
    title: "The Madlad Links",
    description:
      "Discover the best Notion Templates to help you stay organized and productive.",
    images: "/images/madlad-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="fixed right-5 top-5 z-[9999]">
          <ThemeSwitcher />
        </div>
        {children}
        <div className="fixed left-0 right-0 top-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.5}
            maxSize={2}
            particleDensity={60}
            className="h-full w-full"
            particleColor="#707070"
          />
          <BackgroundBeams />
        </div>
        <Analytics />
        <Script
          src="https://widget.senja.io/widget/fa4ed835-1c9d-49b4-af75-4c212ca3748e/platform.js"
          async={true}
        />
      </body>
    </html>
  );
}
