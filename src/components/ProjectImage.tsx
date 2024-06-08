"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

interface ProjectImageProps {
  images: any[];
}

export default function ProjectImage({ images }: ProjectImageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);
  const timeoutRef = useRef(0);

  function handleNextImage() {
    setImageLoading(true);
    timeoutRef.current = window.setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 1000);
  }

  function handlePrevImage() {
    setImageLoading(true);
    timeoutRef.current = window.setTimeout(() => {
      setCurrentImageIndex(
        (prev) => (prev - 1 + images.length) % images.length
      );
    }, 1000);
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full h-full relative flex">
      {imageLoading && <ImageLoading />}
      {images.length > 1 && (
        <>
          <button
            aria-label="Previous image"
            title="Previous image"
            className="absolute top-0 w-1/2 flex items-center justify-end h-full right-0 p-2 text-white"
            onClick={handleNextImage}
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
            aria-label="Next image"
            title="Next image"
            className="absolute top-0 w-1/2 h-full left-0 p-2 text-white flex items-center justify-start"
            onClick={handlePrevImage}
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
        onLoad={() => setImageLoading(false)}
        src={images[currentImageIndex].src ?? "/holidation.png"}
        alt="Holidation project"
        width={760}
        height={430}
        className="w-full h-52 object-cover cursor-pointer rounded "
      />
    </div>
  );
}

function ImageLoading() {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10">
      <div className="flex items-center gap-2 justify-center h-full text-white">
        <span className="animate-spin">
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
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </span>
        <span className="animate-pulse">Loading image</span>
      </div>
    </div>
  );
}
