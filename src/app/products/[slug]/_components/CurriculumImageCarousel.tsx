"use client";

import { useState } from "react";
import Image from "next/image";

interface CurriculumImageCarouselProps {
  images: string[];
  alt: string;
}

/** 커리큘럼 섹션 이미지 캐러셀 (클라이언트 컴포넌트) */
export function CurriculumImageCarousel({ images, alt }: CurriculumImageCarouselProps) {
  const [current, setCurrent] = useState(0);

  if (images.length === 0) return null;

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[12px] bg-[var(--color-surface)]">
      <Image
        src={images[current]}
        alt={`${alt} - ${current + 1}`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 40vw"
      />

      {/* Dot indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-[12px] left-1/2 flex -translate-x-1/2 gap-[6px]">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-[8px] w-[8px] rounded-full transition-colors ${
                idx === current
                  ? "bg-[var(--color-primary,#2B6B9A)]"
                  : "bg-white/60"
              }`}
              aria-label={`이미지 ${idx + 1} 보기`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
