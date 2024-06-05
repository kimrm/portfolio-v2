"use client";
import Image from "next/image";
import { useState } from "react";
import ImageGallery from "./ImageGallery";

interface ProjectImageProps {
  projectImageUrl?: string;
  images: any[];
}

export default function ProjectImage({
  projectImageUrl,
  images
}: ProjectImageProps) {
  const [imageGalleryDisplayed, setImageGalleryDisplayed] = useState(false);

  function handleClose(e: React.MouseEvent | React.TouchEvent) {
    const target = e.target as HTMLElement;
    if (
      target.id === "image-gallery-backdrop" ||
      target.id === "image-gallery-close-button"
    ) {
      setImageGalleryDisplayed(false);
    }
  }
  return (
    <>
      {imageGalleryDisplayed && (
        <ImageGallery
          images={images}
          startImageIndex={0}
          closeGallery={handleClose}
        />
      )}
      <Image
        onClick={() => setImageGalleryDisplayed(true)}
        src={projectImageUrl ?? "/holidation.png"}
        alt="Holidation project"
        width={760}
        height={430}
        className="w-full h-52 object-cover cursor-pointer border-white border-2 rounded-xl dark:shadow-xl shadow-lg dark:shadow-slate-700 shadow-slate-400 "
      />
    </>
  );
}
