import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/client";
import ProjectCard from "./ProjectCard";

const PROJECTS_QUERY = `*[_type == "project"]{_id, title, description, tags, website, github, images, _createdAt, _updatedAt}|order(_createdAt asc)`;

export default async function Projects() {
  const projects = await sanityFetch<SanityDocument[]>({
    query: PROJECTS_QUERY
  });

  return (
    <div
      id="projects"
      className="flex mx-auto flex-col items-center justify-center px-4 py-20 max-w-[1800px] rounded-xl"
    >
      <h2 className="font-bold sm:text-xl uppercase tracking-wide dark:text-neutral-300 text-neutral-900  mb-5">
        Selection of recent Projects
      </h2>
      <div className="flex flex-wrap justify-center gap-5 lg:gap-10">
        {projects.map(
          ({ _id, title, description, tags, website, github, images }, i) => {
            return (
              <ProjectCard
                key={_id}
                {...{
                  _id,
                  title,
                  description,
                  tags,
                  website,
                  github,
                  images
                }}
              />
            );
          }
        )}
      </div>
    </div>
  );
}
