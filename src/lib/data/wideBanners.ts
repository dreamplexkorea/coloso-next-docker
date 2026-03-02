import type { WideBannerItem } from "@/lib/types";

// 와이드 배너 — easy to modify
export const wideBannerItems: WideBannerItem[] = [
  {
    id: "wb-1",
    href: "/event/lunarnewyear",
    image: { mobile: "", desktop: "" },
    alt: "금토일 한정 특가 이벤트",
    backgroundColor: "#ED2040",
  },
  {
    id: "wb-2",
    href: "/event/classcut",
    image: { mobile: "", desktop: "" },
    alt: "클래스컷 오픈 이벤트",
    backgroundColor: "#1A1A6C",
  },
  {
    id: "wb-3",
    href: "/event/welcomebenefit",
    image: { mobile: "", desktop: "" },
    alt: "웰컴 혜택 이벤트",
    backgroundColor: "#004D40",
  },
];
