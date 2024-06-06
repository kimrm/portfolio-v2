"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import ThemeButton from "./ThemeButton";

export default function ThemeSelector() {
  const [isMounted, setIsMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = window.scrollY;
    if (position > 200) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  };

  function handleDarkMode() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  return (
    <AnimatePresence>
      {menuOpen && isMounted && (
        <motion.div
          initial={{ y: -100 }}
          exit={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          className="fixed z-50 top-0 left-0 right-0 flex gap-5 items-center justify-between w-fit py-2 px-5 mx-auto  rounded-b-lg bg-opacity-50"
        >
          <ThemeButton
            darkMode={resolvedTheme === "dark"}
            onClick={handleDarkMode}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
