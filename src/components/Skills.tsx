"use client";
import { useState } from "react";
import StackIcon from "tech-stack-icons";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  {
    name: "nextjs",
    grayscale: true,
    className: "h-16 w-16 bg-gray-500 rounded px-2",
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
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex gap-20 mt-40 relative flex-wrap items-center justify-center"
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
