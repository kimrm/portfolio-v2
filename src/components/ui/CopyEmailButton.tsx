"use client";
import { useState, useEffect } from "react";
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

  useEffect(() => {
    if (emailCopied) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [emailCopied]);

  return (
    <>
      <AnimatePresence>
        {emailCopied && (
          <div className="fixed z-50 w-screen h-screen top-0 left-0 right-0 flex gap-5 items-center justify-between py-2 px-5 mx-auto bg-black rounded-b-lg bg-opacity-50">
            <div className="dark:bg-neutral-800 shadow bg-neutral-100 dark:text-white p-5 min-h-52 flex flex-col justify-between rounded-lg mx-auto">
              <div>
                <h1 className="text-xl text-neutral-700 dark:text-neutral-300">
                  Email copied to clipboard
                </h1>
                <p className="my-5 max-w-prose">
                  {email && <em className="font-bold ">{email}</em>} copied to
                  clipboard. Paste it in your email client to contact me.
                </p>
              </div>
              <button
                onClick={() => setEmailCopied(false)}
                className="bg-black text-white px-3 py-1 mt-3 rounded-lg w-20 hover:bg-neutral-700"
              >
                Okay
              </button>
            </div>
          </div>
        )}
      </AnimatePresence>
      <div className={`flex flex-col gap-y-5 mb-10 items-center ${className}`}>
        <button
          onClick={emailCopy}
          className="relative w-40 inline-flex h-12 overflow-hidden rounded-full p-[4px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 shadow-2xl "
        >
          <span className="absolute z-0 inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#cfcfcf_0%,#000000_50%,#cfcfcf_100%)]" />
          <span className="inline-flex z-10 h-full w-full cursor-pointer items-center justify-center rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-black backdrop-blur-3xl">
            {emailCopied ? "Copied!" : "Get my email"}
          </span>
        </button>
      </div>
    </>
  );
}
