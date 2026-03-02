import type { CourseCard as CourseCardType } from "@/lib/types";
import { PersonalizedSectionClient } from "./PersonalizedSectionClient";

interface PersonalizedSectionProps {
  allCourses: CourseCardType[];
  trendingCourses: CourseCardType[];
}

/** 홈 개인화 섹션 (Server Component) — 정적 데이터 전달 */
export function PersonalizedSection({
  allCourses,
  trendingCourses,
}: PersonalizedSectionProps) {
  return (
    <PersonalizedSectionClient
      allCourses={allCourses}
      trendingCourses={trendingCourses}
    />
  );
}
