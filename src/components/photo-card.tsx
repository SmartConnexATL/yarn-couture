"use client";

import { useState } from "react";
import Image from "next/image";
import { PhotoZoomModal } from "./photo-zoom-modal";

export function PhotoCard({
  src,
  alt,
  imageClassName = ""
}: {
  src: string;
  alt: string;
  imageClassName?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="group relative overflow-hidden cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 h-full"
      >
        {/* Artsy Border Container */}
        <div className="relative w-full h-96 border-4 border-amber-900/30 p-7 bg-amber-50/10 hover:bg-amber-50/20 transition-colors duration-300">
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-amber-900/50 pointer-events-none" />
          <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-amber-900/50 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-amber-900/50 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-amber-900/50 pointer-events-none" />

          {/* Image Container */}
          <div className="relative w-full h-full">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className={`object-cover group-hover:scale-110 transition-transform duration-300 ${imageClassName}`}
            />
          </div>
        </div>

        {/* Zoom Indicator */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors duration-300 pointer-events-none">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-lg font-semibold backdrop-blur-sm px-4 py-2 rounded">
            Click to zoom
          </div>
        </div>
      </button>

      {/* Zoom Modal */}
      <PhotoZoomModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        src={src}
        alt={alt}
      />
    </>
  );
}
