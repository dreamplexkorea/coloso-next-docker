"use client";

import type { CourseCard as CourseCardType } from "@/lib/types";
import { Carousel } from "@/components/carousel";
import { LazyCarousel } from "@/components/carousel/LazyCarousel";
import { CourseCard } from "./CourseCard";

interface CourseCarouselClientProps {
  courses: CourseCardType[];
  thumbnailRatio?: "16:9" | "3:4";
  lazy?: boolean;
  priorityImages?: boolean;
}

/** 강의 캐러셀 Swiper (Client Component) — horizontal scroll + 네비게이션 */
export function CourseCarouselClient({
  courses,
  thumbnailRatio,
  lazy = true,
  priorityImages = false,
}: CourseCarouselClientProps) {
  const cards = courses.map((course, i) => (
    <CourseCard
      key={course.id}
      course={course}
      thumbnailRatio={thumbnailRatio}
      priority={priorityImages && i < 4}
    />
  ));

  if (lazy) {
    return (
      <LazyCarousel thumbnailRatio={thumbnailRatio}>
        {cards}
      </LazyCarousel>
    );
  }

  return (
    <Carousel.Slider thumbnailRatio={thumbnailRatio}>
      {cards}
    </Carousel.Slider>
  );
}
