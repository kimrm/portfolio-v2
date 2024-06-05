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
          I&apos;m currently open for contract-work or employment. Let&apos;s
          get to work! 🚀
        </p>
        <ul className="my-3">
          <li>
            <button className="text-gray-950 underline my-1 block">
              E-mail
            </button>
          </li>
          <li>
            <Link
              href="https://cv.kimrune.dev"
              target="_blank"
              className="text-gray-950 underline my-1 block"
            >
              CV
            </Link>
          </li>
          <li>
            <Link
              href="https://cv.kimrune.dev"
              target="_blank"
              className="text-gray-950 underline my-1 block"
            >
              GitHub
            </Link>
          </li>
          <li>
            <Link
              href="https://cv.kimrune.dev"
              target="_blank"
              className="text-gray-950 underline my-1 block"
            >
              LinkedIn
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
