import type { CourseDetail } from "@/lib/types";

const vocalistData: CourseDetail = {
    slug: "vocalist",
    title: "보컬리스트",
    subtitle: "진로직업체험 | 중학생 이상 | 2차시",
    heroImageSrc: "/images/products/vocalist/hero.webp",
    heroEyebrow: "DREAMPLEX · 음악 진로직업체험",
    heroHeadline: "노래로 나만의 이야기를 전하는 보컬리스트 되기",
    heroSubcopy: "음악적 표현력과 자신감을 키우는 실습 중심 프로그램\n진로 탐색과 음악적 기초 이해를 동시에",
    heroChips: ["중학생 이상", "학교 방문형", "실습 중심"],
    heroProofStats: [
        { label: "운영 학교", value: "50+" },
        { label: "참여 학생", value: "3,000+" },
        { label: "평균 만족도", value: "4.8 / 5.0" },
    ],
    heroTheme: "cinematic-dark",
    tags: ["진로직업체험", "보컬리스트", "음악", "중학생 이상"],
    status: "학교 출강 운영중",
    instructor: {
        name: "DREAMPLEX VOCALIST",
        role: "전문 보컬 코치",
        avatarSrc: "",
        bio: "다년간 현장에서 활동한 전문 보컬 코치로, 학생들의 음악적 성장과 자신감을 돕는 데 열정을 쏟고 있습니다.",
        career: [
            "국내 유명 보컬 아카데미 강사 경력 5년",
            "다수의 청소년 음악 캠프 진행",
            "현직 뮤지컬 및 콘서트 보컬 코치",
        ],
        quote: "노래는 자신을 표현하는 가장 아름다운 언어입니다. 함께 그 언어를 찾아가 봅시다.",
        interview: [
            {
                question: "이 프로그램이 학생들에게 어떤 도움이 되나요?",
                answer: "학생들이 자신의 목소리를 발견하고, 자신감을 키우며 음악적 표현력을 높일 수 있도록 실습 위주로 구성되어 있습니다.",
            },
            {
                question: "수업에서 가장 중점을 두는 부분은 무엇인가요?",
                answer: "정확한 발성법과 호흡법, 그리고 자신만의 스타일을 찾는 과정에 집중하여 학생 개개인의 성장에 맞춘 지도에 힘쓰고 있습니다.",
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
            description: "음악과 노래에 관심 있는 학생, 자신의 목소리를 발견하고 싶은 학생에게 적합합니다.",
            tags: ["음악", "노래", "자기표현"],
        },
    ],
    expectedOutcomes: [
        {
            title: "기본 발성 및 호흡법 습득",
            description: "건강한 발성과 호흡법을 배워 노래 실력을 향상시킵니다.",
            iconType: "scale",
        },
        {
            title: "자신감과 무대 표현력 향상",
            description: "노래를 통해 자신감을 키우고 무대에서 자연스럽게 표현하는 방법을 익힙니다.",
            iconType: "sparkle",
        },
        {
            title: "음악적 감각 및 창의성 증진",
            description: "다양한 음악 장르와 표현 방식을 체험하며 창의적인 음악 감각을 기릅니다.",
            iconType: "users",
        },
        {
            title: "진로 탐색 및 자기 이해도 증진",
            description: "보컬리스트 직업의 현실과 전망을 이해하고 자신의 적성을 탐색합니다.",
            iconType: "briefcase",
        },
    ],
    curriculum: [
        {
            id: "ch-1",
            title: "Chapter 01. 보컬의 기본과 자기 목소리 찾기",
            learningPoint: "기본 발성법과 호흡법을 배우고 자신의 목소리를 탐색합니다.",
            carouselImages: [],
            lessons: [
                { id: "l-1-1", title: "발성 기초 이해", duration: "20분" },
                { id: "l-1-2", title: "호흡 조절 연습", duration: "25분" },
                { id: "l-1-3", title: "자기 목소리 찾기", duration: "20분" },
            ],
        },
        {
            id: "ch-2",
            title: "Chapter 02. 무대 표현력과 음악적 응용",
            learningPoint: "무대에서 자신감 있게 노래하고 음악적 표현력을 확장합니다.",
            carouselImages: [],
            lessons: [
                { id: "l-2-1", title: "무대 퍼포먼스 기초", duration: "25분" },
                { id: "l-2-2", title: "감정 표현과 해석", duration: "25분" },
                { id: "l-2-3", title: "즉흥 연습 및 피드백", duration: "20분" },
            ],
        },
    ],
    introSections: [
        {
            subtitle: "CLASS INTRO",
            title: "보컬의 세계에 첫 발을 내딛다",
            description: "이 수업에서는 보컬의 기본 이론부터 실습까지, 노래에 필요한 모든 기초를 체험할 수 있습니다.",
            imageSrc: "/images/products/vocalist/class-1.webp",
        },
        {
            subtitle: "EXPERIENCE",
            title: "실습 중심의 자신감 키우기",
            description: "진정한 음악적 표현은 실습을 통해 완성됩니다. 다양한 노래와 퍼포먼스를 직접 경험해 보세요.",
            imageSrc: "/images/products/vocalist/class-2.webp",
        },
        {
            subtitle: "TRANSFORMATION",
            title: "나만의 목소리로 세상과 소통하기",
            description: "수업 후에는 자신감 넘치는 무대 매너와 개성 있는 보컬리스트로 성장할 수 있습니다.",
            imageSrc: "/images/products/vocalist/class-3.webp",
        },
    ],
    requiredTools: [
        { name: "편안한 복장", description: "활동하기 편한 복장을 준비하세요.", iconSrc: "" },
        { name: "노트와 필기도구", description: "수업 내용을 기록할 준비물을 챙기세요.", iconSrc: "" },
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
            title: "내 목소리를 찾았어요!",
            content: "처음에는 부끄러웠지만, 선생님과 함께 발성 연습을 하면서 점점 자신감이 생겼어요.",
            authorName: "서울중학교",
            authorGrade: "학생",
            characterId: 1,
        },
        {
            id: "rev-2",
            rating: 5,
            title: "노래가 더 재밌어졌어요",
            content: "무대에서 노래할 때 어떻게 표현해야 하는지 배워서 공연할 때 떨리지 않았어요.",
            authorName: "부산고등학교",
            authorGrade: "학생",
            characterId: 2,
        },
        {
            id: "rev-3",
            rating: 5,
            title: "음악 진로에 대해 알게 되었어요",
            content: "보컬리스트의 직업 세계를 접하면서 꿈을 구체적으로 생각할 수 있게 되었어요.",
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

export default vocalistData;