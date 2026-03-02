import type { CourseDetail } from "@/lib/types";

const courseDetail: CourseDetail = {
  slug: "news-anchor",
  title: "아나운서 체험: 오늘의 뉴스를 전하는 전문가",
  subtitle: "발성·발음 훈련부터 뉴스 앵커링까지, 방송 전문인의 세계를 체험하는 프로그램",
  heroImageSrc: "/images/products/news-anchor/hero.png",
  heroEyebrow: "DREAMPLEX · 미디어/방송 진로직업체험",
  heroHeadline: "당신의 목소리가 세상에 메시지를 전한다",
  heroSubcopy: "현직 아나운서 출신 강사가 학교로 찾아가, 방송 언어와 전달력의 기술을 가르칩니다.",
  heroChips: ["초등 대상","발성 훈련","뉴스 앵커링"],
  heroProofStats: [
    { label: "운영 학교", value: "41+" },
    { label: "참여 학생", value: "2,812+" },
    { label: "평균 만족도", value: "4.9 / 5.0" },
  ],
  heroTheme: "cinematic-dark",
  tags: ["진로직업체험", "미디어/방송", "초등"],
  status: "학교 출강 운영중",
  instructor: {
    name: "DREAMPLEX ANCHOR",
    role: "전직 방송사 아나운서 & 스피치 교육 전문가",
    avatarSrc: "",
    bio: "전직 방송사 아나운서 & 스피치 교육 전문가이(가) 학생 눈높이에 맞춘 전문 교육을 설계하고 진행합니다.",
    career: [
      "관련 분야 전문 자격 및 현장 경력 보유",
      "전국 학교 진로체험 프로그램 다수 운영",
      "학생 수준별 맞춤형 커리큘럼 설계 전문",
      "교육부 인정 진로교육 프로그램 참여",
    ],
    quote: "직접 경험해본 것만이 진짜 나의 것이 됩니다. 학생들에게 그 '진짜 경험'을 선물하는 것이 저의 사명입니다.",
    interview: [
      {
        question: "이 프로그램의 가장 큰 차별점은 무엇인가요?",
        answer: "현직 전문가가 직접 설계하고 운영하기 때문에 교과서에서는 배울 수 없는 현장의 생생한 노하우를 전달합니다. 이론이 아닌 실전, 암기가 아닌 체험에 초점을 맞춥니다.",
      },
      {
        question: "학생들의 수준 차이가 크면 어떡하나요?",
        answer: "모든 프로그램은 '기초→실습→응용' 3단계로 설계되어 있어, 처음 접하는 학생도 자연스럽게 따라올 수 있습니다. 오히려 기존 경험이 없는 학생일수록 신선한 관점에서 더 큰 영감을 받곤 합니다.",
      },
      {
        question: "체험 후 학생들에게 어떤 변화가 생기나요?",
        answer: "가장 큰 변화는 '이 직업도 가능하구나'라는 시야의 확장입니다. 막연히 몰랐던 분야를 직접 체험하면, 자신의 적성과 흥미를 구체적으로 발견하게 됩니다.",
      },
    ],
  },
  meta: {
    level: "초등학생 (체험형)",
    totalLessons: 2,
    totalDuration: "80분",
    language: "한국어",
    hasResources: true,
  },
  price: {
    original: 40000,
    discounted: 32000,
    currency: "원",
  },
  programHighlights: [
    { label: "대상 학년", value: "초등학생", icon: "users" },
    { label: "운영 차시", value: "2차시", icon: "book" },
    { label: "운영 방식", value: "학교 방문형", icon: "school" },
    { label: "소요 시간", value: "80분", icon: "clock" },
  ],
  targetAudience: [
    {
      grade: "초등학교 3~6학년",
      description: "전문가의 세계를 직접 체험하며 관련 분야 진로를 탐색합니다",
      tags: ["진로탐색", "미디어/방송", "체험학습"],
    },
  ],
  expectedOutcomes: [
    { title: "전문 지식 기초 습득", description: "관련 분야의 핵심 원리와 기초 기술을 체험으로 학습", iconType: "scale" },
    { title: "실전 기술 체험", description: "현직 전문가의 도구와 기법을 직접 사용해보는 실습 경험", iconType: "sparkle" },
    { title: "문제 해결력 향상", description: "실제 과제를 해결하며 창의적·논리적 사고력 훈련", iconType: "users" },
    { title: "진로 방향 탐색", description: "관련 분야의 다양한 직업군을 발견하고 적성을 확인", iconType: "briefcase" },
  ],
  curriculum: [
    {
      id: "ch-1",
      title: "Chapter 01. 전문가의 눈으로 바라보기",
      learningPoint: "해당 분야의 핵심 원리와 사고방식을 이해합니다",
      lessons: [
        { id: "l-1-1", title: "이론 탐구: 핵심 원리와 현장의 이야기", duration: "24분" },
        { id: "l-1-2", title: "관찰과 분석: 전문가처럼 생각하기", duration: "16분" },
      ],
    },
    {
      id: "ch-2",
      title: "Chapter 02. 실전! 나도 전문가 도전",
      learningPoint: "직접 도구를 다루고 과제를 수행하며 실전 역량을 체험합니다",
      lessons: [
        { id: "l-2-1", title: "실습: 핵심 기술 직접 체험하기", duration: "20분" },
        { id: "l-2-2", title: "프로젝트: 나만의 결과물 완성 & 발표", duration: "20분" },
      ],
    },
  ],
  introSections: [
    {
      subtitle: "CLASS INTRO",
      title: "교과서 밖의 진짜 세상을 만나다",
      description: "교실에서 배우는 이론이 실제 현장에서 어떻게 쓰이는지, 현직 전문가가 직접 보여주고 체험하게 합니다. 아는 것과 경험하는 것은 완전히 다릅니다.",
      imageSrc: "",
    },
    {
      subtitle: "EXPERIENCE",
      title: "프로의 도구로, 프로의 방식으로",
      description: "현직 전문가가 실제 현장에서 사용하는 도구와 방법론을 학생 눈높이에 맞춰 전달합니다. 체험의 깊이가 진로 탐색의 깊이를 결정합니다.",
      imageSrc: "",
    },
    {
      subtitle: "TRANSFORMATION",
      title: "한 번의 체험이 평생의 방향을 바꾼다",
      description: "체험 전: '그냥 관심 있는 직업' → 체험 후: '내 적성과 흥미를 확인한 구체적 진로'. 직접 해본 경험만이 진짜 자신감을 줍니다.",
      imageSrc: "",
    },
  ],
  requiredTools: [
    { name: "전문 실습 도구", description: "프로그램별 맞춤 장비 및 재료 (드림플렉스 제공)", iconSrc: "" },
    { name: "활동지 & 워크북", description: "체험 기록 및 진로 탐색 정리용 교재", iconSrc: "" },
  ],
  notice: {
    operationGuide: [
      "전국 어디든 전문 강사진이 직접 방문합니다.",
      "학급 단위(25~30명) 운영이 기본이며, 학년 단위 특강도 가능합니다.",
      "모든 재료와 장비는 드림플렉스에서 준비합니다.",
    ],
    learningPolicy: [
      "프로그램은 2차시(80분)로 구성됩니다.",
      "모든 교육 자료는 사전에 준비되어 제공됩니다.",
      "수료 기준 충족 시 참여 학생 전원에게 수료증이 발급됩니다.",
    ],
    deviceLimit: [
      "프로그램에 따라 노트북/태블릿이 필요할 수 있습니다.",
      "사전 안내를 통해 준비 사항을 공유합니다.",
    ],
    intellectualProperty: [
      "교육 자료의 저작권은 Dreamplex에 있습니다.",
      "학생 산출물의 저작권은 학생 본인에게 귀속됩니다.",
    ],
    coachingInfo: [
      "프로그램 종료 후 진로 탐색 자료를 추가 제공합니다.",
    ],
  },
  reviews: [
    {
      id: "rev-1",
      rating: 5,
      title: "정말 재미있고 유익한 체험이었어요!",
      content: "직접 해볼 수 있어서 너무 좋았어요. 이 분야에 대해 더 알고 싶어졌습니다!",
      authorName: "학생 A",
      authorGrade: "초등학교 5학년",
      characterId: 1,
    },
    {
      id: "rev-2",
      rating: 5,
      title: "진로 고민에 큰 도움이 됐어요",
      content: "막연하게만 생각했던 직업을 직접 체험해보니 내 적성에 맞는지 알 수 있었습니다. 감사합니다!",
      authorName: "학생 B",
      authorGrade: "초등학교 6학년",
      characterId: 2,
    },
  ],
  relatedCourses: [],
};

export default courseDetail;
