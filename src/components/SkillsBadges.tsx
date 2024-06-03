import React from "react";
import StackIcon from "tech-stack-icons";

export default function SkillsBadges() {
  return (
    <div className="flex flex-col h-full">
      <h2 className="font-bold uppercase tracking-wide dark:text-gray-300 mb-5">
        Skills and tech experience
      </h2>
      <div className="flex-grow flex items-center justify-center">
        <div className="flex flex-wrap gap-x-4 gap-y-6 items-center justify-center">
          <div className="rounded px-2 flex flex-col items-center gap-y-2">
            <StackIcon
              name="nextjs"
              className="h-10 w-10 bg-white rounded px-2"
            />
            <span className="text-xs uppercase">Next.js</span>
          </div>
          <div className="rounded px-2 flex flex-col items-center gap-1">
            <StackIcon name="typescript" className="h-10 w-10" />
            <span className="text-xs uppercase">Typescript</span>
          </div>
          <div className="rounded px-2 flex flex-col items-center gap-1">
            <StackIcon name="tailwindcss" className="h-10 w-10" />
            <span className="text-xs uppercase">Tailwind</span>
          </div>
          <div className="rounded px-2 flex flex-col items-center gap-1">
            <StackIcon name="postgresql" className="h-10 w-10" />
            <span className="text-xs uppercase">PostgreSQL</span>
          </div>
          <div className="rounded px-2 flex flex-col items-center gap-1">
            <StackIcon name="reactjs" className="h-10 w-10" />
            <span className="text-xs uppercase">React</span>
          </div>

          <div className="rounded px-2 flex flex-col items-center gap-1">
            <StackIcon name="php" className="h-10 w-10" />
            <span className="text-xs uppercase">PHP</span>
          </div>
          <div className="rounded px-2 flex flex-col items-center gap-1">
            <StackIcon name="laravel" className="h-10 w-10" />
            <span className="text-xs uppercase">Laravel</span>
          </div>

          <div className="rounded px-2 flex flex-col items-center gap-1">
            <StackIcon name="html5" className="h-10 w-10" />
            <span className="text-xs uppercase">HTML5</span>
          </div>
          <div className="rounded px-2 flex flex-col items-center gap-1">
            <StackIcon name="css3" className="h-10 w-10" />
            <span className="text-xs uppercase">CSS3</span>
          </div>
          <div className="rounded px-2 flex flex-col items-center gap-1">
            <StackIcon name="js" className="h-10 w-10" />
            <span className="text-xs uppercase">Javascript</span>
          </div>
          <div className="rounded px-2 flex flex-col items-center gap-1">
            <StackIcon name="git" className="h-10 w-10" />
            <span className="text-xs uppercase">Git</span>
          </div>
          <div className="rounded px-2 flex flex-col items-center gap-1">
            <StackIcon name="figma" className="h-10 w-10" />
            <span className="text-xs uppercase">Figma</span>
          </div>

          <div className="rounded px-2 flex flex-col items-center gap-1">
            <StackIcon name="csharp" className="h-10 w-10" />
            <span className="text-xs uppercase">C#</span>
          </div>
          <div className="rounded px-2 flex flex-col items-center gap-1">
            <StackIcon name="mysql" className="h-10 w-10" />
            <span className="text-xs uppercase">MySQL</span>
          </div>
        </div>
      </div>
    </div>
  );
}
