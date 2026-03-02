import { HeroBanner } from "./_components/HeroBanner";
import { QuickLinks } from "./_components/QuickLinks";
import { CourseCarousel } from "./_components/CourseCarousel";
import { WideBanner } from "./_components/WideBanner";
import { CategoryCarousels } from "./_components/CategoryCarousels";
import { PersonalizedSection } from "./_components/PersonalizedSection";

import { heroSlides } from "@/lib/data/hero";
import { quickLinkItems } from "@/lib/data/quickLinks";
import {
  allCourseCards,
  carouselSections,
  categoryCarouselSections,
  trendingCourses,
} from "@/lib/data/courses";
import { wideBannerItems } from "@/lib/data/wideBanners";

/** 홈페이지 (Server Component) — 데이터 import + 섹션 조립 */
export default function Home() {
  return (
    <main>
      {/* 히어로 배너 */}
      <HeroBanner
        slides={heroSlides}
        nextSectionHref="#home-quick-links"
        nextSectionLabel="카테고리 바로가기"
      />

      {/* 퀵 링크 */}
      <QuickLinks items={quickLinkItems} />

      {/* 메인 캐러셀 섹션들 */}
      {carouselSections.map((section, index) => (
        <CourseCarousel
          key={section.id}
          section={section}
          sectionId={index === 0 ? "home-main-carousel" : undefined}
          cinematic={index < 2}
          lazy={index !== 0}
          priorityImages={index === 0}
        />
      ))}

      {/* 와이드 배너 */}
      <WideBanner items={wideBannerItems} />

      {/* 개인화 추천 */}
      <PersonalizedSection
        allCourses={allCourseCards}
        trendingCourses={trendingCourses}
      />

      {/* 카테고리별 캐러셀 */}
      <CategoryCarousels sections={categoryCarouselSections} />
    </main>
  );
}
