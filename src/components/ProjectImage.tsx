"use client";
import Image from "next/image";
import { useState } from "react";

interface ProjectImageProps {
  images: any[];
}

export default function ProjectImage({ images }: ProjectImageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="w-full h-full relative flex">
      {images.length > 1 && (
        <>
          <button
            className="absolute top-0 w-1/2 flex items-center justify-end h-full right-0 p-2 text-white"
            onClick={() =>
              setCurrentImageIndex((prev) => (prev + 1) % images.length)
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
          <button
            className="absolute top-0 w-1/2 h-full left-0 p-2 text-white flex items-center justify-start"
            onClick={() =>
              setCurrentImageIndex(
                (prev) => (prev - 1 + images.length) % images.length
              )
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        </>
      )}

      <Image
        src={images[currentImageIndex].src ?? "/holidation.png"}
        alt="Holidation project"
        width={760}
        height={430}
        className="w-full h-52 object-cover cursor-pointer border-white border-2 rounded-xl dark:shadow-xl shadow-lg dark:shadow-slate-700 shadow-slate-400 "
      />
    </div>
  );
}
