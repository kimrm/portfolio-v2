import { PortableText } from "@portabletext/react";
import { SanityDocument } from "next-sanity";
import { client, sanityFetch } from "@/sanity/client";

const PROJECT_QUERY = `*[_type == "project" && _id == $id][0]{...}`;

export default async function Page({ params }: { params: { id: string } }) {
  const project = await sanityFetch<SanityDocument>({
    query: PROJECT_QUERY,
    params
  });

  return (
    <div>
      <div>Name: {project.title}</div>
      <div>
        <PortableText value={project.description} />
      </div>
    </div>
  );
}
