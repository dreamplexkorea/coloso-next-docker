import type { CourseDetail } from "@/lib/types";

const imageConsultantData: CourseDetail = {
    slug: "image-consultant",
    title: "이미지 컨설턴트",
    subtitle: "진로직업체험 | 중학생 | 2차시",
    heroImageSrc: "/images/products/image-consultant/hero.webp",
    heroEyebrow: "DREAMPLEX · 진로직업체험",
    heroHeadline: "나만의 스타일로 세상을 바꾸는 첫걸음",
    heroSubcopy: "이미지 컨설턴트의 역할을 체험하며\n자신의 개성과 매력을 발견해 보세요",
    heroChips: ["중학생", "학교 방문형", "실습 중심"],
    heroProofStats: [
        { label: "운영 학교", value: "50+" },
        { label: "참여 학생", value: "3,000+" },
        { label: "평균 만족도", value: "4.8 / 5.0" },
    ],
    heroTheme: "cinematic-dark",
    tags: ["진로직업체험", "이미지컨설턴트", "진로직업체험", "중학생"],
    status: "학교 출강 운영중",
    instructor: {
        name: "DREAMPLEX IMAGE CONSULTANT",
        role: "전문 이미지 컨설턴트",
        avatarSrc: "",
        bio: "10년 경력의 이미지 컨설턴트로서 학생들에게 스타일링과 자기 표현법을 지도합니다.",
        career: [
            "한국 이미지 컨설턴트 협회 인증 강사",
            "다수 기업 이미지 개선 프로젝트 참여",
            "중·고등학교 진로체험 강의 다수 진행",
        ],
        quote: "진정한 변화는 내면에서부터 시작됩니다.",
        interview: [
            {
                question: "이 프로그램을 통해 학생들이 얻을 수 있는 가장 큰 장점은 무엇인가요?",
                answer: "학생들은 자신만의 개성과 장점을 발견하고 이를 효과적으로 표현하는 방법을 배워 자신감을 키울 수 있습니다.",
            },
            {
                question: "학교 현장에서 수업을 진행할 때 중점을 두는 부분이 있나요?",
                answer: "실습 중심으로 진행하여 학생들이 직접 스타일링을 경험하며, 소통과 자기표현 능력을 함께 향상시키는 데 집중합니다.",
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
            description: "자기 표현에 관심이 많고 스타일링을 통해 자신감을 키우고 싶은 학생",
            tags: ["스타일링", "자기표현", "진로체험"],
        },
    ],
    expectedOutcomes: [
        {
            title: "자기 이미지 이해",
            description: "자신의 이미지와 스타일에 대해 이해하고 분석하는 능력을 기릅니다.",
            iconType: "scale",
        },
        {
            title: "스타일링 실습",
            description: "실제 스타일링을 경험하며 실습을 통해 자신만의 개성을 표현합니다.",
            iconType: "sparkle",
        },
        {
            title: "커뮤니케이션 능력 향상",
            description: "이미지를 통한 효과적인 커뮤니케이션 방법을 배웁니다.",
            iconType: "users",
        },
        {
            title: "진로 탐색 동기 부여",
            description: "이미지 컨설턴트 직업에 대한 이해와 진로 탐색의 동기를 부여합니다.",
            iconType: "briefcase",
        },
    ],
    curriculum: [
        {
            id: "ch-1",
            title: "Chapter 01. 이미지와 스타일의 이해",
            learningPoint: "자신의 이미지 분석과 기본 스타일링 원리 이해",
            carouselImages: [],
            lessons: [
                { id: "l-1-1", title: "이미지 컨설턴트 직업 소개", duration: "20분" },
                { id: "l-1-2", title: "자기 이미지 진단하기", duration: "25분" },
                { id: "l-1-3", title: "기본 스타일링 이론", duration: "20분" },
            ],
        },
        {
            id: "ch-2",
            title: "Chapter 02. 실습과 표현",
            learningPoint: "스타일링 실습과 자신만의 이미지 표현 방법 익히기",
            carouselImages: [],
            lessons: [
                { id: "l-2-1", title: "스타일링 실습 활동", duration: "25분" },
                { id: "l-2-2", title: "피드백 및 개선", duration: "25분" },
                { id: "l-2-3", title: "진로와 이미지 컨설팅 연계", duration: "20분" },
            ],
        },
    ],
    introSections: [
        {
            subtitle: "CLASS INTRO",
            title: "이미지 컨설턴트 직업 탐구",
            description: "이미지 컨설턴트가 하는 일과 직업적 가치에 대해 알아보고, 진로에 대한 이해를 높입니다.",
            imageSrc: "/images/products/image-consultant/class-1.webp",
        },
        {
            subtitle: "EXPERIENCE",
            title: "나만의 스타일 찾기",
            description: "자신의 이미지 진단과 스타일링 실습을 통해 개성과 매력을 표현하는 방법을 배웁니다.",
            imageSrc: "/images/products/image-consultant/class-2.webp",
        },
        {
            subtitle: "TRANSFORMATION",
            title: "이미지 변화의 힘",
            description: "스타일링을 통한 긍정적 변화 경험과 자신감 향상을 체험합니다.",
            imageSrc: "/images/products/image-consultant/class-3.webp",
        },
    ],
    requiredTools: [
        { name: "거울", description: "자신의 얼굴과 스타일을 확인하기 위한 준비물", iconSrc: "" },
        { name: "스타일링 도구 키트", description: "의상, 액세서리 등 실습에 필요한 도구", iconSrc: "" },
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
            title: "자신감이 생겼어요!",
            content: "이미지 컨설턴트 수업을 듣고 나서 제 스타일에 대해 알게 되고 자신감이 많이 생겼어요.",
            authorName: "서울중학교",
            authorGrade: "학생",
            characterId: 1,
        },
        {
            id: "rev-2",
            rating: 5,
            title: "진로에 대해 더 생각하게 되었어요",
            content: "평소 관심 없던 이미지 컨설턴트라는 직업에 대해 알게 되어 진로 고민에 도움이 되었습니다.",
            authorName: "부산중학교",
            authorGrade: "학생",
            characterId: 2,
        },
        {
            id: "rev-3",
            rating: 5,
            title: "실습 위주라 재미있었어요",
            content: "이론보다 직접 해보는 시간이 많아서 재미있고 유익한 시간이었어요.",
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

export default imageConsultantData;