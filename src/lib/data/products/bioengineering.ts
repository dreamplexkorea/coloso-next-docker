import type { CourseDetail } from "@/lib/types";

const bioengineeringData: CourseDetail = {
    slug: "bioengineering",
    title: "Bioengineering",
    subtitle: "진로직업체험 | 중학생 이상 | 2차시",
    heroImageSrc: "/images/products/bioengineering/hero.webp",
    heroEyebrow: "DREAMPLEX · 생명과학 진로직업체험",
    heroHeadline: "미래 기술과 생명을 잇는 융합 과학 체험",
    heroSubcopy: "생명공학의 원리를 이해하고,\n실습을 통해 혁신적 아이디어를 발견합니다",
    heroChips: ["중학생 이상", "학교 방문형", "실습 중심"],
    heroProofStats: [
        { label: "운영 학교", value: "50+" },
        { label: "참여 학생", value: "3,000+" },
        { label: "평균 만족도", value: "4.8 / 5.0" },
    ],
    heroTheme: "cinematic-dark",
    tags: ["진로직업체험", "생명공학자", "생명과학", "중학생 이상"],
    status: "학교 출강 운영중",
    instructor: {
        name: "DREAMPLEX BIOENGINEER",
        role: "생명공학 전문가",
        avatarSrc: "",
        bio: "생명공학 분야에서 10년간 연구와 교육을 병행해온 전문가로, 학생들에게 실험과 이론을 균형 있게 전달합니다.",
        career: [
            "국립생명과학연구소 연구원 5년 근무",
            "대학 생명공학 강의 조교 역임",
            "다수 청소년 과학 캠프 강사 활동",
        ],
        quote: "생명공학은 미래를 바꾸는 힘입니다. 직접 체험하며 꿈을 키우길 바랍니다.",
        interview: [
            {
                question: "이 프로그램이 다른 과학 체험과 다른 점은 무엇인가요?",
                answer: "생명공학의 기본 원리를 실험과 실습 중심으로 학습하며, 학생들이 실제 연구자의 시각으로 문제를 바라볼 수 있도록 돕습니다.",
            },
            {
                question: "수업 후 학생들이 얻게 되는 가장 큰 변화는 무엇인가요?",
                answer: "과학적 사고력과 문제 해결 능력이 강화되고, 생명공학 분야 진로에 대한 흥미와 자신감을 갖게 됩니다.",
            },
        ],
    },
    meta: {
        level: "중학생 이상 (체험형)",
        totalLessons: 2,
        totalDuration: "90분",
        language: "한국어",
        hasResources: true,
    },
    price: {
        original: 35000,
        discounted: 28000,
        currency: "원",
    },
    programHighlights: [
        { label: "대상 학년", value: "중학생 이상", icon: "users" },
        { label: "운영 차시", value: "2차시", icon: "book" },
        { label: "운영 방식", value: "학교 방문형", icon: "school" },
        { label: "소요 시간", value: "90분", icon: "clock" },
    ],
    targetAudience: [
        {
            grade: "중학생 이상",
            description: "생명과학과 첨단기술에 관심이 많고, 미래 융합과학 분야 진로를 탐색하는 학생",
            tags: ["과학탐구", "생명공학", "진로탐색"],
        },
    ],
    expectedOutcomes: [
        {
            title: "생명공학 기본 원리 이해",
            description: "DNA, 유전자, 세포의 구조와 기능에 대한 기초 지식을 습득합니다.",
            iconType: "scale",
        },
        {
            title: "실험 설계 및 데이터 분석 능력 향상",
            description: "간단한 생명공학 실험을 직접 설계하고 결과를 분석하는 과정을 경험합니다.",
            iconType: "sparkle",
        },
        {
            title: "문제 해결 및 창의적 사고 배양",
            description: "생명공학 기술이 사회에 미치는 영향을 고민하며 창의적 해결책을 모색합니다.",
            iconType: "users",
        },
        {
            title: "진로 탐색 및 동기 부여",
            description: "생명공학 분야 전문가와의 소통을 통해 진로에 대한 구체적 비전을 갖습니다.",
            iconType: "briefcase",
        },
    ],
    curriculum: [
        {
            id: "ch-1",
            title: "Chapter 01. 생명공학의 기초와 DNA 탐험",
            learningPoint: "DNA 구조 이해 및 추출 실습을 통해 생명공학 기본 원리를 체험합니다",
            carouselImages: [],
            lessons: [
                { id: "l-1-1", title: "생명공학 개요 및 역할", duration: "20분" },
                { id: "l-1-2", title: "DNA의 구조와 기능", duration: "25분" },
                { id: "l-1-3", title: "DNA 추출 실습", duration: "20분" },
            ],
        },
        {
            id: "ch-2",
            title: "Chapter 02. 유전자 조작과 바이오 기술 응용",
            learningPoint: "유전자 편집 기술과 바이오 소재 활용 방법을 탐구합니다",
            carouselImages: [],
            lessons: [
                { id: "l-2-1", title: "유전자 편집 기술 소개", duration: "25분" },
                { id: "l-2-2", title: "바이오 기술 실습 및 응용 사례", duration: "25분" },
                { id: "l-2-3", title: "미래 생명공학 토론", duration: "20분" },
            ],
        },
    ],
    introSections: [
        {
            subtitle: "CLASS INTRO",
            title: "생명공학, 미래를 디자인하다",
            description: "생명공학은 생명 현상의 원리를 이용해 인류의 삶을 개선하는 첨단 학문입니다. 이 강의에서는 DNA의 구조부터 최신 유전자 편집 기술까지 체험하며 미래 과학자의 꿈을 키웁니다.",
            imageSrc: "/images/products/bioengineering/class-1.webp",
        },
        {
            subtitle: "EXPERIENCE",
            title: "직접 실험하고 배우는 생명공학",
            description: "DNA 추출 실습 및 유전자 조작 시뮬레이션을 통해 이론뿐 아니라 실제 과학자의 연구 과정도 경험합니다.",
            imageSrc: "/images/products/bioengineering/class-2.webp",
        },
        {
            subtitle: "TRANSFORMATION",
            title: "과학적 사고와 창의력의 성장",
            description: "생명공학 기술이 사회에 미치는 영향을 함께 고민하며 창의적 문제 해결 능력과 진로에 대한 확신을 갖게 됩니다.",
            imageSrc: "/images/products/bioengineering/class-3.webp",
        },
    ],
    requiredTools: [
        { name: "실험 키트", description: "DNA 추출 및 유전자 편집 실습에 필요한 재료 일체", iconSrc: "" },
        { name: "노트북 또는 태블릿", description: "데이터 기록 및 시뮬레이션 참여용 (선택사항)", iconSrc: "" },
    ],
    notice: {
        operationGuide: [
            "전국 학교 어디든 전문 강사진이 직접 방문합니다.",
            "학급 단위(25~35명) 운영이 기본입니다.",
            "모든 재료와 도구는 드림플렉스에서 제공합니다.",
        ],
        learningPolicy: [
            "별도 준비물 없음 (모든 재료 제공)",
            "편안한 복장 착용 권장",
        ],
        deviceLimit: [
            "별도의 디지털 기기는 필요하지 않습니다.",
        ],
        intellectualProperty: [
            "학생 창작물의 저작권은 학생 본인에게 귀속됩니다.",
        ],
        coachingInfo: [
            "수업 후 활동 자료를 제공합니다.",
        ],
    },
    reviews: [
        {
            id: "rev-1",
            rating: 5,
            title: "생명공학이 재미있어졌어요!",
            content: "DNA 추출 실습이 특히 기억에 남아요. 직접 해보니 훨씬 쉽게 이해할 수 있었습니다.",
            authorName: "서울과학고",
            authorGrade: "학생",
            characterId: 1,
        },
        {
            id: "rev-2",
            rating: 5,
            title: "진로에 대해 더 생각하게 됐어요",
            content: "생명공학자가 하는 일을 알게 되고 미래에 도전해보고 싶다는 생각이 들었습니다.",
            authorName: "대전중학교",
            authorGrade: "학생",
            characterId: 2,
        },
        {
            id: "rev-3",
            rating: 5,
            title: "강사님 설명이 정말 좋았어요",
            content: "복잡한 내용도 쉽게 풀어주시고 질문에도 친절히 답해주셔서 만족스러웠습니다.",
            authorName: "부산과학중",
            authorGrade: "학생",
            characterId: 3,
        },
    ],
    curriculumLinks: [
        "창체 진로탐색 활동",
        "자유학기제",
        "2022 개정 교육과정",
        "창의적 체험활동",
    ],
    relatedCourses: [],
};

export default bioengineeringData;