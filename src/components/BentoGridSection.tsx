import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import SkillsBadges from "./SkillsBadges";
import HireMe from "./HireMe";
import ForNonProfit from "./ForNonProfit";
import Services from "./Services";
import Contact from "./Contact";
import Other from "./Other";

export default function BentoGridSection() {
  return (
    <section
      id="bento-grid"
      className="flex flex-col items-center justify-center"
    >
      <BentoGrid className="w-full md:w-auto">
        <BentoGridItem className="md:col-span-2 dark:bg-slate-900 bg-slate-300">
          <Services />
        </BentoGridItem>
        <BentoGridItem className="dark:bg-yellow-500 bg-yellow-100">
          <HireMe />
        </BentoGridItem>
        <BentoGridItem className="dark:bg-purple-700 bg-purple-200">
          <ForNonProfit />
        </BentoGridItem>
        <BentoGridItem className="border-white md:col-span-2 h-fit bg-gradient-to-br dark:from-black dark:via-slate-900 dark:to-black from-gray-400 via-gray-100 to-gray-400">
          <SkillsBadges />
        </BentoGridItem>
      </BentoGrid>
    </section>
  );
}
