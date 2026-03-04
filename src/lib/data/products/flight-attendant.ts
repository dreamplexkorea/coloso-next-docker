import type { CourseDetail } from "@/lib/types";

const flightAttendantData: CourseDetail = {
    slug: "flight-attendant",
    title: "Flight Attendant",
    subtitle: "진로직업체험 | 중학생 | 2차시",
    heroImageSrc: "/images/products/flight-attendant/hero.webp",
    heroEyebrow: "DREAMPLEX · 진로직업체험",
    heroHeadline: "하늘을 누비는 서비스 전문가의 세계로 초대합니다",
    heroSubcopy: "친절과 안전의 가치를 배우고, 비행 현장의 생생한 경험을 체험해보세요",
    heroChips: ["중학생", "학교 방문형", "실습 중심"],
    heroProofStats: [
        { label: "운영 학교", value: "50+" },
        { label: "참여 학생", value: "3,000+" },
        { label: "평균 만족도", value: "4.8 / 5.0" },
    ],
    heroTheme: "cinematic-dark",
    tags: ["진로직업체험", "Flight Attendant", "서비스직", "중학생"],
    status: "학교 출강 운영중",
    instructor: {
        name: "DREAMPLEX FLIGHT ATTENDANT",
        role: "현직 객실승무원",
        avatarSrc: "",
        bio: "현직 항공사 객실승무원으로서 안전과 서비스 노하우를 학생들에게 생생하게 전달합니다. 학생들의 꿈과 진로 설계에 도움을 주는 전문 강사입니다.",
        career: [
            "국내 대형 항공사 객실승무원 5년 경력",
            "청소년 진로교육 강사 3년 활동",
            "서비스 교육 프로그램 기획 및 운영",
        ],
        quote: "“항공기 안에서의 작은 배려가 큰 감동을 만듭니다. 여러분도 함께 배워봐요!”",
        interview: [
            {
                question: "이 프로그램을 통해 학생들이 얻을 수 있는 가장 큰 장점은 무엇인가요?",
                answer: "학생들은 항공 서비스 전문가로서의 역할과 책임을 직접 체험하며, 서비스 마인드와 안전 의식을 자연스럽게 배울 수 있습니다.",
            },
            {
                question: "학생들이 수업에 참여할 때 특별히 준비해야 할 것이 있나요?",
                answer: "별도의 준비물은 없으며, 편안한 복장과 적극적인 참여 의지만 있으면 됩니다. 모든 교구와 자료는 저희가 제공합니다.",
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
            description: "서비스 직업에 흥미가 있거나 항공 분야 진로를 탐색하고 싶은 학생들에게 적합합니다.",
            tags: ["서비스마인드", "소통능력", "항공산업"],
        },
    ],
    expectedOutcomes: [
        {
            title: "서비스 역량 강화",
            description: "친절과 배려를 바탕으로 한 고객 응대 능력을 기릅니다.",
            iconType: "scale",
        },
        {
            title: "안전 의식 함양",
            description: "항공기 내 안전 수칙과 비상 상황 대응 방법을 학습합니다.",
            iconType: "sparkle",
        },
        {
            title: "팀워크 경험",
            description: "팀원들과 협력하여 원활한 서비스 제공 과정을 체험합니다.",
            iconType: "users",
        },
        {
            title: "진로 탐색",
            description: "항공 승무원 직업에 대한 이해와 진로 방향성을 구체화합니다.",
            iconType: "briefcase",
        },
    ],
    curriculum: [
        {
            id: "ch-1",
            title: "Chapter 01. 객실승무원의 역할과 서비스 이해",
            learningPoint: "항공서비스의 기본과 고객 응대 기술 습득",
            carouselImages: [],
            lessons: [
                { id: "l-1-1", title: "항공승무원의 하루 업무 소개", duration: "20분" },
                { id: "l-1-2", title: "고객 서비스 기본 매너 실습", duration: "25분" },
                { id: "l-1-3", title: "비상 상황 대처 기초 교육", duration: "20분" },
            ],
        },
        {
            id: "ch-2",
            title: "Chapter 02. 실전 서비스 체험과 안전 교육",
            learningPoint: "모의 서비스와 안전 절차 직접 체험",
            carouselImages: [],
            lessons: [
                { id: "l-2-1", title: "모의 탑승 및 서비스 실습", duration: "25분" },
                { id: "l-2-2", title: "비상구 및 안전장비 사용법 배우기", duration: "25분" },
                { id: "l-2-3", title: "진로 상담 및 질의응답", duration: "20분" },
            ],
        },
    ],
    introSections: [
        {
            subtitle: "CLASS INTRO",
            title: "항공 승무원의 전문성과 매력을 경험하다",
            description: "이 수업은 학생들이 객실승무원의 역할을 이해하고, 친절한 서비스와 안전 관리 기술을 직접 배우며 진로를 탐색할 수 있도록 설계되었습니다.",
            imageSrc: "/images/products/flight-attendant/class-1.webp",
        },
        {
            subtitle: "EXPERIENCE",
            title: "실제 상황과 유사한 모의 서비스 체험",
            description: "모의 탑승과 서비스 실습을 통해 항공기 내 업무 절차를 익히고, 비상 상황 대처 능력을 기릅니다.",
            imageSrc: "/images/products/flight-attendant/class-2.webp",
        },
        {
            subtitle: "TRANSFORMATION",
            title: "미래 진로에 대한 명확한 비전과 자신감",
            description: "수업 후 학생들은 항공 승무원 직업에 대해 깊이 이해하고, 자신의 진로 설계에 긍정적인 영향을 받습니다.",
            imageSrc: "/images/products/flight-attendant/class-3.webp",
        },
    ],
    requiredTools: [
        { name: "편안한 복장", description: "수업 참여 시 편안하고 활동하기 좋은 복장 권장", iconSrc: "" },
        { name: "적극적인 참여", description: "모든 교구는 제공되며, 적극적인 수업 참여가 필요합니다", iconSrc: "" },
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
            title: "친절한 강의와 재미있는 체험",
            content: "항공 승무원에 대해 자세히 알 수 있었고, 직접 서비스도 해보니 정말 즐거웠습니다.",
            authorName: "서울중학교",
            authorGrade: "학생",
            characterId: 1,
        },
        {
            id: "rev-2",
            rating: 5,
            title: "비상 상황 대처법을 배워서 유익했어요",
            content: "안전 교육이 특히 인상적이었고, 실제 상황처럼 연습해보니 자신감이 생겼습니다.",
            authorName: "부산중학교",
            authorGrade: "학생",
            characterId: 2,
        },
        {
            id: "rev-3",
            rating: 5,
            title: "진로 고민에 큰 도움이 된 수업",
            content: "항공 승무원 직업에 대해 궁금했던 점을 많이 해결할 수 있었고, 꿈을 구체화하는 데 도움이 되었습니다.",
            authorName: "인천중학교",
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

export default flightAttendantData;