import type { QuickLinkItem } from "@/lib/types";

// 퀵 링크 아이템 — easy to modify
export const quickLinkItems: QuickLinkItem[] = [
  { id: "ql-1", label: "초등학교", href: "#cat-elementary", iconSrc: "", emoji: "\uD83C\uDFEB" },
  { id: "ql-2", label: "중학교 진로체험", href: "#cat-middle-career", iconSrc: "", emoji: "\uD83E\uDDD1\u200D\uD83C\uDF93" },
  {
    id: "ql-3",
    label: "AI/창업/적성/고교학점제",
    href: "#cat-advanced-track",
    iconSrc: "",
    emoji: "\uD83E\uDDE0",
  },
];
