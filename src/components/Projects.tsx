import { SanityDocument } from "next-sanity";
import { client, sanityFetch } from "@/sanity/client";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import StackIcon from "tech-stack-icons";
import Link from "next/link";
import Image from "next/image";
import { BorderContainer } from "./ui/MovingBorder";

const PROJECTS_QUERY = `*[_type == "project"]{_id, title, description, tags, website, github, images, _createdAt, _updatedAt}|order(_createdAt asc)`;

const { projectId, dataset } = client.config();
export const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default async function Projects() {
  const projects = await sanityFetch<SanityDocument[]>({
    query: PROJECTS_QUERY
  });

  return (
    <div
      id="projects"
      className="flex mx-auto flex-col items-center justify-center px-4 pt-20 max-w-[1800px]"
    >
      <h2 className="font-bold uppercase tracking-wide text-white mb-5">
        Selection of recent Projects
      </h2>
      <div className="flex flex-wrap justify-center gap-5 lg:gap-10">
        {projects.map(
          ({ _id, title, description, tags, website, github, images }, i) => {
            const projectImageUrl = images[0]
              ? urlFor(images[0])?.width(760).height(430).url()
              : null;
            const duration =
              Math.floor(Math.random() * (14 - 4 + 1) + 4) * 1000;
            return (
              <BorderContainer
                key={_id}
                containerClassName="flex bg-slate-900 justify-between flex-col h-full w-full md:w-[350px] lg:w-[460px]"
                duration={duration}
              >
                <div className="flex flex-col justify-between h-full p-4 min-h-[500px]">
                  <header>
                    <Image
                      src={projectImageUrl ?? "/holidation.png"}
                      alt="Holidation project"
                      width={760}
                      height={430}
                      className="w-full h-52 object-cover border-white border-2 rounded-xl shadow-xl shadow-slate-700 "
                    />

                    <h1 className="font-bold uppercase mt-5">{title}</h1>
                    <div className="max-w-prose my-3">
                      <PortableText value={description} />
                    </div>
                  </header>

                  <div className="flex justify-between mt-5 items-center">
                    <div className="flex gap-2">
                      {website && (
                        <Link
                          href={website}
                          target="_blank"
                          className="rounded-xl px-4 py-2 bg-black border border-slate-500 shadow-xl hover:shadow-slate-700 transition-all duration-300 hover:text-white"
                        >
                          <span>Website</span>
                        </Link>
                      )}
                      {github && (
                        <Link
                          href={github}
                          target="_blank"
                          className="rounded-xl px-4 py-2 bg-black border border-slate-500 shadow-xl hover:shadow-slate-700 transition-all duration-300 hover:text-white flex items-center gap-2"
                        >
                          <StackIcon
                            name="github"
                            className="h-5 w-5 bg-white rounded-full border-[1px] border-white"
                          />
                          <span>Github</span>
                        </Link>
                      )}
                    </div>

                    <div className="flex gap-2 text-xs uppercase tracking-wide">
                      {tags.map((tag: string) => (
                        <div key={tag}>
                          <span className="sr-only">{tag}</span>
                          {tag === "sanity" ? (
                            <div className={`h-5 w-5`}>
                              <SanityIcon />
                            </div>
                          ) : (
                            <StackIcon
                              name={tag === "nextjs" ? "nextjs2" : tag}
                              className={`h-5 w-5`}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </BorderContainer>
            );
          }
        )}
      </div>
    </div>
  );
}

const SanityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
    <rect fill="#F03E2F" height="128" width="128"></rect>
    <path
      fill="#FFFFFF"
      d="M39.4229 33.1629C39.4229 44.1614 46.3362 50.7055 60.1767 54.1563L74.8429 57.4971C87.9417 60.453 95.9185 67.7945 95.9185 79.7554C96.0204 84.9662 94.296 90.053 91.0345 94.1634C91.0345 82.23 84.751 75.7822 69.595 71.9052L55.1947 68.6881C43.6633 66.1035 34.7628 60.068 34.7628 47.076C34.7021 42.0589 36.3415 37.1644 39.4229 33.1629Z"
    ></path>
    <path
      fill="#F9B1AB"
      d="M82.0221 76.827C88.2776 80.759 91.0205 86.2583 91.0205 94.1497C85.8426 100.666 76.7462 104.323 66.0545 104.323C48.0576 104.323 35.4626 95.6207 32.6637 80.4978H49.9468C52.172 87.4406 58.0636 90.6577 65.9285 90.6577C75.5287 90.6577 81.9102 85.6258 82.0361 76.7995"
    ></path>
    <path
      fill="#F9B1AB"
      d="M48.4074 49.4682C45.5509 47.8004 43.2073 45.404 41.6255 42.5332C40.0437 39.6624 39.2825 36.4244 39.423 33.1629C44.419 26.7013 53.1095 22.7556 63.7033 22.7556C82.0361 22.7556 92.6439 32.2693 95.2608 45.66H78.6354C76.8021 40.3807 72.212 36.27 63.8433 36.27C54.9008 36.27 48.7992 41.3843 48.4494 49.4682"
    ></path>
  </svg>
);
