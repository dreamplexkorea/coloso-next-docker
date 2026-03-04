import type { CourseCard as CourseCardType } from "@/lib/types";
import { CourseCarouselClient } from "@/app/_components/CourseCarouselClient";

interface RelatedCoursesProps {
  courses: CourseCardType[];
}

/** 추천 클래스 — 기존 CourseCarouselClient 재사용 */
export function RelatedCourses({ courses }: RelatedCoursesProps) {
  return (
    <section id="recommend" className="w-full bg-white py-[60px] lg:py-[80px]">
      <div className="mx-auto max-w-[1120px] px-[20px] sm:px-[24px] lg:px-[32px]">
        <h2 className="mb-[32px] text-[2.4rem] font-black text-[#0F1E2E] sm:text-[2.8rem]">
          추천 클래스
        </h2>
        <CourseCarouselClient courses={courses} />
      </div>
    </section>
  );
}
