import type { CourseDetail } from "@/lib/types";

const medicalNurseData: CourseDetail = {
    slug: "medical-nurse",
    title: "의료 간호사",
    subtitle: "진로직업체험 | 중학생 | 2차시",
    heroImageSrc: "/images/products/medical-nurse/hero.webp",
    heroEyebrow: "DREAMPLEX · 의료직 진로직업체험",
    heroHeadline: "환자를 돌보는 따뜻한 의료 현장의 주역",
    heroSubcopy: "의료 간호사의 역할과 중요성을 이해하며\n실습을 통해 전문성을 경험하는 프로그램",
    heroChips: ["중학생", "학교 방문형", "실습 중심"],
    heroProofStats: [
        { label: "운영 학교", value: "50+" },
        { label: "참여 학생", value: "3,000+" },
        { label: "평균 만족도", value: "4.8 / 5.0" },
    ],
    heroTheme: "cinematic-dark",
    tags: ["진로직업체험", "의료 간호사", "의료직", "중학생"],
    status: "학교 출강 운영중",
    instructor: {
        name: "DREAMPLEX MEDICAL NURSE",
        role: "간호사, 보건교육 전문가",
        avatarSrc: "",
        bio: "10년 이상의 임상경험과 교육 노하우를 바탕으로 학생들에게 의료 간호사의 진로를 안내합니다.",
        career: [
            "서울대학교병원 임상 간호사 7년 근무",
            "국립보건원 보건교육 강사",
            "청소년 진로교육 프로그램 개발 및 진행",
        ],
        quote: "간호사는 단순한 치료자가 아닌, 환자의 삶을 지키는 희망의 손길입니다.",
        interview: [
            {
                question: "이 프로그램을 통해 학생들이 무엇을 얻을 수 있나요?",
                answer: "학생들은 의료 간호사의 역할과 책임을 직접 체험하며, 환자 중심의 사고방식을 배울 수 있습니다.",
            },
            {
                question: "학교에서 특별히 준비해야 할 것이 있나요?",
                answer: "모든 실습 재료와 도구는 드림플렉스에서 제공하므로 별도의 준비물은 없습니다.",
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
            description: "의료 현장에 관심이 많고, 사람을 돕는 직업에 꿈을 가진 학생에게 적합합니다.",
            tags: ["의료직", "진로탐색", "실습중심"],
        },
    ],
    expectedOutcomes: [
        {
            title: "의료 간호사의 역할 이해",
            description: "간호사의 기본 업무와 환자 돌봄에 대해 구체적으로 이해합니다.",
            iconType: "scale",
        },
        {
            title: "기초 간호 실습 경험",
            description: "기본적인 간호 기술과 응급처치 방법을 실습합니다.",
            iconType: "sparkle",
        },
        {
            title: "환자와의 소통 능력 향상",
            description: "환자에게 필요한 정보를 효과적으로 전달하는 방법을 배웁니다.",
            iconType: "users",
        },
        {
            title: "진로 탐색 및 직업 가치 인식",
            description: "의료 간호사 직업의 중요성과 사회적 역할을 체감합니다.",
            iconType: "briefcase",
        },
    ],
    curriculum: [
        {
            id: "ch-1",
            title: "Chapter 01. 의료 간호사 소개 및 기본 간호 실습",
            learningPoint: "의료 간호사의 역할과 책임을 이해하고 기본 간호 기술을 익힌다.",
            carouselImages: [],
            lessons: [
                { id: "l-1-1", title: "의료 간호사 직업 소개", duration: "20분" },
                { id: "l-1-2", title: "환자 관찰 및 기본 간호 기술", duration: "25분" },
                { id: "l-1-3", title: "기초 응급처치 실습", duration: "20분" },
            ],
        },
        {
            id: "ch-2",
            title: "Chapter 02. 환자 소통 및 직업 가치 탐색",
            learningPoint: "환자와 효과적으로 소통하는 방법과 간호사의 사회적 역할을 배운다.",
            carouselImages: [],
            lessons: [
                { id: "l-2-1", title: "환자와의 효과적인 소통법", duration: "25분" },
                { id: "l-2-2", title: "의료 윤리 및 직업 가치 이해", duration: "25분" },
                { id: "l-2-3", title: "진로 탐색 및 질의응답", duration: "20분" },
            ],
        },
    ],
    introSections: [
        {
            subtitle: "CLASS INTRO",
            title: "의료 간호사의 세계에 오신 것을 환영합니다",
            description: "의료 간호사의 다양한 업무와 현장 이야기를 통해 진로에 대한 이해를 넓힙니다.",
            imageSrc: "/images/products/medical-nurse/class-1.webp",
        },
        {
            subtitle: "EXPERIENCE",
            title: "직접 체험하는 간호 기술 실습",
            description: "기본 간호 기술과 응급처치 실습을 통해 현장감을 느껴보세요.",
            imageSrc: "/images/products/medical-nurse/class-2.webp",
        },
        {
            subtitle: "TRANSFORMATION",
            title: "환자를 위한 소통과 돌봄의 가치를 배우다",
            description: "환자와의 소통 능력을 키우고 의료인의 윤리 의식을 함양합니다.",
            imageSrc: "/images/products/medical-nurse/class-3.webp",
        },
    ],
    requiredTools: [
        { name: "편안한 복장", description: "활동하기 편한 옷차림을 권장합니다.", iconSrc: "" },
        { name: "필기도구", description: "필요 시 간단한 메모를 위한 준비물입니다.", iconSrc: "" },
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
            title: "간호사 직업에 대해 잘 알게 되었어요",
            content: "직접 간호 기술을 배우면서 의료 현장에 대해 더 깊이 이해할 수 있었습니다.",
            authorName: "서울중학교",
            authorGrade: "학생",
            characterId: 1,
        },
        {
            id: "rev-2",
            rating: 5,
            title: "실습 중심이라 재미있었어요",
            content: "이론뿐만 아니라 직접 해볼 수 있어서 기억에 오래 남는 수업이었습니다.",
            authorName: "부산여자중학교",
            authorGrade: "학생",
            characterId: 2,
        },
        {
            id: "rev-3",
            rating: 5,
            title: "진로 고민에 큰 도움이 되었어요",
            content: "간호사 직업의 가치와 역할을 알게 되어 진로 선택에 확신이 생겼습니다.",
            authorName: "대전남중학교",
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

export default medicalNurseData;