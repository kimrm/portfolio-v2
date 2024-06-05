import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import MadeWith from "@/components/MadeWith";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <MadeWith />
      <Projects />
      <About />
    </main>
  );
}
