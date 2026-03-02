import type { FaqPageData } from "@/lib/types";

// FAQ 페이지 데이터 — easy to modify
// Source reference: https://www.dreamplex.co.kr/pages/faq
export const faqPageData: FaqPageData = {
  eyebrow: "DREAMPLEX FAQ",
  title: "자주 묻는 질문",
  subtitle:
    "드림플렉스 공식 FAQ를 기준으로, 학교 현장에서 자주 확인하시는 질문을 한 페이지에서 빠르게 확인할 수 있도록 정리했습니다.",
  categories: [
    {
      id: "faq-category-program",
      title: "프로그램 안내",
      items: [
        {
          id: "faq-1",
          question: "프로그램은 어떤 연령대를 대상으로 하나요?",
          answer: "드림플렉스 프로그램은 초등학생, 중학생, 고등학생을 대상으로 운영됩니다.",
        },
        {
          id: "faq-2",
          question: "수업 신청은 어떻게 하나요?",
          answer:
            "홈페이지 문의를 남기거나 대표번호로 연락 주시면 됩니다. 담당자가 목적과 일정에 맞는 과정을 안내해 드립니다.",
          points: [
            "홈페이지 문의: 목적/희망 일정/인원을 남기면 순차 연락",
            "전화 문의: 1588-3803",
          ],
        },
      ],
    },
    {
      id: "faq-category-operation",
      title: "운영 및 준비",
      items: [
        {
          id: "faq-3",
          question: "강사의 전문성은 어떻게 보장하나요?",
          answer:
            "드림플렉스 강사는 내부 기준에 따라 서류 검토, 경력 검증, 수업 역량 확인 과정을 거쳐 배정됩니다.",
        },
        {
          id: "faq-4",
          question: "학교 측에서 별도로 준비해야 할 것이 있나요?",
          answer: "사전 준비를 위해 다음 항목을 미리 확인해 주시면 운영이 더 원활합니다.",
          points: ["희망 프로그램명", "희망 날짜", "참여 인원", "기본 수업 공간 및 장비 조건"],
        },
        {
          id: "faq-5",
          question: "일정 변경이나 취소는 어떻게 되나요?",
          answer:
            "일정 변경/취소는 최소 2주 전에 요청해 주셔야 하며, 이후 요청은 운영 상황에 따라 조율됩니다.",
        },
      ],
    },
  ],
  contact: {
    title: "추가 문의가 필요하신가요?",
    description: "프로그램 목적과 학교 상황을 알려주시면 맞춤형으로 빠르게 안내해 드립니다.",
    phoneLabel: "대표번호 문의",
    phoneNumber: "1588-3803",
    emailLabel: "이메일 문의",
    email: "support@dreamplex.co.kr",
    hoursNote: "운영시간: 평일 09:00 ~ 18:00",
  },
};
