import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { getCourseDetail } from "@/lib/data/courseDetail";

import { ProductHero } from "./_components/ProductHero";
import { TabNavigation } from "./_components/TabNavigation";
import { ClassIntro } from "./_components/ClassIntro";
import { Curriculum } from "./_components/Curriculum";
import { CreatorProfile } from "./_components/CreatorProfile";
import { RequiredTools } from "./_components/RequiredTools";
import { RelatedCourses } from "./_components/RelatedCourses";
import { Reviews } from "./_components/Reviews";
import { NoticeSection } from "./_components/NoticeSection";
import { StickyBottomSummary } from "./_components/StickyBottomSummary";
import { TrackCourseView } from "./_components/TrackCourseView";

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
    <main className="min-h-screen bg-[var(--color-background,#FFFFFF)] pb-[80px] text-[var(--color-text-primary,#0f172a)] lg:pb-[56px]">
      <TrackCourseView slug={slug} />

      {/* 히어로 */}
      <ProductHero course={course} />

      {/* 탭 네비게이션 */}
      <TabNavigation />

      <Container>
        <ClassIntro
          sections={course.introSections}
          targetAudience={course.targetAudience}
          expectedOutcomes={course.expectedOutcomes}
        />

        {course.curriculum && course.curriculum.length > 0 && (
          <Curriculum chapters={course.curriculum} />
        )}

        <div id="educator">
          <CreatorProfile instructor={course.instructor} />
        </div>

        {course.reviews && course.reviews.length > 0 && (
          <div id="reviews">
            <Reviews reviews={course.reviews} />
          </div>
        )}

        <div id="notice">
          <NoticeSection notice={course.notice} />
        </div>

        {/* 추천 프로그램 */}
        <RelatedCourses courses={course.relatedCourses} />
      </Container>

      {/* 하단 프로그램 요약 바 */}
      <StickyBottomSummary meta={course.meta} />
    </main>
  );
}
