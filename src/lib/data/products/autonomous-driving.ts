import type { CourseDetail } from "@/lib/types";

const autonomousDrivingData: CourseDetail = {
    slug: "autonomous-driving",
    title: "Autonomous Driving",
    subtitle: "진로직업체험 | 중학생 이상 | 2차시",
    heroImageSrc: "/images/products/autonomous-driving/hero.webp",
    heroEyebrow: "DREAMPLEX · 진로직업체험",
    heroHeadline: "미래 모빌리티를 이끄는 자율주행 전문가 체험",
    heroSubcopy: "자율주행 기술의 원리와 실제 적용을 배우고\n미래 자동차 산업을 체험하는 실습 중심 프로그램",
    heroChips: ["중학생 이상", "학교 방문형", "실습 중심"],
    heroProofStats: [
        { label: "운영 학교", value: "50+" },
        { label: "참여 학생", value: "3,000+" },
        { label: "평균 만족도", value: "4.8 / 5.0" },
    ],
    heroTheme: "cinematic-dark",
    tags: ["진로직업체험", "자율주행 엔지니어", "과학기술", "중학생 이상"],
    status: "학교 출강 운영중",
    instructor: {
        name: "DREAMPLEX 자율주행 엔지니어",
        role: "자율주행 연구원 및 교육 전문가",
        avatarSrc: "",
        bio: "자율주행 기술 연구와 현장 교육을 10년간 진행한 전문가로,\n미래 모빌리티 산업을 이끄는 인재 양성에 힘쓰고 있습니다.",
        career: [
            "국내 유수 자동차 연구소 자율주행 팀장 역임",
            "국제 자율주행 컨퍼런스 발표 다수",
            "중고등학교 대상 STEAM 교육 강사 경력 7년",
        ],
        quote: "“기술을 이해하고 직접 체험하는 것이 미래를 준비하는 첫걸음입니다.”",
        interview: [
            {
                question: "자율주행 기술은 왜 중요한가요?",
                answer: "자율주행 기술은 교통사고 감소, 교통 체증 완화, 환경 보호 등 다양한 사회적 효과를 가져옵니다. 학생들이 직접 체험하며 미래 기술을 이해하는 것이 중요합니다.",
            },
            {
                question: "학생들이 이 프로그램을 통해 무엇을 얻을 수 있나요?",
                answer: "기본 원리 이해부터 센서와 알고리즘 실습까지 경험하며 문제 해결력과 창의성을 키울 수 있습니다. 미래 모빌리티 산업 진로 탐색에도 큰 도움이 됩니다.",
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
            description: "과학과 기술에 관심이 많고 미래 자동차 산업에 대해 탐구하고 싶은 학생에게 적합합니다.",
            tags: ["과학", "기술", "미래산업"],
        },
    ],
    expectedOutcomes: [
        {
            title: "자율주행 원리 이해",
            description: "센서, 인공지능, 제어 시스템 등 자율주행 핵심 기술의 기본 원리를 학습합니다.",
            iconType: "scale",
        },
        {
            title: "실습을 통한 문제 해결력 강화",
            description: "모형 차량을 활용한 실습으로 실제 상황에 맞는 문제 해결 능력을 키웁니다.",
            iconType: "sparkle",
        },
        {
            title: "미래 진로 탐색 기회 제공",
            description: "자율주행 기술 분야 진로에 대해 탐색하고 진로 계획 수립에 도움을 받습니다.",
            iconType: "users",
        },
        {
            title: "협업과 의사소통 능력 향상",
            description: "팀 활동을 통해 협업과 의사소통 능력을 자연스럽게 향상시킵니다.",
            iconType: "briefcase",
        },
    ],
    curriculum: [
        {
            id: "ch-1",
            title: "Chapter 01. 자율주행 기술 이해하기",
            learningPoint: "자율주행 자동차의 기본 원리와 구성 요소를 학습한다",
            carouselImages: [],
            lessons: [
                { id: "l-1-1", title: "자율주행 개념 소개", duration: "20분" },
                { id: "l-1-2", title: "센서와 데이터 처리 이해", duration: "25분" },
                { id: "l-1-3", title: "모형 차량 제어 실습", duration: "20분" },
            ],
        },
        {
            id: "ch-2",
            title: "Chapter 02. 자율주행 실습과 응용",
            learningPoint: "실제 자율주행 시나리오를 통한 문제 해결과 협업 경험",
            carouselImages: [],
            lessons: [
                { id: "l-2-1", title: "자율주행 알고리즘 체험", duration: "25분" },
                { id: "l-2-2", title: "팀별 미션 수행", duration: "25분" },
                { id: "l-2-3", title: "성과 공유 및 피드백", duration: "20분" },
            ],
        },
    ],
    introSections: [
        {
            subtitle: "CLASS INTRO",
            title: "미래를 여는 자율주행 기술 체험",
            description: "본 강의는 자율주행 자동차의 핵심 기술을 이해하고 직접 실습해보는 체험형 프로그램으로,\n학생들이 미래 모빌리티 산업에 흥미를 느끼고 진로를 탐색할 수 있도록 돕습니다.",
            imageSrc: "/images/products/autonomous-driving/class-1.webp",
        },
        {
            subtitle: "EXPERIENCE",
            title: "센서와 인공지능의 만남",
            description: "다양한 센서와 인공지능 알고리즘을 활용하여 자율주행 시스템이 어떻게 작동하는지 직접 경험합니다.",
            imageSrc: "/images/products/autonomous-driving/class-2.webp",
        },
        {
            subtitle: "TRANSFORMATION",
            title: "기술을 통한 미래 변화 체감",
            description: "팀별 실습과 협업을 통해 미래 모빌리티 산업에서 필요한 문제 해결력과 창의성을 키웁니다.",
            imageSrc: "/images/products/autonomous-driving/class-3.webp",
        },
    ],
    requiredTools: [
        { name: "모형 자율주행 차량 키트", description: "실습에 필요한 모형 차량과 센서 키트", iconSrc: "" },
        { name: "노트북 또는 태블릿", description: "프로그램 실행 및 데이터 확인용", iconSrc: "" },
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
            title: "신기하고 재미있어요",
            content: "자율주행 자동차가 어떻게 움직이는지 직접 보고 만져볼 수 있어서 정말 신기했어요. 선생님도 친절하게 알려주셨어요.",
            authorName: "서울중학교",
            authorGrade: "학생",
            characterId: 1,
        },
        {
            id: "rev-2",
            rating: 5,
            title: "미래 직업에 대해 알게 되었어요",
            content: "자율주행 기술을 배우면서 미래에 어떤 직업이 있는지 알게 되었고, 저도 이런 일을 해보고 싶다는 생각이 들었어요.",
            authorName: "부산고등학교",
            authorGrade: "학생",
            characterId: 2,
        },
        {
            id: "rev-3",
            rating: 5,
            title: "실습이 정말 재미있었어요",
            content: "모형 차량을 조작하면서 직접 자율주행을 체험하는 시간이 가장 기억에 남아요. 친구들과 함께 협력하는 것도 좋았어요.",
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

export default autonomousDrivingData;