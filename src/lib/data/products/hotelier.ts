import type { CourseDetail } from "@/lib/types";

const hotelierData: CourseDetail = {
    slug: "hotelier",
    title: "호텔리어",
    subtitle: "진로직업체험 | 중학생 이상 | 2차시",
    heroImageSrc: "/images/products/hotelier/hero.webp",
    heroEyebrow: "DREAMPLEX · 진로직업체험",
    heroHeadline: "호텔 현장의 전문가가 전하는 생생한 직업체험",
    heroSubcopy: "호텔리어의 역할과 서비스 마인드를 배우며\n진로 탐색과 실무 능력을 키워보세요",
    heroChips: ["중학생 이상", "학교 방문형", "실습 중심"],
    heroProofStats: [
        { label: "운영 학교", value: "50+" },
        { label: "참여 학생", value: "3,000+" },
        { label: "평균 만족도", value: "4.8 / 5.0" },
    ],
    heroTheme: "cinematic-dark",
    tags: ["진로직업체험", "호텔리어", "서비스직", "중학생 이상"],
    status: "학교 출강 운영중",
    instructor: {
        name: "DREAMPLEX HOTELIER",
        role: "호텔 서비스 전문가",
        avatarSrc: "",
        bio: "호텔리어로서 10년간 국내외 다양한 호텔에서 근무하며 쌓은 노하우를 바탕으로 진로 체험 교육을 진행합니다.",
        career: [
            "서울 그랜드호텔 프론트 데스크 매니저",
            "국내 5성급 호텔 고객 서비스 팀장",
            "호텔리어 진로체험 강사 5년차",
        ],
        quote: "호텔리어는 단순한 직업이 아니라 사람과 마음을 연결하는 다리입니다.",
        interview: [
            {
                question: "이 프로그램이 학생들에게 어떤 도움이 되나요?",
                answer: "호텔리어 직무를 직접 체험함으로써 서비스 마인드와 직업관을 자연스럽게 익히고, 진로 탐색에 실질적인 도움을 줍니다.",
            },
            {
                question: "프로그램 진행 시 학생들이 특히 주목하는 부분은 무엇인가요?",
                answer: "실제 호텔에서 사용하는 체크인 절차와 고객 응대 방법을 직접 경험하며, 현장의 생생한 분위기를 느끼는 점에 매우 흥미를 보입니다.",
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
            description: "서비스 직업에 관심 있는 학생과 진로 탐색을 원하는 학생에게 적합합니다.",
            tags: ["서비스직", "진로체험", "커뮤니케이션"],
        },
    ],
    expectedOutcomes: [
        {
            title: "호텔 서비스 이해",
            description: "호텔리어의 주요 업무와 고객 응대 방법을 이해할 수 있습니다.",
            iconType: "scale",
        },
        {
            title: "실무 경험 습득",
            description: "체계적인 체크인/체크아웃 절차를 실습하며 실무 감각을 익힙니다.",
            iconType: "sparkle",
        },
        {
            title: "진로 탐색 동기 부여",
            description: "호텔리어 직업에 대한 긍정적 인식을 형성하고 진로 계획에 도움을 줍니다.",
            iconType: "users",
        },
        {
            title: "커뮤니케이션 능력 향상",
            description: "고객과의 원활한 소통법과 서비스 마인드를 기릅니다.",
            iconType: "briefcase",
        },
    ],
    curriculum: [
        {
            id: "ch-1",
            title: "Chapter 01. 호텔리어 직무와 서비스 기본",
            learningPoint: "호텔리어의 역할과 서비스 마인드 이해",
            carouselImages: [],
            lessons: [
                { id: "l-1-1", title: "호텔리어 직무 소개", duration: "20분" },
                { id: "l-1-2", title: "고객 맞이와 인사 예절", duration: "25분" },
                { id: "l-1-3", title: "기본 서비스 마인드 실습", duration: "20분" },
            ],
        },
        {
            id: "ch-2",
            title: "Chapter 02. 체크인/체크아웃 절차 실습",
            learningPoint: "실제 호텔 운영 절차 체험 및 응대 스킬 향상",
            carouselImages: [],
            lessons: [
                { id: "l-2-1", title: "체크인 절차 실습", duration: "25분" },
                { id: "l-2-2", title: "고객 요청 처리 방법", duration: "25분" },
                { id: "l-2-3", title: "체크아웃 및 피드백", duration: "20분" },
            ],
        },
    ],
    introSections: [
        {
            subtitle: "CLASS INTRO",
            title: "호텔리어 직업의 세계에 오신 것을 환영합니다",
            description: "호텔리어 진로체험 프로그램은 학생들이 호텔의 다양한 직무를 체험하고, 서비스 마인드를 배우며 진로를 탐색할 수 있도록 구성되었습니다.",
            imageSrc: "/images/products/hotelier/class-1.webp",
        },
        {
            subtitle: "EXPERIENCE",
            title: "현장감 넘치는 실습 중심 수업",
            description: "실제 호텔에서 사용하는 서비스 절차를 직접 체험하며, 고객 응대와 문제 해결 능력을 키워보세요.",
            imageSrc: "/images/products/hotelier/class-2.webp",
        },
        {
            subtitle: "TRANSFORMATION",
            title: "진로에 대한 새로운 시각과 자신감",
            description: "체험 후 학생들은 서비스 직업에 대한 이해도가 높아지고, 자신의 진로 계획을 구체화할 수 있게 됩니다.",
            imageSrc: "/images/products/hotelier/class-3.webp",
        },
    ],
    requiredTools: [
        { name: "편안한 복장", description: "활동에 적합한 편안한 복장을 준비하세요.", iconSrc: "" },
        { name: "필기도구", description: "수업 중 필요한 메모용 필기도구를 준비하세요.", iconSrc: "" },
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
            title: "호텔리어 직업이 더 친근해졌어요",
            content: "직접 체크인 절차를 해보면서 호텔리어가 하는 일을 자세히 알게 되었고, 서비스 직업에 관심이 생겼습니다.",
            authorName: "서울중학교",
            authorGrade: "학생",
            characterId: 1,
        },
        {
            id: "rev-2",
            rating: 5,
            title: "실습이 재미있고 유익했어요",
            content: "친절한 강사님과 함께 실제 호텔 업무를 체험하니 진짜 호텔에서 일하는 기분이 들었어요.",
            authorName: "부산고등학교",
            authorGrade: "학생",
            characterId: 2,
        },
        {
            id: "rev-3",
            rating: 5,
            title: "진로 고민이 해결된 좋은 시간",
            content: "호텔리어라는 직업에 대해 잘 몰랐는데, 이번 수업으로 진로에 대한 고민이 많이 해결됐습니다.",
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

export default hotelierData;