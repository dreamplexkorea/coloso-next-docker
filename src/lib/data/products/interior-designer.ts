import type { CourseDetail } from "@/lib/types";

const interiorDesignerData: CourseDetail = {
    slug: "interior-designer",
    title: "Interior Designer",
    subtitle: "진로직업체험 | 중학생 | 2차시",
    heroImageSrc: "/images/products/interior-designer/hero.webp",
    heroEyebrow: "DREAMPLEX · 진로직업체험",
    heroHeadline: "공간을 바꾸는 창의적 설계의 시작",
    heroSubcopy: "나만의 인테리어 디자인을 경험하며 공간의 가치를 발견합니다\n실무 중심의 체계적인 커리큘럼으로 진로 탐색을 지원합니다",
    heroChips: ["중학생", "학교 방문형", "실습 중심"],
    heroProofStats: [
        { label: "운영 학교", value: "50+" },
        { label: "참여 학생", value: "3,000+" },
        { label: "평균 만족도", value: "4.8 / 5.0" },
    ],
    heroTheme: "cinematic-dark",
    tags: ["진로직업체험", "Interior Designer", "디자인", "중학생"],
    status: "학교 출강 운영중",
    instructor: {
        name: "DREAMPLEX INTERIOR DESIGNER",
        role: "인테리어 디자이너",
        avatarSrc: "",
        bio: "실무 경험이 풍부한 인테리어 전문가로, 청소년들에게 공간 디자인의 창의성과 실용성을 전합니다.",
        career: [
            "국내 유수 인테리어 디자인 회사 근무",
            "다양한 상업 공간 및 주거 공간 디자인 프로젝트 참여",
            "청소년 대상 디자인 워크숍 강사 활동 5년",
        ],
        quote: "공간을 디자인하는 것은 사람의 삶을 디자인하는 일입니다.",
        interview: [
            {
                question: "인테리어 디자인 진로체험의 핵심은 무엇인가요?",
                answer: "학생들이 직접 공간을 구상하고 시각화하는 과정을 통해 창의력과 문제 해결 능력을 키우는 데 중점을 둡니다.",
            },
            {
                question: "이 프로그램이 학생들에게 어떤 도움을 주나요?",
                answer: "진로 탐색뿐 아니라 실무 감각과 협업 능력을 경험하며 디자인 분야에 대한 이해를 높일 수 있습니다.",
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
            description: "공간 디자인과 창의적 문제 해결에 관심이 있는 학생들에게 적합합니다.",
            tags: ["창의력", "문제해결", "디자인"],
        },
    ],
    expectedOutcomes: [
        {
            title: "공간 디자인의 기본 이해",
            description: "인테리어 디자인의 기초 개념과 실무 적용 방법을 학습합니다.",
            iconType: "scale",
        },
        {
            title: "창의적 설계 능력 향상",
            description: "나만의 공간을 구상하고 디자인하는 창의적 사고를 개발합니다.",
            iconType: "sparkle",
        },
        {
            title: "협업과 커뮤니케이션 역량 강화",
            description: "팀 프로젝트를 통해 협력과 의사소통 능력을 배양합니다.",
            iconType: "users",
        },
        {
            title: "진로 탐색 및 직업 이해",
            description: "인테리어 디자이너의 역할과 진로를 구체적으로 탐색합니다.",
            iconType: "briefcase",
        },
    ],
    curriculum: [
        {
            id: "ch-1",
            title: "Chapter 01. 인테리어 디자인의 이해",
            learningPoint: "공간과 디자인의 기본 개념을 배우고 사례를 분석합니다.",
            carouselImages: [],
            lessons: [
                { id: "l-1-1", title: "인테리어 디자인 소개", duration: "20분" },
                { id: "l-1-2", title: "공간 구성 요소 이해", duration: "25분" },
                { id: "l-1-3", title: "디자인 사례 분석", duration: "20분" },
            ],
        },
        {
            id: "ch-2",
            title: "Chapter 02. 나만의 공간 설계하기",
            learningPoint: "직접 공간을 구상하고 설계안을 만들어보는 실습 중심 수업입니다.",
            carouselImages: [],
            lessons: [
                { id: "l-2-1", title: "아이디어 스케치", duration: "25분" },
                { id: "l-2-2", title: "모형 제작 및 발표", duration: "25분" },
                { id: "l-2-3", title: "피드백 및 개선", duration: "20분" },
            ],
        },
    ],
    introSections: [
        {
            subtitle: "CLASS INTRO",
            title: "공간을 디자인하는 즐거움",
            description: "실생활 공간을 대상으로 한 인테리어 디자인 체험으로 학생들의 창의성과 공간 감각을 키웁니다.",
            imageSrc: "/images/products/interior-designer/class-1.webp",
        },
        {
            subtitle: "EXPERIENCE",
            title: "직접 설계하고 표현하는 시간",
            description: "스케치부터 모형 제작까지 진행하며 디자인의 전 과정을 체험합니다.",
            imageSrc: "/images/products/interior-designer/class-2.webp",
        },
        {
            subtitle: "TRANSFORMATION",
            title: "나만의 공간으로 변화시키기",
            description: "창의적인 아이디어를 실현하며 공간에 대한 새로운 시각을 갖게 됩니다.",
            imageSrc: "/images/products/interior-designer/class-3.webp",
        },
    ],
    requiredTools: [
        { name: "스케치북", description: "아이디어를 자유롭게 표현할 수 있는 도구", iconSrc: "" },
        { name: "색연필 또는 마커", description: "다양한 색상으로 디자인을 구체화하는 데 필요", iconSrc: "" },
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
            title: "공간에 대한 새로운 시각을 얻었어요",
            content: "인테리어 디자인이 이렇게 재미있는 줄 몰랐어요. 직접 설계해보니 더 흥미가 생겼습니다.",
            authorName: "서울중학교",
            authorGrade: "학생",
            characterId: 1,
        },
        {
            id: "rev-2",
            rating: 5,
            title: "실습 위주라 이해가 쉬웠어요",
            content: "이론뿐 아니라 직접 모형도 만들어서 수업이 더 재미있었고 기억에 오래 남습니다.",
            authorName: "부산여자중학교",
            authorGrade: "학생",
            characterId: 2,
        },
        {
            id: "rev-3",
            rating: 5,
            title: "진로 고민에 큰 도움이 되었어요",
            content: "인테리어 디자이너라는 직업을 구체적으로 알게 되어 진로 선택에 확신이 생겼습니다.",
            authorName: "대구중학교",
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

export default interiorDesignerData;