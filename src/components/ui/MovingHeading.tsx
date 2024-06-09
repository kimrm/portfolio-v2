"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MovingHeading({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.h2
      initial={{ x: 25 }}
      animate={{ x: -25 }}
      transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      className={className}
    >
      {children}
    </motion.h2>
  );
}
