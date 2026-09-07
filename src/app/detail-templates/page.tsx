import type { Metadata } from "next";
import { getAllCourseDetails } from "@/lib/data/courseDetail";
import { curriculumDesigns } from "@/lib/data/curriculumPlans";
import { getAvailableDetailSections, resolveDetailTemplate } from "@/lib/detailTemplates";
import { TemplateGallery } from "./_components/TemplateGallery";
import "../products/[slug]/_components/detail-templates.css";

export const metadata: Metadata = {
  title: "상세페이지 템플릿 비교 | Dreamplex",
  description: "같은 프로그램으로 다섯 가지 상세페이지 구성을 비교합니다.",
  robots: { index: false, follow: false },
};

export default function DetailTemplatesPage() {
  const programs = getAllCourseDetails().map((course) => ({
    slug: course.slug,
    title: course.title,
    defaultTemplate: resolveDetailTemplate(course).id,
    availableSections: getAvailableDetailSections(course, Object.hasOwn(curriculumDesigns, course.slug) && Boolean(curriculumDesigns[course.slug].plans.length)),
  }));
  return <TemplateGallery programs={programs} />;
}
