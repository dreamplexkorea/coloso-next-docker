"use client";

import dynamic from "next/dynamic";
import { useInView } from "@/hooks/useInView";
import { CarouselSkeleton } from "./CarouselSkeleton";

const CarouselSlider = dynamic(
  () => import("./CarouselSlider").then((mod) => mod.CarouselSlider),
  { ssr: false },
);

interface LazyCarouselProps {
  children: React.ReactNode;
  thumbnailRatio?: "16:9" | "3:4";
}

export function LazyCarousel({ children, thumbnailRatio }: LazyCarouselProps) {
  const { ref, inView } = useInView({ rootMargin: "200px", triggerOnce: true });

  return (
    <div ref={ref}>
      {inView ? (
        <CarouselSlider thumbnailRatio={thumbnailRatio}>{children}</CarouselSlider>
      ) : (
        <CarouselSkeleton thumbnailRatio={thumbnailRatio} />
      )}
    </div>
  );
}
