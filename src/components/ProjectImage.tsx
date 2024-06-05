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
            className="absolute top-0 w-1/2 h-full right-0 p-2 text-white bg-transparent"
            onClick={() =>
              setCurrentImageIndex((prev) => (prev + 1) % images.length)
            }
          >
            Next
          </button>
          <button
            className="absolute top-0 w-1/2 h-full left-0 p-2 text-white bg-transparent"
            onClick={() =>
              setCurrentImageIndex(
                (prev) => (prev - 1 + images.length) % images.length
              )
            }
          >
            Previous
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
