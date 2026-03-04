import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCourseDetail } from "@/lib/data/courseDetail";

import { ProductHeroSplit } from "./_components/ProductHeroSplit";
import { TabNavigation } from "./_components/TabNavigation";
import { ClassIntro } from "./_components/ClassIntro";
import { Curriculum } from "./_components/Curriculum";
import { CreatorProfile } from "./_components/CreatorProfile";
import { RelatedCourses } from "./_components/RelatedCourses";
import { Reviews } from "./_components/Reviews";
import { NoticeSection } from "./_components/NoticeSection";
import { StickyBottomSummary } from "./_components/StickyBottomSummary";
import { TrackCourseView } from "./_components/TrackCourseView";
import { CurriculumBadges } from "./_components/CurriculumBadges";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseDetail(slug);
  if (!course) return { title: "프로그램을 찾을 수 없습니다" };

  const seoKeywords = [
    ...course.tags,
    "진로체험",
    "중학교 진로체험",
    "창체 시간",
    "학교 방문형",
    "드림플렉스",
    "Dreamplex",
  ];

  return {
    title: `${course.title} | Dreamplex 진로직업체험`,
    description: `${course.subtitle} | ${course.tags.join(", ")}`,
    keywords: seoKeywords,
    openGraph: {
      title: course.heroHeadline || course.title,
      description: course.heroSubcopy || course.subtitle,
      type: "website",
      images: course.heroImageSrc ? [{ url: course.heroImageSrc }] : [],
    },
  };
}

/** 프로그램 상세페이지 (Server Component) */
export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = getCourseDetail(slug);
  if (!course) notFound();

  return (
    <main className="min-h-screen pb-[80px] lg:pb-[56px]">
      <TrackCourseView slug={slug} />

      {/* 히어로 — Split Screen (full-width) */}
      <ProductHeroSplit course={course} />

      {/* 탭 네비게이션 (full-width sticky) */}
      <TabNavigation />

      {/* 교육과정 연계 배지 */}
      {course.curriculumLinks && course.curriculumLinks.length > 0 && (
        <CurriculumBadges curriculumLinks={course.curriculumLinks} />
      )}

      {/* 프로그램 소개 — 흰 배경 (full-width) */}
      <ClassIntro
        sections={course.introSections}
        targetAudience={course.targetAudience}
        expectedOutcomes={course.expectedOutcomes}
      />

      {/* 커리큘럼 — 연한 회색 배경 (full-width) */}
      {course.curriculum && course.curriculum.length > 0 && (
        <Curriculum chapters={course.curriculum} />
      )}

      {/* 강사 소개 — 흰 배경 (full-width) */}
      <CreatorProfile instructor={course.instructor} />

      {/* 수강생 후기 — 연한 배경 (full-width) */}
      {course.reviews && course.reviews.length > 0 && (
        <Reviews reviews={course.reviews} />
      )}

      {/* 유의사항 — 흰 배경 (full-width) */}
      <NoticeSection notice={course.notice} />

      {/* 추천 프로그램 — 흰 배경 (full-width) */}
      <RelatedCourses courses={course.relatedCourses} />

      {/* 하단 프로그램 요약 바 */}
      <StickyBottomSummary meta={course.meta} />
    </main>
  );
}
