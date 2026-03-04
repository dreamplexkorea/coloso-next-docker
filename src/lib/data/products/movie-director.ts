import type { CourseDetail } from "@/lib/types";

const movieDirectorData: CourseDetail = {
    slug: "movie-director",
    title: "Movie Director",
    subtitle: "진로직업체험 | 중학생 이상 | 2차시",
    heroImageSrc: "/images/products/movie-director/hero.webp",
    heroEyebrow: "DREAMPLEX · 진로직업체험",
    heroHeadline: "나만의 영화 세계를 연출하는 창의적인 영화감독 체험",
    heroSubcopy: "영화 제작의 전 과정을 체험하며 창의력과 협업 능력을 키워요\n실제 영화감독처럼 기획부터 촬영, 편집까지 직접 경험합니다",
    heroChips: ["중학생 이상", "학교 방문형", "실습 중심"],
    heroProofStats: [
        { label: "운영 학교", value: "50+" },
        { label: "참여 학생", value: "3,000+" },
        { label: "평균 만족도", value: "4.8 / 5.0" },
    ],
    heroTheme: "cinematic-dark",
    tags: ["진로직업체험", "영화감독", "예술·미디어", "중학생 이상"],
    status: "학교 출강 운영중",
    instructor: {
        name: "DREAMPLEX MOVIE DIRECTOR",
        role: "영화감독 및 미디어 교육 전문가",
        avatarSrc: "",
        bio: "현장 경험이 풍부한 영화감독이자 교육자로, 학생들에게 영화 제작 전 과정을 쉽고 재미있게 전달합니다. 창의성과 협업 능력 향상을 위해 노력합니다.",
        career: [
            "국내 유명 영화제 수상 경력",
            "영화 및 영상 관련 대학 강의 경력 5년",
            "다수 청소년 대상 영상 워크숍 진행",
        ],
        quote: "영화는 세상을 보는 나만의 창입니다. 여러분도 감독이 되어 꿈을 펼쳐보세요!",
        interview: [
            {
                question: "이 프로그램이 학생들에게 어떤 도움이 되나요?",
                answer: "영화 제작 전 과정을 직접 경험하며 창의적 사고와 문제 해결 능력을 키울 수 있습니다. 또한 협업과 의사소통 능력도 자연스럽게 향상됩니다.",
            },
            {
                question: "특별한 준비물이 필요한가요?",
                answer: "별도의 준비물은 없으며, 영상 촬영 및 편집에 필요한 모든 재료와 도구는 저희가 제공합니다.",
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
            description: "영화와 영상 제작에 관심 있는 학생, 창의적 표현을 배우고 싶은 학생에게 적합합니다.",
            tags: ["창의력", "협업", "영상제작"],
        },
    ],
    expectedOutcomes: [
        {
            title: "영화 제작 과정 이해",
            description: "기획, 촬영, 편집 등 영화 제작의 주요 단계를 직접 체험하고 이해합니다.",
            iconType: "scale",
        },
        {
            title: "창의적 사고 및 문제 해결 능력 향상",
            description: "스토리텔링과 연출을 통해 창의적으로 생각하고 문제를 해결하는 방법을 배웁니다.",
            iconType: "sparkle",
        },
        {
            title: "팀워크와 소통 능력 강화",
            description: "팀원과 협력하여 역할을 분담하고 원활하게 소통하는 경험을 쌓습니다.",
            iconType: "users",
        },
        {
            title: "자기 표현력과 자신감 증진",
            description: "자신만의 작품을 완성하며 표현력과 자신감을 키웁니다.",
            iconType: "briefcase",
        },
    ],
    curriculum: [
        {
            id: "ch-1",
            title: "Chapter 01. 영화 기획과 촬영 기초",
            learningPoint: "영화 기획과 촬영의 기본 개념을 이해하고 직접 촬영을 시작합니다.",
            carouselImages: [],
            lessons: [
                { id: "l-1-1", title: "영화 기획과 시나리오 작성", duration: "20분" },
                { id: "l-1-2", title: "카메라 기초와 촬영 기술", duration: "25분" },
                { id: "l-1-3", title: "촬영 실습 및 피드백", duration: "20분" },
            ],
        },
        {
            id: "ch-2",
            title: "Chapter 02. 편집과 완성",
            learningPoint: "촬영한 영상을 편집하고 완성하는 과정을 익힙니다.",
            carouselImages: [],
            lessons: [
                { id: "l-2-1", title: "영상 편집 기본 사용법", duration: "25분" },
                { id: "l-2-2", title: "음향 및 효과 적용", duration: "25분" },
                { id: "l-2-3", title: "최종 작품 발표 및 공유", duration: "20분" },
            ],
        },
    ],
    introSections: [
        {
            subtitle: "CLASS INTRO",
            title: "영화 감독의 꿈, 이곳에서 시작하세요",
            description: "영화 감독이 되어 기획부터 촬영, 편집까지 직접 경험하며 나만의 이야기를 영상으로 만들어 보는 특별한 체험입니다.",
            imageSrc: "/images/products/movie-director/class-1.webp",
        },
        {
            subtitle: "EXPERIENCE",
            title: "실습 중심의 참여형 수업",
            description: "최신 영상 장비와 소프트웨어를 활용하여 손쉽게 영화 제작 과정을 체험할 수 있습니다.",
            imageSrc: "/images/products/movie-director/class-2.webp",
        },
        {
            subtitle: "TRANSFORMATION",
            title: "창의성과 협업 능력 향상",
            description: "영화 제작 과정에서 자연스럽게 협업과 문제 해결 능력을 키우고 자신만의 표현력을 발전시킵니다.",
            imageSrc: "/images/products/movie-director/class-3.webp",
        },
    ],
    requiredTools: [
        { name: "스마트폰 또는 태블릿", description: "촬영용 기본 장비로 사용됩니다.", iconSrc: "" },
        { name: "편안한 복장", description: "활동 중 편안한 움직임을 위해 권장됩니다.", iconSrc: "" },
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
            title: "영화를 직접 만들어보니 너무 재미있었어요!",
            content: "처음에는 어렵게 느껴졌지만 촬영과 편집을 직접 해보니 영화감독이 되는 기분이었어요. 친구들과 협력하는 것도 좋았습니다.",
            authorName: "서울중학교",
            authorGrade: "학생",
            characterId: 1,
        },
        {
            id: "rev-2",
            rating: 5,
            title: "창의력이 쑥쑥 자라는 수업이에요",
            content: "스토리를 만들고 촬영하는 과정에서 창의적으로 생각하는 방법을 배웠고, 발표할 때 자신감도 생겼습니다.",
            authorName: "부산고등학교",
            authorGrade: "학생",
            characterId: 2,
        },
        {
            id: "rev-3",
            rating: 5,
            title: "실습 위주라서 집중하기 좋았어요",
            content: "이론보다는 직접 해보는 시간이 많아서 지루하지 않고 재미있게 배울 수 있었어요. 강사님도 친절하게 알려주셨어요.",
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

export default movieDirectorData;