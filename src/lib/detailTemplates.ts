import type { CourseDetail } from "./types";

export type DetailTemplateId = "experience" | "showcase" | "roadmap" | "school" | "expert";
export type DetailSectionId = "program-intro" | "curriculum" | "preparation" | "educator" | "reviews" | "notice" | "related";
export type IntroLayout = "story" | "gallery" | "compact";
export type CurriculumLayout = "chapters" | "cards" | "timeline" | "compact";

export interface DetailTemplate {
  id: DetailTemplateId;
  name: string;
  description: string;
  firstQuestion: string;
  suitableFor: string;
  hero: "cinematic" | "split" | "journey" | "brief" | "portrait";
  intro: IntroLayout;
  curriculum: CurriculumLayout;
  sections: readonly DetailSectionId[];
}

/** 템플릿은 내용의 복사본이 아니라 화면의 구성 규칙이다. */
export const detailTemplates: readonly DetailTemplate[] = [
  {
    id: "experience", name: "체험 몰입형",
    description: "큰 체험 장면으로 시작해 활동 이야기와 수업 과정으로 이어집니다.",
    firstQuestion: "학생이 어떤 장면을 경험하나요?", suitableFor: "마술 · 드론 · 과학수사",
    hero: "cinematic", intro: "story", curriculum: "chapters",
    sections: ["program-intro", "curriculum", "educator", "preparation", "reviews", "notice", "related"],
  },
  {
    id: "showcase", name: "결과물 전시형",
    description: "작품과 결과물을 먼저 보여주고, 만드는 과정과 준비물을 설명합니다.",
    firstQuestion: "수업이 끝나면 무엇이 남나요?", suitableFor: "바리스타 · 웹툰 · 패션 · 제과",
    hero: "split", intro: "gallery", curriculum: "cards",
    sections: ["program-intro", "curriculum", "preparation", "reviews", "educator", "notice", "related"],
  },
  {
    id: "roadmap", name: "프로젝트 로드맵형",
    description: "학습의 도착점과 단계를 먼저 보여주고 차시별 과정을 바로 확인합니다.",
    firstQuestion: "어떤 단계를 거쳐 완성하나요?", suitableFor: "AI · 코딩 · 로봇 · 창업",
    hero: "journey", intro: "compact", curriculum: "timeline",
    sections: ["curriculum", "program-intro", "preparation", "educator", "reviews", "notice", "related"],
  },
  {
    id: "school", name: "학교 운영 안내형",
    description: "대상·시간·준비 조건을 먼저 확인하고 수업 내용을 차분히 살펴봅니다.",
    firstQuestion: "우리 학교에서 어떻게 진행하나요?", suitableFor: "초등 체험 · 학급 단위 수업 · 기기 준비가 필요한 수업",
    hero: "brief", intro: "compact", curriculum: "compact",
    sections: ["preparation", "program-intro", "curriculum", "notice", "educator", "reviews", "related"],
  },
  {
    id: "expert", name: "전문가 스토리형",
    description: "운영 전문가의 관점과 이야기를 먼저 소개하고 학생의 활동으로 연결합니다.",
    firstQuestion: "누구에게 어떤 관점을 배우나요?", suitableFor: "건축 · 방송 · 직업인 특강",
    hero: "portrait", intro: "story", curriculum: "chapters",
    sections: ["educator", "program-intro", "curriculum", "preparation", "reviews", "notice", "related"],
  },
];

export const detailSectionLabels: Record<DetailSectionId, string> = {
  "program-intro": "프로그램 소개", curriculum: "커리큘럼", preparation: "준비·운영",
  educator: "운영 강사진", reviews: "학교·학생 후기", notice: "유의사항", related: "함께 보기",
};

/** 내용의 적합성에 따른 최초 배정. 제품의 detailTemplate 필드로 개별 변경할 수 있다. */
export const programTemplateAssignments: Readonly<Record<string, DetailTemplateId>> = {
  "giants-shoulder-ai-literacy": "roadmap",
  "magician-career-experience": "experience",
  "barista-experience": "showcase",
  "drone-pilot": "experience",
  "youtube-creator": "showcase",
  "3d-printing": "school",
  "forensic-science": "experience",
  "patissier": "showcase",
  "ai-programming": "roadmap",
  "webtoon-artist": "showcase",
  "vet-experience": "school",
  "space-scientist": "experience",
  "fashion-designer": "showcase",
  "music-producer": "showcase",
  "startup-ceo": "roadmap",
  "beauty-artist": "showcase",
  "architect": "expert",
  "robot-engineer": "roadmap",
  "emergency-medic": "school",
  "vr-developer": "roadmap",
  "forensic-psychologist": "experience",
  "biotech-scientist": "roadmap",
  "news-anchor": "expert",
};

export function isDetailTemplateId(value: unknown): value is DetailTemplateId {
  return typeof value === "string" && detailTemplates.some((template) => template.id === value);
}

export function resolveDetailTemplate(course: { slug: string; detailTemplate?: DetailTemplateId }, preview?: unknown): DetailTemplate {
  const assigned = Object.hasOwn(programTemplateAssignments, course.slug) ? programTemplateAssignments[course.slug] : "school";
  const id = isDetailTemplateId(preview) ? preview : isDetailTemplateId(course.detailTemplate) ? course.detailTemplate : assigned;
  return detailTemplates.find((template) => template.id === id)!;
}

export function getVisibleDetailSections(template: DetailTemplate, available: Partial<Record<DetailSectionId, boolean>>): DetailSectionId[] {
  return template.sections.filter((id) => available[id]);
}

/** 미리보기와 실제 상세페이지가 동일한 내용 유무 기준을 사용한다. */
export function getAvailableDetailSections(course: CourseDetail, hasDetailedPlan: boolean): Record<DetailSectionId, boolean> {
  return {
    "program-intro": Boolean(course.introSections.length || course.targetAudience?.length || course.expectedOutcomes?.length),
    curriculum: hasDetailedPlan || course.curriculum.length > 0,
    preparation: hasDetailedPlan || course.requiredTools.length > 0,
    educator: Boolean(course.instructor.name),
    reviews: Boolean(course.reviews?.some((review) => review.evidence?.trim() && review.programSlug === course.slug)),
    notice: Boolean(course.notice),
    related: course.relatedCourses.length > 0,
  };
}

export function buildTemplatePreviewHref(slug: string, template: DetailTemplateId): string {
  return `/products/${encodeURIComponent(slug)}?${new URLSearchParams({ previewTemplate: template })}`;
}
