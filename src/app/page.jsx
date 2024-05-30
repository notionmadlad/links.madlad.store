"use client";

import Image from "next/image";
import { footerLinks, mainLinks, socialLinks } from "@/config/main";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section
        id="popular"
        className="relative flex justify-center items-center py-10"
      >
        <div className="h-full max-w-2xl w-full z-[5]">
          <div className="flex gap-10 mx-10 flex-col">
            <div className="flex-1 flex flex-col items-center gap-7">
              <Image src="/madlad-pfp.png" className="rounded-full" width={96} height={96} alt="madlad-pfp" />
              <h1 className="text-[18px] font-semibold">Coding Madlad</h1>
              <p className="text-muted-foreground mx-10 text-center">Get your life and business on track with my tips and Notion Templates.</p>
              <div className="flex flex-col gap-5 w-full">
                {Object.keys(mainLinks).map(link => (
                  <Link href={mainLinks[link].link} key={link}>
                    <div className="flex bg-card hover:bg-secondary transition-all duration-300 w-full border border-border rounded-lg overflow-hidden cursor-pointer">
                      <Image src={mainLinks[link].image} width={100} height={100} alt={mainLinks[link].title} />
                      <div className="flex flex-col pl-10 justify-center gap-2 w-full">
                        <h1 className="text-[18px] font-semibold">{mainLinks[link].title}</h1>
                        <p className="text-[16px] text-muted-foreground">{mainLinks[link].content}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="flex justify-between gap-10">
                {Object.keys(socialLinks).map((link) => {
                  const Icon = socialLinks[link].icon;
                  return (
                    <Link href={socialLinks[link].link} key={link}>
                      <Icon width={48} height={48} />
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="fixed top-5 left-5 flex justify-between gap-5">
        {Object.keys(footerLinks).map((link) => (
          <Link className="text-muted-foreground text-[14px] p-2 bg-card rounded-md leading-6" href={footerLinks[link]} key={link}>
            {link}
          </Link>
        ))}
      </div>
    </>
  );
}
