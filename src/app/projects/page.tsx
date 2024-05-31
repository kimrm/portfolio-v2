import Image from "next/image";
import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/client";

import Link from "next/link";

const PROJECTS_QUERY = `*[_type == "project"]{_id, title, _createdAt, _updatedAt}|order(title desc)`;

export default async function Page() {
  const projects = await sanityFetch<SanityDocument[]>({
    query: PROJECTS_QUERY
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello World
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            <Link href={`/projects/${project._id}`}>
              <h2>{project.title}</h2>
            </Link>
            <div>{project._createdAt}</div>
            <div>{project._updatedAt}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
