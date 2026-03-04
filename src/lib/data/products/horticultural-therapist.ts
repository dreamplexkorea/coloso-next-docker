import type { CourseDetail } from "@/lib/types";

const horticulturalTherapistData: CourseDetail = {
    slug: "horticultural-therapist",
    title: "Horticultural Therapist",
    subtitle: "진로직업체험 | 중학생 | 2차시",
    heroImageSrc: "/images/products/horticultural-therapist/hero.webp",
    heroEyebrow: "DREAMPLEX · 진로직업체험",
    heroHeadline: "식물을 통한 치유와 성장의 새로운 길",
    heroSubcopy: "식물과 함께하는 치유 경험으로 마음의 건강을 배우고\n자연과의 조화로운 삶을 이해합니다",
    heroChips: ["중학생", "학교 방문형", "실습 중심"],
    heroProofStats: [
        { label: "운영 학교", value: "50+" },
        { label: "참여 학생", value: "3,000+" },
        { label: "평균 만족도", value: "4.8 / 5.0" },
    ],
    heroTheme: "cinematic-dark",
    tags: ["진로직업체험", "Horticultural Therapist", "자연치유", "중학생"],
    status: "학교 출강 운영중",
    instructor: {
        name: "DREAMPLEX HORTICULTURAL THERAPIST",
        role: "원예치료사 전문 강사",
        avatarSrc: "",
        bio: "정신건강과 자연치유를 접목한 원예치료 전문가로서 10년 이상의 임상 및 교육 경험을 보유하고 있습니다.",
        career: [
            "국내 유명 정신건강센터 원예치료사",
            "청소년 대상 원예치료 교육 진행",
            "원예치료 관련 학술지 다수 기고",
        ],
        quote: "식물과의 교감은 마음의 상처를 치유하는 가장 따뜻한 언어입니다.",
        interview: [
            {
                question: "원예치료가 학생들에게 어떻게 도움이 되나요?",
                answer: "원예치료는 식물을 돌보는 과정에서 집중력과 정서 안정에 도움을 주며, 자연과의 교감을 통해 스트레스 해소와 긍정적 자기 인식을 높입니다.",
            },
            {
                question: "수업에서 주로 어떤 활동을 하나요?",
                answer: "식물 심기, 관찰, 관리 활동과 함께 자신의 감정을 표현하는 시간을 통해 학생들이 스스로 마음을 돌보는 방법을 배웁니다.",
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
            description: "정서 안정과 자연 치유에 관심 있는 학생, 심리적 성장과 자기 돌봄 방법을 배우고 싶은 학생에게 적합합니다.",
            tags: ["정서 안정", "자연 치유", "자기 돌봄"],
        },
    ],
    expectedOutcomes: [
        {
            title: "정서 안정 능력 향상",
            description: "식물 돌봄 활동을 통해 스트레스 관리와 감정 조절 능력이 향상됩니다.",
            iconType: "scale",
        },
        {
            title: "자연과의 교감 경험",
            description: "자연의 소중함을 체험하며 환경감수성과 생명 존중 의식을 키웁니다.",
            iconType: "sparkle",
        },
        {
            title: "자기 돌봄 역량 강화",
            description: "스스로 마음 상태를 점검하고 건강한 습관을 형성하는 방법을 배웁니다.",
            iconType: "users",
        },
        {
            title: "진로 이해 증진",
            description: "원예치료사의 역할과 진로에 대해 구체적으로 이해할 수 있습니다.",
            iconType: "briefcase",
        },
    ],
    curriculum: [
        {
            id: "ch-1",
            title: "Chapter 01. 원예치료의 이해와 첫 만남",
            learningPoint: "원예치료의 개념과 효과를 이해하고 식물과 친해지기",
            carouselImages: [],
            lessons: [
                { id: "l-1-1", title: "원예치료 소개 및 사례 공유", duration: "20분" },
                { id: "l-1-2", title: "식물 심기 및 관리 방법 배우기", duration: "25분" },
                { id: "l-1-3", title: "식물과 나의 감정 연결하기", duration: "20분" },
            ],
        },
        {
            id: "ch-2",
            title: "Chapter 02. 마음 돌봄 실습과 진로 탐색",
            learningPoint: "원예치료 실습을 통해 정서 관리 기술 익히기 및 직업 탐구",
            carouselImages: [],
            lessons: [
                { id: "l-2-1", title: "감정 표현과 명상 활동", duration: "25분" },
                { id: "l-2-2", title: "원예치료사의 역할과 진로 소개", duration: "25분" },
                { id: "l-2-3", title: "질의응답 및 소감 나누기", duration: "20분" },
            ],
        },
    ],
    introSections: [
        {
            subtitle: "CLASS INTRO",
            title: "식물과 마음을 잇는 원예치료 체험",
            description: "원예치료는 식물을 매개로 하여 심리적 안정과 치유를 도모하는 전문적 활동입니다. 본 프로그램은 학생들이 직접 식물을 돌보며 마음 건강을 배우고, 원예치료사의 진로를 탐색할 수 있도록 설계되었습니다.",
            imageSrc: "/images/products/horticultural-therapist/class-1.webp",
        },
        {
            subtitle: "EXPERIENCE",
            title: "직접 식물을 심고 돌보는 활동",
            description: "학생들은 식물을 심고 가꾸는 과정을 통해 자연과 교감하며 집중력과 책임감을 함양합니다. 또한 자신의 감정을 식물과 연결하여 정서적 안정감을 느낄 수 있습니다.",
            imageSrc: "/images/products/horticultural-therapist/class-2.webp",
        },
        {
            subtitle: "TRANSFORMATION",
            title: "정서 지원과 진로 이해의 확장",
            description: "체험 후 학생들은 정서 관리 방법을 익히고, 원예치료사의 역할과 진로에 대해 구체적으로 이해하여 자신의 미래를 설계하는 데 도움을 받습니다.",
            imageSrc: "/images/products/horticultural-therapist/class-3.webp",
        },
    ],
    requiredTools: [
        { name: "편안한 복장", description: "자연 활동에 적합한 편안한 복장을 준비하세요.", iconSrc: "" },
        { name: "필기도구", description: "수업 중 기록할 수 있는 노트와 펜을 준비하세요.", iconSrc: "" },
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
            title: "마음이 편안해졌어요",
            content: "식물을 돌보면서 제 마음도 차분해지는 걸 느꼈습니다. 원예치료가 이렇게 좋은 줄 몰랐어요!",
            authorName: "서울중학교",
            authorGrade: "학생",
            characterId: 1,
        },
        {
            id: "rev-2",
            rating: 5,
            title: "직업에 대해 잘 알게 됐어요",
            content: "원예치료사가 어떤 일을 하는지 알게 되어 진로에 대해 더 깊이 생각할 수 있었습니다.",
            authorName: "부산중학교",
            authorGrade: "학생",
            characterId: 2,
        },
        {
            id: "rev-3",
            rating: 5,
            title: "수업이 재미있었어요",
            content: "실습 위주라서 지루하지 않고 친구들과 함께 즐겁게 참여했습니다.",
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

export default horticulturalTherapistData;