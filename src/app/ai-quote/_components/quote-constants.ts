import type {
  AiQuoteTabType,
  AdvancedTrackQuoteRequest,
  ElementaryQuoteRequest,
  MiddleCareerQuoteRequest,
} from "@/lib/types";

export const tabLabels: Record<AiQuoteTabType, string> = {
  elementary: "초등학교",
  "middle-career": "중학교 진로체험",
  "ai-startup-aptitude-credit": "AI/창업/적성/고교학점제",
};

export const tabDescriptions: Record<AiQuoteTabType, string> = {
  elementary: "초등학교 학년군과 체험영역 중심으로 빠르게 견적을 확인할 수 있어요.",
  "middle-career": "중학생 진로체험 운영에 맞춰 진로분야와 차시 기준으로 견적을 안내합니다.",
  "ai-startup-aptitude-credit": "AI·창업·적성·고교학점제 트랙별 운영형태를 반영해 맞춤 견적을 제공합니다.",
};

export const tabExamples: Record<AiQuoteTabType, string> = {
  elementary: "예: 5학년 4개 반, AI기초 체험",
  "middle-career": "예: 중2 6개 반, AI/디지털 + 콘텐츠/미디어",
  "ai-startup-aptitude-credit": "예: 고등학생 대상 AI 프로젝트형 8개 반",
};

export const elementaryGradeBandOptions: ElementaryQuoteRequest["gradeBand"][] = [
  "저학년(1-2)",
  "중학년(3-4)",
  "고학년(5-6)",
  "전학년 혼합",
];

export const elementaryExperienceAreaOptions: ElementaryQuoteRequest["experienceArea"][] = [
  "진로기초",
  "창의체험",
  "AI기초",
  "예술/감성",
  "협업/소통",
];

export const middleGradeLevelOptions: MiddleCareerQuoteRequest["gradeLevel"][] = ["중1", "중2", "중3", "혼합"];
export const middleCareerFieldOptions: MiddleCareerQuoteRequest["careerFields"][number][] = [
  "AI/디지털",
  "창업/경제",
  "콘텐츠/미디어",
  "과학/공학",
  "예술/디자인",
  "보건/의료",
];
export const middleSessionPlanOptions: MiddleCareerQuoteRequest["sessionPlan"][] = [
  "1차시(90분)",
  "2차시(연계형)",
  "반일 프로그램",
  "종일 프로그램",
  "맞춤 제안 요청",
];

export const advancedTargetGroupOptions: AdvancedTrackQuoteRequest["targetGroup"][] = ["중학생", "고등학생", "교사", "혼합"];
export const advancedTrackOptions: AdvancedTrackQuoteRequest["track"][] = ["AI", "창업", "적성", "고교학점제"];
export const advancedOperationTypeOptions: AdvancedTrackQuoteRequest["operationType"][] = [
  "특강형",
  "프로젝트형",
  "연속과정(4주+)",
  "캠프형",
];

export const weekdays = ["일", "월", "화", "수", "목", "금", "토"] as const;

export const labelClass = "flex flex-col gap-[7px] text-[1.4rem] font-medium text-grey-200";
export const controlClass =
  "h-[44px] rounded-[10px] border border-grey-700 bg-white px-[12px] text-[1.4rem] text-text-primary outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15";
export const textareaClass =
  "rounded-[10px] border border-grey-700 bg-white px-[12px] py-[10px] text-[1.4rem] text-text-primary outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15";
export const hintClass = "text-[1.25rem] leading-[1.65] text-grey-300";
export const errorClass = "text-[1.25rem] leading-[1.6] text-red-600";
