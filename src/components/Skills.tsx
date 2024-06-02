"use client";
import StackIcon from "tech-stack-icons";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  {
    name: "nextjs2",
    grayscale: true,
    className: "h-10 w-10 md:w-16 md-h-16",
    description:
      "The standard framework for modern fullstack development with React."
  },
  {
    name: "typescript",
    grayscale: true,
    className: "h-10 w-10 md:h-16 md:w-16",
    description:
      "A typed superset of JavaScript that compiles to plain JavaScript."
  },
  {
    name: "tailwindcss",
    grayscale: true,
    className: "h-10 w-10 md:h-16 md:w-16",
    description:
      "A utility-first CSS framework for quickly building custom designs."
  },
  {
    name: "postgresql",
    grayscale: true,
    className: "h-10 w-10 md:h-16 md:w-16",
    description: "A powerful, open source object-relational database system."
  }
];

export default function Skills() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex gap-10 md:gap-20 mt-20 lg:mt-40 relative flex-wrap items-center justify-center"
      >
        {skills.map((skill) => (
          <div key={skill.name} title={skill.name}>
            <StackIcon
              name={skill.name}
              grayscale
              className={skill.className}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
