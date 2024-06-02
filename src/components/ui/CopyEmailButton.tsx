"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CopyEmailButton({
  email,
  className
}: {
  email: string;
  className?: string;
}) {
  const [emailCopied, setEmailCopied] = useState(false);
  const emailCopy = () => {
    navigator.clipboard.writeText(email);
    setEmailCopied(true);
  };
  return (
    <div className={`flex flex-col gap-y-5 items-center ${className}`}>
      <button
        onClick={emailCopy}
        className="relative w-40 inline-flex h-12 overflow-hidden rounded-full p-[4px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 shadow-2xl "
      >
        <span className="absolute z-0 inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#cfcfcf_0%,#000000_50%,#cfcfcf_100%)]" />
        <span className="inline-flex z-10 h-full w-full cursor-pointer items-center justify-center rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-black backdrop-blur-3xl">
          {emailCopied ? "Copied!" : "Get my email"}
        </span>
      </button>
      <div className="text-xl h-8">
        <AnimatePresence>
          {emailCopied && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-bold text-xs tracking-wider text-center"
            >
              {email && <em className="font-bold ">{email}</em>} copied to
              clipboard. Paste it in your email client.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
