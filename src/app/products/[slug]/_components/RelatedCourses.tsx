import type { CourseCard as CourseCardType } from "@/lib/types";
import { CourseCarouselClient } from "@/app/_components/CourseCarouselClient";

interface RelatedCoursesProps {
  courses: CourseCardType[];
}

/** 추천 클래스 — 기존 CourseCarouselClient 재사용 */
export function RelatedCourses({ courses }: RelatedCoursesProps) {
  return (
    <section id="recommend" className="py-[40px]">
      <h2 className="mb-[20px] text-[2rem] font-bold text-[var(--color-text-primary)] sm:text-[2.4rem]">
        추천 클래스
      </h2>
      <CourseCarouselClient courses={courses} />
    </section>
  );
}
