import type {
  AdvancedTrackQuoteRequest,
  AiQuoteTabType,
  ElementaryQuoteRequest,
  MiddleCareerQuoteRequest,
} from "@/lib/types";

/* ── 폼 옵션 값 배열 ── */

export const tabTypeValues: AiQuoteTabType[] = [
  "elementary",
  "middle-career",
  "ai-startup-aptitude-credit",
];

export const elementaryGradeBandValues: ElementaryQuoteRequest["gradeBand"][] = [
  "저학년(1-2)",
  "중학년(3-4)",
  "고학년(5-6)",
  "전학년 혼합",
];

export const elementaryAreaValues: ElementaryQuoteRequest["experienceArea"][] = [
  "진로기초",
  "창의체험",
  "AI기초",
  "예술/감성",
  "협업/소통",
];

export const middleGradeLevelValues: MiddleCareerQuoteRequest["gradeLevel"][] = ["중1", "중2", "중3", "혼합"];

export const middleCareerFieldValues: MiddleCareerQuoteRequest["careerFields"][number][] = [
  "AI/디지털",
  "창업/경제",
  "콘텐츠/미디어",
  "과학/공학",
  "예술/디자인",
  "보건/의료",
];

export const middleSessionPlanValues: MiddleCareerQuoteRequest["sessionPlan"][] = [
  "1차시(90분)",
  "2차시(연계형)",
  "반일 프로그램",
  "종일 프로그램",
  "맞춤 제안 요청",
];

export const advancedTargetGroupValues: AdvancedTrackQuoteRequest["targetGroup"][] = [
  "중학생",
  "고등학생",
  "교사",
  "혼합",
];

export const advancedTrackValues: AdvancedTrackQuoteRequest["track"][] = [
  "AI",
  "창업",
  "적성",
  "고교학점제",
];

export const advancedOperationTypeValues: AdvancedTrackQuoteRequest["operationType"][] = [
  "특강형",
  "프로젝트형",
  "연속과정(4주+)",
  "캠프형",
];

/* ── 가격 / 배수 테이블 ── */

export const elementaryGradeBandPrice: Record<ElementaryQuoteRequest["gradeBand"], number> = {
  "저학년(1-2)": 22000,
  "중학년(3-4)": 24000,
  "고학년(5-6)": 26000,
  "전학년 혼합": 25000,
};

export const elementaryAreaBonus: Record<ElementaryQuoteRequest["experienceArea"], number> = {
  진로기초: 1000,
  창의체험: 1500,
  AI기초: 2000,
  "예술/감성": 1300,
  "협업/소통": 1200,
};

export const middleGradePrice: Record<MiddleCareerQuoteRequest["gradeLevel"], number> = {
  중1: 29000,
  중2: 31000,
  중3: 32000,
  혼합: 31500,
};

export const middleSessionMultiplier: Record<MiddleCareerQuoteRequest["sessionPlan"], number> = {
  "1차시(90분)": 1,
  "2차시(연계형)": 1.22,
  "반일 프로그램": 1.35,
  "종일 프로그램": 1.5,
  "맞춤 제안 요청": 1.18,
};

export const middleCareerProgramMap: Record<MiddleCareerQuoteRequest["careerFields"][number], string> = {
  "AI/디지털": "AI 활용 진로탐색",
  "창업/경제": "스타트업 진로체험",
  "콘텐츠/미디어": "콘텐츠 크리에이터 진로체험",
  "과학/공학": "공학 문제해결 프로젝트",
  "예술/디자인": "디자인 사고 진로체험",
  "보건/의료": "보건·의료 직업탐색",
};

export const advancedTrackBasePrice: Record<AdvancedTrackQuoteRequest["track"], number> = {
  AI: 36000,
  창업: 34000,
  적성: 30000,
  고교학점제: 38000,
};

export const advancedOperationMultiplier: Record<AdvancedTrackQuoteRequest["operationType"], number> = {
  특강형: 1,
  프로젝트형: 1.28,
  "연속과정(4주+)": 1.45,
  캠프형: 1.36,
};

export const advancedTargetMultiplier: Record<AdvancedTrackQuoteRequest["targetGroup"], number> = {
  중학생: 0.95,
  고등학생: 1.05,
  교사: 1.15,
  혼합: 1.08,
};

export const advancedTrackProgramMap: Record<AdvancedTrackQuoteRequest["track"], string> = {
  AI: "AI 리터러시 프로젝트",
  창업: "창업 아이디어 랩",
  적성: "적성 기반 진로설계 워크숍",
  고교학점제: "고교학점제 과목탐색 프로그램",
};
