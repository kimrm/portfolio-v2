import React from "react";
import Image from "next/image";
import BentoGridSection from "./BentoGridSection";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-[#03051c] to-black px-4 md:px-20 flex flex-col items-center pt-40 lg:pt-60 pb-20 lg:pb-40"
    >
      <div className="flex flex-wrap justify-center gap-10 items-center mb-20">
        <Image
          src="/profile.jpg"
          alt="Me"
          width={200}
          height={200}
          className="rounded-full"
        />
        <div>
          <p className="text-justify md:text-left leading-relaxed max-w-prose">
            After working well over a decade developing Windows applications
            with .NET I have shifted my focus to web development, and
            specifically frontend development, the last couple of years. I have
            experience with both frontend and backend development, and I have
            worked with a variety of technologies and frameworks. I have a
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
