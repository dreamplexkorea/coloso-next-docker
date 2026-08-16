import type { FooterLink, CompanyInfo } from "@/lib/types";

// 푸터 링크 — easy to modify
export const footerLinks: FooterLink[] = [
  { label: "이용약관", href: "/terms" },
  { label: "개인정보처리방침", href: "/privacy" },
  { label: "자주 묻는 질문", href: "/faq" },
  { label: "드림팀 소개", href: "/dream-team" },
  { label: "기업교육", href: "/partnership" },
  { label: "제휴/협력", href: "/partnership" },
  { label: "강사 지원", href: "/instructor/apply" },
];

// 회사 정보 — easy to modify
export const companyInfo: CompanyInfo = {
  name: "(주)데이원컴퍼니",
  ceo: "이세라",
  businessNumber: "634-88-01795",
  address: "서울특별시 강남구 테헤란로4길 38, 13층",
  phone: "02-6956-5662",
  email: "support@coloso.co.kr",
  ecommerceNumber: "제2021-서울강남-05525호",
};

// 푸터 하단 문구 (www.dreamplex.co.kr 기준)
export const footerBottomInfo = {
  companyLine: "드림플렉스 l 대표자 : 강욱곤",
  contactLine:
    "고객센터 1588-3803 Tel. 053-555-4160 | kang_couch@dreamplex.co.kr ㅣdeagu, Korea ㅣ Biz License 704-48-00666",
  copyrightLine: "Copyright ⓒ 2026 드림플렉스 All rights reserved.",
};
