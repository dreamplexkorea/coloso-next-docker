import type { CourseDetail } from "@/lib/types";

const choreographerData: CourseDetail = {
    slug: "choreographer",
    title: "Choreographer",
    subtitle: "진로직업체험 | 중학생 이상 | 2차시",
    heroImageSrc: "/images/products/choreographer/hero.webp",
    heroEyebrow: "DREAMPLEX · 무용 예술 진로직업체험",
    heroHeadline: "몸으로 표현하는 창의성과 감성의 무대",
    heroSubcopy: "춤과 안무를 통해 자신만의 스토리를 만들고\n협업의 가치를 경험하는 특별한 시간",
    heroChips: ["중학생 이상", "학교 방문형", "실습 중심"],
    heroProofStats: [
        { label: "운영 학교", value: "50+" },
        { label: "참여 학생", value: "3,000+" },
        { label: "평균 만족도", value: "4.8 / 5.0" },
    ],
    heroTheme: "cinematic-dark",
    tags: ["진로직업체험", "Choreographer", "무용 예술", "중학생 이상"],
    status: "학교 출강 운영중",
    instructor: {
        name: "DREAMPLEX CHOREOGRAPHER",
        role: "무용 안무가, 예술 교육 전문가",
        avatarSrc: "",
        bio: "현장 경험이 풍부한 무용 안무가로서 학생들에게 춤의 예술성과 표현력을 전파하며 창의적 사고를 돕습니다.",
        career: [
            "국내 유명 무용단 안무가 역임",
            "청소년 무용 교육 프로그램 개발 및 운영",
            "다수 예술 축제 및 공연 기획 참여",
        ],
        quote: "춤은 말로 표현하지 못하는 감정과 이야기를 전하는 예술입니다. 학생들과 함께 새로운 무대를 만들어가고 싶습니다.",
        interview: [
            {
                question: "이 프로그램을 통해 학생들이 어떤 점을 배울 수 있나요?",
                answer: "학생들은 신체 표현을 통해 자기 감정을 이해하고, 팀워크를 바탕으로 협업하는 방법을 배우게 됩니다. 또한 창의적인 안무 제작 과정을 경험하며 예술적 감수성을 키울 수 있습니다.",
            },
            {
                question: "무용을 처음 접하는 학생들도 참여할 수 있나요?",
                answer: "네, 전문 강사진이 기초부터 차근차근 지도하여 무용 경험이 없는 학생도 부담 없이 참여할 수 있습니다. 모든 수업은 학생 눈높이에 맞춰 진행됩니다.",
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
            description: "춤과 예술에 관심 있는 학생, 창의적 표현력과 협업 능력을 키우고 싶은 학생에게 적합합니다.",
            tags: ["예술", "창의성", "협업"],
        },
    ],
    expectedOutcomes: [
        {
            title: "신체 표현력 향상",
            description: "몸을 통해 자신의 감정과 이야기를 효과적으로 전달하는 능력을 기릅니다.",
            iconType: "scale",
        },
        {
            title: "창의적 사고 증진",
            description: "안무 제작 과정을 통해 창의적인 문제 해결 능력과 기획력을 배양합니다.",
            iconType: "sparkle",
        },
        {
            title: "협업 능력 강화",
            description: "팀원과의 소통과 협력을 통해 공동의 목표를 이루는 경험을 쌓습니다.",
            iconType: "users",
        },
        {
            title: "자신감 및 무대 경험",
            description: "무대에서 표현하며 자신감을 높이고, 발표력과 대인 관계 능력을 향상시킵니다.",
            iconType: "briefcase",
        },
    ],
    curriculum: [
        {
            id: "ch-1",
            title: "Chapter 01. 무용의 이해와 기초 동작 익히기",
            learningPoint: "춤의 기본 동작을 익히고 신체 표현의 기초를 다집니다.",
            carouselImages: [],
            lessons: [
                { id: "l-1-1", title: "무용과 안무의 기본 개념", duration: "20분" },
                { id: "l-1-2", title: "기초 동작 및 신체 워밍업", duration: "25분" },
                { id: "l-1-3", title: "감정 표현을 위한 움직임 실습", duration: "20분" },
            ],
        },
        {
            id: "ch-2",
            title: "Chapter 02. 창의적 안무 제작과 발표",
            learningPoint: "팀별 안무를 창작하고 발표하며 협업과 표현력을 강화합니다.",
            carouselImages: [],
            lessons: [
                { id: "l-2-1", title: "테마 선정 및 안무 기획", duration: "25분" },
                { id: "l-2-2", title: "팀별 안무 연습 및 수정", duration: "25분" },
                { id: "l-2-3", title: "최종 발표 및 피드백", duration: "20분" },
            ],
        },
    ],
    introSections: [
        {
            subtitle: "CLASS INTRO",
            title: "춤과 안무의 세계로 초대합니다",
            description: "이 프로그램은 학생들이 춤의 기본 동작과 안무 과정을 체험하며 자신만의 이야기를 신체로 표현할 수 있도록 기획되었습니다. 전문 강사의 지도 아래 안전하고 즐겁게 무용 예술을 접할 수 있습니다.",
            imageSrc: "/images/products/choreographer/class-1.webp",
        },
        {
            subtitle: "EXPERIENCE",
            title: "몸으로 표현하는 창의력과 협업",
            description: "학생들은 팀을 이루어 안무를 직접 기획하고 연습하며 협력의 중요성을 체험합니다. 이를 통해 자기표현력과 소통 능력을 동시에 키울 수 있습니다.",
            imageSrc: "/images/products/choreographer/class-2.webp",
        },
        {
            subtitle: "TRANSFORMATION",
            title: "무대 위에서의 자신감과 성장",
            description: "최종 발표를 통해 무대 경험을 쌓으며 자신감을 얻고, 예술적 성취감을 느낄 수 있습니다. 이는 학생들의 전인적 성장에 긍정적 영향을 미칩니다.",
            imageSrc: "/images/products/choreographer/class-3.webp",
        },
    ],
    requiredTools: [
        { name: "운동화 또는 편한 신발", description: "자유롭게 움직일 수 있는 신발을 준비하세요.", iconSrc: "" },
        { name: "편안한 복장", description: "활동에 적합한 편안한 옷차림이 필요합니다.", iconSrc: "" },
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
            title: "몸으로 표현하는 즐거움",
            content: "처음 해보는 안무였지만 강사님께서 친절하게 알려주셔서 자신감을 가질 수 있었어요!",
            authorName: "서울중학교",
            authorGrade: "학생",
            characterId: 1,
        },
        {
            id: "rev-2",
            rating: 5,
            title: "팀워크가 중요함을 배웠어요",
            content: "친구들과 함께 안무를 만들면서 소통과 협력의 중요성을 깨달았습니다.",
            authorName: "부산고등학교",
            authorGrade: "학생",
            characterId: 2,
        },
        {
            id: "rev-3",
            rating: 5,
            title: "새로운 무대 경험",
            content: "무대에서 발표하는 경험이 정말 뜻깊었고 무용에 대한 관심이 더 생겼습니다.",
            authorName: "대전여자중학교",
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

export default choreographerData;