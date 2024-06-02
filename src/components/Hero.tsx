import React from "react";
import { BackgroundBeams } from "./ui/BackgroundBeams";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import Skills from "./Skills";
import Link from "next/link";

export default async function Hero() {
  return (
    <div
      id="home"
      className="relative z-10 flex flex-col items-center justify-center h-[calc(100dvh)] max-h-screen"
    >
      <BackgroundBeams className="z-0 top-0 left-0 hidden lg:block" />
      <div className="flex flex-col items-center px-4">
        <h2 className="text-slate-300 uppercase tracking-wide font-bold text-sm text-center">
          It&apos;s time to upgrade your old Wordpress site and...
        </h2>
        <TextGenerateEffect
          words="Make your Website Shine"
          className="font-display text-6xl sm:text-8xl text-center my-3"
        />

        <p className="my-5 max-w-prose text-center text-xl">
          Hey! I&apos;m Kim. A developer from Norway. I specialize in building
          fast and responsive websites and apps.
        </p>
        <Link href="/#about" className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            What can I do for you?
          </div>
        </Link>
        <Skills />
      </div>
    </div>
  );
}
