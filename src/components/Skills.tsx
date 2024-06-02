"use client";
import StackIcon from "tech-stack-icons";
import { motion } from "framer-motion";

const skills = [
  {
    name: "nextjs",
    title: "Next.js",
    grayscale: true,
    className: "h-8 w-10 md:w-16 md-h-16 px-1 bg-gray-500",
    description:
      "The standard framework for modern fullstack development with React."
  },
  {
    name: "typescript",
    title: "TypeScript",
    grayscale: true,
    className: "h-8 w-8 md:h-16 md:w-16",
    description:
      "A typed superset of JavaScript that compiles to plain JavaScript."
  },
  {
    name: "tailwindcss",
    title: "Tailwind",
    grayscale: true,
    className: "h-8 w-8 md:h-16 md:w-16",
    description:
      "A utility-first CSS framework for quickly building custom designs."
  }
];

export default function Skills() {
  return (
    <div className="mt-20 lg:mt-40 text-center">
      <h2 className="mb-5 uppercase text-xs tracking-wide text-gray-400">
        Made with ❤️ using
      </h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex gap-5 md:gap-20 relative flex-wrap items-center justify-center"
      >
        {skills.map((skill) => (
          <div
            key={skill.name}
            title={skill.name}
            className="flex flex-col justify-between gap-2 min-h-24"
          >
            <div className="flex flex-col h-16 justify-center items-center gap-2">
              <StackIcon
                name={skill.name}
                grayscale
                className={skill.className}
              />
            </div>
            <span className="uppercase text-xs tracking-wide text-gray-300">
              {skill.title}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
