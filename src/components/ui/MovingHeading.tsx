"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MovingHeading({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.h2
      initial={{ x: 25 }}
      animate={{ x: -25 }}
      transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      className="text-4xl italic md:text-5xl lg:text-8xl mb-2 font-display text-sky-200"
    >
      {children}
    </motion.h2>
  );
}
