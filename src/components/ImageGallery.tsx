"use client";
import Image from "next/image";
import { useState } from "react";

interface ImageGalleryProps {
  images: any[];
  startImageIndex: number;
  closeGallery: (e: React.MouseEvent | React.TouchEvent) => void;
}

export default function ImageGallery({
  images,
  startImageIndex,
  closeGallery
}: ImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(startImageIndex);
  const [imageLoading, setImageLoading] = useState(true);
  return (
    <div
      id="image-gallery-backdrop"
      onClick={closeGallery}
      className="fixed z-50 w-screen h-screen top-0 left-0 right-0 flex gap-5 items-center justify-between py-2 px-5 mx-auto rounded-b-lg bg-opacity-50 bg-neutral-900"
    >
      <div className="dark:bg-neutral-100 shadow bg-neutral-100 dark:text-white p-1 flex flex-col justify-center items-center rounded w-full max-w-[1800px] mx-auto">
        <button
          id="image-gallery-close-button"
          onClick={closeGallery}
          className="text-black border hover:bg-neutral-400 border-neutral-300 p-2 rounded-xl my-5"
        >
          Close
        </button>
        <div className="pb-10">
          <div className="relative">
            <Image
              onLoad={() => setImageLoading(false)}
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              width={760}
              height={430}
              className="max-w-full max-h-[500px] object-contain rounded"
            />
            {imageLoading && (
              <div className="absolute bg-black text-white top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                <span className=" animate-bounce">Loading...</span>
              </div>
            )}
          </div>
          <div className="flex flex-wrap justify-center gap-5 py-5">
            {images.map((image, i) => {
              return (
                <div
                  key={i}
                  className={`w-12 h-12 md:w-24 md:h-24 overflow-hidden rounded-xl ${
                    currentImageIndex === i
                      ? "bg-white dark:bg-neutral-900 border-4 border-indigo-500 "
                      : "bg-transparent border border-black"
                  }`}
                >
                  <Image
                    onClick={() => {
                      setImageLoading(true);
                      setCurrentImageIndex(i);
                    }}
                    src={image.src}
                    alt={image.alt}
                    width={300}
                    height={300}
                    className="h-full cursor-pointer object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
