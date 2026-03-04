import type { CourseDetail } from "@/lib/types";

const smartFarmExpert2Data: CourseDetail = {
    slug: "smart-farm-expert-2",
    title: "Smart Farm Expert 2",
    subtitle: "진로직업체험 | 중학생 | 2차시",
    heroImageSrc: "/images/products/smart-farm-expert-2/hero.webp",
    heroEyebrow: "DREAMPLEX · 농업 진로직업체험",
    heroHeadline: "미래 농업을 선도하는 스마트팜 전문가로 성장하기",
    heroSubcopy: "스마트팜 기술을 직접 체험하며 농업의 혁신을 이해합니다.\n실습 중심 수업으로 진로 탐색과 전문 역량을 키워 나갑니다.",
    heroChips: ["중학생", "학교 방문형", "실습 중심"],
    heroProofStats: [
        { label: "운영 학교", value: "50+" },
        { label: "참여 학생", value: "3,000+" },
        { label: "평균 만족도", value: "4.8 / 5.0" },
    ],
    heroTheme: "cinematic-dark",
    tags: ["진로직업체험", "스마트팜전문가", "농업", "중학생"],
    status: "학교 출강 운영중",
    instructor: {
        name: "DREAMPLEX SMART FARM EXPERT",
        role: "스마트팜 전문가 및 교육 강사",
        avatarSrc: "",
        bio: "스마트팜 기술과 농업 교육 분야에서 다년간 경험을 쌓은 전문가로, 학생들의 미래 진로 설계에 힘쓰고 있습니다.",
        career: [
            "국내 스마트팜 연구소 연구원 5년",
            "청소년 대상 농업 진로 교육 7년",
            "스마트팜 관련 다수 워크숍 강사",
        ],
        quote: "미래 농업의 주역이 될 여러분을 만나 함께 성장할 수 있어 기쁩니다.",
        interview: [
            {
                question: "스마트팜 진로체험을 통해 학생들이 얻을 수 있는 가장 큰 장점은 무엇인가요?",
                answer: "스마트팜 진로체험은 학생들이 첨단 농업 기술을 직접 경험하며 농업에 대한 흥미와 이해를 높이고, 미래 유망 직업으로서의 농업 분야를 자연스럽게 탐색할 수 있는 기회를 제공합니다.",
            },
            {
                question: "프로그램을 진행할 때 학생들이 특히 집중하면 좋은 부분이 있다면요?",
                answer: "실습 과정에서 센서와 자동화 시스템을 직접 다뤄보는 부분에 집중하면, 기술적 이해도가 높아지고 농업과 ICT 융합의 실제 적용 사례를 체감할 수 있어 효과적입니다.",
            },
        ],
    },
    meta: {
        level: "중학생 (체험형)",
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
        { label: "대상 학년", value: "중학생", icon: "users" },
        { label: "운영 차시", value: "2차시", icon: "book" },
        { label: "운영 방식", value: "학교 방문형", icon: "school" },
        { label: "소요 시간", value: "90분", icon: "clock" },
    ],
    targetAudience: [
        {
            grade: "중학생",
            description: "스마트팜 기술과 미래 농업에 관심이 있는 학생들에게 적합하며, 진로 탐색에 도움을 주는 프로그램입니다.",
            tags: ["농업", "기술", "진로탐색"],
        },
    ],
    expectedOutcomes: [
        {
            title: "스마트팜 기술 이해",
            description: "센서와 자동화 시스템을 활용한 첨단 농업 기술의 기본 원리를 학습합니다.",
            iconType: "scale",
        },
        {
            title: "문제 해결 능력 강화",
            description: "실습 중심 수업을 통해 실제 농업 문제에 대한 창의적 해결 방법을 모색합니다.",
            iconType: "sparkle",
        },
        {
            title: "협업과 소통 능력 향상",
            description: "팀 활동을 통해 협업의 중요성을 경험하고 효과적인 소통 방법을 익힙니다.",
            iconType: "users",
        },
        {
            title: "진로 탐색 및 자기 계발",
            description: "미래 농업 분야의 다양한 직업을 이해하고 자신의 진로 방향을 구체화합니다.",
            iconType: "briefcase",
        },
    ],
    curriculum: [
        {
            id: "ch-1",
            title: "Chapter 01. 스마트팜 기초 이해",
            learningPoint: "스마트팜의 개념과 구성 요소를 배우고, 기술이 농업에 미치는 영향을 이해합니다.",
            carouselImages: [],
            lessons: [
                { id: "l-1-1", title: "스마트팜 소개 및 역사", duration: "20분" },
                { id: "l-1-2", title: "센서와 자동화 기술 이해", duration: "25분" },
                { id: "l-1-3", title: "스마트팜 사례 분석", duration: "20분" },
            ],
        },
        {
            id: "ch-2",
            title: "Chapter 02. 스마트팜 실습 및 응용",
            learningPoint: "실제 스마트팜 장비를 활용한 실습으로 농업 자동화 시스템을 설계하고 운영해 봅니다.",
            carouselImages: [],
            lessons: [
                { id: "l-2-1", title: "스마트팜 장비 세팅", duration: "25분" },
                { id: "l-2-2", title: "데이터 모니터링 및 분석", duration: "25분" },
                { id: "l-2-3", title: "팀별 스마트팜 관리 실습", duration: "20분" },
            ],
        },
    ],
    introSections: [
        {
            subtitle: "CLASS INTRO",
            title: "스마트팜 기술의 이해와 미래 농업 탐색",
            description: "본 강의는 스마트팜의 기본 개념과 최신 기술 동향을 소개하며, 학생들이 미래 농업 산업에 대한 관심을 가질 수 있도록 설계되었습니다.",
            imageSrc: "/images/products/smart-farm-expert-2/class-1.webp",
        },
        {
            subtitle: "EXPERIENCE",
            title: "실습 중심의 스마트팜 운영 체험",
            description: "센서와 자동화 시스템을 직접 다루며 농작물 관리의 효율성을 체감하고, 농업 기술의 실제 적용 방식을 경험합니다.",
            imageSrc: "/images/products/smart-farm-expert-2/class-2.webp",
        },
        {
            subtitle: "TRANSFORMATION",
            title: "미래 농업 전문가로서의 성장",
            description: "스마트팜 전문가의 역할과 진로를 구체적으로 탐색하고, 자신만의 성장 계획을 세우는 시간을 갖습니다.",
            imageSrc: "/images/products/smart-farm-expert-2/class-3.webp",
        },
    ],
    requiredTools: [
        { name: "노트북 또는 태블릿", description: "데이터 모니터링 및 실습용", iconSrc: "" },
        { name: "필기도구", description: "학습 내용 기록용", iconSrc: "" },
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
            title: "스마트팜에 대한 이해가 쏙쏙",
            content: "실습 위주라서 재미있었고, 스마트팜 기술을 직접 다뤄볼 수 있어 도움이 많이 되었습니다.",
            authorName: "서울중학교",
            authorGrade: "학생",
            characterId: 1,
        },
        {
            id: "rev-2",
            rating: 5,
            title: "진로 고민에 큰 도움",
            content: "농업에 대한 새로운 시각을 갖게 되었고, 진로 탐색에 많은 도움이 되었습니다.",
            authorName: "부산과학중학교",
            authorGrade: "학생",
            characterId: 2,
        },
        {
            id: "rev-3",
            rating: 5,
            title: "협업과 소통의 중요성을 체감",
            content: "팀별 실습을 통해 친구들과 협력하는 법을 배웠고, 농업의 미래 가능성도 알게 되었습니다.",
            authorName: "대전중학교",
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

export default smartFarmExpert2Data;