"use client";

import Image from "next/image";
import { useState } from "react";

interface SectionImageProps {
  src: string;
  alt: string;
  placeholder?: string;
}

export default function SectionImage({ src, alt, placeholder }: SectionImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="bg-cream-dark rounded-lg aspect-video flex items-center justify-center">
        <span className="text-foreground/40 text-lg">{placeholder || alt}</span>
      </div>
    );
  }

  return (
    <div className="relative rounded-lg overflow-hidden aspect-video">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        onError={() => setHasError(true)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
      />
    </div>
  );
}
