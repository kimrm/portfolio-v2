"use client";
import { useState } from "react";
import StackIcon from "tech-stack-icons";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  {
    name: "nextjs",
    grayscale: true,
    className: "h-16 w-16 bg-slate-500 rounded px-2",
    description:
      "The standard framework for modern fullstack development with React."
  },
  {
    name: "typescript",
    grayscale: true,
    className: "h-16 w-16",
    description:
      "A typed superset of JavaScript that compiles to plain JavaScript."
  },
  {
    name: "tailwindcss",
    grayscale: true,
    className: "h-16 w-16",
    description:
      "A utility-first CSS framework for quickly building custom designs."
  },
  {
    name: "postgresql",
    grayscale: true,
    className: "h-16 w-16",
    description: "A powerful, open source object-relational database system."
  }
];

export default function Skills() {
  const [descriptionText, setDescriptionText] = useState("");
  const [activeSkillName, setActiveSkillName] = useState("");

  const activateDescription = (skill: any) => {
    setDescriptionText(skill.description);
    setActiveSkillName(skill.name);
  };

  const deactivateDescription = () => {
    setDescriptionText("");
    setActiveSkillName("");
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex gap-20 mt-40 relative flex-wrap items-center justify-center"
      >
        {skills.map((skill, index) => (
          <div key={skill.name} onClick={() => activateDescription(skill)}>
            <StackIcon
              name={skill.name}
              grayscale={skill.name !== activeSkillName}
              className={`${skill.className} cursor-pointer`}
            />
          </div>
        ))}
      </motion.div>
      <AnimatePresence>
        {descriptionText && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute mt-5 bg-slate-900 text-slate-50 p-4 rounded max-w-prose"
          >
            {descriptionText}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
