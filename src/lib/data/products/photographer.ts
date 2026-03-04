import type { CourseDetail } from "@/lib/types";

const photographerData: CourseDetail = {
    slug: "photographer",
    title: "포토그래퍼",
    subtitle: "진로직업체험 | 중학생 | 2차시",
    heroImageSrc: "/images/products/photographer/hero.webp",
    heroEyebrow: "DREAMPLEX · 진로직업체험",
    heroHeadline: "빛과 순간을 담는 창의적인 예술가, 포토그래퍼",
    heroSubcopy: "진로 탐색과 실습을 통해 사진의 기본부터 촬영 기법까지 경험합니다\n현장감 있는 수업으로 나만의 작품을 완성해보세요",
    heroChips: ["중학생", "학교 방문형", "실습 중심"],
    heroProofStats: [
        { label: "운영 학교", value: "50+" },
        { label: "참여 학생", value: "3,000+" },
        { label: "평균 만족도", value: "4.8 / 5.0" },
    ],
    heroTheme: "cinematic-dark",
    tags: ["진로직업체험", "포토그래퍼", "예술·창의", "중학생"],
    status: "학교 출강 운영중",
    instructor: {
        name: "DREAMPLEX PHOTOGRAPHER",
        role: "전문 사진작가 및 교육 강사",
        avatarSrc: "",
        bio: "10년 경력의 사진작가로 다양한 장르의 사진 촬영과 교육 경험을 바탕으로 학생들에게 사진 예술의 매력을 전달합니다.",
        career: [
            "국내외 사진전 다수 출품",
            "청소년 대상 사진 워크숍 강의",
            "서울 사진학원 강사 역임",
        ],
        quote: "사진은 순간을 기록하는 예술이자 자신을 표현하는 도구입니다. 학생들이 카메라를 통해 세상을 새롭게 바라보길 바랍니다.",
        interview: [
            {
                question: "포토그래퍼 수업을 통해 학생들이 얻을 수 있는 것은 무엇인가요?",
                answer: "사진 촬영의 기본 원리와 다양한 촬영 기법을 익히고, 스스로 창작하는 즐거움을 경험하며 창의력과 관찰력을 키울 수 있습니다.",
            },
            {
                question: "수업에 필요한 준비물이 있나요?",
                answer: "기본적인 사진 촬영 도구는 드림플렉스에서 제공하며, 학생들은 편안한 복장과 열정만 있으면 됩니다.",
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
            description: "사진과 예술에 관심이 많고 창의적인 표현을 경험하고 싶은 학생",
            tags: ["창의력", "예술", "사진촬영"],
        },
    ],
    expectedOutcomes: [
        {
            title: "사진 촬영 기본 이해",
            description: "카메라 조작법과 빛의 원리를 이해하여 기본적인 사진 촬영이 가능해집니다.",
            iconType: "scale",
        },
        {
            title: "창의적 시각과 표현력 향상",
            description: "다양한 촬영 기법을 통해 자신만의 시각으로 작품을 완성할 수 있습니다.",
            iconType: "sparkle",
        },
        {
            title: "팀워크와 소통 능력 강화",
            description: "동료와 협력하여 촬영 주제를 정하고 의견을 교환하는 과정을 경험합니다.",
            iconType: "users",
        },
        {
            title: "진로 탐색 및 자기계발",
            description: "포토그래퍼 직업 세계를 탐색하며 미래 진로에 대한 이해를 높입니다.",
            iconType: "briefcase",
        },
    ],
    curriculum: [
        {
            id: "ch-1",
            title: "Chapter 01. 사진의 기초와 카메라 이해",
            learningPoint: "사진 촬영의 기본 원리를 배우고 카메라 조작법 익히기",
            carouselImages: [],
            lessons: [
                { id: "l-1-1", title: "카메라 구조 및 사용법", duration: "20분" },
                { id: "l-1-2", title: "빛과 노출 이해하기", duration: "25분" },
                { id: "l-1-3", title: "기본 촬영 실습", duration: "20분" },
            ],
        },
        {
            id: "ch-2",
            title: "Chapter 02. 창의적 촬영과 작품 완성",
            learningPoint: "다양한 촬영 기법을 활용하여 나만의 사진 만들기",
            carouselImages: [],
            lessons: [
                { id: "l-2-1", title: "구도와 앵글 탐색", duration: "25분" },
                { id: "l-2-2", title: "빛 활용과 표현 기법", duration: "25분" },
                { id: "l-2-3", title: "최종 작품 촬영 및 공유", duration: "20분" },
            ],
        },
    ],
    introSections: [
        {
            subtitle: "CLASS INTRO",
            title: "사진으로 세상을 보는 눈 키우기",
            description: "포토그래퍼 수업은 학생들이 카메라를 통해 주변을 새롭게 관찰하고 표현하는 방법을 배울 수 있도록 설계되었습니다.",
            imageSrc: "/images/products/photographer/class-1.webp",
        },
        {
            subtitle: "EXPERIENCE",
            title: "실습 중심의 체험 학습",
            description: "직접 카메라를 다루며 촬영 기술을 익히고, 다양한 주제로 사진을 찍어보는 실습 위주의 수업입니다.",
            imageSrc: "/images/products/photographer/class-2.webp",
        },
        {
            subtitle: "TRANSFORMATION",
            title: "나만의 사진 작품 완성",
            description: "수업 마지막에는 학생들이 직접 촬영한 사진으로 작품을 완성하고 발표함으로써 성취감을 느낍니다.",
            imageSrc: "/images/products/photographer/class-3.webp",
        },
    ],
    requiredTools: [
        { name: "디지털 카메라 또는 스마트폰", description: "사진 촬영이 가능한 기기", iconSrc: "" },
        { name: "편안한 복장", description: "활동하기 편한 옷차림", iconSrc: "" },
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
            title: "사진 찍는 게 정말 재미있었어요",
            content: "처음에는 카메라 조작법이 어려웠지만 강사님이 쉽게 알려주셔서 즐겁게 배울 수 있었습니다.",
            authorName: "서울중학교",
            authorGrade: "학생",
            characterId: 1,
        },
        {
            id: "rev-2",
            rating: 5,
            title: "내가 찍은 사진으로 작품을 만들어서 뿌듯해요",
            content: "다양한 구도와 빛 활용법을 배우고 직접 촬영한 사진으로 작품을 완성하는 과정이 인상적이었어요.",
            authorName: "부산고등학교",
            authorGrade: "학생",
            characterId: 2,
        },
        {
            id: "rev-3",
            rating: 5,
            title: "진로 고민에 큰 도움이 됐습니다",
            content: "포토그래퍼라는 직업에 대해 자세히 알게 되어 앞으로 진로 계획을 세우는 데 많은 도움이 됐습니다.",
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

export default photographerData;