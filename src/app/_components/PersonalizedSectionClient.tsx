"use client";

import Link from "next/link";
import { useMemo, useSyncExternalStore } from "react";
import { Container } from "@/components/ui/Container";
import type { CourseCard as CourseCardType } from "@/lib/types";
import {
  getRecentlyViewedSlugs,
  RECENTLY_VIEWED_EVENT,
} from "@/lib/personalization/recentlyViewed";
import { CourseCarouselClient } from "./CourseCarouselClient";

interface PersonalizedSectionClientProps {
  allCourses: CourseCardType[];
  trendingCourses: CourseCardType[];
}

function subscribeRecentlyViewed(onStoreChange: () => void): () => void {
  if (typeof window === "undefined") return () => {};

  const handleChange = () => onStoreChange();
  window.addEventListener(RECENTLY_VIEWED_EVENT, handleChange);
  window.addEventListener("storage", handleChange);

  return () => {
    window.removeEventListener(RECENTLY_VIEWED_EVENT, handleChange);
    window.removeEventListener("storage", handleChange);
  };
}

const EMPTY_SLUGS: string[] = [];
/** useSyncExternalStore snapshot cache — 참조 동일성을 유지하여 불필요한 리렌더 방지. "use client" 전용이므로 요청 간 상태 공유 위험 없음 */
let cachedSlugs: string[] = EMPTY_SLUGS;

function getRecentlyViewedSnapshot(): string[] {
  const next = getRecentlyViewedSlugs();
  if (
    next.length === cachedSlugs.length &&
    next.every((s, i) => s === cachedSlugs[i])
  ) {
    return cachedSlugs;
  }
  cachedSlugs = next;
  return cachedSlugs;
}

function getRecentlyViewedServerSnapshot(): string[] {
  return EMPTY_SLUGS;
}

/** 홈 개인화 섹션 (Client Component) — 최근 본 강의 + 인기 급상승 */
export function PersonalizedSectionClient({
  allCourses,
  trendingCourses,
}: PersonalizedSectionClientProps) {
  const courseMapBySlug = useMemo(
    () => new Map(allCourses.map((course) => [course.slug, course])),
    [allCourses],
  );

  const recentSlugs = useSyncExternalStore(
    subscribeRecentlyViewed,
    getRecentlyViewedSnapshot,
    getRecentlyViewedServerSnapshot,
  );

  const recentCourses = useMemo(
    () => recentSlugs
      .map((slug) => courseMapBySlug.get(slug))
      .filter((course): course is CourseCardType => Boolean(course)),
    [courseMapBySlug, recentSlugs],
  );
  const hasRecentCourses = recentCourses.length > 0;

  return (
    <section
      id="home-personalized"
      aria-label="개인 맞춤 추천"
      className="border-t border-grey-800 py-[40px] md:py-[56px]"
    >
      <Container>
        <h2 className="text-[1.8rem] font-bold text-text-primary sm:text-[2rem]">
          개인 맞춤 추천
        </h2>

        <div className="mt-[20px]">
          <h3 className="mb-[14px] text-[1.6rem] font-semibold text-text-primary sm:text-[1.8rem]">
            최근 본 강의
          </h3>

          {hasRecentCourses ? (
            <CourseCarouselClient courses={recentCourses} />
          ) : (
            <div className="rounded-[12px] border border-grey-800 bg-surface px-[16px] py-[18px] sm:px-[18px] sm:py-[20px]">
              <p className="text-[1.3rem] text-text-secondary">
                아직 최근 본 강의가 없어요. 관심 있는 체험을 둘러보면 여기에 자동으로 저장됩니다.
              </p>
              <Link
                href="#home-main-carousel"
                className="mt-[12px] inline-flex rounded-[8px] bg-primary px-[12px] py-[8px] text-[1.2rem] font-semibold text-white transition-opacity hover:opacity-90"
              >
                인기 체험 둘러보기
              </Link>
            </div>
          )}
        </div>

        <div className="mt-[34px]">
          <h3 className="mb-[14px] text-[1.6rem] font-semibold text-text-primary sm:text-[1.8rem]">
            지금 인기 급상승
          </h3>
          <CourseCarouselClient courses={trendingCourses} />
        </div>
      </Container>
    </section>
  );
}
