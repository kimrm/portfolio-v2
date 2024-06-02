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
        <BentoGridItem className="md:col-span-2 bg-slate-900">
          <Services />
        </BentoGridItem>
        <BentoGridItem className="bg-yellow-500">
          <HireMe />
        </BentoGridItem>
        <BentoGridItem className="bg-purple-700">
          <ForNonProfit />
        </BentoGridItem>
        <BentoGridItem className="md:col-span-2 min-h-96 bg-gradient-to-br from-black via-slate-900 to-black">
          <SkillsBadges />
        </BentoGridItem>
      </BentoGrid>
    </section>
  );
}
