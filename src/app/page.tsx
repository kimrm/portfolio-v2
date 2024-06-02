import BentoGridSection from "@/components/BentoGridSection";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import CopyEmailButton from "@/components/ui/CopyEmailButton";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Projects />
      <section
        id="about"
        className="bg-gradient-to-b from-[#03051c] to-black px-4 md:px-20 flex flex-col items-center mt-40 lg:mt-60 pb-20 lg:pb-40"
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
              specifically frontend development, the last couple of years. I
              have experience with both frontend and backend development, and I
              have worked with a variety of technologies and frameworks. I have
              a passion for creating user-friendly, visually appealing and
              accessible websites and applications.
            </p>
            <p className="text-justify md:text-left leading-relaxed max-w-prose mt-5">
              I have experience with a wide range of technologies and tools, and
              I&apos;m always eager to learn more. I have experience with: AI
              projects, API development and integrations, ecommerce, customer
              contact and IT-support.
            </p>
          </div>
        </div>

        <BentoGridSection />
      </section>

      <section
        id="contact"
        className="bg-black px-4 md:px-20 flex flex-col items-center py-20 lg:py-40"
      >
        <h2 className="font-bold uppercase tracking-wide mb-5">Contact me</h2>
        <p className="max-w-prose mb-5">
          Best way to contact me is by email, where we can determine what I can
          do for you and then schedule a call.
        </p>
        <CopyEmailButton email={process.env.email ?? ""} />
        <div>
          Look me up on social media:
          <a
            href="https://www.linkedin.com/in/kim-m%C3%B8ller-6b4b9a1b/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/kimrm"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2"
          >
            Github
          </a>
        </div>
      </section>
    </main>
  );
}
