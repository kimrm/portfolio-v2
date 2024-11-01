import { BackgroundBeams } from "./ui/BackgroundBeams";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import Link from "next/link";

export default async function Hero() {
  return (
    <div
      id="home"
      className="relative z-10 flex flex-col items-center justify-center h-screen"
    >
      <BackgroundBeams className="z-0 top-0 left-0 hidden lg:block" />
      <div className="flex flex-col items-center px-4">
        <h2 className="dark:text-slate-300 text-neutral-600 uppercase tracking-wide font-bold text-xs md:text-sm text-center">
          Kim Rune Møller
        </h2>

        <TextGenerateEffect
          words="Enthusiastic developer"
          className="font-display dark:text-white text-slate-950 text-4xl md:text-6xl lg:text-8xl text-center my-1"
        />

        <p className="my-5 max-w-prose text-center text-base md:text-xl dark:text-slate-300 text-neutral-700 ">
          My passion is building fast and responsive websites and apps. This is
          my playground where I try out new ideas and build cool stuff.
        </p>
        <Link href="/#about" className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2  dark:bg-black bg-neutral-800 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            About me
          </div>
        </Link>
      </div>
    </div>
  );
}
