import React from "react";

export default function Services() {
  return (
    <div>
      <h2 className="font-bold uppercase tracking-wide text-gray-300 mb-5">
        Services I offer
      </h2>
      <p className="max-w-prose leading-relaxed">
        <strong>Landing page</strong> for your business or product?{" "}
        <strong>Integrations</strong>? A <strong>homepage</strong> for your
        organization? I create <em>user-friendly</em> and <em>accessible</em>{" "}
        websites and apps with the newest technology and standards. I can help
        you with:
      </p>
      <ul className=" list-disc px-4 mt-3">
        <li>Web development</li>
        <li>API development</li>
        <li>SEO optimization</li>
        <li>Web hosting</li>
        <li>Consulting</li>
      </ul>
    </div>
  );
}
