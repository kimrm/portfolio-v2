import BentoGridSection from "@/components/BentoGridSection";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Projects />

      <section
        id="about"
        className="bg-gradient-to-b from-[#03051c] to-black p-4 md:p-20 flex flex-col items-center"
      >
        <div className="flex flex-wrap justify-center gap-10 items-center">
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
              specifically frontend development, the last couple of years. I
              have experience with both frontend and backend development, and I
              have worked with a variety of technologies and frameworks. I have
              a passion for creating user-friendly and visually appealing
              websites and applications. I am currently available for new
              projects, and I am open for both contracts or employment.
              Let&apos;s work! 🚀
            </p>
          </div>
        </div>

        <BentoGridSection />
      </section>
    </main>
  );
}
