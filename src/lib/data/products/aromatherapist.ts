import type { CourseDetail } from "@/lib/types";

const aromatherapistData: CourseDetail = {
    slug: "aromatherapist",
    title: "아로마테라피스트",
    subtitle: "진로직업체험 | 중학생 | 2차시",
    heroImageSrc: "/images/products/aromatherapist/hero.webp",
    heroEyebrow: "DREAMPLEX · 진로직업체험",
    heroHeadline: "향기로 마음을 치유하는 아로마 전문가 체험",
    heroSubcopy:
        "아로마테라피의 원리와 활용법을 배우고, 직접 향을 만들어보는 실습 중심 프로그램입니다.\n나만의 향으로 감성 표현과 스트레스 관리법을 익힐 수 있습니다.",
    heroChips: ["중학생", "학교 방문형", "실습 중심"],
    heroProofStats: [
        { label: "운영 학교", value: "50+" },
        { label: "참여 학생", value: "3,000+" },
        { label: "평균 만족도", value: "4.8 / 5.0" },
    ],
    heroTheme: "cinematic-dark",
    tags: ["진로직업체험", "아로마테라피스트", "보건·복지", "중학생"],
    status: "학교 출강 운영중",
    instructor: {
        name: "DREAMPLEX AROMATHERAPIST",
        role: "국제공인 아로마테라피스트",
        avatarSrc: "/images/instructors/aromatherapist.webp",
        bio:
            "아로마테라피 전문가로서 10년간 다양한 현장 경험과 교육을 통해 학생들에게 향기와 치유의 가치를 전하고 있습니다.",
        career: [
            "국제 아로마테라피 협회 정회원",
            "서울 아로마테라피 전문학원 강사",
            "다수 학교 진로체험 프로그램 강의",
        ],
        quote: "향기는 마음을 열고 치유하는 힘이 있습니다. 학생들과 함께 그 힘을 경험해요.",
        interview: [
            {
                question: "아로마테라피스트 직업은 어떤 매력이 있나요?",
                answer:
                    "자연에서 얻은 향기를 활용해 사람들의 몸과 마음의 건강을 돕는 직업입니다. 과학적 지식과 감성을 동시에 활용할 수 있어 흥미롭고 보람찹니다.",
            },
            {
                question: "학생들이 이 수업에서 얻는 가장 큰 가치는 무엇인가요?",
                answer:
                    "자신만의 향을 만들면서 창의력과 감성 표현 능력을 키우고, 스트레스 관리 및 정서 안정 방법을 직접 체험할 수 있습니다.",
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
            description:
                "자연과 건강, 향기 치료에 관심이 많고 감성 표현과 스트레스 관리법을 배우고 싶은 학생",
            tags: ["자연과학", "감성", "건강"],
        },
    ],
    expectedOutcomes: [
        {
            title: "아로마테라피 기초 이해",
            description: "아로마 오일의 종류와 효능, 향기의 심리적 영향에 대해 배웁니다.",
            iconType: "scale",
        },
        {
            title: "향기 조합 및 제작 실습",
            description:
                "직접 다양한 아로마 오일을 조합해 자신만의 향을 만들어보는 실습을 진행합니다.",
            iconType: "sparkle",
        },
        {
            title: "감성 표현 능력 향상",
            description: "향기를 통해 자신의 감정을 표현하고 소통하는 방법을 익힙니다.",
            iconType: "users",
        },
        {
            title: "스트레스 관리법 습득",
            description: "아로마테라피를 활용한 간단한 스트레스 완화 기법을 체험합니다.",
            iconType: "briefcase",
        },
    ],
    curriculum: [
        {
            id: "ch-1",
            title: "Chapter 01. 아로마테라피의 이해와 기본 원리",
            learningPoint:
                "아로마테라피의 역사, 향기의 심리적 효과와 아로마 오일 종류를 이해합니다.",
            carouselImages: [],
            lessons: [
                { id: "l-1-1", title: "아로마테라피 개요 및 역사", duration: "20분" },
                { id: "l-1-2", title: "주요 아로마 오일과 효능 소개", duration: "25분" },
                { id: "l-1-3", title: "향기의 심리 및 신체 반응", duration: "20분" },
            ],
        },
        {
            id: "ch-2",
            title: "Chapter 02. 나만의 향기 만들기 실습",
            learningPoint:
                "다양한 오일을 조합해 나만의 향기를 제작하고, 활용법을 체험합니다.",
            carouselImages: [],
            lessons: [
                { id: "l-2-1", title: "오일 조합 실습 및 향 배합", duration: "25분" },
                { id: "l-2-2", title: "향기 활용법 및 스트레스 완화법", duration: "25분" },
                { id: "l-2-3", title: "자기 표현과 향기 공유 활동", duration: "20분" },
            ],
        },
    ],
    introSections: [
        {
            subtitle: "CLASS INTRO",
            title: "아로마테라피스트와 함께하는 향기 여행",
            description:
                "아로마테라피스트 직업의 세계와 향기가 우리의 몸과 마음에 미치는 영향을 쉽고 흥미롭게 소개합니다.",
            imageSrc: "/images/products/aromatherapist/class-1.webp",
        },
        {
            subtitle: "EXPERIENCE",
            title: "향기 만들기 직접 체험하기",
            description:
                "다양한 아로마 오일을 직접 조합해보고, 자신만의 독특한 향기를 만들어보는 실습 중심 수업입니다.",
            imageSrc: "/images/products/aromatherapist/class-2.webp",
        },
        {
            subtitle: "TRANSFORMATION",
            title: "마음과 감성의 변화 경험",
            description:
                "향기를 통해 스트레스가 완화되고 감성 표현 능력이 향상되는 변화를 학생들이 직접 느낄 수 있습니다.",
            imageSrc: "/images/products/aromatherapist/class-3.webp",
        },
    ],
    requiredTools: [
        { name: "아로마 오일 키트", description: "다양한 향의 아로마 오일 세트", iconSrc: "" },
        { name: "블렌딩 용기", description: "향기 조합용 소형 용기", iconSrc: "" },
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
        deviceLimit: ["별도의 디지털 기기는 필요하지 않습니다."],
        intellectualProperty: [
            "학생 창작물의 저작권은 학생 본인에게 귀속됩니다.",
        ],
        coachingInfo: ["수업 후 활동 자료를 제공합니다."],
    },
    reviews: [
        {
            id: "rev-1",
            rating: 5,
            title: "향기에 대한 새로운 발견",
            content:
                "아로마 오일의 종류와 효능을 배우고 직접 향기를 만들어보니 정말 신기하고 재미있었어요.",
            authorName: "서울중학교",
            authorGrade: "학생",
            characterId: 1,
        },
        {
            id: "rev-2",
            rating: 5,
            title: "스트레스가 줄었어요",
            content:
                "수업에서 배운 향기를 활용한 스트레스 완화법을 집에서도 해보니까 마음이 편안해졌어요.",
            authorName: "부산중학교",
            authorGrade: "학생",
            characterId: 2,
        },
        {
            id: "rev-3",
            rating: 5,
            title: "감성을 표현하는 방법을 배웠어요",
            content:
                "향기를 통해 내 감정을 표현하는 경험이 새로웠고 친구들과 이야기하는 게 더 즐거워졌습니다.",
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

export default aromatherapistData;