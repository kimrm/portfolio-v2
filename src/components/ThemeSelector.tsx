"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeButton from "./ThemeButton";

export default function ThemeSelector() {
  const [menuOpen, setMenuOpen] = useState(true);

  const handleScroll = () => {
    const position = window.scrollY;
    if (position > 200) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ y: -100 }}
          exit={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          className="fixed z-50 top-0 left-0 right-0 flex gap-5 items-center justify-between w-fit py-2 px-5 mx-auto bg-gray-500 rounded-b-lg bg-opacity-50"
        >
          <ThemeButton />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
