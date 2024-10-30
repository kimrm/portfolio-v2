import React from "react";
import StackIcon from "tech-stack-icons";

export default function SkillsBadges() {
  return (
    <div className="flex flex-col h-full">
      <h2 className="font-bold uppercase tracking-wide dark:text-gray-300 mb-5">
        Tools I&apos;m familiar with
      </h2>
      <div className="flex-grow flex items-center justify-center">
        <div className="flex flex-wrap gap-x-4 gap-y-6 p-4 items-center justify-center">
          <div className="rounded px-2 flex flex-col items-center gap-1">
            <StackIcon name="nextjs2" className="max-h-6 w-6" />
            <span className="text-xs uppercase">Next.js</span>
          </div>
          <div className="rounded px-2 flex flex-col items-center gap-1">
            <StackIcon name="typescript" className="h-6 w-6" />
            <span className="text-xs uppercase">Typescript</span>
          </div>
          <div className="rounded px-2 flex flex-col items-center gap-1">
            <StackIcon name="tailwindcss" className="h-6 w-6" />
            <span className="text-xs uppercase">Tailwind</span>
          </div>
          <div className="rounded px-2 flex flex-col items-center gap-1">
            <StackIcon name="postgresql" className="h-6 w-6" />
            <span className="text-xs uppercase">PostgreSQL</span>
          </div>
          <div className="rounded px-2 flex flex-col items-center gap-1">
            <StackIcon name="reactjs" className="h-6 w-6" />
            <span className="text-xs uppercase">React</span>
          </div>

          <div className="rounded px-2 flex flex-col items-center gap-1">
            <StackIcon name="php" className="h-6 w-6" />
            <span className="text-xs uppercase">PHP</span>
          </div>
          <div className="rounded px-2 flex flex-col items-center gap-1">
            <StackIcon name="laravel" className="h-6 w-6" />
            <span className="text-xs uppercase">Laravel</span>
          </div>

          <div className="rounded px-2 flex flex-col items-center gap-1">
            <StackIcon name="html5" className="h-6 w-6" />
            <span className="text-xs uppercase">HTML5</span>
          </div>
          <div className="rounded px-2 flex flex-col items-center gap-1">
            <StackIcon name="css3" className="h-6 w-6" />
            <span className="text-xs uppercase">CSS3</span>
          </div>
          <div className="rounded px-2 flex flex-col items-center gap-1">
            <StackIcon name="js" className="h-6 w-6" />
            <span className="text-xs uppercase">Javascript</span>
          </div>
          <div className="rounded px-2 flex flex-col items-center gap-1">
            <StackIcon name="git" className="h-6 w-6" />
            <span className="text-xs uppercase">Git</span>
          </div>
          <div className="rounded px-2 flex flex-col items-center gap-1">
            <StackIcon name="figma" className="h-6 w-6" />
            <span className="text-xs uppercase">Figma</span>
          </div>

          <div className="rounded px-2 flex flex-col items-center gap-1">
            <StackIcon name="csharp" className="h-6 w-6" />
            <span className="text-xs uppercase">C#</span>
          </div>
          <div className="rounded px-2 flex flex-col items-center gap-1">
            <StackIcon name="mysql" className="h-6 w-6" />
            <span className="text-xs uppercase">MySQL</span>
          </div>
          <div className="rounded px-2 flex flex-col items-center gap-1">
            <StackIcon name="cypress" className="h-6 w-6" />
            <span className="text-xs uppercase">Cypress</span>
          </div>
          <div className="rounded px-2 flex flex-col items-center gap-1">
            <StackIcon name="jest" className="h-6 w-6" />
            <span className="text-xs uppercase">Jest</span>
          </div>
          <div className="rounded px-2 flex flex-col items-center gap-1">
            <StackIcon name="bootstrap5" className="h-6 w-6" />
            <span className="text-xs uppercase">Bootstrap</span>
          </div>
          <div className="rounded px-2 flex flex-col items-center gap-1">
            <StackIcon name="sass" className="h-6 w-6" />
            <span className="text-xs uppercase">Sass</span>
          </div>
        </div>
      </div>
    </div>
  );
}
