import type { CourseDetail } from "@/lib/types";

const cosmeticEngineerData: CourseDetail = {
    slug: "cosmetic-engineer",
    title: "Cosmetic Engineer",
    subtitle: "진로직업체험 | 중학생 | 2차시",
    heroImageSrc: "/images/products/cosmetic-engineer/hero.webp",
    heroEyebrow: "DREAMPLEX · 진로직업체험",
    heroHeadline: "화장품 개발의 과학과 창의력을 경험하다",
    heroSubcopy: "화장품 제조 과정의 원리를 이해하고 직접 실습해보는 진로체험 프로그램입니다. 학생들의 창의적 사고와 과학적 탐구 능력을 키워줍니다.",
    heroChips: ["중학생", "학교 방문형", "실습 중심"],
    heroProofStats: [
        { label: "운영 학교", value: "50+" },
        { label: "참여 학생", value: "3,000+" },
        { label: "평균 만족도", value: "4.8 / 5.0" },
    ],
    heroTheme: "cinematic-dark",
    tags: ["진로직업체험", "Cosmetic Engineer", "과학", "중학생"],
    status: "학교 출강 운영중",
    instructor: {
        name: "DREAMPLEX COSMETIC ENGINEER",
        role: "화장품 연구개발 전문가",
        avatarSrc: "",
        bio: "화장품 산업에서 10년 이상의 연구개발 경험을 가진 전문가로, 학생들에게 실습 중심의 창의적 교육을 제공합니다.",
        career: [
            "LG생활건강 연구소 연구원",
            "국내 화장품 특허 출원 5건 이상",
            "다수의 청소년 화장품 교육 강의 경험",
        ],
        quote: "화장품은 단순한 아름다움 그 이상입니다. 과학과 창의력이 만나 새로운 미래를 만듭니다.",
        interview: [
            {
                question: "이 프로그램을 통해 학생들이 얻는 가장 큰 가치는 무엇인가요?",
                answer: "화장품의 과학적 원리를 직접 체험하며 이해하는 동시에 창의적 문제 해결 능력과 협업 능력을 키울 수 있습니다.",
            },
            {
                question: "화장품 산업에 관심이 없는 학생도 참여해도 괜찮을까요?",
                answer: "네, 화장품에 대한 관심 유무와 관계없이 과학과 실험을 즐기는 학생이라면 누구나 흥미를 느낄 수 있도록 구성되어 있습니다.",
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
            description: "과학과 화장품 산업에 관심 있는 학생, 창의적 실습을 통해 진로 탐색을 원하는 학생에게 적합합니다.",
            tags: ["과학탐구", "창의력", "진로체험"],
        },
    ],
    expectedOutcomes: [
        {
            title: "화장품 성분과 제조 원리 이해",
            description: "주요 성분과 그 역할, 제조 과정을 배우고 직접 실험을 통해 원리를 체험합니다.",
            iconType: "scale",
        },
        {
            title: "창의적 문제 해결 능력 향상",
            description: "새로운 화장품 아이디어를 구상하며 창의력과 사고력을 강화합니다.",
            iconType: "sparkle",
        },
        {
            title: "협업과 소통 능력 배양",
            description: "팀 활동을 통해 협력과 의사소통 기술을 실습합니다.",
            iconType: "users",
        },
        {
            title: "진로 탐색 동기 부여",
            description: "화장품 산업 전문가와의 교류를 통해 미래 진로에 대한 구체적 비전을 갖게 됩니다.",
            iconType: "briefcase",
        },
    ],
    curriculum: [
        {
            id: "ch-1",
            title: "Chapter 01. 화장품의 이해와 기본 성분",
            learningPoint: "화장품의 종류와 주요 성분별 역할을 이해하고, 제조 원리를 탐구합니다.",
            carouselImages: [],
            lessons: [
                { id: "l-1-1", title: "화장품 산업 소개 및 직업 탐색", duration: "20분" },
                { id: "l-1-2", title: "주요 성분의 특성과 역할 실습", duration: "25분" },
                { id: "l-1-3", title: "기본 화장품 제조 원리 실험", duration: "20분" },
            ],
        },
        {
            id: "ch-2",
            title: "Chapter 02. 나만의 화장품 만들기 실습",
            learningPoint: "창의적 아이디어를 바탕으로 맞춤형 화장품을 설계하고 제조합니다.",
            carouselImages: [],
            lessons: [
                { id: "l-2-1", title: "화장품 레시피 설계 및 재료 선정", duration: "25분" },
                { id: "l-2-2", title: "화장품 제조 실습", duration: "25분" },
                { id: "l-2-3", title: "완성품 평가 및 발표", duration: "20분" },
            ],
        },
    ],
    introSections: [
        {
            subtitle: "CLASS INTRO",
            title: "과학과 창의력이 만나는 화장품 체험",
            description: "화장품의 과학적 원리와 제조 과정을 배우고 직접 실습하는 체험형 프로그램입니다. 학생들은 화장품 연구개발자의 역할을 이해하고 창의적인 제품을 만들어 봅니다.",
            imageSrc: "/images/products/cosmetic-engineer/class-1.webp",
        },
        {
            subtitle: "EXPERIENCE",
            title: "직접 만드는 나만의 화장품",
            description: "화장품 성분을 조합하고 제조하는 과정을 직접 경험하며 실험 능력과 창의성을 동시에 키웁니다.",
            imageSrc: "/images/products/cosmetic-engineer/class-2.webp",
        },
        {
            subtitle: "TRANSFORMATION",
            title: "진로 탐색과 미래의 화장품 전문가",
            description: "프로그램을 통해 화장품 산업의 다양한 직업과 진로를 탐색하며, 미래 커리어에 대한 동기를 부여합니다.",
            imageSrc: "/images/products/cosmetic-engineer/class-3.webp",
        },
    ],
    requiredTools: [
        { name: "실험용 장갑", description: "안전한 실습을 위한 개인 장갑", iconSrc: "" },
        { name: "필기도구", description: "노트 필기 및 아이디어 스케치용", iconSrc: "" },
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
            title: "화장품에 대해 새롭게 알게 되었어요!",
            content: "화장품의 성분과 제조 과정을 직접 배우고 실습할 수 있어서 정말 재미있고 유익했어요.",
            authorName: "서울중학교",
            authorGrade: "학생",
            characterId: 1,
        },
        {
            id: "rev-2",
            rating: 5,
            title: "진로 고민에 큰 도움이 되었어요",
            content: "화장품 연구개발자의 역할을 알고 나서 진로에 대해 더 구체적으로 생각할 수 있게 되었습니다.",
            authorName: "부산중학교",
            authorGrade: "학생",
            characterId: 2,
        },
        {
            id: "rev-3",
            rating: 5,
            title: "실습 위주라 집중하기 좋았어요",
            content: "설명만 듣는 게 아니라 직접 만들어보고 발표도 해서 기억에 오래 남는 수업이었어요.",
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

export default cosmeticEngineerData;