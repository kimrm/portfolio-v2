import React from "react";
import CopyEmailButton from "./ui/CopyEmailButton";
import Link from "next/link";

export default function HireMe() {
  return (
    <div className="h-full flex flex-col">
      <div>
        <h2 className="font-bold uppercase tracking-wide dark:text-yellow-900 mb-5">
          Hire me
        </h2>
        <p className="dark:text-yellow-950 max-w-prose leading-relaxed">
          I&apos;m currently open for both contract-work or employment.
          Let&apos;s get to work! 🚀
        </p>
        <Link
          href="https://cv.kimrune.dev"
          target="_blank"
          className="text-gray-950 underline my-3 block"
        >
          View my CV
        </Link>
      </div>

      <div className="flex-grow flex items-center justify-center mt-5">
        <CopyEmailButton
          email={process.env.email ?? ""}
          className="text-black"
        />
      </div>
    </div>
  );
}
