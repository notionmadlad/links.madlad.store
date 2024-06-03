"use client";

import Image from "next/image";
import { footerLinks, mainLinks, socialLinks } from "@/config/main";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Home() {
  return (
    <>
      <section
        id="popular"
        className="relative flex items-center justify-center py-10"
      >
        <div className="z-[5] h-full w-full max-w-2xl">
          <div className="mx-10 flex flex-col gap-10">
            <div className="flex flex-1 flex-col items-center gap-7">
              <Image
                src="/madlad-pfp.png"
                className="rounded-full"
                width={96}
                height={96}
                alt="madlad-pfp"
              />
              <h1 className="text-[18px] font-semibold">Coding Madlad</h1>
              <p className="mx-10 text-center text-muted-foreground">
                Get your life and business on track with my tips and Notion
                Templates.
              </p>
              <div className="z-[1] flex w-full flex-col gap-5">
                {Object.keys(mainLinks).map((link) => (
                  <Link href={mainLinks[link].link} key={link}>
                    <div className="flex w-full cursor-pointer overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:bg-secondary">
                      <Image
                        src={mainLinks[link].image}
                        width={100}
                        height={100}
                        alt={mainLinks[link].title}
                      />
                      <div className="flex w-full flex-col justify-center gap-2 pl-10">
                        <h1 className="text-[18px] font-semibold">
                          {mainLinks[link].title}
                        </h1>
                        <p className="text-[16px] text-muted-foreground">
                          {mainLinks[link].content}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="z-[1] flex justify-between gap-10">
                {Object.keys(socialLinks).map((link) => {
                  const Icon = socialLinks[link].icon;
                  return (
                    <Link href={socialLinks[link].link} key={link}>
                      <Icon width={48} height={48} />
                    </Link>
                  );
                })}
              </div>
              <div className="absolute left-0 right-0 top-0 h-screen">
                <SparklesCore
                  id="tsparticlesfullpage"
                  background="transparent"
                  minSize={0.3}
                  maxSize={1}
                  particleDensity={60}
                  className="h-full w-full"
                  particleColor="#777777"
                />
              </div>
              <BackgroundBeams />
            </div>
          </div>
        </div>
      </section>
      <div className="fixed left-5 top-5 z-[9999] flex justify-between gap-5">
        {Object.keys(footerLinks).map((link) => (
          <Link
            className="rounded-md border border-border bg-card p-2 text-[14px] leading-6 text-card-foreground"
            href={footerLinks[link]}
            key={link}
          >
            {link}
          </Link>
        ))}
      </div>
    </>
  );
}
