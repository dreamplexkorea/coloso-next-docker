import type { CourseDetail } from "@/lib/types";

const courseDetail: CourseDetail = {
    slug: "magician-career-experience",
    title: "엔터테이너 - 마술사: 과학과 심리로 설계하는 기적",
    subtitle:
        "단순한 트릭 전수를 넘어, 물리학과 심리학의 원리를 체득하고 자신감을 설계하는 프리미엄 진로체험 프로그램",
    heroImageSrc: "/images/products/magician-career-experience/hero.png",
    heroEyebrow: "DREAMPLEX · PROFESSIONAL CAREER EXPERIENCE",
    heroHeadline: "관객의 눈이 아닌, 사고의 회로를 움직여라",
    heroSubcopy:
        "현직 프로 마술사와 교육공학 전문가가 설계한 국내 유일의 '융합 마술 교육'을 학교에서 경험하세요.",
    heroChips: ["초·중·고 대상", "프리미엄 교구 포함", "과학·심리 융합"],
    heroProofStats: [
        { label: "누적 수강생", value: "15,000+" },
        { label: "학교 만족도", value: "4.9 / 5.0" },
        { label: "교구 안전 인증", value: "100%" },
    ],
    heroTheme: "cinematic-dark",
    tags: ["진로직업체험", "엔터테이너", "마술사", "융합교육"],
    status: "학교 단체 출강 가능",
    instructor: {
        name: "DREAMPLEX MASTER",
        role: "현직 프로 마술사 & 교육 설계팀",
        avatarSrc: "",
        bio: "수만 번의 무대 경험을 가진 프로 마술사와 학생들의 인지 발달을 연구하는 교육학자가 만나, 가장 완벽한 '배움의 마술'을 완성했습니다.",
        career: [
            "국내외 매직 컨벤션 다수 수상 경력의 프로 마술진",
            "교육공학 석사급 연구원 커리큘럼 감수",
            "전국 200여 개 학교 진로 캠프 운영 실적",
            "학생 수준별(초/중/고) 맞춤형 교구 및 난이도 설계",
        ],
        quote:
            "마술은 속임수가 아닙니다. 상대의 마음을 읽고, 논리적인 인과관계를 설계하여 불가능을 가능으로 믿게 만드는 '고도의 커뮤니케이션'입니다.",
        interview: [
            {
                question: "기존의 흔한 마술 체험과 무엇이 다른가요?",
                answer:
                    "대부분의 마술 수업은 싼값의 교구를 나눠주고 트릭 하나를 가르쳐주는 '시간 때우기'에 그칩니다. 드림플렉스는 다릅니다. 우리는 마술 속에 숨겨진 '물리학(지레의 원리, 탄성)'과 '심리학(미스디렉션, 인지 편향)'을 먼저 가르칩니다. 학생들은 원리를 이해했기에 스스로 응용할 수 있게 됩니다.",
            },
            {
                question: "선생님들이 가장 만족해하시는 부분은 무엇인가요?",
                answer:
                    "바로 '학습 연계성'입니다. 창의적 체험활동이나 과학 시간에 배운 이론이 마술이라는 실체를 통해 구현되는 것을 보며 교육적 가치를 체감하십니다. 또한, 전원에게 제공되는 프리미엄 교구 세트의 퀄리티가 시중 저가 제품과 비교 불가능할 정도로 뛰어나다는 점을 높게 평가하십니다.",
            },
            {
                question: "소심한 학생도 잘 참여할 수 있을까요?",
                answer:
                    "마술은 '자신감의 언어'입니다. 처음엔 쑥스러워하던 학생도 자신만의 비밀 트릭을 완벽히 숙달하는 순간, 이를 친구들에게 보여주고 싶어 견디지 못하게 됩니다. 그 작은 성공 경험이 무대 공포증을 이기는 힘이 됩니다.",
            },
        ],
    },
    meta: {
        level: "전 학년 가능 (수준별 운영)",
        totalLessons: 2,
        totalDuration: "2차시 (90분~120분)",
        language: "한국어",
        hasResources: true,
    },
    price: {
        original: 45000,
        discounted: 35000,
        currency: "원",
    },
    programHighlights: [
        { label: "대상 학년", value: "초·중·고 전학년", icon: "users" },
        { label: "운영 차시", value: "2차시 (기본)", icon: "book" },
        { label: "제공 물품", value: "프리미엄 교구 세트", icon: "gift" },
        { label: "강사 구성", value: "프로 마술사 파견", icon: "star" },
    ],
    targetAudience: [
        {
            grade: "초등학생",
            description: "오감을 자극하는 마술 체험을 통해 과학에 대한 흥미와 호기심을 극대화합니다.",
            tags: ["창의성", "호기심", "자신감"],
        },
        {
            grade: "중·고등학생",
            description: "논리적 추론과 무대 연출 기법을 배우며 전문 직업인으로서의 역량을 탐색합니다.",
            tags: ["논리력", "커뮤니케이션", "진로탐색"],
        },
    ],
    expectedOutcomes: [
        {
            title: "융합적 사고력",
            description: "마술에 숨겨진 물리, 수학적 원리를 발견하고 이해",
            iconType: "scale",
        },
        {
            title: "발표 및 소통 역량",
            description: "관객의 시선을 유도하고 설득력 있게 설명하는 스피치 훈련",
            iconType: "users",
        },
        {
            title: "문제 해결 능력",
            description: "트릭의 오류를 찾아내고 완벽한 시연을 위해 반복 숙달하는 끈기",
            iconType: "sparkle",
        },
        {
            title: "정서적 성취감",
            description: "하나의 기술을 완벽히 마스터하여 타인에게 기쁨을 주는 성공 경험",
            iconType: "briefcase",
        },
    ],
    curriculum: [
        {
            id: "ch-1",
            title: "Chapter 01. [기초/원리] 마스터의 시선: 인지 편향과 과학적 트릭",
            learningPoint: "마술의 3대 원칙과 시각적 착각의 물리적 근거를 이해합니다.",
            lessons: [
                {
                    id: "l-1-1",
                    title: "인지 심리학: 당신의 뇌가 속는 이유 (미스디렉션)",
                    duration: "20분",
                },
                {
                    id: "l-1-2",
                    title: "중력을 거스르는 물리 법칙: 탄성과 무게중심의 활용",
                    duration: "30분",
                },
            ],
        },
        {
            id: "ch-2",
            title: "Chapter 02. [실전/응용] 무대 위의 설계자: 1인 1트릭 마스터",
            learningPoint: "직접 교구를 다루며 전문 기술을 습득하고 무대 연출법을 익힙니다.",
            lessons: [
                {
                    id: "l-2-1",
                    title: "프리미엄 교구 핸들링: 손기술(Sleight of hand)의 기초",
                    duration: "30분",
                },
                {
                    id: "l-2-2",
                    title: "스토리텔링 기법: 트릭에 생명력을 불어넣는 연출",
                    duration: "40분",
                },
            ],
        },
    ],
    introSections: [
        {
            subtitle: "PHILOSOPHY",
            title: "마술은 단순한 속임수가 아닌, 치밀한 설계의 결과입니다.",
            description:
                "관객이 보고 있는 것은 10%의 트릭입니다. 나머지 90%는 그 트릭을 뒷받침하는 물리적 법칙과 심리적 유도입니다. 드림플렉스는 그 90%의 본질을 가르칩니다.",
            imageSrc: "",
        },
        {
            subtitle: "PREMIUM KIT",
            title: "수업의 품격을 결정하는 압도적 교구 퀄리티",
            description:
                "문구점에서 파는 저가형 마술 도구와는 결이 다릅니다. 실제 프로 마술사들이 사용하는 도구를 학생들의 손 크기에 맞춰 제작했습니다. 수업 후에도 오랫동안 간직할 수 있는 선물 같은 교구입니다.",
            imageSrc: "",
        },
        {
            subtitle: "EDUCATION",
            title: "교과 과정과 긴밀하게 연결된 커리큘럼",
            description:
                "초등 과학 '자석의 이용', 중등 과학 '빛과 거울', '운동과 에너지'. 단순히 노는 시간이 아니라, 교과서 속 지식이 현실에서 어떻게 마술로 탄생하는지 목격하는 시간입니다.",
            imageSrc: "",
        },
    ],
    requiredTools: [
        {
            name: "프리미엄 마술 키트",
            description: "전원 증정 (카드, 볼, 스트링 등 구성)",
            iconSrc: "",
        },
        {
            name: "활동지 & 워크북",
            description: "원리 학습 및 복습용 교재 제공",
            iconSrc: "",
        },
    ],
    notice: {
        operationGuide: [
            "전국 초·중·고등학교 어디든 전문 강사진이 직접 방문합니다.",
            "학급 단위(20~30명) 또는 학년 단위 대규모 특강 모두 가능합니다.",
            "모든 교구는 드림플렉스에서 준비하여 수업 30분 전 세팅 완료합니다.",
        ],
        learningPolicy: [
            "학생 전원에게 개인별 마술 교구가 지급됩니다.",
            "수업 중 파손된 교구는 즉시 현장에서 교체해 드립니다.",
            "학생들이 집에서도 연습할 수 있는 온라인 복습 영상이 제공됩니다.",
        ],
        deviceLimit: [
            "별도의 디지털 기기는 필요하지 않습니다.",
            "책상이 있는 일반 교실 환경이면 충분합니다.",
        ],
        intellectualProperty: [
            "수업 중 전수되는 트릭의 비밀 유지를 위해 학생들에게 '마법사 선서'를 진행합니다.",
        ],
        coachingInfo: [
            "동아리 활동 등 장기 프로그램(8~12차시)으로 확장 운영 가능합니다.",
        ],
    },
    reviews: [
        {
            id: "rev-1",
            rating: 5,
            title: "선생님인 저도 몰입해서 봤어요",
            content:
                "아이들이 이렇게 집중하는 모습은 처음 봅니다. 단순히 신기해하는 게 아니라 원리를 찾으려고 토론하는 모습이 인상적이었습니다.",
            authorName: "이*진 교사",
            authorGrade: "초등학교",
            characterId: 1,
        },
        {
            id: "rev-2",
            rating: 5,
            title: "자신감 없던 아이가 무대에서 웃네요",
            content:
                "발표할 때 늘 고개를 숙이던 학생이 마술 하나를 성공하더니 친구들 앞에서 큰 소리로 설명하더라고요. 눈물 날 정도로 감동적인 수업이었습니다.",
            authorName: "최*훈 교사",
            authorGrade: "중학교",
            characterId: 2,
        },
    ],
    relatedCourses: [],
};

export default courseDetail;
