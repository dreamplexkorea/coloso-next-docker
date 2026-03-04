import type { CourseDetail } from "@/lib/types";

const floristData: CourseDetail = {
    slug: "florist",
    title: "플로리스트",
    subtitle: "진로직업체험 | 중학생 | 2차시",
    heroImageSrc: "/images/products/florist/hero.webp",
    heroEyebrow: "DREAMPLEX · 진로직업체험",
    heroHeadline: "꽃과 함께하는 창의적 직업 체험",
    heroSubcopy: "자연의 아름다움을 디자인하는 플로리스트의 세계를 경험해보세요. \n실습 중심으로 창의력과 감성을 키우는 특별한 시간입니다.",
    heroChips: ["중학생", "학교 방문형", "실습 중심"],
    heroProofStats: [
        { label: "운영 학교", value: "50+" },
        { label: "참여 학생", value: "3,000+" },
        { label: "평균 만족도", value: "4.8 / 5.0" },
    ],
    heroTheme: "cinematic-dark",
    tags: ["진로직업체험", "플로리스트", "예술·디자인", "중학생"],
    status: "학교 출강 운영중",
    instructor: {
        name: "DREAMPLEX FLORIST",
        role: "전문 플로리스트 강사",
        avatarSrc: "",
        bio: "경력 10년 이상의 전문 플로리스트로, 학생들에게 꽃과 디자인의 아름다움을 전하는 데 열정을 가지고 있습니다.",
        career: [
            "국내 유명 플라워샵 수석 디자이너",
            "플라워 아트 공모전 다수 수상",
            "청소년 대상 플로리스트 직업 체험 강의 진행",
        ],
        quote: "꽃 한 송이가 전하는 감동과 이야기를 함께 나눠요.",
        interview: [
            {
                question: "이 프로그램은 어떤 학생들에게 적합한가요?",
                answer: "꽃과 자연을 사랑하며 창의적인 활동에 관심 있는 학생들에게 특히 도움이 됩니다. 직접 꽃을 만지고 디자인하면서 감성을 키울 수 있죠.",
            },
            {
                question: "학교 방문 수업은 어떤 방식으로 진행되나요?",
                answer: "강사팀이 직접 학교로 방문하여 실습 중심의 수업을 진행합니다. 모든 재료와 도구는 드림플렉스에서 제공하여 편리합니다.",
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
            description: "꽃과 디자인에 관심이 많은 학생, 창의적이고 감성적인 직업 체험을 원하는 학생에게 적합합니다.",
            tags: ["창의성", "감성", "디자인"],
        },
    ],
    expectedOutcomes: [
        {
            title: "플로리스트 직무 이해",
            description: "플로리스트의 역할과 직업 특성을 이해하고, 꽃을 다루는 기본 기술을 배웁니다.",
            iconType: "scale",
        },
        {
            title: "창의적 디자인 능력 향상",
            description: "꽃을 활용한 다양한 디자인 실습을 통해 창의력과 미적 감각을 키웁니다.",
            iconType: "sparkle",
        },
        {
            title: "협동과 소통 능력 증진",
            description: "팀 작업과 발표를 통해 협동심과 의사소통 능력을 배양합니다.",
            iconType: "users",
        },
        {
            title: "자신감 및 자아 표현 강화",
            description: "완성한 작품을 통해 자신감을 갖고 자신의 감성을 표현하는 법을 익힙니다.",
            iconType: "briefcase",
        },
    ],
    curriculum: [
        {
            id: "ch-1",
            title: "Chapter 01. 플로리스트의 세계와 기본기 익히기",
            learningPoint: "플로리스트 직업 이해와 꽃 다루기 기본 기술 습득",
            carouselImages: [],
            lessons: [
                { id: "l-1-1", title: "플로리스트 직업 소개", duration: "20분" },
                { id: "l-1-2", title: "꽃의 종류와 특징 배우기", duration: "25분" },
                { id: "l-1-3", title: "기본 꽃꽂이 실습", duration: "20분" },
            ],
        },
        {
            id: "ch-2",
            title: "Chapter 02. 창의적 꽃 디자인과 작품 완성",
            learningPoint: "창의적 디자인 실습과 자신만의 작품 제작",
            carouselImages: [],
            lessons: [
                { id: "l-2-1", title: "꽃 디자인 아이디어 구상", duration: "25분" },
                { id: "l-2-2", title: "개성 있는 꽃다발 만들기", duration: "25분" },
                { id: "l-2-3", title: "완성 작품 발표 및 피드백", duration: "20분" },
            ],
        },
    ],
    introSections: [
        {
            subtitle: "CLASS INTRO",
            title: "플로리스트 직업 체험 시작하기",
            description: "꽃과 자연, 디자인에 관심 있는 학생들을 위해 준비된 체험형 프로그램입니다. 플로리스트의 직업 세계를 이해하고 직접 꽃을 다뤄보며 창의력을 발휘할 수 있습니다.",
            imageSrc: "/images/products/florist/class-1.webp",
        },
        {
            subtitle: "EXPERIENCE",
            title: "꽃과 함께하는 실습 중심 수업",
            description: "다양한 꽃과 재료를 활용해 직접 꽃꽂이를 만들어보는 실습 위주의 진행으로, 학생들이 손끝 감각과 미적 감각을 키울 수 있습니다.",
            imageSrc: "/images/products/florist/class-2.webp",
        },
        {
            subtitle: "TRANSFORMATION",
            title: "자신만의 꽃 작품 완성",
            description: "학생들은 본인의 아이디어를 담아 개성 있는 꽃다발이나 꽃꽂이를 완성하며 자신감을 얻고, 협동심과 표현력을 기릅니다.",
            imageSrc: "/images/products/florist/class-3.webp",
        },
    ],
    requiredTools: [
        { name: "꽃가위", description: "꽃 다듬기와 자르기에 필요한 도구", iconSrc: "" },
        { name: "플로리스트 테이프", description: "꽃다발 제작 시 사용되는 특수 테이프", iconSrc: "" },
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
            title: "꽃을 통해 배우는 즐거운 시간",
            content: "플로리스트 수업을 통해 꽃을 더 자세히 알게 되었고, 직접 만들어보는 경험이 정말 뜻깊었어요.",
            authorName: "서울중학교",
            authorGrade: "학생",
            characterId: 1,
        },
        {
            id: "rev-2",
            rating: 5,
            title: "창의력이 쑥쑥 자라는 수업",
            content: "꽃 디자인 아이디어를 생각하며 창의력이 많이 늘었고, 친구들과 협력하는 법도 배웠습니다.",
            authorName: "광주중학교",
            authorGrade: "학생",
            characterId: 2,
        },
        {
            id: "rev-3",
            rating: 5,
            title: "직업 체험으로 진로 고민에 큰 도움",
            content: "플로리스트라는 직업에 대해 깊이 알게 되어 앞으로 진로를 정하는 데 큰 도움이 되었습니다.",
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

export default floristData;