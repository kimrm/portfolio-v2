import React from "react";

export default function Services() {
  return (
    <div className="h-full">
      <h2 className="font-bold uppercase tracking-wide dark:text-neutral-300 mb-5">
        Services I offer
      </h2>
      <p className="max-w-prose leading-relaxed dark:text-neutral-50">
        <strong>Landing page</strong> for your business or product?{" "}
        <strong>Integrations</strong>? A <strong>homepage</strong> for your
        organization? I create <em>user-friendly</em> and <em>accessible</em>{" "}
        websites and apps with the newest technology and standards. I can help
        you with:
      </p>
      <div className="flex">
        <ul className=" flex flex-col flex-wrap list-disc px-4 mt-3 dark:text-neutral-50">
          <li>Web development</li>
          <li>API development</li>
          <li>SEO optimization</li>
        </ul>
        <ul className=" flex flex-col flex-wrap list-disc px-4 mt-3 dark:text-neutral-50">
          <li>Web hosting</li>
          <li>Consulting</li>
        </ul>
      </div>
    </div>
  );
}
