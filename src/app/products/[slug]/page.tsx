import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { getCourseDetail } from "@/lib/data/courseDetail";
import { curriculumDesigns } from "@/lib/data/curriculumPlans";
import { getAvailableDetailSections, getVisibleDetailSections, isDetailTemplateId, resolveDetailTemplate, type DetailSectionId } from "@/lib/detailTemplates";
import { TemplateHero } from "./_components/TemplateHero";
import { TemplateIntro } from "./_components/TemplateIntro";
import { TabNavigation } from "./_components/TabNavigation";
import { Curriculum } from "./_components/Curriculum";
import { CreatorProfile } from "./_components/CreatorProfile";
import { CurriculumPreparation } from "./_components/CurriculumPreparation";
import { RelatedCourses } from "./_components/RelatedCourses";
import { Reviews } from "./_components/Reviews";
import { NoticeSection } from "./_components/NoticeSection";
import { StickyBottomSummary } from "./_components/StickyBottomSummary";
import { TrackCourseView } from "./_components/TrackCourseView";
import { CurriculumSelection } from "./_components/CurriculumSelection";
import { DetailedCurriculum } from "./_components/DetailedCurriculum";
import "./_components/detail-templates.css";

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const [{ slug }, query] = await Promise.all([params, searchParams]);
  const course = getCourseDetail(slug);
  if (!course) return { title: "프로그램을 찾을 수 없습니다" };
  return {
    title: `${course.title} | Dreamplex 진로직업체험`,
    description: `${course.subtitle} | ${course.tags.join(", ")}`,
    keywords: [...course.tags, "진로체험", "중학교 진로체험", "창체 시간", "학교 방문형", "드림플렉스", "Dreamplex"],
    ...(isDetailTemplateId(query.previewTemplate) ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      title: course.heroHeadline || course.title,
      description: course.heroSubcopy || course.subtitle,
      type: "website",
      images: course.heroImageSrc ? [{ url: course.heroImageSrc }] : [],
    },
  };
}

/** 화면 구성은 템플릿이, 수업 내용과 상담 연결은 공통 데이터가 결정한다. */
export default async function ProductDetailPage({ params, searchParams }: PageProps) {
  const [{ slug }, query] = await Promise.all([params, searchParams]);
  const course = getCourseDetail(slug);
  if (!course) notFound();
  const design = Object.hasOwn(curriculumDesigns, slug) ? curriculumDesigns[slug] : undefined;
  const preview = isDetailTemplateId(query.previewTemplate);
  const template = resolveDetailTemplate(course, query.previewTemplate);
  const sections = getVisibleDetailSections(template, getAvailableDetailSections(course, Boolean(design?.plans.length)));
  const reviews = (course.reviews ?? []).filter((review) => review.evidence?.trim() && review.programSlug === slug);

  const content: Record<DetailSectionId, ReactNode> = {
    "program-intro": <TemplateIntro course={course} layout={template.intro} />,
    curriculum: design
      ? <DetailedCurriculum slug={slug} design={design} layout={template.curriculum} />
      : <Curriculum chapters={course.curriculum} layout={template.curriculum} />,
    preparation: <CurriculumPreparation tools={course.requiredTools} />,
    educator: <CreatorProfile instructor={course.instructor} />,
    reviews: <section id="reviews" aria-label="학교·학생 후기"><Reviews reviews={reviews} /></section>,
    notice: <section id="notice" aria-label="유의사항"><NoticeSection notice={course.notice} /></section>,
    related: <section id="related" aria-label="함께 보기"><RelatedCourses courses={course.relatedCourses} /></section>,
  };

  return (
    <CurriculumSelection key={slug} design={design}>
      <main className={`detail-page detail-template-${template.id} ${preview && query.previewMode === "full" ? "dp-full-preview" : "min-h-screen"} bg-white pb-[80px] text-[#0f172a] lg:pb-[56px]`} data-detail-template={template.id}>
        {!preview && <TrackCourseView slug={slug} />}
        {preview && <aside className="dp-preview-bar" aria-label="템플릿 미리보기 안내">
          <span>템플릿 미리보기 · <strong>{template.name}</strong></span>
          <div><Link href="/detail-templates" target="_top">템플릿 비교</Link><Link href={`/products/${slug}`}>기본 상세페이지 보기</Link></div>
        </aside>}
        <TemplateHero course={course} template={template} />
        <TabNavigation key={template.id} sections={sections} />
        <Container>{sections.map((id) => <div key={id} data-detail-section={id}>{content[id]}</div>)}</Container>
        <StickyBottomSummary meta={course.meta} slug={slug} />
      </main>
    </CurriculumSelection>
  );
}
