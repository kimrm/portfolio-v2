import React from "react";
import Image from "next/image";
import BentoGridSection from "./BentoGridSection";
import MovingHeading from "./ui/MovingHeading";

export default function About() {
  return (
    <section
      id="about"
      className="dark:bg-gradient-to-b dark:from-[#03051c] dark:to-black px-4 md:px-20 flex flex-col items-center py-20 "
    >
      <MovingHeading>
        <q>Hello world</q>
      </MovingHeading>
      <h3 className="text-xs uppercase tracking-wide text-slate-700 dark:text-slate-400 mb-10">
        tech geek, developer, friendly human
      </h3>
      <div className="flex flex-wrap justify-center gap-10 items-center mb-20 text-slate-900 dark:text-slate-100">
        <Image
          src="/profile.jpg"
          alt="Me"
          width={200}
          height={200}
          className="rounded-full"
        />
        <div>
          <p className="text-justify md:text-left leading-relaxed max-w-prose">
            After working well over a decade developing Windows desktop
            applications with .NET I have shifted my focus to web development,
            and specifically frontend development, the last couple of years. I
            have experience with both frontend and backend development, and I
            have worked with a variety of technologies and frameworks. I have a
            passion for creating user-friendly, visually appealing and
            accessible websites and applications.
          </p>
          <p className="text-justify md:text-left leading-relaxed max-w-prose mt-5">
            I have experience with a wide range of technologies and tools, and
            I&apos;m always eager to learn more. I have experience with: desktop
            application development, API development and integrations,
            e-commerce, customer service and support.
          </p>
        </div>
      </div>

      <BentoGridSection />
    </section>
  );
}
