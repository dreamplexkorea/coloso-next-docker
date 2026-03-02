import type { CarouselSection } from "@/lib/types";
import { CourseCarousel } from "./CourseCarousel";

interface CategoryCarouselsProps {
  sections: CarouselSection[];
}

/** 카테고리별 캐러셀 모음 (Server Component) — 여러 섹션을 반복 렌더링 */
export function CategoryCarousels({ sections }: CategoryCarouselsProps) {
  return (
    <div className="border-t border-grey-800 pt-[32px]">
      {sections.map((section) => (
        <CourseCarousel key={section.id} section={section} sectionId={section.id} />
      ))}
    </div>
  );
}
