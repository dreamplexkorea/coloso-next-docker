// 전역 타입 정의 — easy to modify

/** 프로모션 바 아이템 (네비게이션 상단 링크) */
export interface PromotionItem {
  label: string;
  href: string;
  highlight?: boolean; // 강조 표시 여부
}

/** 카테고리 (대분류) */
export interface Category {
  id: string;
  label: string;
  subCategories: SubCategory[];
}

/** 서브카테고리 */
export interface SubCategory {
  id: string;
  label: string;
  href: string;
}

/** 히어로 배너 슬라이드 */
export interface HeroSlide {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle: string;
  ctaLabel?: string;
  theme?: "dark" | "mid" | "light";
  layout?: "overlay" | "split";
  href: string;
  image: {
    mobile: string;
    desktop: string;
  };
  backgroundColor: string;
}

/** 퀵 링크 아이템 */
export interface QuickLinkItem {
  id: string;
  label: string;
  href: string;
  iconSrc: string;
  emoji?: string;
}

/** 강의 카드 */
export interface CourseCard {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  instructor: string;
  thumbnailSrc: string;
  badges: string[];
  keywords: string[];
  bgColor?: string;
  duration?: string;
  schoolLevel?: string;
  category?: string;
}

/** 최근 본 강의 저장 항목 */
export interface RecentlyViewedItem {
  slug: string;
  viewedAt: number;
}

/** 개인화 섹션 로컬 저장 설정 */
export interface PersonalizedSectionConfig {
  storageKey: string;
  retentionDays: number;
  maxItems: number;
}

/** 캐러셀 섹션 (강의 목록 슬라이더) */
export interface CarouselSection {
  id: string;
  title: string;
  courses: CourseCard[];
  moreLink?: string;
  thumbnailRatio?: "16:9" | "3:4";
}

/** 와이드 배너 */
export interface WideBannerItem {
  id: string;
  href: string;
  image: {
    mobile: string;
    desktop: string;
  };
  alt: string;
  backgroundColor: string;
}

/** 푸터 링크 */
export interface FooterLink {
  label: string;
  href: string;
}

/** 소셜 링크 */
export interface SocialLink {
  platform: string;
  href: string;
  iconSrc: string;
}

/** 회사 정보 */
export interface CompanyInfo {
  name: string;
  ceo: string;
  businessNumber: string;
  address: string;
  phone: string;
  email: string;
  ecommerceNumber: string;
}

// ── 강의 상세페이지 타입 ──

/** 인터뷰 Q&A */
export interface InterviewQA {
  question: string;
  answer: string;
}

/** 사용 프로그램 */
export interface RequiredTool {
  name: string;
  description: string;
  iconSrc: string;
}

/** 환불 규정 행 */
export interface RefundPolicyRow {
  period: string;
  condition: string;
  refundRate: string;
}

/** 유의사항 상세 */
export interface NoticeDetail {
  refundPolicy?: RefundPolicyRow[];
  learningPolicy: string[];
  deviceLimit: string[];
  intellectualProperty: string[];
  coachingInfo: string[];
  operationGuide?: string[];
}

/** 강사 프로필 */
export interface InstructorProfile {
  name: string;
  role: string;
  avatarSrc: string;
  bio: string;
  career: string[];
  interview: InterviewQA[];
  quote?: string;
}

/** 강의 메타 정보 (난이도/시간/언어) */
export interface CourseMeta {
  level: string;
  totalLessons: number;
  totalDuration: string;
  language: string;
  hasResources: boolean;
}

/** 강의 가격 */
export interface CoursePrice {
  original: number;
  discounted: number;
  currency: string;
}

/** 히어로 신뢰 지표 */
export interface HeroProofStat {
  label: string;
  value: string;
}

/** AI 견적요청 탭 타입 */
export type AiQuoteTabType =
  | "elementary"
  | "middle-career"
  | "ai-startup-aptitude-credit";

/** 초등학교 견적요청 payload */
export interface ElementaryQuoteRequest {
  schoolName: string;
  contactName: string;
  phone: string; // 숫자 9~11자리
  email?: string;
  gradeBand: "저학년(1-2)" | "중학년(3-4)" | "고학년(5-6)" | "전학년 혼합";
  classCount: number; // 참여 반수(학급 수)
  participantCount: number; // 반당 평균 인원
  preferredDate?: string;
  experienceArea: "진로기초" | "창의체험" | "AI기초" | "예술/감성" | "협업/소통";
  message?: string;
}

/** 중학교 진로체험 견적요청 payload */
export interface MiddleCareerQuoteRequest {
  schoolName: string;
  contactName: string;
  phone: string; // 숫자 9~11자리
  email?: string;
  gradeLevel: "중1" | "중2" | "중3" | "혼합";
  classCount: number; // 참여 반수(학급 수)
  participantCount: number; // 반당 평균 인원
  preferredDate?: string;
  careerFields: Array<
    "AI/디지털" | "창업/경제" | "콘텐츠/미디어" | "과학/공학" | "예술/디자인" | "보건/의료"
  >;
  sessionPlan: "1차시(90분)" | "2차시(연계형)" | "반일 프로그램" | "종일 프로그램" | "맞춤 제안 요청";
  message?: string;
}

/** AI/창업/적성/고교학점제 견적요청 payload */
export interface AdvancedTrackQuoteRequest {
  organizationName: string;
  contactName: string;
  phone: string; // 숫자 9~11자리
  email?: string;
  targetGroup: "중학생" | "고등학생" | "교사" | "혼합";
  track: "AI" | "창업" | "적성" | "고교학점제";
  operationType: "특강형" | "프로젝트형" | "연속과정(4주+)" | "캠프형";
  classCount: number; // 참여 반수(학급 수)
  participantCount: number; // 반당 평균 인원
  preferredDate?: string;
  message?: string;
}

/** AI 견적요청 API 요청 */
export type AiQuoteRequest =
  | { tabType: "elementary"; payload: ElementaryQuoteRequest }
  | { tabType: "middle-career"; payload: MiddleCareerQuoteRequest }
  | { tabType: "ai-startup-aptitude-credit"; payload: AdvancedTrackQuoteRequest };

/** AI 견적요청 결과 */
export interface AiQuoteResult {
  recommendedPrograms: string[];
  estimatedBudgetRange: string;
  notes: string[];
}

/** AI 견적요청 API 응답 */
export interface AiQuoteResponse {
  ok: boolean;
  message: string;
  quote?: AiQuoteResult;
}

/** 드림팀 멤버 */
export interface DreamTeamMember {
  id: string;
  name: string;
  role: string;
  strength: string;
  bio: string;
  careerHighlights: string[];
  avatarSrc?: string;
}

/** 드림팀 운영 원칙/강점 */
export interface DreamTeamPrinciple {
  id: string;
  title: string;
  description: string;
}

/** 미시적 동기 인사이트 */
export interface MicroMotivationInsight {
  id: string;
  trigger: string;
  friction: string;
  designResponse: string;
  decisionCue: string;
}

/** 미시적 동기 근거 요약 */
export interface MicroMotivationEvidence {
  id: string;
  principle: string;
  appliedCopy: string;
}

/** 드림팀 FAQ */
export interface DreamTeamFaqItem {
  id: string;
  question: string;
  answer: string;
  points?: string[];
}

/** 드림팀 소개 페이지 데이터 */
export interface DreamTeamPageData {
  eyebrow: string;
  title: string;
  subtitle: string;
  principles: DreamTeamPrinciple[];
  members: DreamTeamMember[];
  strengths: DreamTeamPrinciple[];
  microMotivations: MicroMotivationInsight[];
  evidenceSummary: MicroMotivationEvidence[];
  faqItems: DreamTeamFaqItem[];
  cta: {
    title: string;
    description: string;
    secondaryLine?: string;
    buttonLabel: string;
    href: string;
  };
}

/** 수강생 후기 */
export interface Review {
  id: string;
  rating: number;
  title: string;
  content: string;
  authorName: string;
  authorGrade: string;
  authorAvatarSrc?: string;
  characterId?: number;
  photoSrc?: string;
}

/** 제휴/협력 공용 카드 */
export interface PartnershipCardItem {
  id: string;
  title: string;
  description: string;
}

/** 제휴/협력 진행 단계 */
export interface PartnershipStepItem {
  id: string;
  title: string;
  description: string;
}

/** 제휴/협력 FAQ */
export interface PartnershipFaqItem {
  question: string;
  answer: string;
}

/** FAQ 항목 */
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  points?: string[];
}

/** FAQ 카테고리 */
export interface FaqCategory {
  id: string;
  title: string;
  items: FaqItem[];
}

/** FAQ 페이지 데이터 */
export interface FaqPageData {
  eyebrow: string;
  title: string;
  subtitle: string;
  categories: FaqCategory[];
  contact: {
    title: string;
    description: string;
    phoneLabel: string;
    phoneNumber: string;
    emailLabel: string;
    email: string;
    hoursNote: string;
  };
}

/** 이용약관 조항 */
export interface TermsSection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

/** 이용약관 페이지 데이터 */
export interface TermsPageData {
  eyebrow: string;
  title: string;
  subtitle: string;
  notice: {
    effectiveDate: string;
    amendedDate: string;
    scopeNote: string;
  };
  sections: TermsSection[];
  contact: {
    email: string;
    phone: string;
  };
}

/** 개인정보 처리 목적/항목/보유기간 행 */
export interface PrivacyProcessingItem {
  id: string;
  purpose: string;
  items: string[];
  retention: string;
}

/** 개인정보처리방침 조항 */
export interface PrivacyPolicySection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

/** 개인정보처리방침 페이지 데이터 */
export interface PrivacyPolicyPageData {
  eyebrow: string;
  title: string;
  subtitle: string;
  notice: {
    effectiveDate: string;
    amendedDate: string;
  };
  processingItems: PrivacyProcessingItem[];
  sections: PrivacyPolicySection[];
  contact: {
    department: string;
    manager: string;
    email: string;
    phone: string;
  };
  reliefChannels: Array<{
    name: string;
    website: string;
    phone: string;
  }>;
}

/** 제휴/협력 페이지 데이터 */
export interface PartnershipPageData {
  eyebrow: string;
  title: string;
  subtitle: string;
  partnerTypes: PartnershipCardItem[];
  collaborationModels: PartnershipCardItem[];
  processSteps: PartnershipStepItem[];
  trustPoints: PartnershipCardItem[];
  faqItems: PartnershipFaqItem[];
  cta: {
    title: string;
    description: string;
    responseNote: string;
    hoursNote: string;
    emailButtonLabel: string;
    phoneButtonLabel: string;
  };
}

/** 커리큘럼 레슨 */
export interface CurriculumLesson {
  id: string;
  title: string;
  duration: string;
}

/** 커리큘럼 챕터 */
export interface CurriculumChapter {
  id: string;
  title: string;
  lessons: CurriculumLesson[];
  thumbnailSrc?: string;
  learningPoint?: string;
  carouselImages?: string[];
}

/** 프로그램 핵심 정보 (ProductHero용) */
export interface ProgramHighlight {
  label: string;
  value: string;
  icon?: string;
}

/** 추천 대상 */
export interface TargetAudience {
  grade: string;
  description: string;
  tags: string[];
}

/** 기대 효과 */
export interface ExpectedOutcome {
  title: string;
  description: string;
  icon?: string;
  iconType?: "scale" | "users" | "sparkle" | "briefcase" | string;
}

/** 강의 상세 정보 */
export interface CourseDetail {
  slug: string;
  title: string;
  subtitle: string;
  heroImageSrc: string;
  heroEyebrow?: string;
  heroHeadline?: string;
  heroSubcopy?: string;
  heroChips?: string[];
  heroProofStats?: HeroProofStat[];
  heroTheme?: "cinematic-dark" | "cinematic-mid";
  tags: string[];
  status: string;
  instructor: InstructorProfile;
  meta: CourseMeta;
  price: CoursePrice;
  curriculum: CurriculumChapter[];
  introSections: { title: string; subtitle?: string; description: string; imageSrc: string }[];
  requiredTools: RequiredTool[];
  notice: NoticeDetail;
  relatedCourses: CourseCard[];
  programHighlights?: ProgramHighlight[];
  targetAudience?: TargetAudience[];
  expectedOutcomes?: ExpectedOutcome[];
  reviews?: Review[];
}
