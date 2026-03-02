import type { PromotionItem, Category } from "@/lib/types";

// 프로모션 바 아이템 — easy to modify
export const promotionBarItems: PromotionItem[] = [
  { label: "🚀 압도적인 유익함 AI 클래스관", href: "/event/lunarnewyear", highlight: true },
  { label: "💼 대세는 창업 코칭관", href: "/event/classcut", highlight: true },
  { label: "재미있는 체험모음zip", href: "/event/hall-drawing" },
  { label: "얼리버드", href: "/catalog/new" },
  { label: "웰컴", href: "/event/welcomebenefit" },
];

// 네비게이션 메뉴 아이템 — easy to modify
export const navigationMenuItems: PromotionItem[] = [
  { label: "🚀 압도적인 유익함 AI 클래스관", href: "/event/lunarnewyear", highlight: true },
  { label: "💼 대세는 창업 코칭관", href: "/event/classcut", highlight: true },
  { label: "드림하이 초등관", href: "/event/aboutcoloso" },
  { label: "재미있는 체험모음zip", href: "/event/hall-drawing" },
  { label: "얼리버드", href: "/catalog/new" },
  { label: "BEST", href: "/catalog/best" },
  { label: "웰컴", href: "/event/welcomebenefit" },
  { label: "이벤트", href: "/event/event-list-main" },
];

// 체험 카테고리 목록 — easy to modify
export const categories: Category[] = [
  {
    id: "ai",
    label: "AI 활용",
    subCategories: [
      { id: "chatgpt", label: "ChatGPT 활용", href: "/category/chatgpt" },
      { id: "ai-art", label: "AI 아트", href: "/category/ai-art" },
      { id: "ai-coding", label: "AI 코딩", href: "/category/ai-coding" },
      { id: "ai-business", label: "AI 비즈니스", href: "/category/ai-business" },
    ],
  },
  {
    id: "startup",
    label: "창업/코칭",
    subCategories: [
      { id: "startup-basics", label: "창업 기초", href: "/category/startup-basics" },
      { id: "coaching", label: "비즈니스 코칭", href: "/category/coaching" },
      { id: "side-project", label: "사이드 프로젝트", href: "/category/side-project" },
    ],
  },
  {
    id: "content",
    label: "콘텐츠 제작",
    subCategories: [
      { id: "youtube", label: "유튜브", href: "/category/youtube" },
      { id: "sns", label: "SNS 마케팅", href: "/category/sns-marketing" },
      { id: "copywriting", label: "카피라이팅", href: "/category/copywriting" },
    ],
  },
  {
    id: "selfdev",
    label: "자기계발",
    subCategories: [
      { id: "productivity", label: "생산성", href: "/category/productivity" },
      { id: "communication", label: "커뮤니케이션", href: "/category/communication" },
      { id: "leadership", label: "리더십", href: "/category/leadership" },
    ],
  },
  {
    id: "finance",
    label: "재테크",
    subCategories: [
      { id: "stock", label: "주식/투자", href: "/category/stock" },
      { id: "realestate", label: "부동산", href: "/category/real-estate" },
      { id: "crypto", label: "가상자산", href: "/category/crypto" },
    ],
  },
];
