import type { PartnershipPageData } from "@/lib/types";

// 제휴/협력 페이지 데이터 — easy to modify
export const partnershipPageData: PartnershipPageData = {
  eyebrow: "PARTNERSHIP & ALLIANCE",
  title: "드림플렉스와 함께 만드는 현장형 협력 프로젝트",
  subtitle:
    "학교/교육기관부터 기업/공공기관까지, 대상과 목적에 맞는 프로그램을 함께 설계하고 운영합니다. 단발성 행사부터 연계형 과정까지 실행 가능한 형태로 제안합니다.",
  partnerTypes: [
    {
      id: "partner-type-1",
      title: "학교/교육기관",
      description:
        "학년별 특성과 수업 목표를 반영한 체험형 프로그램을 운영하고, 교사 준비 부담을 줄이는 실행 중심 운영안을 제공합니다.",
    },
    {
      id: "partner-type-2",
      title: "기업/공공기관",
      description:
        "대상별 난이도와 현장 조건을 반영해 교육·체험 프로그램을 공동 기획하고, 조직 내 운영 기준에 맞춘 실행 플로우를 설계합니다.",
    },
    {
      id: "partner-type-3",
      title: "지역 거점/유관기관",
      description:
        "지자체·청소년기관·센터 운영 환경에 맞춰 일정, 인력, 콘텐츠를 조정하고 지역 연계형 협력 모델로 확장할 수 있게 돕습니다.",
    },
  ],
  collaborationModels: [
    {
      id: "model-1",
      title: "프로그램 공동기획",
      description:
        "운영 목적과 대상에 맞는 커리큘럼 구조를 함께 정리하고, 실행 가능한 차시·활동 단위로 구체화합니다.",
    },
    {
      id: "model-2",
      title: "현장 운영 지원",
      description:
        "사전 준비부터 당일 운영, 사후 정리까지 단계별 역할을 분담해 운영 리스크를 낮추고 현장 흐름을 안정화합니다.",
    },
    {
      id: "model-3",
      title: "맞춤형 파일럿 운영",
      description:
        "신규 주제나 대상 확장이 필요한 경우 소규모 파일럿으로 시작해 검증 후 확대 운영하는 구조를 제안합니다.",
    },
  ],
  processSteps: [
    {
      id: "process-1",
      title: "요청 접수 및 1차 상담",
      description:
        "문의 내용을 기반으로 운영 목적, 대상, 일정, 예산 범위를 빠르게 확인합니다.",
    },
    {
      id: "process-2",
      title: "운영 범위 정렬",
      description:
        "핵심 목표와 현장 제약을 기준으로 협력 범위와 우선순위를 합의합니다.",
    },
    {
      id: "process-3",
      title: "제안안 공유",
      description:
        "프로그램 구성, 운영 방식, 준비 항목을 포함한 제안안을 전달하고 수정 사항을 반영합니다.",
    },
    {
      id: "process-4",
      title: "실행 및 회고",
      description:
        "운영 후 결과와 피드백을 정리해 다음 협력 단계로 연결할 수 있도록 지원합니다.",
    },
  ],
  trustPoints: [
    {
      id: "trust-1",
      title: "운영 안정성 중심 설계",
      description:
        "사전 준비 항목을 명확히 정의하고 체크리스트 기반으로 변수를 관리해 실행 안정성을 높입니다.",
    },
    {
      id: "trust-2",
      title: "협업 커뮤니케이션 체계",
      description:
        "담당자 간 커뮤니케이션 창구와 일정 공유 흐름을 명확히 해 진행 상황을 투명하게 관리합니다.",
    },
    {
      id: "trust-3",
      title: "보고 가능한 결과 정리",
      description:
        "운영 과정과 결과를 이해하기 쉬운 형태로 정리해 내부 공유와 후속 의사결정에 활용할 수 있도록 돕습니다.",
    },
    {
      id: "trust-4",
      title: "상황별 유연한 조정",
      description:
        "대상 규모, 공간, 일정 변화에 맞춰 운영 방식을 조정하고 목표 달성에 필요한 대체 시나리오를 제공합니다.",
    },
  ],
  faqItems: [
    {
      question: "제휴 문의 후 어느 정도 기간이 필요하나요?",
      answer:
        "운영 형태와 규모에 따라 다르지만, 1차 상담 후 기본 제안안은 가능한 빠르게 공유해 의사결정 속도를 높입니다.",
    },
    {
      question: "오프라인만 가능한가요?",
      answer:
        "기본은 현장 중심 운영이지만, 목적에 따라 온라인/하이브리드 형태를 함께 검토할 수 있습니다.",
    },
    {
      question: "예산은 어떻게 산정되나요?",
      answer:
        "대상, 차시, 운영 형태, 준비 범위를 기준으로 산정하며, 필수 항목과 선택 항목을 구분해 안내합니다.",
    },
    {
      question: "단발성 행사도 협력이 가능한가요?",
      answer:
        "가능합니다. 단발 운영도 목적과 결과물이 명확하도록 설계하며, 필요 시 후속 연계 모델까지 제안합니다.",
    },
    {
      question: "기관 내부 기준(촬영/개인정보 등) 반영이 가능한가요?",
      answer:
        "가능합니다. 사전 협의 단계에서 기관 운영 지침을 확인하고, 현장 운영안에 반영해 진행합니다.",
    },
  ],
  cta: {
    title: "우리 조직에 맞는 제휴/협력 방식을 상담해보세요",
    description:
      "문의 목적, 운영 대상, 예상 일정만 알려주시면 드림플렉스가 실행 가능한 협력 시나리오를 함께 정리해드립니다.",
    responseNote: "문의 접수 후 담당자가 확인하여 순차적으로 안내드립니다.",
    hoursNote: "대표 문의 시간: 평일 10:00 - 18:00",
    emailButtonLabel: "이메일 문의하기",
    phoneButtonLabel: "전화 문의하기",
  },
};
