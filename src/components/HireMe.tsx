import React from "react";
import CopyEmailButton from "./ui/CopyEmailButton";

export default function HireMe() {
  return (
    <div className="h-full flex flex-col">
      <div>
        <h2 className="font-bold uppercase tracking-wide text-yellow-900 mb-5">
          Hire me
        </h2>
        <p className="text-yellow-950 max-w-prose leading-relaxed">
          I&apos;m currently available for new projects, and I&apos;m open for
          both contract-work or employment. Let&apos;s get it on! 🚀
        </p>
      </div>

      <div className="flex-grow flex items-center justify-center">
        <CopyEmailButton email={process.env.email ?? ""} />
      </div>
    </div>
  );
}
