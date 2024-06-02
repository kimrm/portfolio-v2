import React from "react";
import CopyEmailButton from "@/components/ui/CopyEmailButton";
import Link from "next/link";
import StackIcon from "tech-stack-icons";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black px-4 md:px-20 flex flex-col items-center py-20 lg:py-40"
    >
      <h2 className="font-bold uppercase tracking-wide mb-5">Contact me</h2>
      <p className="max-w-prose mb-5">
        The best way to reach me is by email, where we can determine what I can
        do for you and then schedule a call.
      </p>
      <CopyEmailButton email={process.env.email ?? ""} className="text-white" />
      <div className="flex flex-col items-center">
        <h3>Look me up on social media:</h3>
        <div className="flex flex-wrap gap-5 items-center mt-5">
          <Link
            href="https://www.linkedin.com/in/kim-rune-moller"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 flex items-center gap-2 rounded-xl border-gray-700 border p-2 hover:bg-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="h-6 w-6 rounded"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
            LinkedIn
          </Link>
          <Link
            href="https://github.com/kimrm"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 flex items-center gap-2 rounded-xl border-gray-700 border p-2 hover:bg-gray-900"
          >
            <StackIcon
              name="github"
              className="h-6 w-6 inline bg-white rounded"
            />
            Github
          </Link>
        </div>
      </div>
    </section>
  );
}
