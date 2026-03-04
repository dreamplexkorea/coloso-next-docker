import type { CourseDetail } from "@/lib/types";

const droneExpertData: CourseDetail = {
    slug: "drone-expert",
    title: "드론 전문가",
    subtitle: "진로직업체험 | 초등 5~6학년 | 2차시",
    heroImageSrc: "/images/products/drone-expert/hero.webp",
    heroEyebrow: "DREAMPLEX · 진로직업체험",
    heroHeadline: "미래 기술의 선두주자, 드론 전문가로 성장하다",
    heroSubcopy: "드론의 원리와 활용법을 배우고 실제 비행을 체험하여\n창의적 문제 해결 능력을 키웁니다.",
    heroChips: ["초등 5~6학년", "학교 방문형", "실습 중심"],
    heroProofStats: [
        { label: "운영 학교", value: "50+" },
        { label: "참여 학생", value: "3,000+" },
        { label: "평균 만족도", value: "4.8 / 5.0" },
    ],
    heroTheme: "cinematic-dark",
    tags: ["진로직업체험", "드론 전문가", "기술·공학", "초등 5~6학년"],
    status: "학교 출강 운영중",
    instructor: {
        name: "DREAMPLEX DRONE EXPERT",
        role: "드론 비행 전문가 및 교육 강사",
        avatarSrc: "",
        bio: "국내외 드론 교육 경력을 바탕으로 학생들에게 최신 드론 기술과 안전 교육을 진행하는 전문가입니다.",
        career: [
            "국내 드론 교육기관 강사 5년 경력",
            "국제 드론 조종 자격증 보유",
            "다수 학교 및 교육청 대상 드론 진로체험 프로그램 운영",
        ],
        quote: "드론은 단순한 비행 도구가 아니라 미래를 여는 창입니다. 학생들이 직접 조종하며 자신감을 키우길 바랍니다.",
        interview: [
            {
                question: "드론 진로체험 프로그램의 가장 큰 장점은 무엇인가요?",
                answer: "학생들이 직접 드론을 조종하며 원리와 안전 수칙을 체험하기 때문에 이론과 실습이 자연스럽게 연결됩니다. 이를 통해 과학적 사고력과 문제 해결 능력을 키울 수 있습니다.",
            },
            {
                question: "학생들이 드론 체험 후 기대할 수 있는 변화는 무엇인가요?",
                answer: "드론 조종 경험을 통해 자신감이 향상되고, 미래 기술에 대한 관심과 진로 탐색에 긍정적인 영향을 받습니다. 또한 협동심과 집중력도 함께 성장합니다.",
            },
        ],
    },
    meta: {
        level: "초등 5~6학년 (체험형)",
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
        { label: "대상 학년", value: "초등 5~6학년", icon: "users" },
        { label: "운영 차시", value: "2차시", icon: "book" },
        { label: "운영 방식", value: "학교 방문형", icon: "school" },
        { label: "소요 시간", value: "90분", icon: "clock" },
    ],
    targetAudience: [
        {
            grade: "초등 5~6학년",
            description: "기술과 과학에 흥미가 많고, 드론 비행을 통해 미래 직업을 탐색하고 싶은 학생들에게 적합합니다.",
            tags: ["과학", "기술", "창의력"],
        },
    ],
    expectedOutcomes: [
        {
            title: "드론 비행 원리 이해",
            description: "드론의 기본 구조와 비행 원리를 직접 배우고 실습을 통해 이해합니다.",
            iconType: "scale",
        },
        {
            title: "안전한 드론 조종법 습득",
            description: "비행 안전 수칙과 조종법을 익혀 책임감 있는 드론 운영 능력을 기릅니다.",
            iconType: "sparkle",
        },
        {
            title: "문제 해결 및 협동심 강화",
            description: "팀 프로젝트를 통해 문제를 해결하고 협력하는 방법을 경험합니다.",
            iconType: "users",
        },
        {
            title: "진로 탐색과 미래 기술 이해",
            description: "드론 전문가의 직업 세계를 이해하고 미래 기술 분야 진로에 대한 인식을 넓힙니다.",
            iconType: "briefcase",
        },
    ],
    curriculum: [
        {
            id: "ch-1",
            title: "Chapter 01. 드론의 이해와 기본 조종법",
            learningPoint: "드론의 구조와 원리를 배우고 기본 조종법을 익힙니다.",
            carouselImages: [],
            lessons: [
                { id: "l-1-1", title: "드론의 역사와 활용 분야", duration: "20분" },
                { id: "l-1-2", title: "드론 주요 부품과 기능 이해", duration: "25분" },
                { id: "l-1-3", title: "기본 비행 조종 실습", duration: "20분" },
            ],
        },
        {
            id: "ch-2",
            title: "Chapter 02. 드론 비행 심화 및 안전 교육",
            learningPoint: "심화 비행 기술과 안전 수칙을 배우고 실습합니다.",
            carouselImages: [],
            lessons: [
                { id: "l-2-1", title: "고급 조종 기술과 비행 전략", duration: "25분" },
                { id: "l-2-2", title: "비행 안전 수칙과 사고 예방", duration: "25분" },
                { id: "l-2-3", title: "팀별 드론 비행 미션 수행", duration: "20분" },
            ],
        },
    ],
    introSections: [
        {
            subtitle: "CLASS INTRO",
            title: "드론 전문가로 첫걸음 내딛기",
            description: "드론의 기본 원리부터 실습까지 아우르는 체계적인 교육으로 학생들의 흥미와 이해를 돕습니다.",
            imageSrc: "/images/products/drone-expert/class-1.webp",
        },
        {
            subtitle: "EXPERIENCE",
            title: "직접 조종하며 배우는 실습 중심 수업",
            description: "학생들이 직접 드론을 조종하며 비행 경험을 쌓아 실습 위주의 학습 효과를 극대화합니다.",
            imageSrc: "/images/products/drone-expert/class-2.webp",
        },
        {
            subtitle: "TRANSFORMATION",
            title: "미래 기술 전문가로의 성장",
            description: "드론 비행 체험을 통해 미래 첨단기술 분야에 대한 이해와 진로 탐색에 긍정적인 변화를 이끌어냅니다.",
            imageSrc: "/images/products/drone-expert/class-3.webp",
        },
    ],
    requiredTools: [
        { name: "드론 키트", description: "비행 실습용 드론 및 조종기", iconSrc: "" },
        { name: "안전 고글", description: "비행 안전을 위한 보호 장비", iconSrc: "" },
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
            title: "드론 조종이 정말 재미있었어요!",
            content: "처음으로 드론을 직접 조종해 봤는데 생각보다 쉽고 신기했어요. 친구들과 함께 하니까 더 즐거웠습니다.",
            authorName: "서울초등학교",
            authorGrade: "학생",
            characterId: 1,
        },
        {
            id: "rev-2",
            rating: 5,
            title: "미래 직업에 대해 더 알게 되었어요",
            content: "드론 전문가라는 직업이 생소했는데 수업을 듣고 나서 관심이 생겼고 진로 고민에 도움이 됐어요.",
            authorName: "부산초등학교",
            authorGrade: "학생",
            characterId: 2,
        },
        {
            id: "rev-3",
            rating: 5,
            title: "안전하게 배울 수 있어서 좋았어요",
            content: "드론을 조종할 때 안전 수칙을 꼼꼼히 알려주셔서 안심하고 재미있게 배울 수 있었습니다.",
            authorName: "대구초등학교",
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

export default droneExpertData;