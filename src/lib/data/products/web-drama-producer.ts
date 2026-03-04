import type { CourseDetail } from "@/lib/types";

const webDramaProducerData: CourseDetail = {
    slug: "web-drama-producer",
    title: "웹드라마 제작자",
    subtitle: "진로직업체험 | 중학생 | 2차시",
    heroImageSrc: "/images/products/web-drama-producer/hero.webp",
    heroEyebrow: "DREAMPLEX · 진로직업체험",
    heroHeadline: "나만의 이야기를 영상으로 완성하는 웹드라마 제작 체험",
    heroSubcopy: "창의력과 협업 능력을 키우는 실습 중심 수업\n영상 제작의 모든 과정을 직접 경험합니다",
    heroChips: ["중학생", "학교 방문형", "실습 중심"],
    heroProofStats: [
        { label: "운영 학교", value: "50+" },
        { label: "참여 학생", value: "3,000+" },
        { label: "평균 만족도", value: "4.8 / 5.0" },
    ],
    heroTheme: "cinematic-dark",
    tags: ["진로직업체험", "웹드라마 제작자", "영상미디어", "중학생"],
    status: "학교 출강 운영중",
    instructor: {
        name: "DREAMPLEX WEB DRAMA PRODUCER",
        role: "영상 제작 전문가",
        avatarSrc: "",
        bio: "영상 콘텐츠 기획과 제작에 10년 이상 경력을 가진 전문가로, 학생들에게 창의적 영상 제작의 즐거움을 전합니다.",
        career: [
            "국내 유명 웹드라마 기획 및 제작 참여",
            "청소년 대상 영상 제작 워크숍 다수 진행",
            "영상 콘텐츠 관련 교육 콘텐츠 개발 및 강의",
        ],
        quote: "“영상은 나만의 이야기를 세상과 소통하는 가장 강력한 도구입니다.”",
        interview: [
            {
                question: "이 프로그램을 통해 학생들이 무엇을 얻을 수 있나요?",
                answer: "학생들은 영상 제작 전 과정을 직접 체험하며 창의적 사고와 협업 능력을 키울 수 있습니다. 또한 자신만의 스토리를 시각적으로 표현하는 방법을 배웁니다.",
            },
            {
                question: "교사나 학부모가 특별히 신경 써야 할 점이 있나요?",
                answer: "수업은 실습 위주로 진행되어 학생들의 적극적인 참여가 중요합니다. 편안한 복장과 열린 마음으로 수업에 임해주시면 좋습니다.",
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
            description: "영상 제작과 스토리텔링에 관심이 있는 학생들에게 적합하며, 협업과 창의력을 함께 기르고자 하는 학급에 추천합니다.",
            tags: ["영상제작", "창의력", "협업"],
        },
    ],
    expectedOutcomes: [
        {
            title: "스토리텔링 능력 향상",
            description: "자신만의 이야기를 구성하고 전달하는 방법을 배워 창의적 사고를 발전시킵니다.",
            iconType: "scale",
        },
        {
            title: "영상 제작 실무 경험",
            description: "촬영, 편집, 연출 등 영상 제작 전 과정을 직접 체험하며 실무 감각을 익힙니다.",
            iconType: "sparkle",
        },
        {
            title: "팀워크와 소통 능력 강화",
            description: "팀원과 역할 분담 및 의견 조율을 통해 협업의 중요성을 체감합니다.",
            iconType: "users",
        },
        {
            title: "진로 탐색의 기회 제공",
            description: "영상미디어 분야에 대한 이해를 높여 미래 진로 선택에 도움을 줍니다.",
            iconType: "briefcase",
        },
    ],
    curriculum: [
        {
            id: "ch-1",
            title: "Chapter 01. 웹드라마 기획과 스토리텔링",
            learningPoint: "웹드라마 기획의 기본과 스토리 구성 방법 이해",
            carouselImages: [],
            lessons: [
                { id: "l-1-1", title: "웹드라마란 무엇인가?", duration: "20분" },
                { id: "l-1-2", title: "스토리 아이디어 발굴 및 구성", duration: "25분" },
                { id: "l-1-3", title: "캐릭터 설정과 시나리오 작성", duration: "20분" },
            ],
        },
        {
            id: "ch-2",
            title: "Chapter 02. 영상 촬영과 편집 실습",
            learningPoint: "촬영 기법과 편집 도구를 활용한 영상 제작 실습",
            carouselImages: [],
            lessons: [
                { id: "l-2-1", title: "촬영 기초와 장비 사용법", duration: "25분" },
                { id: "l-2-2", title: "영상 편집 소프트웨어 실습", duration: "25분" },
                { id: "l-2-3", title: "최종 영상 완성 및 발표", duration: "20분" },
            ],
        },
    ],
    introSections: [
        {
            subtitle: "CLASS INTRO",
            title: "웹드라마 제작, 나만의 이야기로 시작하다",
            description: "본 수업은 학생들이 직접 웹드라마를 기획하고 제작해보는 체험형 프로그램입니다. 창의적인 스토리텔링과 영상 제작의 기본기를 탄탄히 다집니다.",
            imageSrc: "/images/products/web-drama-producer/class-1.webp",
        },
        {
            subtitle: "EXPERIENCE",
            title: "촬영부터 편집까지, 실습 중심의 영상 제작",
            description: "실제 촬영 장비와 편집 도구를 사용해 보는 실습을 통해 영상 제작의 전 과정을 경험합니다. 협업을 통한 완성작 발표도 진행됩니다.",
            imageSrc: "/images/products/web-drama-producer/class-2.webp",
        },
        {
            subtitle: "TRANSFORMATION",
            title: "나만의 콘텐츠로 성장하는 창작자",
            description: "학생들은 자신만의 이야기를 영상으로 표현하며 자신감을 얻고, 영상미디어 분야에 대한 진로 탐색 기회를 가집니다.",
            imageSrc: "/images/products/web-drama-producer/class-3.webp",
        },
    ],
    requiredTools: [
        { name: "스마트폰 또는 태블릿", description: "촬영 및 편집에 사용", iconSrc: "" },
        { name: "편안한 복장", description: "활동에 적합한 복장 착용 권장", iconSrc: "" },
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
            title: "웹드라마 제작이 이렇게 재미있을 줄 몰랐어요!",
            content: "처음에는 영상 제작이 어려울까 걱정했는데, 선생님께서 친절하게 알려주셔서 재미있게 참여할 수 있었습니다.",
            authorName: "서울중학교",
            authorGrade: "학생",
            characterId: 1,
        },
        {
            id: "rev-2",
            rating: 5,
            title: "팀원들과 협력하며 좋은 경험이었어요",
            content: "같이 아이디어를 내고 촬영을 하면서 친구들과 더 가까워졌습니다. 영상 편집도 신기했어요.",
            authorName: "대전중학교",
            authorGrade: "학생",
            characterId: 2,
        },
        {
            id: "rev-3",
            rating: 5,
            title: "진로 고민에 큰 도움이 되었습니다",
            content: "영상미디어 분야에 대해 더 알고 싶어졌고, 앞으로도 관련 활동을 해보고 싶습니다.",
            authorName: "부산중학교",
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

export default webDramaProducerData;