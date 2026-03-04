import type { CourseDetail } from "@/lib/types";

const baristaData: CourseDetail = {
    slug: "barista",
    title: "바리스타",
    subtitle: "진로직업체험 | 중학생 대상 | 2차시",
    heroImageSrc: "/images/products/barista/hero.webp",
    heroEyebrow: "DREAMPLEX · 진로직업체험",
    heroHeadline: "커피 한 잔에 담긴 바리스타의 예술과 과학",
    heroSubcopy: "실습 중심의 체험으로 바리스타 직업을 깊이 이해하고,\n진로 탐색의 첫 걸음을 내딛습니다.",
    heroChips: ["중학생", "학교 방문형", "실습 중심"],
    heroProofStats: [
        { label: "운영 학교", value: "50+" },
        { label: "참여 학생", value: "3,000+" },
        { label: "평균 만족도", value: "4.8 / 5.0" },
    ],
    heroTheme: "cinematic-dark",
    tags: ["진로직업체험", "바리스타", "직업체험", "중학생"],
    status: "학교 출강 운영중",
    instructor: {
        name: "DREAMPLEX BARISTA",
        role: "바리스타 전문가",
        avatarSrc: "",
        bio: "다년간 현장 경험을 바탕으로 학생들에게 바리스타의 전문 지식과 실습을 지도하는 강사입니다. 학생들의 흥미를 유발하고 진로 선택에 도움을 줍니다.",
        career: [
            "국내 유명 카페 바리스타 5년 근무",
            "바리스타 자격증 취득 및 교육 강사 활동",
            "청소년 대상 바리스타 진로 체험 프로그램 운영",
        ],
        quote: "커피 한 잔에 담긴 이야기와 기술을 통해 학생들의 꿈을 키워갑니다.",
        interview: [
            {
                question: "바리스타 진로체험의 가장 큰 장점은 무엇인가요?",
                answer: "직접 커피를 만들면서 바리스타 직업의 전문성을 체험할 수 있어 학생들이 진로에 대한 현실적인 이해를 얻는 데 도움이 됩니다.",
            },
            {
                question: "학생들이 어려워하는 부분은 어떻게 도와주시나요?",
                answer: "커피 추출 과정에서 세심한 기술이 필요하기 때문에 단계별로 친절히 설명하고 실습을 반복하며 자신감을 가질 수 있도록 지도합니다.",
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
            description: "커피와 바리스타 직업에 관심이 있거나 실습을 통해 진로 탐색을 원하는 학생",
            tags: ["진로탐색", "실습중심", "바리스타체험"],
        },
    ],
    expectedOutcomes: [
        {
            title: "바리스타 직무 이해",
            description: "바리스타가 수행하는 주요 업무와 직업의 특성을 이해합니다.",
            iconType: "scale",
        },
        {
            title: "커피 추출 실습",
            description: "에스프레소 추출과 우유 스티밍 등 기본적인 커피 제조 기술을 체험합니다.",
            iconType: "sparkle",
        },
        {
            title: "고객 서비스 마인드 함양",
            description: "바리스타로서 필요한 고객 응대와 서비스 마인드를 배웁니다.",
            iconType: "users",
        },
        {
            title: "진로 탐색 동기 부여",
            description: "실제 직업 체험을 통해 자신의 진로에 대한 관심과 목표를 구체화합니다.",
            iconType: "briefcase",
        },
    ],
    curriculum: [
        {
            id: "ch-1",
            title: "Chapter 01. 바리스타의 이해와 기본 커피 추출",
            learningPoint: "바리스타 직업 소개와 에스프레소 추출 실습을 통해 기초 기술 습득",
            carouselImages: [],
            lessons: [
                { id: "l-1-1", title: "바리스타 직업 소개 및 역할", duration: "20분" },
                { id: "l-1-2", title: "커피 원두와 장비 이해", duration: "25분" },
                { id: "l-1-3", title: "에스프레소 추출 실습", duration: "20분" },
            ],
        },
        {
            id: "ch-2",
            title: "Chapter 02. 우유 스티밍과 라떼아트 체험",
            learningPoint: "우유 스티밍과 간단한 라떼아트 실습으로 기술 완성도 향상",
            carouselImages: [],
            lessons: [
                { id: "l-2-1", title: "우유 스티밍 기본 원리", duration: "25분" },
                { id: "l-2-2", title: "라떼아트 기초 체험", duration: "25분" },
                { id: "l-2-3", title: "고객 서비스와 진로 이야기", duration: "20분" },
            ],
        },
    ],
    introSections: [
        {
            subtitle: "CLASS INTRO",
            title: "바리스타 직업과 진로 소개",
            description: "바리스타가 하는 일과 직업의 매력을 소개하며 진로 선택에 도움을 줍니다.",
            imageSrc: "/images/products/barista/class-1.webp",
        },
        {
            subtitle: "EXPERIENCE",
            title: "에스프레소 추출과 우유 스티밍 실습",
            description: "직접 커피 제조 과정을 경험하며 바리스타의 기술을 배우는 시간입니다.",
            imageSrc: "/images/products/barista/class-2.webp",
        },
        {
            subtitle: "TRANSFORMATION",
            title: "진로 탐색과 자신감 향상",
            description: "체험을 통해 진로에 대한 이해를 높이고 꿈을 구체화합니다.",
            imageSrc: "/images/products/barista/class-3.webp",
        },
    ],
    requiredTools: [
        { name: "앞치마", description: "실습 시 옷을 보호하기 위한 앞치마", iconSrc: "" },
        { name: "필기구", description: "수업 내용 기록을 위한 필기구", iconSrc: "" },
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
            title: "커피 만드는 게 정말 재미있었어요",
            content: "처음 해보는 커피 추출이었는데 선생님이 쉽게 설명해 주셔서 재미있게 배웠습니다.",
            authorName: "서울중학교",
            authorGrade: "학생",
            characterId: 1,
        },
        {
            id: "rev-2",
            rating: 5,
            title: "진로에 대해 더 많이 알게 되었어요",
            content: "바리스타가 어떤 일을 하는지 자세히 알게 되어 진로 선택에 도움이 되었습니다.",
            authorName: "부산고등학교",
            authorGrade: "학생",
            characterId: 2,
        },
        {
            id: "rev-3",
            rating: 5,
            title: "실습 위주라 집중하기 좋았어요",
            content: "직접 커피를 만들어 보면서 배우니까 이해도 빠르고 기억에 오래 남았습니다.",
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

export default baristaData;