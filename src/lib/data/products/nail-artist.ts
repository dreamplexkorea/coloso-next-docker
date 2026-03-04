import type { CourseDetail } from "@/lib/types";

const nailArtistData: CourseDetail = {
    slug: "nail-artist",
    title: "네일 아티스트",
    subtitle: "진로직업체험 | 중학생 이상 | 2차시",
    heroImageSrc: "/images/products/nail-artist/hero.webp",
    heroEyebrow: "DREAMPLEX · 뷰티 · 진로직업체험",
    heroHeadline: "나만의 손끝 예술, 네일 아트로 꿈을 그리다",
    heroSubcopy: "창의력과 섬세함을 키우는 네일 아티스트 체험\n직접 디자인하고 실습하는 실무 중심 프로그램",
    heroChips: ["중학생 이상", "학교 방문형", "실습 중심"],
    heroProofStats: [
        { label: "운영 학교", value: "50+" },
        { label: "참여 학생", value: "3,000+" },
        { label: "평균 만족도", value: "4.8 / 5.0" },
    ],
    heroTheme: "cinematic-dark",
    tags: ["진로직업체험", "네일아티스트", "뷰티", "중학생 이상"],
    status: "학교 출강 운영중",
    instructor: {
        name: "DREAMPLEX NAIL ARTIST",
        role: "네일 아티스트 · 뷰티 전문가",
        avatarSrc: "",
        bio: "10년 경력의 전문 네일 아티스트로서 다양한 현장 경험과 교육 노하우를 바탕으로 학생들에게 네일 아트의 매력을 전달합니다.",
        career: [
            "국내 유명 네일 살롱 근무 5년",
            "국제 네일 아트 대회 입상 경력",
            "청소년 뷰티 교육 강사 7년",
        ],
        quote: "네일 아트는 단순한 미용이 아니라, 자신을 표현하는 예술입니다.",
        interview: [
            {
                question: "이 프로그램이 학생들에게 어떤 도움이 되나요?",
                answer: "학생들은 네일 디자인을 통해 창의력과 집중력을 기르고, 손끝에서 펼쳐지는 예술적 표현을 경험할 수 있습니다.",
            },
            {
                question: "수업 중 가장 중점을 두는 부분은 무엇인가요?",
                answer: "기본 손 위생과 도구 사용법을 철저히 지도하며, 안전한 실습 환경 조성에 최선을 다하고 있습니다.",
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
            description: "미용과 예술에 관심이 많고, 손재주와 창의력을 키우고 싶은 학생들에게 적합합니다.",
            tags: ["창의력", "손기술", "예술적 표현"],
        },
    ],
    expectedOutcomes: [
        {
            title: "기본 네일 관리 기술 습득",
            description: "손 위생과 네일 케어 방법을 배우고 안전한 도구 사용법을 익힙니다.",
            iconType: "scale",
        },
        {
            title: "창의적인 네일 디자인 경험",
            description: "다양한 디자인 기법을 실습하며 자신만의 스타일을 표현할 수 있습니다.",
            iconType: "sparkle",
        },
        {
            title: "직업 이해와 진로 탐색",
            description: "네일 아티스트의 역할과 진로에 대해 이해하고 진로 결정에 도움을 받습니다.",
            iconType: "users",
        },
        {
            title: "자신감 및 집중력 향상",
            description: "섬세한 작업을 통해 집중력과 자신감을 함께 키웁니다.",
            iconType: "briefcase",
        },
    ],
    curriculum: [
        {
            id: "ch-1",
            title: "Chapter 01. 네일 아트 기초와 손 관리",
            learningPoint: "손 위생과 네일 케어 기본기를 배우고 도구 사용법을 익힌다",
            carouselImages: [],
            lessons: [
                { id: "l-1-1", title: "네일 아트 소개 및 직업 탐색", duration: "20분" },
                { id: "l-1-2", title: "손 위생과 네일 케어 기초", duration: "25분" },
                { id: "l-1-3", title: "기본 도구 사용법 실습", duration: "20분" },
            ],
        },
        {
            id: "ch-2",
            title: "Chapter 02. 창의적 네일 디자인 실습",
            learningPoint: "다양한 네일 디자인 기법을 직접 실습하며 창의력을 발휘한다",
            carouselImages: [],
            lessons: [
                { id: "l-2-1", title: "네일 컬러링과 패턴 디자인", duration: "25분" },
                { id: "l-2-2", title: "스톤 및 데코레이션 활용법", duration: "25분" },
                { id: "l-2-3", title: "나만의 네일 아트 완성하기", duration: "20분" },
            ],
        },
    ],
    introSections: [
        {
            subtitle: "CLASS INTRO",
            title: "네일 아트의 세계에 첫 발을 내딛다",
            description: "네일 아티스트가 하는 일과 네일 아트의 다양한 종류를 소개하며, 진로에 대한 흥미를 유발합니다.",
            imageSrc: "/images/products/nail-artist/class-1.webp",
        },
        {
            subtitle: "EXPERIENCE",
            title: "기초부터 실습까지, 직접 체험하는 네일 아트",
            description: "손 위생 관리와 도구 사용법을 배우고, 다양한 디자인 기법을 실습하며 네일 아트의 재미를 느낍니다.",
            imageSrc: "/images/products/nail-artist/class-2.webp",
        },
        {
            subtitle: "TRANSFORMATION",
            title: "나만의 손끝 예술 완성하기",
            description: "학생 각자의 개성과 창의력을 반영한 네일 아트를 완성하며 자신감을 키웁니다.",
            imageSrc: "/images/products/nail-artist/class-3.webp",
        },
    ],
    requiredTools: [
        { name: "네일 파일", description: "손톱을 다듬고 모양을 만드는 기본 도구", iconSrc: "" },
        { name: "네일 폴리시", description: "다양한 컬러와 디자인을 위한 네일용 매니큐어", iconSrc: "" },
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
            title: "손끝에서 느껴지는 예술의 즐거움",
            content: "네일 아트를 직접 해보니 정말 재미있고, 창의력을 발휘할 수 있어서 좋았어요.",
            authorName: "서울중학교",
            authorGrade: "학생",
            characterId: 1,
        },
        {
            id: "rev-2",
            rating: 5,
            title: "실습 위주의 수업이라 집중하기 좋았어요",
            content: "선생님이 친절하게 도와주셔서 어렵지 않게 배울 수 있었습니다.",
            authorName: "부산고등학교",
            authorGrade: "학생",
            characterId: 2,
        },
        {
            id: "rev-3",
            rating: 5,
            title: "진로 고민에 큰 도움이 되었어요",
            content: "네일 아티스트라는 직업에 대해 자세히 알게 되어 진로를 결정하는 데 도움이 되었어요.",
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

export default nailArtistData;