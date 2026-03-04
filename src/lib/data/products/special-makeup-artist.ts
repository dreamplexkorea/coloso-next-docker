import type { CourseDetail } from "@/lib/types";

const specialMakeupArtistData: CourseDetail = {
    slug: "special-makeup-artist",
    title: "Special Makeup Artist",
    subtitle: "진로직업체험 | 중학생 | 2차시",
    heroImageSrc: "/images/products/special-makeup-artist/hero.webp",
    heroEyebrow: "DREAMPLEX · 진로직업체험",
    heroHeadline: "나만의 특별한 변신, 메이크업 아티스트 체험",
    heroSubcopy: "창의력과 표현력을 키우는 실습 중심의 진로체험\n전문가와 함께하는 특별한 메이크업 클래스",
    heroChips: ["중학생", "학교 방문형", "실습 중심"],
    heroProofStats: [
        { label: "운영 학교", value: "50+" },
        { label: "참여 학생", value: "3,000+" },
        { label: "평균 만족도", value: "4.8 / 5.0" },
    ],
    heroTheme: "cinematic-dark",
    tags: ["진로직업체험", "메이크업 아티스트", "미용", "중학생"],
    status: "학교 출강 운영중",
    instructor: {
        name: "DREAMPLEX MAKEUP ARTIST",
        role: "전문 메이크업 아티스트 및 강사",
        avatarSrc: "",
        bio: "10년 경력의 메이크업 전문가로서 다양한 방송 및 공연 메이크업을 담당해왔으며, 학생들에게 창의적 표현법을 가르칩니다.",
        career: [
            "국내 유명 뷰티 브랜드 메이크업 아티스트",
            "방송 및 광고 메이크업 경력 8년",
            "청소년 대상 메이크업 교육 강사 5년",
        ],
        quote: "메이크업은 나를 표현하는 또 다른 언어입니다. 여러분의 개성을 찾아보세요!",
        interview: [
            {
                question: "이 프로그램을 통해 학생들이 무엇을 배우게 되나요?",
                answer: "학생들은 메이크업의 기본 기술부터 색채 감각, 그리고 자기 표현 방법까지 실습을 통해 직접 경험하면서 자신감을 키울 수 있습니다.",
            },
            {
                question: "수업 중에 특별히 준비해야 할 것이 있나요?",
                answer: "모든 재료와 도구는 저희가 제공하므로 별도 준비물은 필요하지 않습니다. 편안한 복장만 착용해 주세요.",
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
            description: "자신만의 개성을 표현하고 싶은 학생, 뷰티와 메이크업에 관심이 많은 학생에게 적합합니다.",
            tags: ["창의력", "자기표현", "미용"],
        },
    ],
    expectedOutcomes: [
        {
            title: "메이크업 기본기 습득",
            description: "기초 화장법과 다양한 메이크업 도구 사용법을 익힙니다.",
            iconType: "scale",
        },
        {
            title: "색채 감각 향상",
            description: "색의 조화와 표현법을 배우며 창의적인 디자인 감각을 키웁니다.",
            iconType: "sparkle",
        },
        {
            title: "자기 표현 능력 강화",
            description: "메이크업을 통해 자신만의 스타일과 개성을 표현하는 방법을 경험합니다.",
            iconType: "users",
        },
        {
            title: "진로 탐색 기회 제공",
            description: "메이크업 아티스트 직업에 대한 이해와 진로 방향 설정에 도움을 줍니다.",
            iconType: "briefcase",
        },
    ],
    curriculum: [
        {
            id: "ch-1",
            title: "Chapter 01. 메이크업의 기초와 도구 이해",
            learningPoint: "메이크업 기본 도구 사용법과 기초 화장법 습득",
            carouselImages: [],
            lessons: [
                { id: "l-1-1", title: "메이크업 도구 소개 및 사용법", duration: "20분" },
                { id: "l-1-2", title: "피부 표현을 위한 기초 화장법", duration: "25분" },
                { id: "l-1-3", title: "기본 아이 메이크업 실습", duration: "20분" },
            ],
        },
        {
            id: "ch-2",
            title: "Chapter 02. 창의적 메이크업과 변신",
            learningPoint: "색채 조합과 개성 있는 스타일링 실습",
            carouselImages: [],
            lessons: [
                { id: "l-2-1", title: "색상 조합 이해 및 활용", duration: "25분" },
                { id: "l-2-2", title: "특별한 테마 메이크업 디자인", duration: "25분" },
                { id: "l-2-3", title: "완성 작품 발표 및 피드백", duration: "20분" },
            ],
        },
    ],
    introSections: [
        {
            subtitle: "CLASS INTRO",
            title: "메이크업 아티스트의 세계로 초대합니다",
            description: "본 프로그램은 메이크업의 기본 원리와 도구 사용법부터 시작해 학생들이 직접 실습하며 창의적인 표현력을 키울 수 있도록 구성되었습니다.",
            imageSrc: "/images/products/special-makeup-artist/class-1.webp",
        },
        {
            subtitle: "EXPERIENCE",
            title: "직접 해보는 메이크업 실습",
            description: "전문 강사의 지도 아래 다양한 메이크업 기법을 배우고, 자신만의 스타일을 만들어보는 시간을 가집니다.",
            imageSrc: "/images/products/special-makeup-artist/class-2.webp",
        },
        {
            subtitle: "TRANSFORMATION",
            title: "나만의 특별한 변신 완성",
            description: "완성된 메이크업을 통해 자신감을 높이고, 진로에 대한 관심과 이해를 넓혀가는 경험을 제공합니다.",
            imageSrc: "/images/products/special-makeup-artist/class-3.webp",
        },
    ],
    requiredTools: [
        { name: "메이크업 브러시 세트", description: "기본 메이크업 도구 세트로 다양한 표현이 가능합니다.", iconSrc: "" },
        { name: "피부 표현용 파운데이션", description: "피부톤에 맞는 기초 화장품으로 자연스러운 표현을 돕습니다.", iconSrc: "" },
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
            title: "메이크업이 이렇게 재미있을 줄 몰랐어요!",
            content: "전문가 선생님과 함께 직접 실습하면서 자신감이 많이 생겼고, 나만의 스타일도 발견할 수 있었습니다.",
            authorName: "서울중학교",
            authorGrade: "학생",
            characterId: 1,
        },
        {
            id: "rev-2",
            rating: 5,
            title: "진로에 대해 더 진지하게 생각하게 됐어요",
            content: "메이크업 아티스트라는 직업에 대해 잘 알게 되었고, 앞으로의 꿈에 대해 고민할 수 있는 좋은 시간이었습니다.",
            authorName: "부산중학교",
            authorGrade: "학생",
            characterId: 2,
        },
        {
            id: "rev-3",
            rating: 5,
            title: "재미있고 유익한 수업이었어요",
            content: "친구들과 함께 다양한 메이크업을 해보면서 즐거웠고, 배운 내용도 실생활에 잘 활용할 수 있을 것 같아요.",
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

export default specialMakeupArtistData;