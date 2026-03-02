import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowIcon } from "@/components/icons";
import type { CarouselSection } from "@/lib/types";
import { CourseCarouselClient } from "./CourseCarouselClient";

interface CourseCarouselProps {
  section: CarouselSection;
  sectionId?: string;
  cinematic?: boolean;
  lazy?: boolean;
  priorityImages?: boolean;
}

/** 강의 캐러셀 섹션 (Server Component) — 제목 + Swiper */
export function CourseCarousel({
  section,
  sectionId,
  cinematic = false,
  lazy,
  priorityImages,
}: CourseCarouselProps) {
  return (
    <section
      id={sectionId}
      className={`py-[40px] md:py-[56px] ${cinematic ? "cinematic-carousel-section" : ""}`}
      aria-label={section.title}
    >
      <Container>
        {/* 섹션 헤더 */}
        <div className="mb-[16px] flex items-center justify-between">
          <h2
            className={`text-[1.8rem] font-bold text-text-primary sm:text-[2rem] ${cinematic ? "cinematic-section-title" : ""}`}
          >
            {section.title}
          </h2>
          {section.moreLink && (
            <Link
              href={section.moreLink}
              className="flex items-center gap-[2px] text-[1.3rem] text-grey-400 transition-colors hover:text-text-primary"
            >
              더보기
              <ArrowIcon width={16} height={16} />
            </Link>
          )}
        </div>

        {/* 캐러셀 */}
        <CourseCarouselClient
          courses={section.courses}
          thumbnailRatio={section.thumbnailRatio}
          lazy={lazy}
          priorityImages={priorityImages}
        />
      </Container>
    </section>
  );
}
