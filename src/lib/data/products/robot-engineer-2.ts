import type { CourseDetail } from "@/lib/types";

const robotEngineer2Data: CourseDetail = {
    slug: "robot-engineer-2",
    title: "Robot Engineer 2",
    subtitle: "진로직업체험 | 초등 5~6학년 | 2차시",
    heroImageSrc: "/images/products/robot-engineer-2/hero.webp",
    heroEyebrow: "DREAMPLEX · 진로직업체험",
    heroHeadline: "미래를 만드는 로봇 공학자의 첫걸음",
    heroSubcopy: "로봇 설계부터 프로그래밍까지 체험하며\n창의력과 문제 해결력을 키웁니다",
    heroChips: ["초등 5~6학년", "학교 방문형", "실습 중심"],
    heroProofStats: [
        { label: "운영 학교", value: "50+" },
        { label: "참여 학생", value: "3,000+" },
        { label: "평균 만족도", value: "4.8 / 5.0" },
    ],
    heroTheme: "cinematic-dark",
    tags: ["진로직업체험", "로봇공학자", "공학", "초등 5~6학년"],
    status: "학교 출강 운영중",
    instructor: {
        name: "DREAMPLEX ROBOT ENGINEER",
        role: "로봇공학 전문가",
        avatarSrc: "",
        bio: "로봇공학 분야에서 10년 이상 연구와 교육을 진행하며 아이들의 창의적 문제해결을 돕는 강사입니다.",
        career: [
            "서울과학기술대학교 로봇공학과 졸업",
            "국내 로봇 경진대회 심사위원 역임",
            "다수의 청소년 로봇 교육 프로그램 개발 및 강의",
        ],
        quote: "로봇은 단순한 기계가 아니라, 아이들의 상상력을 현실로 만드는 도구입니다.",
        interview: [
            {
                question: "이 프로그램을 통해 학생들이 어떤 경험을 할 수 있나요?",
                answer: "학생들은 로봇 설계 및 프로그래밍을 직접 체험하며 창의적 사고와 협업 능력을 키울 수 있습니다.",
            },
            {
                question: "준비물이 따로 필요한가요?",
                answer: "모든 재료와 도구는 저희가 제공하므로 별도의 준비물 없이 편안한 마음으로 참여하시면 됩니다.",
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
            description: "로봇과 공학에 관심이 있거나 창의적 문제 해결 역량을 키우고 싶은 학생에게 적합합니다.",
            tags: ["창의력", "논리적 사고", "공학"],
        },
    ],
    expectedOutcomes: [
        {
            title: "로봇 설계 이해",
            description: "기본적인 로봇 구조와 설계 원리를 익히고 직접 만들어봅니다.",
            iconType: "scale",
        },
        {
            title: "프로그래밍 기초 습득",
            description: "쉽고 재미있는 코딩으로 로봇 제어 원리를 배웁니다.",
            iconType: "sparkle",
        },
        {
            title: "협업과 소통 능력 향상",
            description: "팀 프로젝트를 통해 의사소통과 협력의 중요성을 경험합니다.",
            iconType: "users",
        },
        {
            title: "문제 해결력 강화",
            description: "실습 과정에서 발생하는 다양한 문제를 스스로 해결하는 능력을 기릅니다.",
            iconType: "briefcase",
        },
    ],
    curriculum: [
        {
            id: "ch-1",
            title: "Chapter 01. 로봇의 이해와 설계",
            learningPoint: "로봇의 기본 구성 요소와 설계 방법을 학습합니다",
            carouselImages: [],
            lessons: [
                { id: "l-1-1", title: "로봇의 기본 개념 소개", duration: "20분" },
                { id: "l-1-2", title: "간단한 로봇 조립 실습", duration: "25분" },
                { id: "l-1-3", title: "센서와 모터 이해하기", duration: "20분" },
            ],
        },
        {
            id: "ch-2",
            title: "Chapter 02. 로봇 프로그래밍과 응용",
            learningPoint: "블록 코딩으로 로봇을 제어하는 방법을 익힙니다",
            carouselImages: [],
            lessons: [
                { id: "l-2-1", title: "기본 프로그래밍 원리 소개", duration: "25분" },
                { id: "l-2-2", title: "로봇 움직임 코딩 실습", duration: "25분" },
                { id: "l-2-3", title: "미션 수행 및 문제 해결", duration: "20분" },
            ],
        },
    ],
    introSections: [
        {
            subtitle: "CLASS INTRO",
            title: "미래형 직업 로봇공학자 체험",
            description: "로봇공학의 기본 개념부터 직접 설계하고 프로그래밍하는 실습까지, 미래형 직업을 체험하는 프로그램입니다.",
            imageSrc: "/images/products/robot-engineer-2/class-1.webp",
        },
        {
            subtitle: "EXPERIENCE",
            title: "손으로 만드는 로봇과 소프트웨어",
            description: "학생들이 직접 로봇을 조립하고, 블록 코딩을 통해 로봇을 움직여보며 실습 중심의 학습을 진행합니다.",
            imageSrc: "/images/products/robot-engineer-2/class-2.webp",
        },
        {
            subtitle: "TRANSFORMATION",
            title: "창의적 문제 해결력과 협업 능력 함양",
            description: "팀 프로젝트를 통해 서로 소통하고 협력하며, 문제를 해결하는 과정을 경험합니다.",
            imageSrc: "/images/products/robot-engineer-2/class-3.webp",
        },
    ],
    requiredTools: [
        { name: "노트북 또는 태블릿", description: "블록 코딩 실습용 디지털 기기", iconSrc: "" },
        { name: "교구 키트", description: "로봇 조립에 필요한 부품 및 센서", iconSrc: "" },
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
            title: "로봇이 정말 재미있었어요!",
            content: "처음에는 어렵다고 생각했는데 직접 조립하고 움직이니까 너무 신기했어요.",
            authorName: "서울초등학교",
            authorGrade: "학생",
            characterId: 1,
        },
        {
            id: "rev-2",
            rating: 5,
            title: "친절한 강사님 덕분에 잘 배웠어요",
            content: "강사님이 하나하나 자세히 설명해 주셔서 이해하기 쉬웠습니다.",
            authorName: "부산초등학교",
            authorGrade: "학생",
            characterId: 2,
        },
        {
            id: "rev-3",
            rating: 5,
            title: "팀원들과 함께 문제를 해결하는 재미",
            content: "친구들과 협력해서 로봇을 움직이니 뿌듯했어요. 다음에도 또 하고 싶어요!",
            authorName: "대전초등학교",
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

export default robotEngineer2Data;