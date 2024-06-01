import React from "react";
import CopyEmailButton from "@/components/ui/CopyEmailButton";

export default function Contact() {
  return (
    <div id="contact" className="h-full flex flex-col text-slate-700">
      <div>
        <h2 className="font-bold uppercase tracking-wide mb-5">Contact me</h2>
        <p className=" max-w-prose leading-relaxed">
          Best way to reach me is by email where we can schedule a call.
          I&apos;m looking forward to hearing from you!
        </p>
      </div>

      <div className="flex-grow flex items-center justify-center mt-5">
        <CopyEmailButton email={process.env.email ?? ""} />
      </div>
    </div>
  );
}
